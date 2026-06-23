"use client";

import WidgetsBase from "@/shared/components/WidgetsBase/WidgetsBase";
import WidgetHeader from "@/shared/components/WidgetHeader/WidgetHeader";
import TablePrincipal from "@/shared/components/TablePrincipal/TablePrincipal";
import { formatCurrency } from "../../utils/formatCurrency";
import type { PurchaseOrderProduct } from "../../types/purchaseOrderProduct";

interface ProductRow {
  id: string;
  sku: string;
  productName: string;
  costPrice: string;
  quantity: number;
  model: string;
  color: string;
  lineTotal: string;
}

const columns = [
  { key: "sku" as const, label: "SKU" },
  { key: "productName" as const, label: "Product Name" },
  { key: "costPrice" as const, label: "Cost price" },
  { key: "quantity" as const, label: "Quantity" },
  { key: "model" as const, label: "Model" },
  { key: "color" as const, label: "Color" },
  { key: "lineTotal" as const, label: "Line total" },
];

interface Props {
  products: PurchaseOrderProduct[];
  renderActions?: (product: PurchaseOrderProduct) => React.ReactNode;
}

export default function OrderProductsTable({ products, renderActions }: Props) {
  const rows: ProductRow[] = products.map((p) => ({
    id: p.id,
    sku: p.sku,
    productName: p.productName,
    costPrice: formatCurrency(p.costPrice),
    quantity: p.quantity,
    model: p.model,
    color: p.color,
    lineTotal: formatCurrency(p.lineTotal),
  }));

  return (
    <WidgetsBase>
      <WidgetHeader title="Products" />
      <TablePrincipal
        rows={rows}
        columns={columns}
        keyExtractor={(row) => row.id}
        renderActions={
          renderActions
            ? (row) => {
                const product = products.find((p) => p.id === row.id);
                return product ? renderActions(product) : null;
              }
            : undefined
        }
      />
    </WidgetsBase>
  );
}
