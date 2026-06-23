"use client";

import WidgetsBase from "@/shared/components/WidgetsBase/WidgetsBase";
import ButtonPrincipal from "@/shared/components/ButtonPrincipal/ButtonPrincipal";
import ButtonDanger from "@/shared/components/ButtonDanger/ButtonDanger";
import { MdOutlineCheckBox } from "react-icons/md";
import { IoClose } from "react-icons/io5";

interface Props {
  title: string;
  prompt: string;
  confirmLabel: string;
  onConfirm: () => void;
  onCancel: () => void;
  loading?: boolean;
}

export default function OrderFormFooter({
  title,
  prompt,
  confirmLabel,
  onConfirm,
  onCancel,
  loading,
}: Props) {
  return (
    <WidgetsBase>
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <div className="flex items-center justify-between">
        <p>{prompt}</p>
        <div className="flex gap-3">
          <ButtonPrincipal width={180} onClick={onConfirm} disabled={loading}>
            <div className="flex gap-2 items-center justify-center py-2">
              <MdOutlineCheckBox size={22} />
              <span className="font-semibold">{confirmLabel}</span>
            </div>
          </ButtonPrincipal>
          <ButtonDanger width={180} onClick={onCancel} disabled={loading}>
            <div className="flex gap-2 items-center justify-center py-2">
              <IoClose size={22} />
              <span className="font-semibold">Cancel changes</span>
            </div>
          </ButtonDanger>
        </div>
      </div>
    </WidgetsBase>
  );
}
