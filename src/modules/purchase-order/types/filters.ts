import type { PurchaseOrderStatus } from "./purchaseOrder";

export interface PurchaseOrderFilters {
  orderCodeStart?: number;
  orderCodeEnd?: number;
  dateStart?: string;
  dateEnd?: string;
  totalAbove?: number;
  totalBelow?: number;
  supplier?: string;
  statuses?: PurchaseOrderStatus[];
}

export interface PaginationParams {
  page: number;
  pageSize?: number;
}
