import { useMemo } from "react";
import type { PurchaseOrderProduct, ProductsSummary } from "../types/purchaseOrderProduct";

export function useOrderCalculations(products: PurchaseOrderProduct[]) {
  return useMemo(() => {
    const subtotal = products.reduce((sum, p) => sum + p.lineTotal, 0);
    const totalQuantity = products.reduce((sum, p) => sum + p.quantity, 0);
    const distinctNames = new Set(products.map((p) => p.productName));
    const costPriceSum = products.reduce((sum, p) => sum + p.costPrice, 0);

    const summary: ProductsSummary = {
      distinctProducts: distinctNames.size,
      totalQuantity,
      costPriceSum,
      averageValuePerItem: totalQuantity > 0 ? subtotal / totalQuantity : 0,
      subtotal,
    };

    const taxes = {
      ipiIcms: subtotal * 0.1,
      subtotal,
      totalNet: subtotal * 1.1,
    };

    return { summary, taxes };
  }, [products]);
}
