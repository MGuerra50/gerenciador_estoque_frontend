"use client";

import { useCallback, useEffect, useState } from "react";
import type { AwaitingApprovalOrder } from "../types/purchaseOrder";
import { getAwaitingApprovalOrders } from "../services/purchaseOrderService";

export function useAwaitingApprovalOrders() {
  const [data, setData] = useState<AwaitingApprovalOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refetch = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await getAwaitingApprovalOrders();
      setData(result);
    } catch {
      setError("Failed to load awaiting approval orders");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return { data, loading, error, refetch };
}
