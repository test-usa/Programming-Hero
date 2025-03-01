import React from "react";
import { FaClock } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa6";
import { PiAndroidLogoLight } from "react-icons/pi";
import { FaBookOpen } from "react-icons/fa";
import CommonContainer from "../../../common/CommonContainer";
import profile from "../photo/profile.jpg";

const CardComponent = () => {
  return (
    <CommonContainer>
      <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 w-full pt-5 hover:bg-slate-300 my-5">
        {/* User Info */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-300 rounded-full">
              <img className="w-10 h-10 rounded-full" src={profile} alt="" />
            </div>
            <div>
              <h3 className="text-gray-900 font-semibold text-sm">
                Mohammad Nazmul Ahassan
              </h3>
              <div className="text-gray-500 text-xs flex items-center gap-1">
                <FaClock />
                <span>5 hours ago</span>
              </div>
            </div>
          </div>
          {/* New Badge */}
          <span className="bg-purple-100 text-purple-600 text-xs px-2 py-1 rounded-full">
            New
          </span>
        </div>

        {/* Post Content */}
        <div className="mt-3">
          <h4 className="text-gray-900 font-semibold text-sm">
            Assignment submit problem
          </h4>
          <p className="text-gray-700 text-sm mt-1 leading-snug">
            আমি মোবাইল থেকে আমার ৪নং এসাইনমেন্টটা জেম ইউজ করে সাবমিট করতে
            চাচ্ছিলাম কিন্তু এখানে জেম ইউজ করার কোনো অপশন আসে নি এবং এটা ৩০
            মার্কে সাবমিট হয়ে গেছে, মার্ক এখানে দেখা দেয় না।{" "}
            <span className="text-blue-500 cursor-pointer">See More</span>
          </p>
        </div>

        {/* Footer Section */}
        <div className="my-3 flex flex-col md:flex-row justify-between text-gray-500 text-sm">
          <div className="flex items-center gap-2">
            <FaRegComment />
            <span>0 Comments</span>
          </div>
          <div className=" mt-3 flex items-center gap-2">
            <span className="bg-gray-200 px-2 py-1 rounded-full text-xs flex items-center gap-1">
              <PiAndroidLogoLight className="text-gray-600" /> Android App
            </span>
            <span className="bg-gray-200 px-2 py-1 rounded-full text-xs flex items-center gap-1">
              <FaBookOpen className="text-red-500" /> Course Topics
            </span>
          </div>
        </div>
      </div>
    </CommonContainer>
  );
};

export default CardComponent;
