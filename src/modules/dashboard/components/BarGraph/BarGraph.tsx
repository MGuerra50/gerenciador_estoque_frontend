"use client";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const BarGraph = () => {
  const data = [
    { name: "Janeiro", entradas: 400, saidas: 300 },
    { name: "Fevereiro", entradas: 300, saidas: 200 },
    { name: "Março", entradas: 200, saidas: 150 },
    { name: "Abril", entradas: 278, saidas: 189 },
  ];

  return (
    <>
      <div className="max-w-[600px] h-[325px] flex items-center justify-center">
        <div className="w-full h-full">
          <h2 className="text-lg font-semibold mb-3 pl-[5px]">Storage cost</h2>
          <ResponsiveContainer width="100%" height={325}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="entradas" fill="#82ca9d" />
              <Bar dataKey="saidas" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default BarGraph;
