import React, { useState } from "react";
import CommonContainer from "../../../common/CommonContainer";
import { IoMdFootball } from "react-icons/io";
import { IoBugSharp } from "react-icons/io5";
import { BiBarChartSquare } from "react-icons/bi";
import { BsBoundingBox } from "react-icons/bs";
import { TfiAnnouncement } from "react-icons/tfi";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import {
  FaBug,
  FaBullhorn,
  FaClipboardList,
  FaLayerGroup,
} from "react-icons/fa";
import { MdOndemandVideo } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

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

const PostType = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All Posts");

  return (
    <CommonContainer>
      <div className="flex flex-col-reverse lg:flex-row gap-6 w-full px-6 py-4">
        {/* Left Side: Post Input */}
        <div className="w-full lg:w-2/3 bg-white p-5 rounded-xl shadow-md">
          <div className="flex items-center gap-3">
            {/* User Avatar */}
            <FaUserCircle className="text-gray-500 text-4xl" />
            {/* Input Field */}
            <div className="w-full bg-gray-100 text-gray-500 px-4 py-2 rounded-full">
              Share or Ask Something to Everyone?
            </div>
            {/* Create Post Button */}
            <button className="px-4 py-2 text-white font-semibold bg-gradient-to-r from-[#cb43c2] to-[#0f16f1] rounded-lg">
              Create Post
            </button>
          </div>
          {/* Photo/Video Option */}
          <div className="flex items-center gap-2 text-gray-500 mt-3">
            <MdOndemandVideo className="text-pink-500" />
            <span>Photo/Video</span>
          </div>
        </div>

        {/* Right Side: Categories */}
        <div className="w-full lg:w-1/3 bg-white p-5 rounded-xl shadow-md">
          {categories.map((category) => (
            <div className="flex items-center justify-between w-full gap-2 p-2 rounded md:flex-row hover:bg-slate-200 cursor-pointer">
              <div className="flex gap-2 items-center">
                <div className="text-xl">{category.icon}</div>
                <div className="text-lg font-medium">{category.label}</div>
              </div>
              <div className="text-lg font-semibold">{category.quantity}</div>
            </div>
          ))}
        </div>
      </div>
    </CommonContainer>
  );
};

export default PostType;
