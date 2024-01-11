"use client";

import React from "react";
import {
  BarChart as BarGraph,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Bar,
} from "recharts";
// import { useWindowHeight } from "@react-hook/window-size";

type Props = {};

const data = [
  {
    month: "Jan",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    month: "Feb",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    month: "Mar",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    month: "Apr",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    month: "May",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    month: "Jun",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    month: "Jul",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    month: "Aug",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    month: "Sep",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    month: "Oct",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    month: "Nov",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    month: "Dec",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
];

export default function BarChart({}: Props) {
  // const height = useWindowHeight();
  // const windowHeight = height > 817;
  return (
    <ResponsiveContainer width={"100%"} height={550}>
    {/* {height} */}
      <BarGraph data={data}>
        <XAxis
          dataKey={"month"}
          tickLine={false}
          axisLine={false}
          stroke="#888888"
          fontSize={12}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          stroke="#888888"
          fontSize={12}
          tickFormatter={(value) => `$${value}`}
        />
        <Bar dataKey={"total"} radius={[4, 4, 0, 0]} />
      </BarGraph>
    </ResponsiveContainer>
  );
}
