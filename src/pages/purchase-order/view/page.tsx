"use client";

import { useRouter } from "next/navigation";
import { useSetPageTitle } from "@/app/context/PageTitleContext";
import { usePurchaseOrderDetail } from "@/modules/purchase-order/hooks/usePurchaseOrderDetail";
import { useOrderCalculations } from "@/modules/purchase-order/hooks/useOrderCalculations";
import {
  approvePurchaseOrder,
  rejectPurchaseOrder,
} from "@/modules/purchase-order/services/purchaseOrderService";
import FinancialSummary from "@/modules/purchase-order/components/FinancialSummary/FinancialSummary";
import ApprovalBanner from "@/modules/purchase-order/components/ApprovalBanner/ApprovalBanner";
import EditOrderPrompt from "@/modules/purchase-order/components/EditOrderPrompt/EditOrderPrompt";
import OrderCharacteristics from "@/modules/purchase-order/components/OrderCharacteristics/OrderCharacteristics";
import OrderDetails from "@/modules/purchase-order/components/OrderDetails/OrderDetails";
import OrderProductsTable from "@/modules/purchase-order/components/OrderProductsTable/OrderProductsTable";
import ProductsSummaryCard from "@/modules/purchase-order/components/ProductsSummaryCard/ProductsSummaryCard";
import LoadingState from "@/shared/components/LoadingState/LoadingState";
import ErrorState from "@/shared/components/ErrorState/ErrorState";

interface Props {
  id: number;
}

export default function ViewOrderPage({ id }: Props) {
  useSetPageTitle("Purchase Order > View Order");
  const router = useRouter();
  const { data: order, loading, error, refetch } = usePurchaseOrderDetail(id);
  const { summary } = useOrderCalculations(order?.products ?? []);

  const handleApprove = async () => {
    await approvePurchaseOrder(id);
    alert("Order approved (mock)");
    refetch();
  };

  const handleReject = async () => {
    await rejectPurchaseOrder(id);
    alert("Order rejected (mock)");
    router.push("/purchase-order");
  };

  if (loading) return <LoadingState message="Loading order..." />;
  if (error || !order) return <ErrorState message={error ?? "Order not found"} onRetry={refetch} />;

  return (
    <>
      {order.status === "pending_approval" && (
        <section className="flex gap-[30px]">
          <div className="flex-1">
            <ApprovalBanner onApprove={handleApprove} onReject={handleReject} />
          </div>
          <div className="flex-1">
            <EditOrderPrompt orderId={id} />
          </div>
        </section>
      )}

      <FinancialSummary
        ipiIcms={order.taxes.ipiIcms}
        subtotal={order.taxes.subtotal}
        totalNet={order.taxes.totalNet}
      />

      <section className="flex gap-[30px]">
        <div className="flex-1">
          <OrderCharacteristics
            project={order.project}
            company={order.company}
            paymentConditions={order.paymentConditions}
            deliveryConditions={order.deliveryConditions}
          />
        </div>
        <div className="flex-1">
          <OrderDetails
            addressLabel={order.addressLabel}
            deliveryAddress={order.deliveryAddress}
            contacts={order.contacts}
          />
        </div>
      </section>

      <OrderProductsTable products={order.products} />
      <ProductsSummaryCard summary={summary} />
    </>
  );
}
