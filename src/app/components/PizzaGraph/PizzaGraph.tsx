"use client";
import React from "react";
import { Pie, PieChart, ResponsiveContainer, Tooltip, Legend } from "recharts";

const data01 = [
  { name: "Entradas", value: 400, fill: "#8884d8" },
  { name: "Saídas", value: 300, fill: "#82ca9d" },
  { name: "Investimentos", value: 300, fill: "#ffc658" },
  { name: "Outros", value: 200, fill: "#ff7300" },
];

const data02 = [
  { name: "Janeiro", value: 100, fill: "#8884d8" },
  { name: "Fevereiro", value: 200, fill: "#82ca9d" },
  { name: "Março", value: 150, fill: "#ffc658" },
  { name: "Abril", value: 80, fill: "#ff7300" },
];

const PizzaGraph = () => {
  return (
    <>
      <div className="max-w-[600px] h-[400px]">
        <h2 className="text-lg font-semibold mb-3 pl-[5px]">
          Entradas vs Saídas
        </h2>
        <ResponsiveContainer width="100%" height={350}>
          <PieChart>
            <Pie
              data={data01}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label={({ name, percent }: any) => `${name} ${((percent as number) * 100).toFixed(0)}%`}
            />
            <Pie
              data={data02}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={90}
              outerRadius={120}
              label={({ name, percent }: any) => `${name} ${((percent as number) * 100).toFixed(0)}%`}
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
