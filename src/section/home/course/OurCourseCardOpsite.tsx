import pytn from "../../../assets/phitron-thumbnail.webp";
import { FaPlay } from "react-icons/fa6";

const OurCourseCardOpsite = ({ setIsPlay }) => {
  return (
    <div className="md:w-[75%] w-full mx-auto">
      <div className="items-center gap-5 md:flex">
        <div className="w-full p-5 text-right md:w-1/2">
          <h2 className="text-3xl text-[#3E6DF8] md:text-right text-center font-semibold">
            Start your programming journey in CSE Fundamental
          </h2>
          <p className="pt-4 text-lg text-left text-white md:text-right">
            Welcome to Phitron! This comprehensive program is designed to lay
            the foundation for your Computer Science and Engineering journey.
            Explore core concepts, problem solving, algorithms, data structures,
            cloud computing, and more. Get ready to build a solid understanding
            of CSE essentials with our expert-led instruction.
          </p>

          <button className="px-3 py-2 mt-5 text-lg rounded-md font-semibold text-white bg-gradient-to-r  from-[#628DF9] to-[#1958B8] hover:brightness-125">
            Explore
          </button>
          <button className=" ml-3 px-3 py-2 mt-5 text-lg rounded-md  text-[#295AE7] border border-[#295AE7] ">
            Curriculum
          </button>
        </div>

        <div className="md:w-1/2 w-full bg-gradient-to-r from-[#142E79] to-[#2750C6] p-5 rounded-lg relative">
          <div
            onClick={() => {
              setIsPlay(true);
            }}
            className="flex items-center justify-center h-64 bg-no-repeat rounded-lg cursor-pointer"
            style={{ backgroundImage: `url(${pytn})` }}
          >
            <div className="h-[50px] w-[50px] rounded-full bg-[#FF4B78] text-white flex justify-center items-center">
              <FaPlay />
            </div>
          </div>
          <h2 className="pt-5 text-2xl font-bold text-white">
            Complete Web Development
          </h2>
          <button className="px-3 py-2 mt-5 text-lg rounded-md font-semibold text-white bg-gradient-to-r  from-[#628DF9] to-[#1958B8]  hover:brightness-125">
            Let's Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurCourseCardOpsite;
