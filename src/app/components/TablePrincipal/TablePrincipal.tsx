"use client";

import ButtonPrincipal from "../ButtonPrincipal/ButtonPrincipal";

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

export default function TablePrincipal() {
  return (
    <>
      <div className="overflow-x-auto w-full">
        <table className="w-full text-left bg-gray-100 rounded-xl">
          <thead>
            <tr className="text-gray-900 text-sm">
              <th className="px-3 py-1 h-[64px]">Product</th>
              <th className="px-3 py-1 h-[64px]">Quantity</th>
              <th className="px-3 py-1 h-[64px] text-center">Quick Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr
                key={index}
                className="bg-gray-50 hover:bg-gray-100 transition border-b border-gray-200"
              >
                <td className=" h-[68px] px-3 py-2">{product.name}</td>
                <td className=" h-[68px] px-3 py-2 pl-[25px] text-orange-500 font-medium font-semibold">
                  {product.quantity}/{product.max}
                </td>
                <td className=" h-[68px] px-3 py-2 text-center ">
                  <ButtonPrincipal width={90} children={(<div className="font-semibold mt-[15px] mb-[15px]">BUY</div>)}/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="w-full h-full flex justify-center mb-[10px] mt-[35px] text-lg font-semibold">
          <ButtonPrincipal text="See more" />
        </div>
      </div>
    </>
  );
}
