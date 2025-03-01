
import CommonContainer from "../../../common/CommonContainer";
import SapceBottom from "../../../common/SapceBottom";
import OurCourseCard from "./OurCourseCard";
import OurCourseCardOpsite from "./OurCourseCardOpsite";
import triangle from "../../../assets/images/triangle.svg";
import square from "../../../assets/images/blue-square.svg";
import CourseVideo from "./CourseVideo";
import { useState } from "react";

const OurCourse = () => {
  const [isPlay, setIsPlay] = useState(false);

  return (
    <>
      <div className="relative py-20 bg-black">
        <CommonContainer>
          <SapceBottom>
            <div className="relative w-full ">
              <div className="flex items-center justify-center ">
                <h2 className="   relative text-center bg-[linear-gradient(97.64deg,#eaaaff,#b5acff)] bg-clip-text text-transparent md:text-7xl text-4xl after:absolute after:bg-text-gradient after:inset-0 after:h-2  after:w-[20%] after:mx-auto after:top-12 md:after:top-24">
                  Our Courses_
                </h2>
              </div>
              <div className="absolute right-0 hidden -top-10 lg:block ">
                <img src={triangle} alt="triangle" />
              </div>
            </div>
          </SapceBottom>
        </CommonContainer>
        <div className="bg-cover bg-bg-grid ">
          <SapceBottom>
            <OurCourseCard setIsPlay={setIsPlay} />
          </SapceBottom>
          <OurCourseCardOpsite setIsPlay={setIsPlay} />
        </div>

        <div className=" bottom-6">
          <img src={square} alt="triangle" />
        </div>
      </div>
      {isPlay && (
        <div className="fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center w-full h-full">
          <CourseVideo setIsPlay={setIsPlay} />
        </div>
      )}
    </>
  );
};

export default OurCourse;
