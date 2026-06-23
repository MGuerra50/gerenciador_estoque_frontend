"use client";

import WidgetsBase from "@/shared/components/WidgetsBase/WidgetsBase";
import ButtonPrincipal from "@/shared/components/ButtonPrincipal/ButtonPrincipal";
import ButtonDanger from "@/shared/components/ButtonDanger/ButtonDanger";
import { MdOutlineCheckBox } from "react-icons/md";
import { IoClose } from "react-icons/io5";

interface Props {
  onApprove: () => void;
  onReject: () => void;
}

export default function ApprovalBanner({ onApprove, onReject }: Props) {
  return (
    <WidgetsBase>
      <div className="flex items-center justify-between">
        <p className="text-lg font-medium">
          This purchase order is awaiting approval to proceed.
        </p>
        <div className="flex gap-3">
          <ButtonPrincipal width={160} onClick={onApprove}>
            <div className="flex gap-2 items-center justify-center py-2">
              <MdOutlineCheckBox size={22} />
              <span className="font-semibold">Approve</span>
            </div>
          </ButtonPrincipal>
          <ButtonDanger width={160} onClick={onReject}>
            <div className="flex gap-2 items-center justify-center py-2">
              <IoClose size={22} />
              <span className="font-semibold">Reject order</span>
            </div>
          </ButtonDanger>
        </div>
      </div>
    </WidgetsBase>
  );
}
