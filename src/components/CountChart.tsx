'use client';

import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";
import {
  Legend,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";


const data = [
  {
    name: "Girls",
    count: 53,
    fill: "#8884d8",
  },
  {
    name: "Total",
    count: 106,
    fill: "#8884d8",
  },
  {
    name: "Boys",
    count: 53,
    fill: "#83a6ed",
  }
];

const RadialBarChartWithNoSSR = dynamic(
  () => import('recharts').then((mod) => mod.RadialBarChart),
  { ssr: false }
);

function CountChart() {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/*TITLE */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font=semibold">Student</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      {/*CHART */}
      <div className="w-full h-[75%]">
       
      <ResponsiveContainer>
          <RadialBarChartWithNoSSR
            cx="50%"
            cy="50%"
            innerRadius="10%"
            outerRadius="80%"
            barSize={10}
            data={data}
          >
            <RadialBar
              label={{ position: 'insideStart', fill: '#fff' }}
              background
              dataKey="count"
            />
            <Legend iconSize={10} layout="vertical" verticalAlign="middle" />
          </RadialBarChartWithNoSSR>
        </ResponsiveContainer>

      </div>
      {/*BOTTOM */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-smSky rounded-full " />
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-xs text-gray-300">Boys (55%)</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-smYellow rounded-full " />
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-xs text-gray-300">Girls (55%)</h2>
        </div>
      </div>

    </div>
  );
}

export default CountChart;
