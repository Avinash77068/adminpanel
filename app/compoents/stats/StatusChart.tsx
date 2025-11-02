"use client"
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { PieChart, Pie } from "recharts";
interface Props {
  stats: {
    total: number;
    free: number;
    busy: number;
    offline: number;
  };
  rating: number;
  experience: number;
}

export const StatusChart: React.FC<Props> = ({
  stats,
  rating,
  experience,
}: Props) => {
  const data = [
    { name: "Free", value:"free" },
    { name: "Busy", value: "busy" },
    { name: "Offline", value: "offline" },
    { name: "Rating", value: "rating" },
    { name: "Experience", value: "experience" },
  ];
  const color = ["#22c55e", "#f59e0b", "#ef4444", "#e59e0b", "#22c55e"];
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Astrologer Progress overview
      </h2>
      <div className="flex gap-6">
        <ResponsiveContainer width="50%" height={300}>
          <BarChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="name" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip cursor={{ fill: "#f3f4f6" }} />
            <Bar dataKey="value" radius={[8, 8, 0, 0]} width={20}>
              {data.map((_, index) => (
                <Cell key={index} fill={color[index]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }: any) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
            >
              {data.map((_, index) => (
                <Cell key={index} fill={color[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
