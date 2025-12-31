"use client";
import React from "react";
import { Pie, PieChart, ResponsiveContainer, Tooltip, Legend, PieLabelRenderProps } from "recharts";

const data01 = [
  { name: "Entradas", value: 400, fill: "#8884d8" },
  { name: "Saídas", value: 300, fill: "#82ca9d" },
  { name: "Investimentos", value: 300, fill: "#ffc658" },
  { name: "Outros", value: 200, fill: "#ff7300" },
];

const PizzaGraph = () => {
  return (
    <>
      <div className="max-w-[600px] h-[325px]">
        <h2 className="text-lg font-semibold mb-3 pl-[5px]">
          Expenses by category
        </h2>
        <ResponsiveContainer width="100%" height={325}>
          <PieChart>
            <Pie
              data={data01}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label={({ name, percent }:PieLabelRenderProps) =>
                `${name} ${((Number(percent) ?? 0 ) * 100).toFixed(2)}%`
              }
            />
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default PizzaGraph;
