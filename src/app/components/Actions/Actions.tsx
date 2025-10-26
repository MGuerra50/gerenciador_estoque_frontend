import ButtonPrincipal from "../ButtonPrincipal/ButtonPrincipal";
import WidgetsBase from "../WidgetsBase/WidgetsBase";
import { MdOutlineCheckBox } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";

export default function Actions() {
  return (
    <>
      <div className="mt-[30px]">
        <WidgetsBase>
          <>
            <h2 className="text-lg font-semibold mb-3 pl-[5px]">Actions</h2>
            <div
              style={{
                display: "grid",
                gridTemplateRows: "1fr 1fr 1fr",
                rowGap: "25px",
                justifyContent: "center"
              }}
            >
              <ButtonPrincipal width={320}>
                <div className="flex gap-[15px] m-[5px] items-center">
                  <FaPlus className="text-[35px] ml-[20px]" />

                  <div className="font-semibold mt-[5px] mb-[5px] w-full justify-center">
                    New purchase order
                  </div>
                </div>
              </ButtonPrincipal>
              <ButtonPrincipal width={320}>
                <div className="flex gap-[15px] m-[5px] items-center">
                  <IoMdSearch className="text-[35px] ml-[20px]" />

                  <div className="font-semibold mt-[5px] mb-[5px]  w-full justify-center">
                    Advanced search
                  </div>
                </div>
              </ButtonPrincipal>
              <ButtonPrincipal width={320}>
                <div className="flex gap-[15px] m-[5px] items-center">
                  <MdOutlineCheckBox className="text-[35px] ml-[20px]" />

                  <div className="font-semibold mt-[5px] mb-[5px]  w-full justify-center">
                    Approve all orders
                  </div>
                </div>
              </ButtonPrincipal>
            </div>
          </>
        </WidgetsBase>
      </div>
    </>
  );
}
