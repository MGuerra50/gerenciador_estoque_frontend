"use client";

import ButtonPrincipal from "../ButtonPrincipal/ButtonPrincipal";
import TablePrincipal from "../TablePrincipal/TablePrincipal";
import WidgetsBase from "../WidgetsBase/WidgetsBase";

interface Order {
  orderCode: number;
  netValue: string;
  dateOfIssue: string;
}

const order: Order[] = [
  { orderCode: 10, netValue: "R$ 500.431", dateOfIssue: "10/09" },
  { orderCode: 9, netValue: "R$ 129.743,90", dateOfIssue: "28/07" },
  { orderCode: 8, netValue: "R$ 57.001,22", dateOfIssue: "15/07" },
  { orderCode: 7, netValue: "R$ 535.998,01", dateOfIssue: "15/06" },
];

const orderColumns = [
  { key: "orderCode", label: "Order code" },
  { key: "netValue", label: "Net values" },
  { key: "dateOfIssue", label: "Date of issue" },
] satisfies { key: keyof Order; label: string }[];

interface props {
  width?: number;
  height?: number;
}

export default function OrderAwaitingApproval({ width, height }: props) {
  return (
    <>
      <div>
        <WidgetsBase>
          <div
            style={
              width
                ? { width: width + "px", height: height + "px" }
                : { width: "500px", height: "493px" }
            }
          >
            <h2 className="text-lg font-semibold mb-3 pl-[5px]">
              Order Awaiting Approval
            </h2>
            <TablePrincipal
              rows={order}
              columns={orderColumns}
              renderActions={(order) => (
                <ButtonPrincipal width={120}>
                  <div className="font-semibold mt-[15px] mb-[15px]">View order</div>
                </ButtonPrincipal>
              )}
            />
            <div className="w-full h-full flex justify-center mb-[10px] mt-[25px] text-lg font-semibold">
              <ButtonPrincipal text="See more" />
            </div>
          </div>
        </WidgetsBase>
      </div>
    </>
  );
}
