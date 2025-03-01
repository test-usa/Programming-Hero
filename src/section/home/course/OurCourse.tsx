
import CommonContainer from "../../../common/CommonContainer";
import SapceBottom from "../../../common/SapceBottom";
import OurCourseCard from "./OurCourseCard";
import OurCourseCardOpsite from "./OurCourseCardOpsite";
import triangle from "../../../assets/images/triangle.svg";
import square from "../../../assets/images/blue-square.svg";
import CourseVideo from "./CourseVideo";
import { useState } from "react";
import Border from "../Border";
import CommonSpace from "../../../common/CommonSpace";

const OurCourse = () => {
  const [isPlay, setIsPlay] = useState(false);

  return (
    <>
      <div className="relative px-5 bg-black">
        <CommonSpace>
          <CommonContainer>
            <div className="relative w-full ">
              <div className="flex flex-col items-center justify-center gap-4">
                <h2 className=" text-center bg-[linear-gradient(97.64deg,#eaaaff,#b5acff)] bg-clip-text text-transparent md:text-7xl text-4xl">
                  Our Courses_
                </h2>
                <Border />
              </div>

              <div className="absolute right-0 hidden -top-10 lg:block ">
                <img src={triangle} alt="triangle" />
              </div>
            </div>
          </CommonContainer>
          <div className="bg-cover bg-bg-grid ">
            <SapceBottom>
              <OurCourseCard setIsPlay={setIsPlay} />
            </SapceBottom>
            <OurCourseCardOpsite setIsPlay={setIsPlay} />
          </div>

          <div className="hidden lg:block bottom-6">
            <img src={square} alt="triangle" />
          </div>
        </CommonSpace>
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
