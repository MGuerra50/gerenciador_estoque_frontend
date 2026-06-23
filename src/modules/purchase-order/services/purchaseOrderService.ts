import type {
  AwaitingApprovalOrder,
  CreatePurchaseOrderDTO,
  PaginatedResult,
  PendingIssue,
  PurchaseOrderDetail,
  PurchaseOrderListItem,
  PurchaseOrderSummary,
  UpdatePurchaseOrderDTO,
} from "../types/purchaseOrder";
import type { PurchaseOrderFilters, PaginationParams } from "../types/filters";
import { mockSummary } from "../mocks/summary";
import { mockAwaitingApproval } from "../mocks/awaitingApproval";
import { mockHistoryItems } from "../mocks/history";
import { mockPendingIssues } from "../mocks/pendingIssues";
import {
  getMockOrderDetail,
  mockAddresses,
  mockCompanies,
  mockDeliveryConditions,
  mockPaymentConditions,
  mockProjects,
} from "../mocks/orderDetails";

const USE_MOCK = process.env.NEXT_PUBLIC_USE_MOCK !== "false";
const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "";

const delay = (ms = 300) => new Promise((resolve) => setTimeout(resolve, ms));

function filterHistory(
  items: PurchaseOrderListItem[],
  filters: PurchaseOrderFilters
): PurchaseOrderListItem[] {
  return items.filter((item) => {
    if (filters.orderCodeStart != null && item.orderCode < filters.orderCodeStart) return false;
    if (filters.orderCodeEnd != null && item.orderCode > filters.orderCodeEnd) return false;
    if (filters.supplier && !item.supplier.toLowerCase().includes(filters.supplier.toLowerCase()))
      return false;
    if (filters.totalAbove != null && item.totalValue < filters.totalAbove) return false;
    if (filters.totalBelow != null && item.totalValue > filters.totalBelow) return false;
    if (filters.statuses?.length && !filters.statuses.includes(item.status)) return false;
    if (filters.dateStart) {
      const [d, m, y] = item.dateOfIssue.split("/").map(Number);
      const [sd, sm, sy] = filters.dateStart.split("/").map(Number);
      const itemDate = new Date(y, m - 1, d);
      const startDate = new Date(sy, sm - 1, sd);
      if (itemDate < startDate) return false;
    }
    if (filters.dateEnd) {
      const [d, m, y] = item.dateOfIssue.split("/").map(Number);
      const [ed, em, ey] = filters.dateEnd.split("/").map(Number);
      const itemDate = new Date(y, m - 1, d);
      const endDate = new Date(ey, em - 1, ed);
      if (itemDate > endDate) return false;
    }
    return true;
  });
}

export async function getPurchaseOrderSummary(): Promise<PurchaseOrderSummary> {
  if (USE_MOCK) {
    await delay();
    return mockSummary;
  }
  const res = await fetch(`${API_BASE}/purchase-orders/summary`);
  return res.json();
}

export async function getAwaitingApprovalOrders(): Promise<AwaitingApprovalOrder[]> {
  if (USE_MOCK) {
    await delay();
    return mockAwaitingApproval;
  }
  const res = await fetch(`${API_BASE}/purchase-orders/awaiting-approval`);
  return res.json();
}

export async function getPurchaseOrderHistory(
  filters: PurchaseOrderFilters = {},
  pagination: PaginationParams = { page: 1, pageSize: 10 }
): Promise<PaginatedResult<PurchaseOrderListItem>> {
  if (USE_MOCK) {
    await delay();
    const pageSize = pagination.pageSize ?? 10;
    const filtered = filterHistory(mockHistoryItems, filters);
    const totalItems = filtered.length;
    const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
    const page = Math.min(pagination.page, totalPages);
    const start = (page - 1) * pageSize;
    return {
      items: filtered.slice(start, start + pageSize),
      page,
      totalPages,
      totalItems,
    };
  }
  const params = new URLSearchParams({
    page: String(pagination.page),
    pageSize: String(pagination.pageSize ?? 10),
    ...Object.fromEntries(
      Object.entries(filters).filter(([, v]) => v != null && v !== "")
    ),
  });
  const res = await fetch(`${API_BASE}/purchase-orders?${params}`);
  return res.json();
}

export async function getPendingIssues(): Promise<PendingIssue[]> {
  if (USE_MOCK) {
    await delay();
    return mockPendingIssues;
  }
  const res = await fetch(`${API_BASE}/purchase-orders/pending-issues`);
  return res.json();
}

export async function getPurchaseOrderById(id: number): Promise<PurchaseOrderDetail> {
  if (USE_MOCK) {
    await delay();
    return getMockOrderDetail(id);
  }
  const res = await fetch(`${API_BASE}/purchase-orders/${id}`);
  return res.json();
}

export async function createPurchaseOrder(
  data: CreatePurchaseOrderDTO
): Promise<PurchaseOrderDetail> {
  if (USE_MOCK) {
    await delay(500);
    const newId = Date.now();
    const subtotal = data.products.reduce((sum, p) => sum + p.lineTotal, 0);
    return {
      id: newId,
      orderCode: newId,
      supplier: data.company,
      status: "draft",
      dateOfIssue: new Date().toLocaleDateString("pt-BR"),
      totalValue: subtotal,
      project: data.project,
      company: data.company,
      paymentConditions: data.paymentConditions,
      deliveryConditions: data.deliveryConditions,
      deliveryAddress: data.deliveryAddress,
      addressLabel: data.addressLabel,
      contacts: data.contacts,
      products: data.products,
      taxes: { ipiIcms: subtotal * 0.1, subtotal, totalNet: subtotal * 1.1 },
    };
  }
  const res = await fetch(`${API_BASE}/purchase-orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function updatePurchaseOrder(
  id: number,
  data: UpdatePurchaseOrderDTO
): Promise<PurchaseOrderDetail> {
  if (USE_MOCK) {
    await delay(500);
    const existing = getMockOrderDetail(id);
    const subtotal = data.products.reduce((sum, p) => sum + p.lineTotal, 0);
    return {
      ...existing,
      ...data,
      totalValue: subtotal,
      taxes: { ipiIcms: subtotal * 0.1, subtotal, totalNet: subtotal * 1.1 },
    };
  }
  const res = await fetch(`${API_BASE}/purchase-orders/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function approvePurchaseOrder(id: number): Promise<void> {
  if (USE_MOCK) {
    await delay();
    return;
  }
  await fetch(`${API_BASE}/purchase-orders/${id}/approve`, { method: "POST" });
}

export async function rejectPurchaseOrder(id: number): Promise<void> {
  if (USE_MOCK) {
    await delay();
    return;
  }
  await fetch(`${API_BASE}/purchase-orders/${id}/reject`, { method: "POST" });
}

export async function approveAllOrders(): Promise<void> {
  if (USE_MOCK) {
    await delay();
    return;
  }
  await fetch(`${API_BASE}/purchase-orders/approve-all`, { method: "POST" });
}

export async function getFormOptions() {
  if (USE_MOCK) {
    await delay();
    return {
      projects: mockProjects,
      companies: mockCompanies,
      paymentConditions: mockPaymentConditions,
      deliveryConditions: mockDeliveryConditions,
      addresses: mockAddresses,
    };
  }
  const res = await fetch(`${API_BASE}/purchase-orders/form-options`);
  return res.json();
}

export function exportOrdersAsPdf(_ids: number[]): void {
  console.log("[stub] Export PDF for orders:", _ids);
}

export function exportOrdersAsCsv(_ids: number[]): void {
  console.log("[stub] Export CSV for orders:", _ids);
}
