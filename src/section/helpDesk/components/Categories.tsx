import React from "react";
import { BiBarChartSquare } from "react-icons/bi";
import { BsBoundingBox } from "react-icons/bs";
import { IoMdFootball } from "react-icons/io";
import { IoBugSharp } from "react-icons/io5";
import { TfiAnnouncement } from "react-icons/tfi";
import CommonContainer from "../../../common/CommonContainer";
const categories = [
  {
    name: "courses-topics",
    label: "Courses Topics",
    icon: <IoMdFootball />,
    quantity: 12,
  },
  { name: "bugs", label: "Bugs", icon: <IoBugSharp />, quantity: 20 },
  {
    name: "features-requests",
    label: "Features Requests",
    icon: <BiBarChartSquare />,
    quantity: 25,
  },
  {
    name: "others",
    label: "Others",
    icon: <BsBoundingBox />,
    quantity: 15,
  },
  {
    name: "announcements",
    label: "Announcements",
    icon: <TfiAnnouncement />,
    quantity: 18,
  },
];
const Categories = () => {
  return (
    <div className="w-full lg:w-1/3 bg-white p-5 rounded-xl border-1 dark:bg-black">
      {categories.map((category) => (
        <div className="flex items-center justify-between w-full gap-2 p-2 rounded md:flex-row hover:bg-slate-200 dark:hover:text-black cursor-pointer">
          <div className="flex gap-2 items-center">
            <div className="text-xl text-pink-500">{category.icon}</div>
            <div className="text-lg font-medium">{category.label}</div>
          </div>
          <div className="text-lg font-semibold">{category.quantity}</div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
