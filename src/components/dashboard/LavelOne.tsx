import CommonContainer from "../../common/CommonContainer";
import Tabs from "./Tabs";
import startCourse from "/photo/batch9.jpg";
import secondImage from "/photo/recomended.png";
import { Progress } from "../../components/ui/progress";
import { Button } from "../../components/ui/button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Conseptual from "./Conseptual";
import Cookies from "js-cookie";
import axios from "axios";
const LavelOne = () => {
  const name: string = "Kazi Mehedi Hasan";
  const [value, setValue] = useState<number>(0);
  const [tabs, setTabs] = useState<boolean>(false);
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const token = Cookies.get("user");
  const url = import.meta.env.VITE_BACKEND_URL;
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${url}/courses/getAll`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setLoading(true);
        if (response.data.statusCode === 200 && response.data.success) {
          setLoading(false);
          setCourses(response?.data?.data);
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchData();
  }, []);

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
            {courses?.length > 0 ? (
              courses?.map((course) => {
                return (
                  <div className="md:flex w-full space-y-4 md:space-y-4  gap-8 py-10 px-8">
                    <div className="w-full xl:w-[30%]">
                      <img
                        src={startCourse}
                        alt="course-starting-image"
                        className="w-full max-h-72 rounded-2xl object-cover"
                      />
                    </div>
                    <div key={course?.id}>
                      <h1 className="text-[#AE34E4] text-xl md:text-2xl lg:text-3xl font-semibold">
                        {course?.title}
                      </h1>
                      <p className="text-sm font-semibold text-white py-2">
                        ঝংকার মাহবুব
                      </p>
                      <div className="w-full py-3">
                        <Progress
                          value={value}
                          className="w-[100%] h-2  bg-gradient-to-r from-green-500 to-green-300"
                        />
                      </div>
                      <section className="flex items-center gap-x-4 pt-4">
                        <Link
                          to={`/mehedi/${course?.id}`}
                          className="rounded-3xl min-w-28 max-w-36 py-2 text-center text-white bg-[#6F0FEB] hover:bg-[#823cdf]"
                        >
                          Course Start
                        </Link>
                        <Button
                          variant="secondary"
                          className="rounded-3xl min-w-28 max-w-36 py-2 text-center bg-gray-700 hover:bg-gray-700 text-gray-300"
                        >
                          Course Outline
                        </Button>
                      </section>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="text-xl text-white">Loading...</p>
            )}

            {/* SECOND CARD START  */}
            <div className="md:flex w-full space-y-4 md:space-y-4  gap-8 py-10 px-8">
              <div className="w-full xl:w-[30%]">
                <img
                  src={secondImage}
                  alt="course-starting-image"
                  className="w-full max-h-72 rounded-2xl object-cover "
                />
              </div>
              <div>
                <h1 className="text-[#AE34E4] ext-xl md:text-2xl lg:text-3xl font-semibold">
                  Recommended for Complete Web Development Course
                </h1>
                <p className="text-sm font-semibold text-white py-2">
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
            <div className=" py-10 w-full md:w-[70%] px-8">
              <h1 className="text-sm md:text-2xl font-semibold text-white pb-8">
                Available For You
              </h1>
              <section className="md:flex w-full gap-8">
                <div>
                  <img
                    src={startCourse}
                    alt="course-starting-image"
                    className="w-full max-h-60 rounded-2xl"
                  />
                </div>
                
                  <section className="space-y-2 pt-4">
                    <h1 className="text-[#AE34E4] text-sm md:text-3xl font-semibold">
                      Next Level Developmet
                    </h1>
                    <p className="text-sm font-semibold text-white">
                      Programming Hero
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-bold font-semibold text-white">
                        $6500
                      </p>
                      <p className=" text-white text-sm md:text-xl px-8">
                        <span className="text-orange-500">Closed</span> 9th
                        Oct-24th Oct,2024
                      </p>
                    </div>
                  </section>
                
              </section>
              <section className="lg:flex md:items-center w-full  space-y-2 md:space-y-0 md:space-x-7 space-x-0 py-4">
                <p className="text-[#AE34E4]  ext-xl md:text-2xl lg:text-3xl font-semibold">
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
