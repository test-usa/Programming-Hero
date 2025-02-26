import React, { useState } from "react";
import CommonContainer from "../../../common/CommonContainer";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { MdOndemandVideo } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import CustomButton from "./CustomButton";
import CustomButton1 from "./CustomButton1";
import { FaUser } from "react-icons/fa6";
import { FaUserGroup } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { IoReload } from "react-icons/io5";
import CardComponent from "./CardComponent";
import Categories from "./Categories";

const AllPost = () => {
  return (
    <CommonContainer>
      <div className="flex flex-col-reverse lg:flex-row gap-6 w-full py-4">
        {/* Left Side: Post Input */}
        <div className="w-full lg:w-2/3 lg:h-full bg-white p-5 rounded-xl shadow-md items-start h-full">
          <div className="flex items-center gap-3">
            {/* User Avatar */}
            <FaUserCircle className="text-gray-500 text-6xl" />
            {/* Input Field */}
            <div className="w-full bg-gray-100 text-gray-500 px-4 py-2 rounded-full">
              Share or Ask Something to Everyone?
            </div>
            {/* Create Post Button */}
          </div>
          {/* Photo/Video Option */}
          <div className="flex justify-between items-center mt-3">
            <div className="flex items-center gap-2 text-gray-500 ">
              <MdOndemandVideo className="text-pink-500" />
              <span>Photo/Video</span>
            </div>
            <div>
              <CustomButton
                icon=""
                label="Create Post"
                onClick={() => alert("Launching! 🚀")}
              />
            </div>
          </div>
        </div>

        {/* Right Side: Categories */}
        <Categories />
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center lg:w-2/3">
        <div className="flex gap-2 py-2 ">
          <div>
            <CustomButton1
              icon={<BsFillFileEarmarkPostFill />}
              label="All Post"
              onClick={() => alert("Launching! 🚀")}
            />
          </div>
          <div>
            <CustomButton1
              icon={<FaUser />}
              label="My Post"
              onClick={() => alert("Launching! 🚀")}
            />
          </div>
          <div>
            <CustomButton1
              icon={<FaUserGroup />}
              label="Admin Post"
              onClick={() => alert("Launching! 🚀")}
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <CustomButton1
              icon={<CiSearch />}
              label="Search"
              onClick={() => alert("Launching! 🚀")}
            />
          </div>
          <div className="text-2xl cursor-pointer">
            <IoReload />
          </div>
        </div>
      </div>
      <div className="py-3">
        <CardComponent></CardComponent>
        <CardComponent></CardComponent>
        <CardComponent></CardComponent>
        <CardComponent></CardComponent>
        <CardComponent></CardComponent>
      </div>
    </CommonContainer>
  );
};

export default AllPost;
