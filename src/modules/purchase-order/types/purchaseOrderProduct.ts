export interface PurchaseOrderProduct {
  id: string;
  sku: string;
  productName: string;
  costPrice: number;
  quantity: number;
  model: string;
  version?: string;
  color: string;
  lineTotal: number;
}

export interface ProductFormData {
  productName: string;
  model: string;
  version: string;
  color: string;
  quantity: number;
  costPrice: number;
}

export interface ProductsSummary {
  distinctProducts: number;
  totalQuantity: number;
  costPriceSum: number;
  averageValuePerItem: number;
  subtotal: number;
}
