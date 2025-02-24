import { useState } from "react";
import pytn from "../../../assets/phitron-thumbnail.webp"
import { FaPlay } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

const OurCourseCardOpsite = () => {

     const [isVideoPlayingOp, setIsVideoPlayingOp] = useState(false);
    
      const handlePlayClickOp = () => {
        setIsVideoPlayingOp(true);
      };
      const handleCloseClickOp = (e) => {
        e.stopPropagation();
        setIsVideoPlayingOp(false);
      };
  return (
    <div className="md:w-[75%] w-full mx-auto">
    <div className=" md:flex gap-5 items-center ">
      <div className="md:w-1/2 w-full p-5 text-right">
        <h2 className="text-3xl text-[#3E6DF8] text-right font-semibold">Start your programming journey in CSE Fundamental</h2>
        <p className="text-white text-lg pt-4 text-right">Welcome to Phitron! This comprehensive program is designed to lay the foundation for your Computer Science and Engineering journey. Explore core concepts, problem solving, algorithms, data structures, cloud computing, and more. Get ready to build a solid understanding of CSE essentials with our expert-led instruction.</p>

     
        <button className="px-3 py-2 mt-5 text-lg rounded-md font-semibold text-white bg-gradient-to-r  from-[#628DF9] to-[#1958B8] hover:brightness-125">Explore</button> 
           <button className=" ml-3 px-3 py-2 mt-5 text-lg rounded-md  text-[#295AE7] border border-[#295AE7] ">Curriculum</button>
        
      </div>

      <div className="md:w-1/2 w-full bg-gradient-to-r from-[#142E79] to-[#2750C6] p-5 rounded-lg relative">
          <div
            className="rounded-lg h-64  bg-no-repeat flex justify-center items-center cursor-pointer"
            style={{ backgroundImage: `url(${pytn})` }}
            onClick={handlePlayClickOp}
          >
            {!isVideoPlayingOp && (
              <div className="h-[50px] w-[50px] rounded-full bg-[#FF4B78] text-white flex justify-center items-center">
                <FaPlay />
              </div>
            )}
            {isVideoPlayingOp && (
                <>
              
         <iframe width="560" height="315" src="https://www.youtube.com/embed/-pUYbz0v70c?si=2Keet-7EAFUETRmz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
         <div className="absolute top-[10px] right-[10px] cursor-pointer z-20"
                  onClick={handleCloseClickOp}
                >
                  <FaTimes className="text-white text-lg" />
                </div>
         </>
            )}
          
          </div>
          <h2 className="text-2xl text-white font-bold pt-5">Complete Web Development</h2>
          <button className="px-3 py-2 mt-5 text-lg rounded-md font-semibold text-white bg-gradient-to-r  from-[#628DF9] to-[#1958B8]  hover:brightness-125"
    
              >Let's Code</button>
        </div>
    </div>
  </div>
  )
}

export default OurCourseCardOpsite
