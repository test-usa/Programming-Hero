import CommonContainer from "../../common/CommonContainer";
import Tabs from "./Tabs";
import startCourse from "/photo/batch9.jpg";
import secondImage from "/photo/recomended.png";
import { Progress } from "../../components/ui/progress";
import { Button } from "../../components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";
import Conseptual from "./Conseptual";
import useFetch from "../../hooks/shared/useFetch";
const LavelOne = () => {
  const name: string = "Kazi Mehedi Hasan";
  const [value, setValue] = useState<number>(0);
  const [tabs, setTabs] = useState<boolean>(false);
  const { data, isSuccess, isLoading, refetch } = useFetch("/course");
  console.log(data?.data);
  return (
    <CommonContainer>
      <div>
        <h1 className="text-2xl font-semibold text-[#EAAAFF]">
          Welcome back <span className="text-[#9553F9]">{name}</span>, ready for
          your next lesson?
        </h1>
        <Tabs setTabs={setTabs} tabs={tabs} />

        {/* START COURSE SECTION  START */}
        {tabs === false ? (
          <div className="bg-[#181024] w-full rounded-lg mt-10">
            {/* FIRST CARD START */}

            <>
              {data?.data?.map((course) => {
                return (
                  <div
                    key={course?.id}
                    className="w-full gap-8 px-8 py-10 space-y-4 md:flex md:space-y-4"
                  >
                    <div className="w-full xl:w-[30%]">
                      <img
                        src={startCourse}
                        alt="course-starting-image"
                        className="object-cover w-full max-h-72 rounded-2xl"
                      />
                    </div>
                    <div>
                      <h1 className="text-[#AE34E4] text-xl md:text-2xl lg:text-3xl font-semibold">
                        {course?.title}
                      </h1>
                      <p className="py-2 text-sm font-semibold text-white">
                        ঝংকার মাহবুব
                      </p>
                      <div className="w-full py-3">
                        <Progress
                          value={value}
                          className="w-[100%] h-2  bg-gradient-to-r from-green-500 to-green-300"
                        />
                      </div>
                      <section className="flex items-center pt-4 gap-x-4">
                        <Link
                          to={`/class/${course?.id}`}
                          className="rounded-3xl min-w-28 max-w-36 py-2 text-center text-white bg-[#6F0FEB] hover:bg-[#823cdf]"
                        >
                          Course Start
                        </Link>
                        <Button
                          variant="secondary"
                          className="py-2 text-center text-gray-300 bg-gray-700 rounded-3xl min-w-28 max-w-36 hover:bg-gray-700"
                        >
                          Course Outline
                        </Button>
                      </section>
                    </div>
                  </div>
                );
              })}
            </>

            {/* SECOND CARD START  */}
            <div className="w-full gap-8 px-8 py-10 space-y-4 md:flex md:space-y-4">
              <div className="w-full xl:w-[30%]">
                <img
                  src={secondImage}
                  alt="course-starting-image"
                  className="object-cover w-full max-h-72 rounded-2xl "
                />
              </div>
              <div>
                <h1 className="text-[#AE34E4] ext-xl md:text-2xl lg:text-3xl font-semibold">
                  Recommended for Complete Web Development Course
                </h1>
                <p className="py-2 text-sm font-semibold text-white">
                  Programming Hero
                </p>
                <div className="w-full py-3">
                  <Progress
                    value={value}
                    className="w-[100%] h-2 bg-gradient-to-r from-green-500 to-green-300"
                  />
                </div>

                <Button className="rounded-3xl min-w-28 max-w-36 bg-[#6F0FEB] hover:bg-[#823cdf]">
                  Course Start
                </Button>
              </div>
            </div>
            {/* SECOND CARD END */}

            {/* THIRD CARD START */}
            <div className=" py-5 w-[45%] px-5 bg-[#181024]  rounded-lg mt-1">
              <section className="md:flex w-full gap-5  space-y-4 md:space-y-0">
                <div className="w-full">
                  <img
                    src={startCourse}
                    alt="course-starting-image"
                    className="max-w-64 w-full  max-h-36 h-full rounded-2xl"
                  />
                </div>

                <section className="w-full">
                  <h1 className="text-[#AE34E4] text-sm md:text-xl font-semibold">
                    Next Level Developmet
                  </h1>
                  <p className="text-xs font-semibold text-white py-2">
                    Programming Hero
                  </p>
                  <div className="flex  md:flex-row sm:items-center md:items-start justify-between">
                    <p className="text-bold font-semibold text-xs  text-white">
                      $6500
                    </p>
                    <p className=" text-white text-xs md:text-sm px-8 ">
                      <span className="text-orange-500">Closed</span> 9th
                      Oct-24th Oct,2024
                    </p>
                  </div>
                </section>
              </section>
              <section className="lg:flex md:items-center w-full  space-y-2 md:space-y-0 md:space-x-7 space-x-0 py-2">
                <p className="text-[#AE34E4]  text-xs md:text-sm  font-semibold">
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
        ) : (
          <Conseptual />
        )}

        {/* START COURSE SECTION  END */}
      </div>
    </CommonContainer>
  );
};

export default LavelOne;
