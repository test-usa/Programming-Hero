import React, { useState } from "react";
import CommonContainer from "../../../common/CommonContainer";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { FaRoad } from "react-icons/fa6";
import { GoRocket } from "react-icons/go";
import { CiViewList } from "react-icons/ci";
import { Link } from "react-router-dom";

const HelpDeskCategory = () => {
  const [activeCategory, setActiveCategory] = useState("all-post");

  return (
    <CommonContainer>
      <div className="md:flex gap-5 mt-5 cursor-pointer border border-gray-300 p-2 text-2xl rounded">
        {[
          {
            name: "all-post",
            label: "All Post",
            icon: BsFillFileEarmarkPostFill,
          },
          { name: "roadmap", label: "Roadmap", icon: FaRoad },
          { name: "release-log", label: "Release log", icon: GoRocket },
          {
            name: "feature-request",
            label: "Feature Request",
            icon: CiViewList,
          },
        ].map((item) => {
          const isActive = activeCategory === item.name;
          return (
            <div
              key={item.name}
              onClick={() => setActiveCategory(item.name)}
              className={`flex items-center gap-2 p-2 rounded transition ${
                isActive ? " text-white" : "text-gray-700"
              }`}
            >
              <span
                className={`text-2xl transition ${
                  isActive ? "text-[#E352DE]" : "text-gray-700"
                }`}
              >
                <item.icon />
              </span>
              <Link
                to={item.name}
                className={`transition ${
                  isActive
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-[#cb43c2] to-[#0f16f1]"
                    : "text-gray-700"
                }`}
              >
                {item.label}
              </Link>
            </div>
          );
        })}
      </div>
    </CommonContainer>
  );
};

export default HelpDeskCategory;
