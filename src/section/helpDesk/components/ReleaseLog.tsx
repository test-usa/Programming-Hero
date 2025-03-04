import React from "react";
import CommonContainer from "../../../common/CommonContainer";
import Categories from "./Categories";

const ReleaseNote = () => {
  return (
    <CommonContainer>
      <div className="flex flex-col-reverse lg:flex-row gap-6 w-full py-4">
        <div className="w-full mx-auto bg-white shadow-md rounded-lg dark:bg-[#16152E]">
          {/* Release Note Header */}
          <h1 className="font-bold font-rubik text-3xl text-center py-9 uppercase text-colorBase text-transparent bg-clip-text bg-gradient-to-r from-[#cb43c2] to-[#0f16f1] dark:bg-[#16152E]">
            Release Note : Feb 24, 2025
          </h1>
          <div className="dark:bg-[#12091E] px-6 pt-5">
            {/* Title */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold flex items-center">
                <span role="img" aria-label="wrench">
                  🛠️
                </span>
                <span className="ml-2 dark:text-gray-400">
                  Bug Fix Release – Phitron Mini Bootcamp Fixes! 🚀 - v1.3.1
                </span>
              </h3>
              <p className="text-gray-500 text-sm dark:text-gray-400">
                Phitron • February 24, 2025
              </p>
            </div>

            {/* Fix Section */}
            <p className="mt-2 font-semibold dark:text-gray-100">
              Fixed{" "}
              <span className="text-gray-600 dark:text-gray-400">
                for Website
              </span>
            </p>

            {/* Status Badge */}
            <span className="inline-block bg-purple-600 text-white text-xs px-3 py-1 rounded-full mt-2">
              Published
            </span>

            {/* Description */}
            <p className="mt-4 text-gray-700 dark:text-gray-400">
              We've rolled out important fixes to enhance the{" "}
              <strong>Phitron Mini Bootcamp</strong> experience.
            </p>

            {/* What's Fixed List */}
            <div className="mt-4">
              <h4 className="font-semibold flex items-center">
                <span role="img" aria-label="bug">
                  🔧
                </span>
                <span className="ml-2 dark:text-gray-400">
                  What’s Fixed in v1.3.1?
                </span>
              </h4>
              <ul className="mt-2 space-y-2 dark:text-gray-400">
                <li className="flex items-start text-sm">
                  <span className="mr-2">✅</span>
                  <strong>Countdown Timer & Responsive Issues Fixed</strong> –
                  Ensuring a smooth UI experience.
                </li>
                <li className="flex items-start text-sm">
                  <span className="mr-2">✅</span>
                  <strong>Registration Status Fix</strong> – "Already
                  Registered" button now displays correctly.
                </li>
                <li className="flex items-start text-sm">
                  <span className="mr-2">✅</span>
                  <strong>Admin Panel Fix</strong> – Resolved duplicate card
                  issue on the list page.
                </li>
                <li className="flex items-start text-sm">
                  <span className="mr-2">✅</span>
                  <strong>UI Improvement</strong> – Removed unnecessary heading
                  text on the list page.
                </li>
                <li className="flex items-start text-sm">
                  <span className="mr-2">✅</span>
                  <strong>Date Format Update</strong> – "MiniCamp Date" now
                  displays correctly.
                </li>
              </ul>
            </div>

            {/* Continue Reading */}
            <p className="text-center text-gray-500 mt-4 cursor-pointer hover:underline">
              Continue reading
            </p>
          </div>
        </div>
        <Categories />
      </div>
    </CommonContainer>
  );
};

export default ReleaseNote;
