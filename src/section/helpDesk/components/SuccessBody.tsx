import React from "react";
import CommonContainer from "../../../common/CommonContainer";
import Filter from "./Filter";

const SuccessBody = () => {
  return (
    <div className="bg-[#0A081F] py-8">
      <CommonContainer>
        <div className="md:flex  justify-between items-center gap-4 ">
          <div className="md:w-1/2 w-full">
            <h2 className="text-white font-semibold font-rubik text-2xl">
              SuccessFull Students
            </h2>
            <p className="text-white/50 text-lg  text-start pt-5">
              আমাদের কোর্স থেকে শিখে যারা বিভিন্ন জায়গায় চাকরি/ইন্টার্ন পেয়েছে
              তাদের মধ্যে কয়েকজন এর প্রোফাইল নিচে দেয়া হলো ।
            </p>
          </div>
          <div className="py-5 md:w-1/2 w-full flex justify-end">
            <Filter />
          </div>
        </div>
      </CommonContainer>
    </div>
  );
};

export default SuccessBody;
