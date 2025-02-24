import { useState } from "react";
import webImg from "../../../assets/web-thumbnail.webp";
import { FaPlay, FaTimes } from "react-icons/fa";

const OurCourseCard = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsVideoPlaying(true);
  };
  const handleCloseClick = (e) => {
    e.stopPropagation();
    setIsVideoPlaying(false);
  };

  return (
    <div className="md:w-[75%] w-full mx-auto">
      <div className=" md:flex gap-5 items-center ">
        <div className="md:w-1/2 w-full bg-gradient-to-r from-[#3F1974] to-[#73279D] p-5 rounded-lg relative">
          <div
            className="rounded-lg h-64  bg-no-repeat flex justify-center items-center cursor-pointer"
            style={{ backgroundImage: `url(${webImg})` }}
            onClick={handlePlayClick}
          >
            {!isVideoPlaying && (
              <div className="h-[50px] w-[50px] rounded-full bg-[#FF4B78] text-white flex justify-center items-center">
                <FaPlay />
              </div>
            )}
            {isVideoPlaying && (
                <>
              
         <iframe width="560" height="315" src="https://www.youtube.com/embed/-pUYbz0v70c?si=2Keet-7EAFUETRmz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
         <div className="absolute top-[10px] right-[10px] cursor-pointer z-20"
                  onClick={handleCloseClick}
                >
                  <FaTimes className="text-white text-lg" />
                </div>
         </>
            )}
          
          </div>
          <h2 className="text-2xl text-white font-bold pt-5">Complete Web Development</h2>
          <button className="px-3 py-2 mt-5 text-lg rounded-md font-semibold text-white bg-custom-gradient hover:brightness-125"
    
              >Let's Code</button>
        </div>
        <div className="md:w-1/2 w-full p-5">
          <h2 className="text-3xl text-[#C61BE4] font-semibold">Kickstart your journey in Web Development</h2>
          <p className="text-white text-lg pt-4">Welcome to Programming Hero! Dive into the world of modern web development with a focus on MERN stack - MongoDB, Express.js, React, and Node.js course from the beginning of your journey until you get an internship or a full-time job.</p>

       
          <button className="px-3 py-2 mt-5 text-lg rounded-md font-semibold text-white bg-custom-gradient hover:brightness-125">Explore</button>    <button className=" ml-3 px-3 py-2 mt-5 text-lg rounded-md  text-[#C61BE4] border border-[#C61BE4] ">Success</button>
          
        </div>
      </div>
    </div>
  );
};

export default OurCourseCard;
