import React, { useState } from "react";
import CommonContainer from "../../../common/CommonContainer";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { FaRoad } from "react-icons/fa";
import { GoRocket } from "react-icons/go";
import { CiViewList } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";
import Roadmap from "./Roadmap";
import ReleaseLog from "./ReleaseLog";
import FeatureRequest from "./FeatureRequest";
import AllPost from "./AllPost";

// Define your roadmapItems array here

const tabs = [
  { name: "all-post", label: "All Posts", icon: BsFillFileEarmarkPostFill },
  { name: "roadmap", label: "Roadmap", icon: FaRoad },
  { name: "release-log", label: "Release Log", icon: GoRocket },
  { name: "feature-request", label: "Feature Request", icon: CiViewList },
];

const HelpDeskCategory = () => {
  const location = useLocation(); // Get the current route

  return (
    <CommonContainer>
      <div className="flex border-b border-gray-300 w-full overflow-x-auto py-5 gap-4">
        {tabs.map((tab) => {
          const isActive = location.pathname.includes(tab.name);

          return (
            <div key={tab.name} className="flex items-center gap-2">
              <tab.icon
                className={`text-lg ${
                  isActive
                    ? "border-[#cb43c2] text-[#cb43c2] font-semibold"
                    : "border-transparent text-gray-600"
                }`}
              />
              <Link to={tab.name}>
                <button
                  className={`px-1 text-lg py-2 rounded transition-colors duration-300 ${
                    isActive
                      ? "border-[#cb43c2] text-[#cb43c2] font-semibold"
                      : "border-transparent text-gray-600"
                  }`}
                >
                  {tab.label}
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </CommonContainer>
  );
};

export default HelpDeskCategory;

// {activeTab === "all-post" && (
//   <Link to={"all-post"}>
//     <AllPost />
//   </Link>
// )}
// {activeTab === "roadmap" && (
//   <Link to={"/roadmap"}>
//     <Roadmap roadmapItems={roadmapItems} />
//   </Link>
// )}
// {activeTab === "/release-log" && (
//   <Link to={"release-log"}>
//     <ReleaseLog />
//   </Link>
// )}
// {activeTab === "/feature-request" && (
//   <Link to={"feature-request"}>
//     <FeatureRequest />
//   </Link>
// )}

// onClick={() => setActiveTab(tab.name)}
// className={`flex items-center gap-2 px-4 py-3 cursor-pointer border-b-2 transition ${
//   isActive
//     ? "border-[#cb43c2] text-[#cb43c2] font-semibold"
//     : "border-transparent text-gray-600"
// } hover:text-[#cb43c2]`}
