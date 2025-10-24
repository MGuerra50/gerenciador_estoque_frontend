"use client";

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface props {
  titleActivo?: boolean;
  height?: number;
  width?: number;
}

export default function LineGraph({ height, titleActivo, width }: props) {
  const data = [
    { name: "Jan", value: 400000 },
    { name: "Feb", value: 300000 },
    { name: "Mar", value: 300000 },
    { name: "Apr", value: 200000 },
  ];
  return (
    <>
      <div
        className="max-w-[600px] h-full"
        style={width ? { width: width + "px" } : { width: "auto" }}
      >
        {titleActivo && (
          <h2 className="text-lg font-semibold mb-3 pl-[5px]">
            Expenses by category
          </h2>
        )}
        <ResponsiveContainer width="100%" height={height ? height : 300}>
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
