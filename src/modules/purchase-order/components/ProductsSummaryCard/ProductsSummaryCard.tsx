import WidgetsBase from "@/shared/components/WidgetsBase/WidgetsBase";
import WidgetHeader from "@/shared/components/WidgetHeader/WidgetHeader";
import { formatCurrency } from "../../utils/formatCurrency";
import type { ProductsSummary } from "../../types/purchaseOrderProduct";

interface Props {
  summary: ProductsSummary;
}

export default function ProductsSummaryCard({ summary }: Props) {
  return (
    <WidgetsBase>
      <WidgetHeader title="Products summary" />
      <table className="w-full text-sm bg-gray-100 rounded-xl">
        <thead>
          <tr>
            <th className="px-3 py-2 text-left">Distinct products</th>
            <th className="px-3 py-2 text-left">Quantity of products</th>
            <th className="px-3 py-2 text-left">Cost price</th>
            <th className="px-3 py-2 text-left">Average value per item</th>
            <th className="px-3 py-2 text-left">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-50">
            <td className="px-3 py-3">{summary.distinctProducts}</td>
            <td className="px-3 py-3">{summary.totalQuantity}</td>
            <td className="px-3 py-3">{formatCurrency(summary.costPriceSum)}</td>
            <td className="px-3 py-3">{formatCurrency(summary.averageValuePerItem)}</td>
            <td className="px-3 py-3">{formatCurrency(summary.subtotal)}</td>
          </tr>
        </tbody>
      </table>
    </WidgetsBase>
  );
}
