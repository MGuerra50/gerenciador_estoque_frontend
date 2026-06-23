"use client";

import { useCallback, useEffect, useState } from "react";
import type { PurchaseOrderDetail } from "../types/purchaseOrder";
import { getPurchaseOrderById } from "../services/purchaseOrderService";

export function usePurchaseOrderDetail(id: number | null) {
  const [data, setData] = useState<PurchaseOrderDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refetch = useCallback(async () => {
    if (id == null) {
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const result = await getPurchaseOrderById(id);
      setData(result);
    } catch {
      setError("Failed to load order details");
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return { data, loading, error, refetch };
}
