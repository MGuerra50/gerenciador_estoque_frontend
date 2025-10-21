"use client";
import React from "react";
import { Pie, PieChart, ResponsiveContainer } from "recharts";

const data01 = [
  { name: "Entradas", value: 400 },
  { name: "Saídas", value: 300 },
  { name: "Investimentos", value: 300 },
  { name: "Outros", value: 200 },
];

const data02 = [
  { name: "Janeiro", value: 100 },
  { name: "Fevereiro", value: 200 },
  { name: "Março", value: 150 },
  { name: "Abril", value: 80 },
];

const PizzaGraph = () => {
  return (
    <>
      <div className=" max-w-[600px] h-[400px]">
        <h2 className="text-lg font-semibold mb-3 pl-[5px]">
          Inputs x Outputs
        </h2>
        <ResponsiveContainer width="100%" height={350}>
          <PieChart
            style={{
              width: "100%",
              maxWidth: "500px",
              maxHeight: "80vh",
              aspectRatio: 1,
            }}
            responsive
            margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
          >
            <Pie
              data={data01}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius="50%"
              fill="#8884d8"
            />
            <Pie
              data={data02}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius="60%"
              outerRadius="80%"
              fill="#82ca9d"
              label
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default PizzaGraph;
