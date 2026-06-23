import type { PurchaseOrderListItem } from "../types/purchaseOrder";

const suppliers = [
  "Technology supplier",
  "Electronics supplier",
  "Office supplies",
  "Industrial parts",
  "General merchandise",
];

const statuses: PurchaseOrderListItem["status"][] = [
  "completed",
  "pending_approval",
  "sent_to_supplier",
  "draft",
  "canceled",
];

function generateHistoryItems(): PurchaseOrderListItem[] {
  const items: PurchaseOrderListItem[] = [];
  for (let i = 1; i <= 100; i++) {
    const code = 200 + i;
    items.push({
      id: code,
      orderCode: code,
      supplier: suppliers[i % suppliers.length],
      status: statuses[i % statuses.length],
      dateOfIssue: `${String((i % 28) + 1).padStart(2, "0")}/${String((i % 12) + 1).padStart(2, "0")}/2024`,
      totalValue: 1000000 + i * 12345.67,
    });
  }
  return items;
}

export const mockHistoryItems = generateHistoryItems();
