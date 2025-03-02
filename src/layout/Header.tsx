import logo from "../assets/images/logo.svg";
import CommonContainer from "../common/CommonContainer";
import { NavLink } from "react-router-dom";
import MobileMenu from "../section/home/MobileMenu";
import { userStore } from "../store/UserStore";
import { useEffect, useState } from "react";
const Header = () => {
  const { user, logOutUser } = userStore();
  const [stricky, setStricky] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setStricky(window.scrollY > 250);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <div
      className={
        stricky
          ? "fixed shadow-2xl z-50 w-full  backdrop-blur-md  bg-black/30"
          : ""
      }
    >
      <CommonContainer>
        <div className="flex items-center justify-between w-full text-white">
          <div className="flex items-center">
            <img className="" src={logo} alt="logo" />
            <p className="hidden -ml-4 text-lg font-bold text-white md:block">
              Programming Hero
            </p>
          </div>
          <div className="items-center hidden gap-8 text-xl lg:flex">
            <NavLink to="/">Home</NavLink>
            <div
              onClick={() => {
                setDropdown((pre) => !pre);
              }}
              className="relative cursor-pointer "
            >
              Products
              {dropdown && (
                <div className="absolute flex flex-col gap-2 p-4 rounded-md top-12 bg-[rgba(142,21,255,0.50)]  backdrop-blur-sm  w-[200px] text-sm">
                  <NavLink className="" to="/course">
                    Web Course
                  </NavLink>
                  <NavLink className="" to="/">
                    Progamming Course
                  </NavLink>
                </div>
              )}
            </div>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/success">Success</NavLink>
            <NavLink to="/blog">Blog</NavLink>

            {user && <NavLink to="/dashboard">Dashboard</NavLink>}

            {user ? (
              <button
                onClick={() => {
                  logOutUser();
                }}
                className="px-6 py-2 rounded-xl bg-custom-gradient "
              >
                Logout
              </button>
            ) : (
              <NavLink
                to="/login"
                className="px-6 py-2 rounded-xl bg-custom-gradient"
              >
                Login
              </NavLink>
            )}
          </div>

          <MobileMenu />
        </div>
      </CommonContainer>
    </div>
  );
};

export default Header;
