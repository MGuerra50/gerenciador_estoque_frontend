"use client";

import OrderFormPage from "../OrderFormPage";
import { usePurchaseOrderDetail } from "@/modules/purchase-order/hooks/usePurchaseOrderDetail";
import LoadingState from "@/shared/components/LoadingState/LoadingState";
import ErrorState from "@/shared/components/ErrorState/ErrorState";

interface Props {
  id: number;
}

export default function EditOrderPage({ id }: Props) {
  const { data: order, loading, error, refetch } = usePurchaseOrderDetail(id);

  if (loading) return <LoadingState message="Loading order..." />;
  if (error || !order) return <ErrorState message={error ?? "Order not found"} onRetry={refetch} />;

  return <OrderFormPage mode="edit" orderId={id} initialData={order} />;
}
