"use client";

import { useRouter } from "next/navigation";
import ButtonPrincipal from "../../../../shared/components/ButtonPrincipal/ButtonPrincipal";
import WidgetsBase from "../../../../shared/components/WidgetsBase/WidgetsBase";
import WidgetHeader from "../../../../shared/components/WidgetHeader/WidgetHeader";
import { MdOutlineCheckBox } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { approveAllOrders } from "../../services/purchaseOrderService";

interface Props {
  onAdvancedSearch: () => void;
}

export default function Actions({ onAdvancedSearch }: Props) {
  const router = useRouter();

  const handleApproveAll = async () => {
    await approveAllOrders();
    alert("All orders approved (mock)");
  };

  return (
    <div className="mt-[30px]">
      <WidgetsBase>
        <WidgetHeader title="Actions" />
        <div
          style={{
            display: "grid",
            gridTemplateRows: "1fr 1fr 1fr",
            rowGap: "25px",
            justifyContent: "center",
          }}
        >
          <ButtonPrincipal width={320} onClick={() => router.push("/purchase-order/new")}>
            <div className="flex gap-[15px] m-[5px] items-center">
              <FaPlus className="text-[35px] ml-[20px]" />
              <div className="font-semibold mt-[5px] mb-[5px] w-full justify-center">
                New purchase order
              </div>
            </div>
          </ButtonPrincipal>
          <ButtonPrincipal width={320} onClick={onAdvancedSearch}>
            <div className="flex gap-[15px] m-[5px] items-center">
              <IoMdSearch className="text-[35px] ml-[20px]" />
              <div className="font-semibold mt-[5px] mb-[5px] w-full justify-center">
                Advanced search
              </div>
            </div>
          </ButtonPrincipal>
          <ButtonPrincipal width={320} onClick={handleApproveAll}>
            <div className="flex gap-[15px] m-[5px] items-center">
              <MdOutlineCheckBox className="text-[35px] ml-[20px]" />
              <div className="font-semibold mt-[5px] mb-[5px] w-full justify-center">
                Approve all orders
              </div>
            </div>
          </ButtonPrincipal>
        </div>
      </WidgetsBase>
    </div>
  );
}
