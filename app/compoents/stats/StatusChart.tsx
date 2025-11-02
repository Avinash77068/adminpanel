"use client";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie,
} from "recharts";

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
    { name: "Free", value: stats.free },
    { name: "Busy", value: stats.busy },
    { name: "Offline", value: stats.offline },
    { name: "Rating", value: rating },
    { name: "Experience", value: experience },
  ];

  const colors = ["#22c55e", "#f59e0b", "#ef4444", "#3b82f6", "#8b5cf6"];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Astrologer Progress Overview
      </h2>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Bar Chart */}
        <div className="w-full md:w-1/2 h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="name" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip cursor={{ fill: "#f3f4f6" }} />
              <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                {data.map((_, index) => (
                  <Cell key={`bar-${index}`} fill={colors[index]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="w-full md:w-1/2 h-72">
          <ResponsiveContainer width="100%" height="100%">
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
                  <Cell key={`pie-${index}`} fill={colors[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
