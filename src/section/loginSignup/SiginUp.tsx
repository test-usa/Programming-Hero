import { FiEye } from "react-icons/fi";
import { IoEyeOffOutline } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";
import bd from "../../assets/images/BD.svg";
const SignUp = () => {
  const [showText, setShowText] = useState(false);
  const [conshowText, setConShowText] = useState(false);
  return (
    <div className="w-full flex flex-col md:block items-center justify-center py-16">
      <h2 className=" self-start py-5 bg-[linear-gradient(97.64deg,#eaaaff,#b5acff)] bg-clip-text text-transparent text-7xl ">
        Sign Up
      </h2>
      <div className="bg-[rgba(10,10,43,.75)] backdrop-blur text-white max-w-xl w-full rounded-3xl px-6 py-10">
        <div className="w-full max-auto flex flex-col gap-4 justify-center items-center">
          <div className="flex flex-col w-full gap-4">
            <input
              className="w-full p-4 bg-[#131237]  outline-none  rounded-lg border border-transparent  focus-within:border-[#405aff]"
              type="text"
              name=""
              placeholder="Name"
            />
            <input
              className="w-full p-4 bg-[#131237]  outline-none  rounded-lg border border-transparent  focus-within:border-[#405aff]"
              type="email"
              name=""
              placeholder="Email"
            />
            <div className="flex items-center gap-4  p-4 rounded-lg bg-[#131237] border border-transparent  focus-within:border-[#405aff]">
              <div>
                <img className="w-8 h-8" src={bd} alt="" />
              </div>
              <input
                className="w-full bg-[#131237]  outline-none  "
                type="text"
                name=""
                placeholder="+880"
              />
            </div>

            <div className="flex items-center  p-4 rounded-lg bg-[#131237] border border-transparent  focus-within:border-[#405aff]">
              <input
                className="w-full outline-none  bg-[#131237]"
                type={conshowText ? "text" : "password"}
                name=""
                id=""
                placeholder="Password"
              />
              <span className="text-xl cursor-pointer">
                {conshowText ? (
                  <FiEye
                    onClick={() => {
                      setConShowText(false);
                    }}
                  />
                ) : (
                  <IoEyeOffOutline
                    onClick={() => {
                      setConShowText(true);
                    }}
                  />
                )}
              </span>
            </div>
            <div className="flex items-center  p-4 rounded-lg bg-[#131237] border border-transparent  focus-within:border-[#405aff]">
              <input
                className="w-full outline-none  bg-[#131237]"
                type={showText ? "text" : "password"}
                name=""
                id=""
                placeholder="Confirm Password"
              />
              <span className="text-xl cursor-pointer">
                {showText ? (
                  <FiEye
                    onClick={() => {
                      setShowText(false);
                    }}
                  />
                ) : (
                  <IoEyeOffOutline
                    onClick={() => {
                      setShowText(true);
                    }}
                  />
                )}
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <label htmlFor=" ">I agree to theterms and conditions</label>
            </div>
            {/* <button className=" border-b bg-clip-text text-transparent border-[#405aff] bg-[linear-gradient(90deg,#384fde,#985cf0)]">
                Forgot Password
              </button> */}
          </div>

          <button className=" relative bg-clip-padding p-4  bg-[#080723] w-full before:absolute before:inset-0 before:bg-[linear-gradient(90deg,#384fde,#985cf0)] before:-m-[1px] before:rounded-lg before:-z-10 rounded-lg hover:bg-[linear-gradient(90deg,#384fde,#985cf0)] transition-all ">
            Register
          </button>
          <div className="flex items-center gap-2">
            <p className="text-sm">Already have an account?</p>
            <Link
              to="/login"
              className=" text-[rgba(25,118,210)] cursor-pointer"
            >
              Login here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
