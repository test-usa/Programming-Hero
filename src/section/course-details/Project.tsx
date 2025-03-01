import CommonContainer from "../../common/CommonContainer";
import videoImg from "../../assets/course details/video-player.svg";
import bulbImg from "../../assets/course details/bulb.svg";
import codeImg from "../../assets/course details/code.svg";
import { useState } from "react";
import Step from "./Step";

const Project = () => {
  const [isExpandedV, setIsExpandedV] = useState(false);
  const [isExpandedB, setIsExpandedB] = useState(false);
  const [isExpandedP, setIsExpandedP] = useState(false);

  const toggleTextV = () => setIsExpandedV(!isExpandedV);
  const toggleTextB = () => setIsExpandedB(!isExpandedB);
  const toggleTextP = () => setIsExpandedP(!isExpandedP);

  return (
    <div className="bg-gradient-to-b from-[#241031] to-[#040416] p-2 ">
      <CommonContainer>
        <div className="md:flex gap-4  p-7">
          {/* 950+ Videos Section */}
          <div
            className={`md:w-[32%] w-full bg-[#2D123C] p-5 pr-10 rounded-lg border-[1px] border-t-[#8B348E] border-x-[#8B348E] border-b-0 transition-all duration-300 mt-3 md:mt-0 ${isExpandedV ? "h-auto" : " md:h-[250px] h-[350px] overflow-hidden"
              }`}
          >
            <img src={videoImg} alt="Video " />
            <h2 className="text-[#D149D9] md:text-3xl text-xl font-semibold mt-3">950+ Videos</h2>
            <p className="text-white/50 text-base mt-3 leading-6">
              {isExpandedV
                ? "The Programming Hero web development course includes 950 videos, providing extensive coverage of MERN stack technologies. These videos are designed to cater to learners at all levels, from beginners to advanced developers. Each video is structured to explain concepts clearly and concisely, ensuring that students grasp both fundamental and complex topics effectively."
                : "The Programming Hero web development course includes 950 videos, providing extensive coverage of MERN stack..."}
            </p>
            <button onClick={toggleTextV} className="text-[#DF8C4D] focus:outline-none text-lg">
              {isExpandedV ? "Read Less" : "Read More"}
            </button>
          </div>

          {/* 45+ Projects Section */}
          <div
            className={`md:w-[32%] mt-3 md:mt-0 w-full bg-[#31172A] p-5 pr-10 rounded-lg border-[1px] border-t-[#FAA157] border-x-[#FAA157] border-b-0 transition-all duration-300 ${isExpandedB ? "h-auto" : "md:h-[250px] h-[400px] overflow-hidden"
              }`}
          >
            <img src={bulbImg} alt=" bulb" />
            <h2 className="text-[#FAA157] md:text-3xl text-xl font-semibold mt-3">45+ Projects</h2>
            <p className="text-white/50 text-base mt-3 leading-6">
              {isExpandedB
                ? "The course includes 45 projects that give students many chances to practice what they learn. These projects start with simple tasks and gradually become more complex, helping students build their skills step by step. This approach ensures that as students learn more, they are able to handle more difficult challenges, making their learning experience smooth and effective."
                : "The course includes 45 projects that give students many chances to practice what they learn. These projects..."}
            </p>
            <button onClick={toggleTextB} className="text-[#DF8C4D] focus:outline-none text-lg">
              {isExpandedB ? "Read Less" : "Read More"}
            </button>
          </div>

          {/* 10+ Assignments Section */}
          <div
            className={`md:w-[32%] mt-3 md:mt-0 w-full bg-[#211D30] p-5 pr-10 rounded-lg border-[1px] border-t-[#35AC6D] border-x-[#35AC6D] border-b-0 transition-all duration-300 ${isExpandedP ? "h-auto" : "md:h-[250px] h-[400px] overflow-hidden"
              }`}
          >
            <img src={codeImg} alt="code" />
            <h2 className="text-[#35AC6D] md:text-3xl text-xl font-semibold mt-3">10+ Assignments</h2>
            <p className="text-white/50 text-base mt-3 leading-6">
              {isExpandedP
                ? "The course includes 45 projects that give students many chances to practice what they learn. These projects start with simple tasks and gradually become more complex, helping students build their skills step by step. This approach ensures that as students learn more, they are able to handle more difficult challenges, making their learning experience smooth and effective."
                : "The course includes 45 projects that give students many chances to practice what they learn. These projects..."}
            </p>
            <button onClick={toggleTextP} className="text-[#DF8C4D] focus:outline-none text-lg">
              {isExpandedP ? "Read Less" : "Read More"}
            </button>
          </div>

        </div>
        <hr className="mt-5 border-white/40  w-[85%] mx-auto" />
        <Step />
      </CommonContainer>
    </div>
  );
};

export default Project;