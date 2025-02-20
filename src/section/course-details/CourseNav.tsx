
import { VscBell } from "react-icons/vsc";

import gemIcon from "../../assets/images/gem.svg";
import logo from "../../assets/images/logo.svg";
import { RiMenu2Fill } from "react-icons/ri";

import { useEffect, useState } from "react";
import { Avatar } from "@heroui/react";
import { NavLink } from "react-router-dom";

const CourseNav = () => {

    const [menu, setMenu] = useState(false);
    type muneItems = {
        href: string;
        path: string;
      };
    
      const menuItems: muneItems[] = [
        {
          href: "/",
          path: "Conceptual Crackers",
        },
        {
          href: "/",
          path: "Course Details",
        },
        {
          href: "/",
          path: "Support",
        },
        {
          href: "/",
          path: "Blog",
        },
        {
          href: "/",
          path: "My Classes",
        },
      ];

      const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div  className={`sticky top-0 z-10 transition-all duration-300 ${
        isScrolled ? "bg-[rgba(249,247,243,0.5)]" : "bg-[#010313]"
      }`}>
          
    <div className="pt-3 font-Grotesk px-9">
      <div className="flex items-center justify-between w-full text-white">
        <div className="hidden lg:flex items-center">
          <img className="" src={logo} alt="logo" />
          <p className="hidden -ml-4 text-lg font-bold text-white md:block">
            Programming Hero
          </p>
        </div>
        <section className="flex items-center gap-x-3 lg:hidden">
          <Avatar
            src="https://i.pravatar.cc/150?u=a04258114e29026702d"
            className="border-2 rounded-full  animate-pulse border-purple-400"
          />
          <p>Hi, Kazi</p>
        </section>
        <div className="items-center  gap-6 text-sm flex">
          <span className="space-x-4 hidden lg:block">
            {menuItems.map((item) => {
              return <NavLink className="text-lg" to={item.href}>{item.path}</NavLink>;
            })}
          </span>
          <div className="flex items-center gap-x-5">
            <VscBell className="text-2xl" />
            <section className="bg-green-200 rounded-3xl px-4 py-1.5 flex items-center gap-x-2">
              <img src={gemIcon} className="w-6 h-6" />
              <p className="font-semibold text-black text-xl">115</p>
            </section>
            <span
              onClick={() => setMenu(true)}
              className="text-3xl cursor-pointer lg:hidden "
            >
              <RiMenu2Fill />
            </span>
            <button className="px-3 py-2 text-lg rounded-md hidden lg:block font-semibold text-white bg-custom-gradient hover:brightness-125">Enroll Now</button>
            <Avatar
              src="https://i.pravatar.cc/150?u=a04258114e29026702d"
              className="hidden lg:block"
            />
          </div>
        </div>
      </div>
    </div>
    

    </div>
   
  )
}


export default CourseNav 