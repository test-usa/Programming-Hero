import { Checkbox } from "@heroui/react";
import CommonContainer from "../common/CommonContainer";
import { FiEye } from "react-icons/fi";
import { IoEyeOffOutline } from "react-icons/io5";
const LoginComponent = () => {
  return (
    <div className="py-20 bg-black">
      <CommonContainer>
        <h2 className="py-5 text-white text-7xl">Login</h2>
        <div className="bg-[rgba(10,10,43,.75)] backdrop-blur text-white max-w-xl  rounded-3xl p-6">
          <div className="w-full max-auto">
            <div className="flex flex-col w-full gap-4">
              <input
                className="w-full p-4 bg-[#131237] rounded-md outline-none"
                type="email"
                name=""
                placeholder="Email"
              />
              <input
                className="w-full p-4 rounded-md bg-[#131237]"
                type="password"
                name=""
                id=""
                placeholder="Password"
              />
            </div>
            <Checkbox defaultSelected color="primary">
              Primary
            </Checkbox>
            <button>Forgot Password</button>
            <button>Login</button>
            <div>
              <p>New user?</p>
              <p>Register here</p>
            </div>
          </div>
        </div>
      </CommonContainer>
    </div>
  );
};

export default LoginComponent;
