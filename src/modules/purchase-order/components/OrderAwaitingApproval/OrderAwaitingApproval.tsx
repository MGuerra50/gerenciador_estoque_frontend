"use client";

import ButtonPrincipal from "../../../../shared/components/ButtonPrincipal/ButtonPrincipal";
import TablePrincipal from "../../../../shared/components/TablePrincipal/TablePrincipal";
import WidgetsBase from "../../../../shared/components/WidgetsBase/WidgetsBase";
import WidgetHeader from "../../../../shared/components/WidgetHeader/WidgetHeader";
import LoadingState from "../../../../shared/components/LoadingState/LoadingState";
import { formatCurrency } from "../../utils/formatCurrency";
import type { AwaitingApprovalOrder } from "../../types/purchaseOrder";

interface OrderRow {
  id: number;
  orderCode: number;
  netValue: string;
  dateOfIssue: string;
}

const orderColumns = [
  { key: "orderCode" as const, label: "Order code" },
  { key: "netValue" as const, label: "Net values" },
  { key: "dateOfIssue" as const, label: "Date of issue" },
] satisfies { key: keyof OrderRow; label: string }[];

interface Props {
  orders: AwaitingApprovalOrder[];
  loading?: boolean;
  onViewOrder: (id: number) => void;
}

export default function OrderAwaitingApproval({ orders, loading, onViewOrder }: Props) {
  const rows: OrderRow[] = orders.map((o) => ({
    id: o.id,
    orderCode: o.orderCode,
    netValue: formatCurrency(o.netValue),
    dateOfIssue: o.dateOfIssue,
  }));

  return (
    <WidgetsBase>
      <div className="w-full">
        <WidgetHeader title="Orders awaiting approval" />
        {loading ? (
          <LoadingState />
        ) : (
          <TablePrincipal
            rows={rows}
            columns={orderColumns}
            keyExtractor={(row) => row.id}
            renderActions={(row) => (
              <ButtonPrincipal width={120} onClick={() => onViewOrder(row.id)}>
                <div className="font-semibold mt-[15px] mb-[15px]">View order</div>
              </ButtonPrincipal>
            )}
          />
        )}
        <div className="w-full flex justify-center mb-[10px] mt-[25px] text-lg font-semibold">
          <ButtonPrincipal text="See more" />
        </div>
      </div>
    </WidgetsBase>
  );
}
