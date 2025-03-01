import React from "react";
import CommonContainer from "../../../common/CommonContainer";
import Filter from "./Filter";

const SuccessBody = () => {
  return (
    <div className="bg-[#0A081F] py-8">
      <CommonContainer>
        <div className="flex flex-col w-full items-center justify-start md:flex-row md:items-center md:justify-between">
          <div className="w-1/2">
            <h2 className="text-white font-semibold font-rubik text-2xl">
              SuccessFull Students
            </h2>
            <p className="text-white/50 text-lg  text-start leading-7 pt-5">
              আমাদের কোর্স থেকে শিখে যারা বিভিন্ন জায়গায় চাকরি/ইন্টার্ন পেয়েছে
              তাদের মধ্যে কয়েকজন এর প্রোফাইল নিচে দেয়া হলো ।
            </p>
          </div>
          <div className="py-5">
            <Filter />
          </div>
        </div>
      </CommonContainer>
    </div>
  );
};

export default SuccessBody;
