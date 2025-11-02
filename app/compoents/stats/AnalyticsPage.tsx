"use client";
import React from "react";
import {
  BarChart3,
  Users,
  CalendarDays,
  IndianRupee,
  TrendingUp,
} from "lucide-react";

export default function AnalyticsPage() {
  const stats = [
    {
      title: "Total Consultations",
      value: "1,248",
      icon: <CalendarDays className="text-indigo-600" size={26} />,
      growth: "+12.4%",
    },
    {
      title: "Total Clients",
      value: "856",
      icon: <Users className="text-green-600" size={26} />,
      growth: "+8.9%",
    },
    {
      title: "Monthly Revenue",
      value: "₹84,500",
      icon: <IndianRupee className="text-yellow-600" size={26} />,
      growth: "+16.3%",
    },
    {
      title: "Conversion Rate",
      value: "73%",
      icon: <TrendingUp className="text-purple-600" size={26} />,
      growth: "+5.1%",
    },
  ];

  return (
    <div className="py-4 bg-gray-50 min-h-screen">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <BarChart3 className="text-indigo-600" size={28} /> Analytics Overview
      </h1>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-2xl p-5 flex flex-col justify-between border border-gray-100 hover:shadow-lg transition"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-gray-500 text-sm">{stat.title}</h2>
                <h3 className="text-2xl font-bold text-gray-800 mt-1">
                  {stat.value}
                </h3>
              </div>
              {stat.icon}
            </div>
            <p className="text-green-600 text-sm mt-3">
              {stat.growth} from last month
            </p>
          </div>
        ))}
      </div>

      {/* Chart Placeholder */}
      <div className="bg-white mt-10 p-6 rounded-2xl shadow-md border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Monthly Performance
        </h2>
        <div className="w-full h-64 flex items-center justify-center text-gray-400 border border-dashed border-gray-300 rounded-lg">
          📊 Chart Coming Soon (Integrate with Recharts / Chart.js)
        </div>
      </div>
    </div>
  );
}
