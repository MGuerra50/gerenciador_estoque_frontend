"use client";

import { useCallback, useEffect, useState } from "react";
import type { PaginatedResult, PurchaseOrderListItem } from "../types/purchaseOrder";
import type { PurchaseOrderFilters } from "../types/filters";
import { getPurchaseOrderHistory } from "../services/purchaseOrderService";

export function usePurchaseOrderHistory(
  filters: PurchaseOrderFilters,
  page: number,
  pageSize = 10
) {
  const [data, setData] = useState<PaginatedResult<PurchaseOrderListItem> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refetch = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await getPurchaseOrderHistory(filters, { page, pageSize });
      setData(result);
    } catch {
      setError("Failed to load order history");
    } finally {
      setLoading(false);
    }
  }, [filters, page, pageSize]);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return { data, loading, error, refetch };
}
