import InputMask from "react-input-mask";
import WidgetsBase from "../WidgetsBase/WidgetsBase";
type UnderlineInputProps = React.ComponentPropsWithoutRef<"input">;
export default function FilterPurchaseOrder() {
  return (
    <>
      <WidgetsBase>
        <h2 className="text-lg font-semibold mb-3 pl-[5px]">Filter</h2>
        <OrderCodeFilter />
        <DateOfIssue />
      </WidgetsBase>
    </>
  );
}

const OrderCodeFilter = () => {
  return (
    <div style={{ width: "150px" }}>
      <WidgetsBase>
        <>
          <section className="w-full flex justify-center">
            <h2 className="text-lg font-medium mb-3 pl-[5px]">Order Code</h2>
          </section>
          <section className="space-y-2">
            <UnderlineInput type="text" placeholder="Starting in" />
            <UnderlineInput type="text" placeholder="Ending in" />
          </section>
        </>
      </WidgetsBase>
    </div>
  );
};

const UnderlineInput = (props: UnderlineInputProps) => (
  <input
    {...props}
    className="w-full text-sm border-b border-gray-300 focus:border-blue-500 outline-none pb-1 placeholder-gray-400"
  />
);

const DateOfIssue = () => {
  return (
    <div className="w-[400px]">
      <WidgetsBase>
        <section>
          <div className="w-full flex justify-center">
            <h2 className="text-lg font-medium mb-3 pl-[5px]">Date Of Issue</h2>
          </div>
          <section className="flex justify-center w-full gap-x-[30px]">
            <div className="w-[40%]">
              <h2 className="text-lg font-medium mb-3 pl-[5px]">Start date</h2>
              <InputMask>
                <UnderlineInput type="text" placeholder="DD/MM/YYYY" />
              </InputMask>
            </div>
            <div className="w-[40%]">
              <h2 className="text-lg font-medium mb-3 pl-[5px]">End date</h2>

              <UnderlineInput type="text" placeholder="DD/MM/YYYY" />
            </div>
          </section>
        </section>
      </WidgetsBase>
    </div>
  );
};
