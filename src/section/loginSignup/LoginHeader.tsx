import logo from "../../assets/images/logo.svg";
import { NavLink } from "react-router-dom";
import MobileMenu from "../home/MobileMenu";
const LoginHeader = () => {
  return (
    <div className=" font-Grotesk px-10">
      <div className="flex items-center justify-between w-full text-white">
        <div className="flex items-center">
          <img className="" src={logo} alt="logo" />
          <p className="hidden -ml-4 text-lg font-bold text-white md:block">
            Programming Hero
          </p>
        </div>
        <div className="items-center hidden gap-8 text-xl lg:flex font-Hind ">
          <NavLink to="/">Course Details</NavLink>
          <NavLink to="/about">About us</NavLink>
          <NavLink to="/blog">blog</NavLink>
          <NavLink to="/success">Success</NavLink>
          <NavLink
            to="/login"
            className="px-6 py-2 rounded-xl bg-custom-gradient"
          >
            Login
          </NavLink>
        </div>
        <MobileMenu />
      </div>
    </div>
  );
};

export default LoginHeader;
