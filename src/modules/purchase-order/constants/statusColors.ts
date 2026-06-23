import type { PurchaseOrderStatus } from "../types/purchaseOrder";

export const STATUS_COLORS: Record<PurchaseOrderStatus, string> = {
  completed: "#22C55E",
  pending_approval: "#F97316",
  sent_to_supplier: "#EAB308",
  draft: "#3B82F6",
  canceled: "#EF4444",
};

export const STATUS_LABELS: Record<PurchaseOrderStatus, string> = {
  completed: "Completed",
  pending_approval: "Pending approval",
  sent_to_supplier: "Sent to supplier",
  draft: "Draft",
  canceled: "Canceled",
};

export const ALL_STATUSES: PurchaseOrderStatus[] = [
  "completed",
  "pending_approval",
  "sent_to_supplier",
  "draft",
  "canceled",
];
