import { VscBell } from "react-icons/vsc";
import { RiMenu2Fill, RiCloseFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import { Avatar } from "@heroui/react";
import { NavLink } from "react-router-dom";
import gemIcon from "../../assets/images/gem.svg";
import logo from "../../assets/images/logo.svg";
import CustomModal from "../course-details/Modal";

const CourseNav = () => {
  const [menu, setMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const menuItems = [
    { href: "/", path: "Conceptual Crackers" },
    { href: "/", path: "Course Details" },
    { href: "/", path: "Support" },
    { href: "/", path: "Blog" },
    { href: "/", path: "My Classes" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 z-10 transition-all duration-300 ${
        isScrolled ? "bg-[rgba(249,247,243,0.5)]" : "bg-[#010313]"
      }`}
    >
      <div className="pt-3 font-Grotesk px-9">
        <div className="flex items-center justify-between w-full text-white">
          <div className="hidden lg:flex items-center">
            <img src={logo} alt="logo" />
            <p className="hidden -ml-4 text-lg font-bold md:block">
              Programming Hero
            </p>
          </div>

          <section className="flex items-center gap-x-3 lg:hidden">
            <Avatar
              src="https://i.pravatar.cc/150?u=a04258114e29026702d"
              className="border-2 rounded-full animate-pulse border-purple-400"
            />
            <p>Hi, Kazi</p>
          </section>

          <div className="items-center gap-6 text-sm flex">
            <span className="space-x-4 hidden lg:block">
              {menuItems.map((item) => (
                <NavLink key={item.path} className="text-base" to={item.href}>
                  {item.path}
                </NavLink>
              ))}
            </span>

            <div className="flex items-center gap-x-5">
              <VscBell className="text-2xl" />
              <section className="bg-green-200 rounded-3xl md:px-4 px-4 py-2 md:py-2 flex items-center justify-center gap-x-2">
                <img src={gemIcon} className="w-6 h-6" />
                <p className="font-semibold text-black md:text-xl text-lg">115</p>
              </section>

              <span
                onClick={() => setMenu(true)}
                className="text-3xl cursor-pointer lg:hidden"
              >
                <RiMenu2Fill />
              </span>

             

              <Avatar
                src="https://i.pravatar.cc/150?u=a04258114e29026702d"
                className="hidden lg:block"
              />
            </div>
          </div>
        </div>
      </div>

      {menu && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20" onClick={() => setMenu(false)}></div>
      )}

      <div
        className={`fixed top-0 right-0 p-4 w-64 rounded-lg bg-black text-white h-full  transform ${
          menu ? "translate-x-0  " : "translate-x-full"
        } transition-transform duration-300 z-30`}
      >
        <button
          className="absolute top-4 right-4 text-3xl text-white"
          onClick={() => setMenu(false)}
        >
          <RiCloseFill />
        </button>
        <nav className="mt-16 flex flex-col items-center space-y-6">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              className="text-lg font-semibold"
              to={item.href}
              onClick={() => setMenu(false)}
            >
              {item.path}
            </NavLink>
          ))}
        </nav>
      </div>

      <CustomModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default CourseNav;
