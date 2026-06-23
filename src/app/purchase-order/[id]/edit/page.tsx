import EditOrderPage from "@/pages/purchase-order/edit/page";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function PurchaseOrderEditPage({ params }: Props) {
  const { id } = await params;
  return <EditOrderPage id={Number(id)} />;
}
