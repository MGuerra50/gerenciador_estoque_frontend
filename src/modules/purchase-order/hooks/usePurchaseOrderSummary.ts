"use client";

import { useCallback, useEffect, useState } from "react";
import type { PurchaseOrderSummary } from "../types/purchaseOrder";
import { getPurchaseOrderSummary } from "../services/purchaseOrderService";

export function usePurchaseOrderSummary() {
  const [data, setData] = useState<PurchaseOrderSummary | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refetch = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await getPurchaseOrderSummary();
      setData(result);
    } catch {
      setError("Failed to load summary");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return { data, loading, error, refetch };
}
