"use client";

import WidgetsBase from "../../../../shared/components/WidgetsBase/WidgetsBase";
import WidgetHeader from "../../../../shared/components/WidgetHeader/WidgetHeader";
import FormField from "../../../../shared/components/FormField/FormField";
import ButtonPrincipal from "../../../../shared/components/ButtonPrincipal/ButtonPrincipal";
import ButtonSecondary from "../../../../shared/components/ButtonSecondary/ButtonSecondary";
import {
  ALL_STATUSES,
  STATUS_COLORS,
  STATUS_LABELS,
} from "../../constants/statusColors";
import type { PurchaseOrderFilters } from "../../types/filters";
import type { PurchaseOrderStatus } from "../../types/purchaseOrder";
import {
  exportOrdersAsCsv,
  exportOrdersAsPdf,
} from "../../services/purchaseOrderService";

interface Props {
  filters: PurchaseOrderFilters;
  onChange: (filters: PurchaseOrderFilters) => void;
  selectedIds: number[];
  onSelectAll: () => void;
}

export default function PurchaseOrderFilter({
  filters,
  onChange,
  selectedIds,
  onSelectAll,
}: Props) {
  const update = (partial: Partial<PurchaseOrderFilters>) => {
    onChange({ ...filters, ...partial });
  };

  const toggleStatus = (status: PurchaseOrderStatus) => {
    const current = filters.statuses ?? [];
    const next = current.includes(status)
      ? current.filter((s) => s !== status)
      : [...current, status];
    update({ statuses: next });
  };

  return (
    <WidgetsBase>
      <WidgetHeader title="Filter" />
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <p className="text-sm font-medium mb-2">Order code</p>
          <div className="flex gap-2">
            <FormField
              label="Starting in"
              value={filters.orderCodeStart ?? ""}
              onChange={(v) => update({ orderCodeStart: v ? Number(v) : undefined })}
              type="number"
            />
            <FormField
              label="Ending in"
              value={filters.orderCodeEnd ?? ""}
              onChange={(v) => update({ orderCodeEnd: v ? Number(v) : undefined })}
              type="number"
            />
          </div>
        </div>
        <div>
          <p className="text-sm font-medium mb-2">Date of issue</p>
          <div className="flex gap-2">
            <FormField
              label="Start date"
              value={filters.dateStart ?? ""}
              onChange={(v) => update({ dateStart: v || undefined })}
              placeholder="DD/MM/YYYY"
            />
            <FormField
              label="End date"
              value={filters.dateEnd ?? ""}
              onChange={(v) => update({ dateEnd: v || undefined })}
              placeholder="DD/MM/YYYY"
            />
          </div>
        </div>
        <div>
          <p className="text-sm font-medium mb-2">Total value</p>
          <div className="flex gap-2">
            <FormField
              label="Above"
              value={filters.totalAbove ?? ""}
              onChange={(v) => update({ totalAbove: v ? Number(v) : undefined })}
              type="number"
            />
            <FormField
              label="Below"
              value={filters.totalBelow ?? ""}
              onChange={(v) => update({ totalBelow: v ? Number(v) : undefined })}
              type="number"
            />
          </div>
        </div>
      </div>

      <FormField
        label="Find by Supplier"
        value={filters.supplier ?? ""}
        onChange={(v) => update({ supplier: v || undefined })}
        placeholder="Enter the supplier name here"
      />

      <div className="flex flex-wrap gap-4 my-4">
        {ALL_STATUSES.map((status) => (
          <button
            key={status}
            onClick={() => toggleStatus(status)}
            className={`flex items-center gap-2 text-sm cursor-pointer ${
              filters.statuses?.includes(status) ? "font-bold" : "opacity-70"
            }`}
          >
            <span
              className="w-3 h-3 rounded-full inline-block"
              style={{ backgroundColor: STATUS_COLORS[status] }}
            />
            {STATUS_LABELS[status]}
          </button>
        ))}
      </div>

      <div className="flex justify-end gap-3">
        <ButtonPrincipal text="Select all visible" width={180} onClick={onSelectAll} />
        <ButtonSecondary
          text="Export as PDF"
          width={160}
          onClick={() => exportOrdersAsPdf(selectedIds)}
        />
        <ButtonSecondary
          text="Export as CSV"
          width={160}
          onClick={() => exportOrdersAsCsv(selectedIds)}
        />
      </div>
    </WidgetsBase>
  );
}
