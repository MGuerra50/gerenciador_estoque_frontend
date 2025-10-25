import ButtonPrincipal from "../ButtonPrincipal/ButtonPrincipal";
import TablePrincipal from "../TablePrincipal/TablePrincipal";
import WidgetsBase from "../WidgetsBase/WidgetsBase";

interface Product {
  position: string;
  product: string;
  quantity: number;
  totalValue: string;
}

const products: Product[] = [
  {
    position: "1°",
    product: "Mouse gamer rgb",
    quantity: 500371,
    totalValue: "R$ 1.541.942.902,39",
  },
  {
    position: "2°",
    product: "Mouse Attack shack",
    quantity: 393248,
    totalValue: "R$ 993.248.721,55",
  },
  {
    position: "3°",
    product: "Teclado gamer",
    quantity: 339101,
    totalValue: "R$ 885.339.101,12",
  },
];

const productsColumns = [
  { key: "position", label: "Positions" },
  { key: "product", label: "Product" },
  { key: "quantity", label: "Quantidade" },
  { key: "totalValue", label: "Total value" },
] satisfies { key: keyof Product; label: string }[];

export default function TopSellersTable() {
  return (
    <>
      <div>
        <WidgetsBase>
          <>
            <h2 className="text-lg font-semibold mb-3 pl-[5px]">Top Sellers</h2>
            <TablePrincipal rows={products} columns={productsColumns} />
            <div className="w-full flex justify-center mb-[10px] mt-[35px] text-lg font-semibold">
              <ButtonPrincipal text="See more" />
            </div>
          </>
        </WidgetsBase>
      </div>
    </>
  );
}
