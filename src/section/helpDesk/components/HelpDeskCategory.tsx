import React, { useState } from "react";
import CommonContainer from "../../../common/CommonContainer";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { FaRoad } from "react-icons/fa6";
import { GoRocket } from "react-icons/go";
import { CiViewList } from "react-icons/ci";
import { Link } from "react-router-dom";
import Roadmap from "./Roadmap";
import ReleaseLog from "./ReleaseLog";
import FeatureRequest from "./FeatureRequest";
import AllPost from "./AllPost";

const tabs = [
  { name: "all-post", label: "All Posts", icon: BsFillFileEarmarkPostFill },
  { name: "roadmap", label: "Roadmap", icon: FaRoad },
  { name: "release-log", label: "Release Log", icon: GoRocket },
  { name: "feature-request", label: "Feature Request", icon: CiViewList },
];

const HelpDeskCategory = () => {
  const [activeTab, setActiveTab] = useState("all-post");

  return (
    <CommonContainer>
      <div className="flex border-b border-gray-300 w-full overflow-x-auto">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.name;
          return (
            <div
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`flex items-center gap-2 px-4 py-3 cursor-pointer border-b-2 transition ${
                isActive
                  ? "border-[#cb43c2] text-[#cb43c2] font-semibold"
                  : "border-transparent text-gray-600"
              } hover:text-[#cb43c2]`}
            >
              <tab.icon className="text-lg" />
              {/* <Link to={tab.name}>{tab.label}</Link> */}
              <p>{tab.label}</p>
            </div>
          );
        })}
      </div>
      <div className="mt-4 p-4 border border-gray-200 rounded-lg shadow-sm bg-white">
        {activeTab === "all-post" && (
          <div>
            <AllPost />
          </div>
        )}
        {activeTab === "roadmap" && <div></div>}
        {activeTab === "release-log" && (
          <div>
            <ReleaseLog />
          </div>
        )}
        {activeTab === "feature-request" && (
          <div>
            <FeatureRequest />
          </div>
        )}
      </div>
    </CommonContainer>
  );
};

export default HelpDeskCategory;
