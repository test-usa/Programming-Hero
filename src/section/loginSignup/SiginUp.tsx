import { FiEye } from "react-icons/fi";
import { IoEyeOffOutline } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";
import bd from "../../assets/images/BD.svg";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, TsignupSchema } from "../../types/Types";
import { userStore } from "../../store/UserStore";

const SignUp = () => {
  const { user, signup_user } = userStore();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TsignupSchema>({ resolver: zodResolver(signupSchema) });

  const [showText, setShowText] = useState(false);
  const [conshowText, setConShowText] = useState(false);

  const submitFormToSever = async (data: TsignupSchema) => {
    signup_user(data);
  };

  return (
    <div className="w-full flex flex-col md:block items-center justify-center py-16">
      <h2 className=" self-start py-5 bg-[linear-gradient(97.64deg,#eaaaff,#b5acff)] bg-clip-text text-transparent text-7xl ">
        Sign Up
      </h2>
      <form className="bg-[rgba(10,10,43,.75)] backdrop-blur text-white max-w-xl w-full rounded-3xl px-6 py-10">
        <div className="w-full max-auto flex flex-col gap-4 justify-center items-center">
          <div className="flex flex-col w-full gap-4">
            <input
              {...register("name")}
              className="w-full p-4 bg-[#131237]  outline-none  rounded-lg border border-transparent  focus-within:border-[#405aff]"
              type="text"
              placeholder="Name"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
            <input
              {...register("email")}
              className="w-full p-4 bg-[#131237]  outline-none  rounded-lg border border-transparent  focus-within:border-[#405aff]"
              type="email"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
            <div className="flex items-center gap-1   rounded-lg bg-[#131237] border border-transparent  focus-within:border-[#405aff]">
              <div className="">
                <img className="w-10 h-10 mx-auto" src={bd} alt="" />
              </div>
              <input
                {...register("phone")}
                className="w-full p-4  bg-[#131237]  outline-none rounded-r-lg  "
                type="text"
                placeholder="+880"
              />
              {errors.phone && (
                <p className="text-red-500">{errors.phone.message}</p>
              )}
            </div>
            <div className="flex items-center  rounded-lg bg-[#131237] border border-transparent  focus-within:border-[#405aff]">
              <input
                {...register("password")}
                className="w-full outline-none  bg-[#131237] p-4 rounded-lg"
                type={conshowText ? "text" : "password"}
                placeholder="Password"
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
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
                {...register("confirmPassword")}
                className="w-full outline-none bg-[#131237]"
                type={showText ? "text" : "password"}
                placeholder="Confirm Password"
              />
              {errors.confirmPassword && (
                <p className="text-red-500">{errors.confirmPassword.message}</p>
              )}
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
          <div className="flex w-full justify-start gap-2">
            <input type="checkbox" />
            <label htmlFor=" ">I agree to theterms and conditions</label>
          </div>

          <button
            disabled={isSubmitting}
            onClick={handleSubmit(submitFormToSever)}
            className=" relative bg-clip-padding p-4  bg-[#080723] w-full before:absolute before:inset-0 before:bg-[linear-gradient(90deg,#384fde,#985cf0)] before:-m-[1px] before:rounded-lg before:-z-10 rounded-lg hover:bg-[linear-gradient(90deg,#384fde,#985cf0)] transition-all  disabled:cursor-wait"
          >
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
      </form>
    </div>
  );
};

export default SignUp;
