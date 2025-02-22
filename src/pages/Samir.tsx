import { Link, Outlet } from "react-router-dom";
import CommonContainer from "../common/CommonContainer";
import DashNavbar from "../components/dashboard/DashNavbar";
import Footer from "../layout/Footer";

const Samir = () => {
  return (
    <main className="bg-[#010313] w-full">
      <DashNavbar />
      <CommonContainer>
        <section className=" mx-auto grid grid-cols-4 gap-7 mt-5 ">
          <div className="col-span-1 bg-[#170f21] h-[80vh] rounded-xl p-4">
            <div className="flex flex-col items-center w-full">
              <div className="w-full flex justify-end">
                <img src="/photo/info.svg" />
              </div>
              <div className="relative rounded-full w-[100px] h-[100px] p-[5px] bg-gradient-to-r from-[#00fdb3] to-[#065ed9] ">
                <div className="rounded-full w-full h-full bg-white ">
                  <img
                    src="/photo/copyright.png"
                    className="rounded-full object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="w-full flex flex-col gap-1 text-[#9E92AC] font-semibold">
                <h1 className="text-[#e2aaff] font-bold mt-4 text-center w-full text-lg">
                  Unknown User
                </h1>
                <h1 className="text-center">WEB9-0906</h1>
                <h1 className="text-center">shabusiness035@gmail.com</h1>
                <h1 className="text-center">+8801311297872</h1>
              </div>
            </div>
            <div className="flex flex-col items-center mt-5 w-full">
              <div className="flex items-center justify-center text-[#CF40F4]">
                <Link to="/profile">My Profile</Link>
              </div>
            </div>
          </div>
          <div className="col-span-3 bg-[#170f21] h-[80vh] rounded-xl">
            <Outlet />
          </div>
        </section>
      </CommonContainer>
      <Footer />
    </main>
  );
};

export default Samir;
