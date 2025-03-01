import webImg from "../../../assets/web-thumbnail.webp";
import { FaPlay } from "react-icons/fa";

const OurCourseCard = ({ setIsPlay }) => {
  return (
    <div className="md:w-[75%] w-full mx-auto pt-16">
      <div className="items-center gap-5 md:flex">
        <div className="md:w-1/2 w-full bg-gradient-to-r from-[#3F1974] to-[#73279D] p-5 rounded-lg relative">
          <div
            onClick={() => {
              setIsPlay(true);
            }}
            className="flex items-center justify-center h-64 bg-no-repeat rounded-lg cursor-pointer"
            style={{ backgroundImage: `url(${webImg})` }}
          >
            <div className="h-[50px] w-[50px] rounded-full bg-[#FF4B78] text-white flex justify-center items-center">
              <FaPlay />
            </div>
          </div>
          <h2 className="pt-5 text-2xl font-bold text-white">
            Complete Web Development
          </h2>
          <button className="px-3 py-2 mt-5 text-lg font-semibold text-white rounded-md bg-custom-gradient hover:brightness-125">
            Let's Code
          </button>
        </div>
        <div className="w-full p-5 md:w-1/2">
          <h2 className="text-3xl text-[#C61BE4] font-semibold">
            Kickstart your journey in Web Development
          </h2>
          <p className="pt-4 text-lg text-white">
            Welcome to Programming Hero! Dive into the world of modern web
            development with a focus on MERN stack - MongoDB, Express.js, React,
            and Node.js course from the beginning of your journey until you get
            an internship or a full-time job.
          </p>
          <button className="px-3 py-2 mt-5 text-lg font-semibold text-white rounded-md bg-custom-gradient hover:brightness-125">
            Explore
          </button>
          <button className=" ml-3 px-3 py-2 mt-5 text-lg rounded-md  text-[#C61BE4] border border-[#C61BE4] ">
            Success
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurCourseCard;
