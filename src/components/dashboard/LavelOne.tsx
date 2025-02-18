import CommonContainer from "../../common/CommonContainer";
import Tabs from "./Tabs";
import startCourse from "/photo/batch9.jpg";
import secondImage from "/photo/recomended.png";
import { Progress } from "../../components/ui/progress";
import { Button } from "../../components/ui/button";
import { useState } from "react";

const LavelOne = () => {
  const name: string = "Kazi Mehedi Hasan";
  const [value, setValue] = useState<number>();
  return (
    <CommonContainer>
      <div>
        <h1 className="text-2xl font-semibold">
          Welcome back {name}, ready for your next lesson?
        </h1>
        <Tabs />
        {/* START COURSE SECTION  START*/}
        <div className="bg-[#181024] w-full rounded-lg mt-10">
          {/* FIRST CARD START */}
          <div className="md:flex w-full space-y-4 md:space-y-4  gap-8 py-10 px-8">
            <div>
              <img
                src={startCourse}
                alt="course-starting-image"
                className="w-full h-60 rounded-2xl md:object-cover object-contain  "
              />
            </div>
            <div>
              <h1 className="text-[#AE34E4] text-3xl font-semibold">
                Complete Web Development Course With Jhankar Mahbub
              </h1>
              <p className="text-sm font-semibold text-white py-2">
                ঝংকার মাহবুব
              </p>
              <div className="w-full py-3">
                <Progress value={value} className="w-[100%] h-2" />
              </div>
              <section className="flex items-center gap-x-4 pt-4">
                <Button className="rounded-3xl w-36 bg-[#6F0FEB] hover:bg-[#823cdf]">
                  Course Start
                </Button>
                <Button
                  variant="secondary"
                  className="rounded-3xl w-36 bg-gray-700 hover:bg-gray-700 text-gray-300"
                >
                  Course Start
                </Button>
              </section>
            </div>
          </div>
          {/* SECOND CARD START */}

          {/* SECOND CARD START  */}
          <div className="md:flex w-full space-y-4 md:space-y-4  gap-8 py-10 px-8">
            <div>
              <img
                src={secondImage}
                alt="course-starting-image"
                className="w-full h-60 rounded-2xl md:object-cover object-contain "
              />
            </div>
            <div>
              <h1 className="text-[#AE34E4] text-3xl font-semibold">
                Recommended for Complete Web Development Course
              </h1>
              <p className="text-sm font-semibold text-white py-2">
                Programming Hero
              </p>
              <div className="w-full py-3">
                <Progress value={value} className="w-[100%] h-2" />
              </div>

              <Button className="rounded-3xl w-36 bg-[#6F0FEB] hover:bg-[#823cdf]">
                Course Start
              </Button>
            </div>
          </div>
          {/* SECOND CARD END */}

          {/* THIRD CARD START */}
          <div className=" py-10 w-[70%] px-8">
            <h1 className="text-2xl font-semibold text-white pb-8">
              Available For You
            </h1>
            <section className="md:flex w-full gap-8">
              <div>
                <img
                  src={startCourse}
                  alt="course-starting-image"
                  className="w-full h-44 rounded-2xl"
                />
              </div>
              <div>
                <section>
                  <h1 className="text-[#AE34E4] text-xl md:text-3xl font-semibold">
                    Next Level Developmet
                  </h1>
                  <p className="text-sm font-semibold text-white py-2">
                    Programming Hero
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-bold font-semibold text-white">$6500</p>
                    <p className=" text-white px-8">
                      <span className="text-orange-500">Closed</span> 9th
                      Oct-24th Oct,2024
                    </p>
                  </div>
                </section>
              </div>
            </section>
            <section className="lg:flex md:items-center w-full  space-y-2 md:space-y-0 md:space-x-7 space-x-0 py-4">
              <p className="text-[#AE34E4]  text-[1rem] font-semibold">
                This course is only for existing students only
              </p>
              <Button
                variant="outline"
                className="text-[#AE34E4] bg-black hover:bg-black hover:text-[#AE34E4] text-sm"
              >
                Learn More
              </Button>
            </section>
          </div>
          {/* THIRD CARD END */}
        </div>
        {/* START COURSE SECTION  END*/}
      </div>
    </CommonContainer>
  );
};

export default LavelOne;
