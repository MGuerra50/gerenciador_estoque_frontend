"use client";

import ButtonPrincipal from "../ButtonPrincipal/ButtonPrincipal";
import TablePrincipal from "../TablePrincipal/TablePrincipal";
import WidgetsBase from "../WidgetsBase/WidgetsBase";

interface Product {
  orderCode: number;
  netValue: string;
  dateOfIssue: string;
}

const products: Product[] = [
  { orderCode: 10, netValue: "R$ 500.431", dateOfIssue: "10/09" },
  { orderCode: 9, netValue: "R$ 129.743,90", dateOfIssue: "28/07" },
  { orderCode: 8, netValue: "R$ 57.001,22", dateOfIssue: "15/07" },
  { orderCode: 7, netValue: "R$ 535.998,01", dateOfIssue: "15/06" },
];

const productsColumns = [
  { key: "orderCode", label: "Order code" },
  { key: "netValue", label: "Net values" },
  { key: "dateOfIssue", label: "Date of issue" },
] satisfies { key: keyof Product; label: string }[];

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
              rows={products}
              columns={productsColumns}
              renderActions={(product) => (
                <ButtonPrincipal width={90}>
                  <div className="font-semibold mt-[15px] mb-[15px]">BUY</div>
                </ButtonPrincipal>
              )}
            />
          </div>
        </WidgetsBase>
      </div>
    </>
  );
}
