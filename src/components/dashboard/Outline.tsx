import { CiSquareMinus } from "react-icons/ci";
import { CiSquarePlus } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { AiOutlineYoutube } from "react-icons/ai";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { CircularProgress } from "@heroui/progress";
import { useParams } from "react-router-dom";

// DEFINE TYPES OF DATA START ---->>
type Milestone = {
  No: number;
  name: string;
  time: { hour: number; mins: number };
  TotalModules: number;
  modules: Module[];
};

interface Video {
  No: number;
  name: string;
  duration: string;
  file: string;
}
interface Module {
  No: number;
  TotalVideos: number;
  time: { hour: number; mins: number };
  name: string;
  videos: Video[];
}

// DEFINE TYPES OF DATA END ---->>
const Outline = ({
  urlFunc,
  totalMilestone,
}: {
  urlFunc: (url: string, name: string, No: number) => void;
  totalMilestone: Milestone;
}) => {
  const [opemMilestone, setOpemMilestone] = useState<boolean>(false);
  const [openModuleIndex, setOpenModuleIndex] = useState<number | null>(null);
  const [outLineData, setOutLineData] = useState<any[]>([]);
  const [modules, setModules] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { id } = useParams();
  const token = Cookies.get("user");
  const url = import.meta.env.VITE_BACKEND_URL;

  // FETCH ONLY COURSES MILESTONE DATA ---
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${url}/courses/getAll`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data.statusCode, "57777");
        setLoading(true);
        if (response.data.statusCode === 200 && response.data.success) {
          setLoading(false);
          setOutLineData(response?.data?.data);
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchData();
  }, []);

  // FETCH ONLY SFECIFIC MILESTONE MODULES ---
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${url}/modules/course/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data.statusCode, "57777");
        setLoading(true);
        if (response.data.statusCode === 200 && response.data.success) {
          setLoading(false);
          setModules(response?.data?.data);
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchData();
  }, []);


  // Handle module toggle to show videos of clicked module only
  const handleModuleToggle = (index: number) => {
    setOpenModuleIndex(openModuleIndex === index ? null : index);
  };

  // HANDLE-PLAY VIDEO --
  const handlePlayVideo = (url: string, name: string, No: number) => {
    if (url && name) {
      urlFunc(url, name, No);
    }
  };

  return (
    <section
      className="bg-[#160929] w-full rounded-xl p-4 overflow-y-auto "
      style={{
        scrollbarColor: "#ff37f2 #0a0329",
      }}
    >
      <>
        {outLineData.length > 0 ? (
          <>
            {outLineData?.map((outline, index) => {
              return (
                <>
                  <button
                    key={outline?.id}
                    onClick={() => setOpemMilestone(!opemMilestone)}
                    className="flex justify-between items-center gap-x-10 w-full"
                  >
                    <div className="flex justify-between w-full">
                      <h1 className="font-semibold text-sm md:text-xl text-start">
                        Milestone-{index + 1}: {outline?.title}
                        <span className="text-sm font-normal pl-2">
                          h{totalMilestone?.time?.hour} mins
                          {totalMilestone?.time?.mins}-{" "}
                          {totalMilestone?.TotalModules}
                        </span>
                      </h1>
                    </div>
                    {opemMilestone ? (
                      <CiSquareMinus className="text-4xl " />
                    ) : (
                      <CiSquarePlus className="text-4xl" />
                    )}
                  </button>
                  {/* Show Modules when Milestone is Open */}
                  {opemMilestone && (
                    <div className="mt-3 px-2 w-full flex flex-col gap-5">
                      {modules?.length > 0
                        ? modules?.map((item, idx) => {
                            return (
                              item?.courseId === id && (
                                <div key={item?.id} className="w-full">
                                  {/* Module Button */}
                                  <button
                                    onClick={() => handleModuleToggle(index)}
                                    className="flex items-center justify-between gap-y-5 w-full gap-x-6 p-3 bg-[#291547] rounded-lg"
                                  >
                                    <p className="text-start flex flex-col">
                                      Module-{idx + 1}: {item?.title}
                                      <span>1h 10m totoal video</span>
                                    </p>
                                    <MdKeyboardArrowDown
                                      className={`text-2xl ${
                                        openModuleIndex === index
                                          ? "rotate-180"
                                          : ""
                                      }`}
                                    />
                                  </button>

                                  {/* Show videos only for the opened module */}
                                  {openModuleIndex === index && (
                                    <div className="mt-2">
                                      {item?.content?.map(
                                        (cont, videoIndex) => {
                                          console.log(cont, "content section");
                                          return (
                                            <section
                                              key={videoIndex}
                                              className="sm:flex w-full space-y-2 sm:space-y-0 items-center gap-x-4 p-3 mx-4"
                                            >
                                              <IoIosCheckmarkCircleOutline className="text-2xl" />
                                              <button
                                                onClick={() =>
                                                  handlePlayVideo(
                                                    cont?.video,
                                                    cont?.title,
                                                    videoIndex + 1
                                                  )
                                                }
                                              >
                                                <h1>
                                                  {videoIndex + 1} {cont?.title}
                                                </h1>
                                                <div className="flex items-center gap-x-2">
                                                  <AiOutlineYoutube className="text-2xl" />
                                                  <p>13mins</p>
                                                </div>
                                              </button>
                                            </section>
                                          );
                                        }
                                      )}
                                    </div>
                                  )}
                                </div>
                              )
                            );
                          })
                        : <CircularProgress label="Loading..." />}
                    </div>
                  )}
                </>
              );
            })}
          </>
        ) : (
          <CircularProgress  label="Loading..." />
        )}
      </>
    </section>
  );
};

export default Outline;
