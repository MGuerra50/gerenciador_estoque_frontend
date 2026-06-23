"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Actions from "../../modules/purchase-order/components/Actions/Actions";
import OrderAwaitingApproval from "../../modules/purchase-order/components/OrderAwaitingApproval/OrderAwaitingApproval";
import PurchaseOrderFilter from "../../modules/purchase-order/components/PurchaseOrderFilter/PurchaseOrderFilter";
import PurchaseOrderHistory from "../../modules/purchase-order/components/PurchaseOrderHistory/PurchaseOrderHistory";
import PendingIssuesModal from "../../modules/purchase-order/components/PendingIssuesModal/PendingIssuesModal";
import PendingCard from "../../shared/components/PendingCard/PendingCard";
import ValueCard from "../../shared/components/ValueCard/ValueCard";
import LoadingState from "../../shared/components/LoadingState/LoadingState";
import { usePurchaseOrderSummary } from "../../modules/purchase-order/hooks/usePurchaseOrderSummary";
import { useAwaitingApprovalOrders } from "../../modules/purchase-order/hooks/useAwaitingApprovalOrders";
import { usePurchaseOrderHistory } from "../../modules/purchase-order/hooks/usePurchaseOrderHistory";
import { usePendingIssues } from "../../modules/purchase-order/hooks/usePendingIssues";
import { formatCurrency } from "../../modules/purchase-order/utils/formatCurrency";
import type { PurchaseOrderFilters } from "../../modules/purchase-order/types/filters";

const PurchaseOrder = () => {
  const router = useRouter();
  const [showFilter, setShowFilter] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [filters, setFilters] = useState<PurchaseOrderFilters>({});
  const [page, setPage] = useState(1);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const { data: summary, loading: summaryLoading } = usePurchaseOrderSummary();
  const { data: awaitingOrders, loading: awaitingLoading } = useAwaitingApprovalOrders();
  const { data: history, loading: historyLoading, error: historyError, refetch } =
    usePurchaseOrderHistory(filters, page);
  const { data: pendingIssues, loading: issuesLoading } = usePendingIssues();

  const handleToggleSelect = (id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (history?.items) {
      setSelectedIds(history.items.map((i) => i.id));
    }
  };

  return (
    <>
      <section className="flex w-full justify-between items-center gap-[30px]">
        {summaryLoading ? (
          <LoadingState />
        ) : (
          <>
            <ValueCard
              title="Today's orders"
              value={formatCurrency(summary?.todayTotal)}
            />
            <ValueCard
              title="Orders of the week"
              value={formatCurrency(summary?.weekTotal)}
            />
            <ValueCard
              title="Orders of the month"
              value={formatCurrency(summary?.monthTotal)}
            />
          </>
        )}
      </section>

      <section className="flex flex-1 gap-[30px]">
        <div className="flex-[2]">
          <OrderAwaitingApproval
            orders={awaitingOrders}
            loading={awaitingLoading}
            onViewOrder={(id) => router.push(`/purchase-order/${id}`)}
          />
        </div>
        <div>
          <PendingCard
            title="Pending issues"
            value={String(pendingIssues.length)}
            onSeeMore={() => setModalOpen(true)}
          />
          <Actions onAdvancedSearch={() => setShowFilter((v) => !v)} />
        </div>
      </section>

      {showFilter && (
        <PurchaseOrderFilter
          filters={filters}
          onChange={(f) => {
            setFilters(f);
            setPage(1);
          }}
          selectedIds={selectedIds}
          onSelectAll={handleSelectAll}
        />
      )}

      <PurchaseOrderHistory
        items={history?.items ?? []}
        page={history?.page ?? 1}
        totalPages={history?.totalPages ?? 1}
        loading={historyLoading}
        error={historyError}
        selectedIds={selectedIds}
        onToggleSelect={handleToggleSelect}
        onPageChange={setPage}
        onRetry={refetch}
      />

      <PendingIssuesModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        issues={pendingIssues}
        loading={issuesLoading}
      />
    </>
  );
};

export default PurchaseOrder;
