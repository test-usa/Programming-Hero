import { FiEye } from "react-icons/fi";
import { IoEyeOffOutline } from "react-icons/io5";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userStore } from "../../store/UserStore";
import { loginSchema, TsigninSchema } from "../../types/Types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Spinner } from "@heroui/spinner";
const Login = () => {
  const navigate = useNavigate();
  const { loginUser, user } = userStore();
  const [showText, setShowText] = useState(false);


  console.log("useruseruser", user);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TsigninSchema>({ resolver: zodResolver(loginSchema) });

  const { mutate, isPending } = useMutation({
    mutationFn: loginUser,
    onSuccess: () => {
      navigate("/");
    },
  });
  const submitFormToSever = async (data: TsigninSchema) => {
    mutate(data);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full py-16 md:block">
      <h2 className="self-start py-5 bg-[linear-gradient(97.64deg,#eaaaff,#b5acff)] bg-clip-text text-transparent text-7xl">
        Login
      </h2>
      <div className="bg-[rgba(10,10,43,.75)] backdrop-blur text-white max-w-xl w-full rounded-3xl px-6 py-10">
        <div className="flex flex-col items-center justify-center w-full gap-4 max-auto">
          <div className="flex flex-col w-full gap-4">
            <input
              className="w-full p-4 bg-[#131237]  outline-none  rounded-lg border border-transparent  focus-within:border-[#405aff]"
              {...register("email")}
              type="email"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
            <div className="flex items-center  rounded-lg bg-[#131237] border border-transparent  focus-within:border-[#405aff]">
              <input
                className="w-full outline-none p-4 rounded-lg bg-[#131237]"
                {...register("password")}
                type={showText ? "text" : "password"}
                placeholder="Password"
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
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
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <label className="text-xs md:text-lg">Remember Me</label>
            </div>
            <button className="text-xs md:text-lg border-b bg-clip-text text-transparent border-[#405aff] bg-[linear-gradient(90deg,#384fde,#985cf0)]">
              Forgot Password
            </button>
          </div>
          <button
            onClick={handleSubmit(submitFormToSever)}
            className=" relative bg-clip-padding p-4  bg-[#080723] w-full before:absolute before:inset-0 before:bg-[linear-gradient(90deg,#384fde,#985cf0)] before:-m-[1px] before:rounded-lg before:-z-10 rounded-lg hover:bg-[linear-gradient(90deg,#384fde,#985cf0)] transition-all "
          >
            {isPending ? <Spinner color="warning" size="sm" /> : " Login"}
          </button>

          <div className="flex items-center gap-2">
            <p className="text-sm">New user?</p>
            <Link
              to="/signup"
              className=" text-[rgba(25,118,210)] cursor-pointer"
            >
              Register here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
