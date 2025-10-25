"use client";

import ButtonPrincipal from "../ButtonPrincipal/ButtonPrincipal";
import TablePrincipal from "../TablePrincipal/TablePrincipal";
import WidgetsBase from "../WidgetsBase/WidgetsBase";

interface props {
  height?: number;
}

interface Product {
  name: string;
  quantity: number;
  max: number;
}

const products: Product[] = [
  { name: "Mouse gamer rgb", quantity: 5, max: 10 },
  { name: "Mouse Attack shack", quantity: 1, max: 10 },
  { name: "Teclado gamer", quantity: 7, max: 10 },
  { name: "Mouse pad gamer", quantity: 8, max: 10 },
];

const productsColumns = [
  { key: "name", label: "Produto" },
  { key: "quantity", label: "Quantidade" },
  { key: "max", label: "Máximo" },
] satisfies { key: keyof Product; label: string }[];

export default function LowStockTable({ height }: props) {
  return (
    <>
      <div className="h-full">
        <WidgetsBase>
          <>
            <div
              style={height ? { height: height + "px" } : { height: "auto" }}
            >
              <h2 className="text-lg font-semibold mb-3 pl-[5px]">Low Stock</h2>
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
            <div className="w-full h-full flex justify-center mb-[10px] mt-[35px] text-lg font-semibold">
              <ButtonPrincipal text="See more" />
            </div>
          </>
        </WidgetsBase>
      </div>
    </>
  );
}
