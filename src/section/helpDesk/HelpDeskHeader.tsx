import React, { useEffect, useState } from "react";
import CommonContainer from "../../common/CommonContainer";
import { IoMenu } from "react-icons/io5";
import { motion } from "framer-motion";
import { Button } from "@heroui/button";
import { Moon, Sun, X } from "lucide-react";
import { LiaToggleOffSolid } from "react-icons/lia";
import { PiUserCircle } from "react-icons/pi";
import { Link } from "react-router-dom";

const HelpDeskHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Toggle dark mode and update localStorage
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <CommonContainer>
      <div className="flex items-center justify-between">
        <div className="flex flex-col pt-3">
          <h1 className=" font-bold font-rubik text-2xl uppercase text-colorBase text-transparent bg-clip-text bg-gradient-to-r from-[#cb43c2] to-[#0f16f1]">
            <span className="whitespace-nowrap">help desk</span>
          </h1>
          <p className="text-xs font-light capitalize text-colorBase text-transparent bg-clip-text bg-gradient-to-r from-[#cb43c2] to-[#0f16f1]">
            By Programming-Hero
          </p>
        </div>

        {/* Menu Items for Large Screens */}
        <ul className="hidden lg:flex space-x-6 text-lg">
          <li className="p-2 hover:bg-gray-100 rounded">
            <Link to="/class">My Classes</Link>
          </li>
          <li className="p-2 hover:bg-gray-100 rounded">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="flex items-center space-x-2">
            <PiUserCircle className="text-3xl" />
            <p>Hi, Md</p>
          </li>
          <li>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full transition-all bg-gray-200 dark:bg-yellow-500"
            >
              {darkMode ? (
                <Sun size={20} className="text-white" />
              ) : (
                <Moon size={20} className="text-gray-900" />
              )}
            </button>
          </li>
        </ul>

        {/* Menu Button for Mobile Screens */}
        <div className="lg:hidden" onClick={() => setIsOpen(true)}>
          <IoMenu className="text-4xl cursor-pointer" />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ type: "spring", stiffness: 100 }}
        className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 p-4 lg:hidden dark:bg-black"
      >
        <div className="flex justify-between items-center border-b pb-2 ">
          <Button
            onClick={() => setIsOpen(false)}
            className="text-gray-600 dark:text-gray-100"
          >
            <X size={24} />
          </Button>
        </div>
        <ul className="mt-4 space-y-2 cursor-pointer">
          <li className="p-2 hover:bg-gray-100 rounded">
            <Link to="/">My Classes</Link>
          </li>
          <li className="p-2 hover:bg-gray-100 rounded">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="p-2 hover:bg-gray-100 rounded flex items-center">
            <PiUserCircle className="text-5xl" />
            <p className="pr-2">Hi, Md</p>
          </li>
          <li className="p-2 hover:bg-gray-100 rounded text-5xl">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full transition-all bg-gray-200 dark:bg-yellow-500"
            >
              {darkMode ? (
                <Sun size={20} className="text-white" />
              ) : (
                <Moon size={20} className="text-gray-900" />
              )}
            </button>
          </li>
        </ul>
      </motion.div>
    </CommonContainer>
  );
};

export default HelpDeskHeader;

//<LiaToggleOffSolid />
