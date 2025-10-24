"use client";

import TablePrincipal from "../TablePrincipal/TablePrincipal";
import WidgetsBase from "../WidgetsBase/WidgetsBase";

interface props {
  height?: number;
}
export default function LowStockTable({ height }: props) {
  return (
    <>
      <div className="h-full">
        <WidgetsBase>
          <div style={height ? { height: height + "px" } : { height: "auto" }}>
            <h2 className="text-lg font-semibold mb-3 pl-[5px]">Low Stock</h2>
            <TablePrincipal />
          </div>
        </WidgetsBase>
      </div>
    </>
  );
}
