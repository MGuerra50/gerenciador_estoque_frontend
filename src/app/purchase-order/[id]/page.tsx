import ViewOrderPage from "@/pages/purchase-order/view/page";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function PurchaseOrderDetailPage({ params }: Props) {
  const { id } = await params;
  return <ViewOrderPage id={Number(id)} />;
}
