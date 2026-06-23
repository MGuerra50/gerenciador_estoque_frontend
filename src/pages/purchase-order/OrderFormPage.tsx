"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaTrash, FaPencil } from "react-icons/fa6";
import { useSetPageTitle } from "@/app/context/PageTitleContext";
import { useOrderCalculations } from "@/modules/purchase-order/hooks/useOrderCalculations";
import {
  createPurchaseOrder,
  updatePurchaseOrder,
} from "@/modules/purchase-order/services/purchaseOrderService";
import FinancialSummary from "@/modules/purchase-order/components/FinancialSummary/FinancialSummary";
import OrderCharacteristicsForm, {
  OrderDetailsForm,
  type CharacteristicsFormData,
  type DetailsFormData,
} from "@/modules/purchase-order/components/OrderCharacteristicsForm/OrderCharacteristicsForm";
import ProductForm from "@/modules/purchase-order/components/ProductForm/ProductForm";
import OrderProductsTable from "@/modules/purchase-order/components/OrderProductsTable/OrderProductsTable";
import ProductsSummaryCard from "@/modules/purchase-order/components/ProductsSummaryCard/ProductsSummaryCard";
import OrderFormFooter from "@/modules/purchase-order/components/OrderFormFooter/OrderFormFooter";
import type { PurchaseOrderDetail } from "@/modules/purchase-order/types/purchaseOrder";
import type {
  ProductFormData,
  PurchaseOrderProduct,
} from "@/modules/purchase-order/types/purchaseOrderProduct";

const emptyAddress = {
  street: "",
  number: "",
  neighborhood: "",
  complement: "",
  city: "",
  state: "",
};

interface Props {
  mode: "create" | "edit";
  orderId?: number;
  initialData?: PurchaseOrderDetail;
}

function productFromForm(form: ProductFormData, index: number): PurchaseOrderProduct {
  const lineTotal = form.costPrice * form.quantity;
  return {
    id: `new-${Date.now()}-${index}`,
    sku: `SKU-${String(index + 1).padStart(3, "0")}`,
    productName: form.productName,
    costPrice: form.costPrice,
    quantity: form.quantity,
    model: form.model,
    version: form.version,
    color: form.color,
    lineTotal,
  };
}

export default function OrderFormPage({ mode, orderId, initialData }: Props) {
  useSetPageTitle(
    mode === "create"
      ? "Purchase Order > Create order"
      : "Purchase Order > Order editing"
  );

  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  const [characteristics, setCharacteristics] = useState<CharacteristicsFormData>({
    project: initialData?.project ?? "",
    company: initialData?.company ?? "",
    paymentConditions: initialData?.paymentConditions ?? "",
    deliveryConditions: initialData?.deliveryConditions ?? "",
  });

  const [details, setDetails] = useState<DetailsFormData>({
    addressLabel: initialData?.addressLabel ?? "",
    deliveryAddress: initialData?.deliveryAddress ?? emptyAddress,
    email: initialData?.contacts.email ?? "",
    phone: initialData?.contacts.phone ?? "",
  });

  const [products, setProducts] = useState<PurchaseOrderProduct[]>(
    initialData?.products ?? []
  );

  const { summary, taxes } = useOrderCalculations(products);

  const handleAddProduct = (form: ProductFormData) => {
    setProducts((prev) => [...prev, productFromForm(form, prev.length)]);
  };

  const handleDeleteProduct = (product: PurchaseOrderProduct) => {
    setProducts((prev) => prev.filter((p) => p.id !== product.id));
  };

  const buildPayload = () => ({
    project: characteristics.project,
    company: characteristics.company,
    paymentConditions: characteristics.paymentConditions,
    deliveryConditions: characteristics.deliveryConditions,
    deliveryAddress: details.deliveryAddress,
    addressLabel: details.addressLabel,
    contacts: { email: details.email, phone: details.phone },
    products,
  });

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      if (mode === "create") {
        await createPurchaseOrder(buildPayload());
        alert("Order created (mock)");
      } else if (orderId) {
        await updatePurchaseOrder(orderId, buildPayload());
        alert("Order updated (mock)");
      }
      router.push("/purchase-order");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <FinancialSummary
        ipiIcms={taxes.ipiIcms}
        subtotal={taxes.subtotal}
        totalNet={taxes.totalNet}
      />

      <section className="flex gap-[30px]">
        <div className="flex-1">
          <OrderCharacteristicsForm data={characteristics} onChange={setCharacteristics} />
        </div>
        <div className="flex-1">
          <OrderDetailsForm data={details} onChange={setDetails} />
        </div>
      </section>

      <ProductForm onAdd={handleAddProduct} />

      <OrderProductsTable
        products={products}
        renderActions={(product) => (
          <div className="flex gap-3 justify-center">
            <FaPencil className="cursor-pointer text-gray-600" />
            <FaTrash
              className="cursor-pointer text-red-500"
              onClick={() => handleDeleteProduct(product)}
            />
          </div>
        )}
      />

      <ProductsSummaryCard summary={summary} />

      <OrderFormFooter
        title={mode === "create" ? "Create order" : "Save changes"}
        prompt={
          mode === "create"
            ? "Do you want to create order?"
            : "Do you want to save the changes?"
        }
        confirmLabel={mode === "create" ? "Create order" : "Save changes"}
        onConfirm={handleSubmit}
        onCancel={() => router.push("/purchase-order")}
        loading={submitting}
      />
    </>
  );
}
