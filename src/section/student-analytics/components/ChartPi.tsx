"use client";

import { Pie, PieChart, Cell } from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import CommonContainer from "../../../common/CommonContainer";

const healthCheckData = [
  { name: "Module finish on time", value: 9.97, color: "#FFC107" },
  { name: "Module progress", value: 17.35, color: "#6A5ACD" },
  { name: "Quiz mark", value: 15, color: "#A020F0" },
  { name: "Video duration", value: 26.52, color: "#FF4500" },
  { name: "Assignment Mark", value: 34.16, color: "#1E90FF" },
];

const quizMarkData = [
  { name: "Complete Quiz", value: 50, color: "#A020F0" },
  { name: "Incomplete Quiz", value: 19, color: "#FF4500" },
  { name: "Total Quiz", value: 69, color: "#D3D3D3" },
];

export default function ChartPi() {
  return (
    <div className="bg-[#08061A] py-5">
      <CommonContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Health Check Chart */}
          <Card className="bg-[#1c2046] text-white p-4">
            <CardHeader>
              <CardTitle>Health Check</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col md:flex-row items-center justify-center">
              <PieChart width={200} height={200}>
                <Pie
                  data={healthCheckData}
                  dataKey="value"
                  outerRadius={80}
                  label
                >
                  {healthCheckData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
              <div className="mt-4">
                {healthCheckData.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    ></span>
                    {item.name}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quiz Mark Chart */}
          <Card className="bg-[#1c2046] text-white p-4">
            <CardHeader>
              <CardTitle>Quiz Mark</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col md:flex-row items-center justify-center">
              <PieChart width={200} height={200}>
                <Pie data={quizMarkData} dataKey="value" outerRadius={80} label>
                  {quizMarkData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
              <div className="mt-4">
                {quizMarkData.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    ></span>
                    {item.name}: <b>{item.value}</b>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </CommonContainer>
    </div>
  );
}
