import type { PurchaseOrderStatus } from "@/modules/purchase-order/types/purchaseOrder";
import { STATUS_COLORS, STATUS_LABELS } from "@/modules/purchase-order/constants/statusColors";

interface StatusBadgeProps {
  status: PurchaseOrderStatus;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className="inline-block px-3 py-1 rounded-full text-white text-xs font-semibold"
      style={{ backgroundColor: STATUS_COLORS[status] }}
    >
      {STATUS_LABELS[status]}
    </span>
  );
}
