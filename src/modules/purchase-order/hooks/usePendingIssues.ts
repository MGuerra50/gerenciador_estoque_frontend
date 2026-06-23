"use client";

import { useCallback, useEffect, useState } from "react";
import type { PendingIssue } from "../types/purchaseOrder";
import { getPendingIssues } from "../services/purchaseOrderService";

export function usePendingIssues() {
  const [data, setData] = useState<PendingIssue[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refetch = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await getPendingIssues();
      setData(result);
    } catch {
      setError("Failed to load pending issues");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return { data, loading, error, refetch };
}
