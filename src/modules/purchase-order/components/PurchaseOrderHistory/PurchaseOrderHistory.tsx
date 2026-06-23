"use client";

import { useRouter } from "next/navigation";
import { IoEyeOutline } from "react-icons/io5";
import WidgetsBase from "../../../../shared/components/WidgetsBase/WidgetsBase";
import WidgetHeader from "../../../../shared/components/WidgetHeader/WidgetHeader";
import TablePrincipal from "../../../../shared/components/TablePrincipal/TablePrincipal";
import StatusBadge from "../../../../shared/components/StatusBadge/StatusBadge";
import Pagination from "../../../../shared/components/Pagination/Pagination";
import LoadingState from "../../../../shared/components/LoadingState/LoadingState";
import ErrorState from "../../../../shared/components/ErrorState/ErrorState";
import { formatCurrency } from "../../utils/formatCurrency";
import type { PurchaseOrderListItem } from "../../types/purchaseOrder";

interface HistoryRow {
  id: number;
  orderCode: number;
  supplier: string;
  status: PurchaseOrderListItem["status"];
  dateOfIssue: string;
  totalValue: string;
}

const columns = [
  { key: "orderCode" as const, label: "Order code" },
  { key: "supplier" as const, label: "Supplier" },
  { key: "status" as const, label: "Status" },
  { key: "dateOfIssue" as const, label: "Date of issue" },
  { key: "totalValue" as const, label: "Total value" },
];

interface Props {
  items: PurchaseOrderListItem[];
  page: number;
  totalPages: number;
  loading: boolean;
  error: string | null;
  selectedIds: number[];
  onToggleSelect: (id: number) => void;
  onPageChange: (page: number) => void;
  onRetry?: () => void;
}

export default function PurchaseOrderHistory({
  items,
  page,
  totalPages,
  loading,
  error,
  selectedIds,
  onToggleSelect,
  onPageChange,
  onRetry,
}: Props) {
  const router = useRouter();

  const rows: HistoryRow[] = items.map((item) => ({
    id: item.id,
    orderCode: item.orderCode,
    supplier: item.supplier,
    status: item.status,
    dateOfIssue: item.dateOfIssue,
    totalValue: formatCurrency(item.totalValue),
  }));

  return (
    <WidgetsBase>
      <WidgetHeader title="Purchase order history" />
      {loading ? (
        <LoadingState />
      ) : error ? (
        <ErrorState message={error} onRetry={onRetry} />
      ) : (
        <>
          <TablePrincipal
            rows={rows}
            columns={columns}
            keyExtractor={(row) => row.id}
            renderLeadingActions={(row) => (
              <div className="flex items-center justify-center gap-3">
                <IoEyeOutline
                  className="cursor-pointer text-xl"
                  onClick={() => router.push(`/purchase-order/${row.id}`)}
                />
                <input
                  type="checkbox"
                  checked={selectedIds.includes(row.id)}
                  onChange={() => onToggleSelect(row.id)}
                  className="w-4 h-4 cursor-pointer"
                />
              </div>
            )}
            renderCell={(row, column) => {
              if (column.key === "status") {
                return <StatusBadge status={row.status} />;
              }
              return String(row[column.key]);
            }}
          />
          <Pagination page={page} totalPages={totalPages} onPageChange={onPageChange} />
        </>
      )}
    </WidgetsBase>
  );
}
