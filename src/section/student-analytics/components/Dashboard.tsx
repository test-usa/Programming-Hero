import React from "react";
// import {
//   Select,
//   SelectTrigger,
//   SelectValue,
//   SelectContent,
//   SelectItem,
// } from "@/components/ui/select";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { CalendarDays, Trophy } from "lucide-react";
import { Card } from "../../../components/ui/card";
import { Select } from "@heroui/react";
import CommonContainer from "../../../common/CommonContainer";

const assignmentData = [
  { name: "A1", mark: 50 },
  { name: "A2", mark: 20 },
  { name: "A3", mark: 40 },
  { name: "A4", mark: 50 },
  { name: "A5", mark: 45 },
  { name: "A6", mark: 20 },
  { name: "A7", mark: 50 },
  { name: "A8", mark: 0 },
  { name: "A9", mark: 10 },
];

const DashboardCards: React.FC = () => {
  return (
    <div className="bg-[#08061A] py-5">
      <CommonContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Module Finish Track */}
          <Card className="p-4 bg-[#1c2046] text-white">
            <h2 className="text-xl font-bold">Module Finish Track</h2>
            <div className="grid grid-cols-7 gap-2 mt-4">
              {[...Array(31)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 flex items-center justify-center bg-gray-800 text-white rounded"
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </Card>

          {/* Video Duration */}
          <Card className="p-4 bg-[#1c2046] text-white">
            <h2 className="text-xl font-bold">Video Duration</h2>
            {/* <Select>
          <SelectTrigger className="mt-2">
            <SelectValue placeholder="Weekly" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="weekly">Weekly</SelectItem>
            <SelectItem value="monthly">Monthly</SelectItem>
          </SelectContent>
        </Select> */}
            <p className="mt-2 text-sm">Total: 243 Hours and 11 Minutes</p>
          </Card>

          <Card className="p-4 bg-[#1c2046] text-white">
            <h2 className="text-xl font-bold flex items-center justify-center gap-2">
              <Trophy className="text-yellow-500" /> 67 Reward
            </h2>
          </Card>

          {/* Assignment Analytics */}
          <Card className="p-4 bg-[#1c2046] text-white">
            <h3 className="text-lg font-medium mt-2">Assignment Analytics</h3>
            <p className="text-sm">Avg Assignment Mark: 39.78</p>
            <ResponsiveContainer width="100%" height={150}>
              <LineChart data={assignmentData}>
                <XAxis dataKey="name" stroke="#8884d8" />
                <YAxis stroke="#8884d8" />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="mark"
                  stroke="#8884d8"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </div>
      </CommonContainer>
    </div>
  );
};

export default DashboardCards;
