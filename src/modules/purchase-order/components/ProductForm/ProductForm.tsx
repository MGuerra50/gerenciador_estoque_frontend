"use client";

import { useState } from "react";
import WidgetsBase from "@/shared/components/WidgetsBase/WidgetsBase";
import WidgetHeader from "@/shared/components/WidgetHeader/WidgetHeader";
import FormField from "@/shared/components/FormField/FormField";
import ButtonPrincipal from "@/shared/components/ButtonPrincipal/ButtonPrincipal";
import { FaPlus } from "react-icons/fa6";
import type { ProductFormData } from "../../types/purchaseOrderProduct";

const emptyForm: ProductFormData = {
  productName: "",
  model: "",
  version: "",
  color: "",
  quantity: 0,
  costPrice: 0,
};

interface Props {
  onAdd: (product: ProductFormData) => void;
}

export default function ProductForm({ onAdd }: Props) {
  const [form, setForm] = useState<ProductFormData>(emptyForm);

  const update = (partial: Partial<ProductFormData>) => {
    setForm((prev) => ({ ...prev, ...partial }));
  };

  const handleAdd = () => {
    if (!form.productName || form.quantity <= 0) return;
    onAdd(form);
    setForm(emptyForm);
  };

  return (
    <WidgetsBase>
      <WidgetHeader title="Product" />
      <div className="grid grid-cols-3 gap-4">
        <FormField
          label="Product name"
          value={form.productName}
          onChange={(v) => update({ productName: v })}
        />
        <FormField
          label="Model"
          value={form.model}
          onChange={(v) => update({ model: v })}
        />
        <FormField
          label="Version"
          value={form.version}
          onChange={(v) => update({ version: v })}
        />
        <FormField
          label="Color"
          value={form.color}
          onChange={(v) => update({ color: v })}
        />
        <FormField
          label="Quantity"
          value={form.quantity || ""}
          onChange={(v) => update({ quantity: Number(v) || 0 })}
          type="number"
        />
        <FormField
          label="Cost price"
          value={form.costPrice || ""}
          onChange={(v) => update({ costPrice: Number(v) || 0 })}
          type="number"
        />
      </div>
      <div className="flex justify-center mt-4">
        <ButtonPrincipal width={160} onClick={handleAdd}>
          <div className="flex gap-2 items-center justify-center py-2">
            <FaPlus />
            <span className="font-semibold">To add</span>
          </div>
        </ButtonPrincipal>
      </div>
    </WidgetsBase>
  );
}
