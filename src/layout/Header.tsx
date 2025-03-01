import logo from "../assets/images/logo.svg";
import CommonContainer from "../common/CommonContainer";
import { NavLink } from "react-router-dom";
import MobileMenu from "../section/home/MobileMenu";
import { userStore } from "../store/UserStore";
const Header = () => {
  const { user, logOutUser } = userStore();
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
            <NavLink to="/student-analytics">Student Analytics</NavLink>
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
      </div>
    </CommonContainer>
  );
};

export default Header;
