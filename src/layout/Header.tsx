import logo from "../assets/images/logo.svg";
import CommonContainer from "../common/CommonContainer";
import { NavLink, useNavigate } from "react-router-dom";
import { RiMenu2Fill } from "react-icons/ri";
import { useState } from "react";
import MobileMenu from "../section/home/MobileMenu";
import { userStore } from "../store/UserStore";
const Header = () => {
  const [menu, setMenu] = useState(false);
  const { user, token, logOutUser } = userStore();
  const navigate = useNavigate();
  return (
    <CommonContainer>
      <div className=" font-Grotesk">
        <div className="flex items-center justify-between w-full text-white">
          <div className="flex items-center">
            <img className="" src={logo} alt="logo" />
            <p className="hidden -ml-4 text-lg font-bold text-white md:block">
              Programming Hero
            </p>
          </div>
          <div className="items-center hidden gap-8 text-xl lg:flex">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/success">Success</NavLink>
            <NavLink to="/mehedi">mehedi</NavLink>
            <NavLink to="/eitty">eitty</NavLink>
            <NavLink to="/himel/all-post">himel</NavLink>
            {token! ? (
              <button
                onClick={() => {
                  logOutUser();
                  navigate("/");
                }}
                className="bg-red-700 text-white rounded-md px-4 py-2"
              >
                Logout
              </button>
            ) : (
              <NavLink to="/login">login</NavLink>
            )}
          </div>

          <span
            onClick={() => setMenu(true)}
            className="text-3xl cursor-pointer lg:hidden "
          >
            <RiMenu2Fill />
          </span>
        </div>
      </div>
      {menu && <MobileMenu />}
    </CommonContainer>
  );
};

export default Header;
