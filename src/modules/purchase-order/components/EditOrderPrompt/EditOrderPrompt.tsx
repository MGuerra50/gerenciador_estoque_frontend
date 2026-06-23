"use client";

import { useRouter } from "next/navigation";
import WidgetsBase from "@/shared/components/WidgetsBase/WidgetsBase";
import ButtonWarning from "@/shared/components/ButtonWarning/ButtonWarning";
import { FaPencil } from "react-icons/fa6";

interface Props {
  orderId: number;
}

export default function EditOrderPrompt({ orderId }: Props) {
  const router = useRouter();

  return (
    <WidgetsBase>
      <h2 className="text-lg font-semibold mb-2">Edit order</h2>
      <div className="flex items-center justify-between">
        <p>Do you want to edit this order?</p>
        <ButtonWarning width={160} onClick={() => router.push(`/purchase-order/${orderId}/edit`)}>
          <div className="flex gap-2 items-center justify-center py-2">
            <FaPencil size={18} />
            <span className="font-semibold">Edit order</span>
          </div>
        </ButtonWarning>
      </div>
    </WidgetsBase>
  );
}
