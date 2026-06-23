export type PurchaseOrderStatus =
  | "completed"
  | "pending_approval"
  | "sent_to_supplier"
  | "draft"
  | "canceled";

export interface Address {
  street: string;
  number: string;
  neighborhood: string;
  complement: string;
  city: string;
  state: string;
}

export interface PurchaseOrderSummary {
  todayTotal: number;
  weekTotal: number;
  monthTotal: number;
}

export interface AwaitingApprovalOrder {
  id: number;
  orderCode: number;
  netValue: number;
  dateOfIssue: string;
}

export interface PurchaseOrderListItem {
  id: number;
  orderCode: number;
  supplier: string;
  status: PurchaseOrderStatus;
  dateOfIssue: string;
  totalValue: number;
}

export interface PurchaseOrderTaxes {
  ipiIcms: number;
  subtotal: number;
  totalNet: number;
}

export interface PurchaseOrderContacts {
  email: string;
  phone: string;
}

export interface PurchaseOrderDetail extends PurchaseOrderListItem {
  project: string;
  company: string;
  paymentConditions: string;
  deliveryConditions: string;
  deliveryAddress: Address;
  addressLabel?: string;
  contacts: PurchaseOrderContacts;
  products: import("./purchaseOrderProduct").PurchaseOrderProduct[];
  taxes: PurchaseOrderTaxes;
  supplierObservation?: string;
}

export interface PendingIssue {
  id: number;
  orderCode: number;
  label: string;
  status: string;
  dateOfIssue: string;
  supplierObservation: string;
}

export interface PaginatedResult<T> {
  items: T[];
  page: number;
  totalPages: number;
  totalItems: number;
}

export interface CreatePurchaseOrderDTO {
  project: string;
  company: string;
  paymentConditions: string;
  deliveryConditions: string;
  deliveryAddress: Address;
  addressLabel?: string;
  contacts: PurchaseOrderContacts;
  products: import("./purchaseOrderProduct").PurchaseOrderProduct[];
}

export type UpdatePurchaseOrderDTO = CreatePurchaseOrderDTO;
