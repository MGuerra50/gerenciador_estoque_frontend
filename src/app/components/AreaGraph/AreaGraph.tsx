"use client";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
    { month: "Jan", inputs: 500, outputs: 400 },
    { month: "Feb", inputs: 900, outputs: 100 },
    { month: "Mar", inputs: 950, outputs: 700 },
    { month: "Apr", inputs: 870, outputs: 620 },
    { month: "May", inputs: 920, outputs: 300 },
    { month: "Jun", inputs: 980, outputs: 320 },
    { month: "Jul", inputs: 900, outputs: 400 },
    { month: "Aug", inputs: 700, outputs: 280 },
    { month: "Sep", inputs: 500, outputs: 350 },
    { month: "Oct", inputs: 650, outputs: 650 },
    { month: "Nov", inputs: 900, outputs: 900 },
    { month: "Dec", inputs: 700, outputs: 600 },
  ];

const AreaGraph = () => {
  return (
    <div className="bg-white rounded-2xl shadow p-4 w-full max-w-[800px]">
      <h2 className="text-lg font-semibold mb-3">Inputs x Outputs</h2>

      <ResponsiveContainer width="100%" height={350}>
        <AreaChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorInputs" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#60a5fa" stopOpacity={0.1} />
            </linearGradient>

            <linearGradient id="colorOutputs" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#7e22ce" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#7e22ce" stopOpacity={0.1} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />

          <Area
            type="linear"
            dataKey="inputs"
            stroke="#60a5fa"
            fill="url(#colorInputs)"
            strokeWidth={2}
            dot={{ r: 3, fill: "#60a5fa" }}
          />

          <Area
            type="linear"
            dataKey="outputs"
            stroke="#7e22ce"
            fill="url(#colorOutputs)"
            strokeWidth={2}
            dot={{ r: 3, fill: "#7e22ce" }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaGraph;
