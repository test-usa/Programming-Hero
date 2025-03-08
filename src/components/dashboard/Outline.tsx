import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { AiOutlineYoutube } from "react-icons/ai";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/shared/useFetch";
import { useState } from "react";
import { PiNoteDuotone } from "react-icons/pi";
import NotFoundPage from "./NotFoundPage";
import { useOutlineStore } from "../../store/useOutlineStore";
import { toast } from "react-toastify";

const Outline = () => {
  const [openModuleIndex, setOpenModuleIndex] = useState<number | null>(null);
  const { id } = useParams();
  const { data } = useFetch(`/course/${id}`);
  const { setVideo, setDescription, setQuiz, setAssignment } =
    useOutlineStore();

  // Handle module toggle to show videos of clicked module only
  const handleModuleToggle = (index: number) => {
    setOpenModuleIndex(openModuleIndex === index ? null : index);
  };

  // HANDLE-PLAY VIDEO ---->
  const handleShowContent = (
    content: string | object,
    title: string,
    type: string,
    no?: number
  ) => {
    if (type === "VIDEO") {
      setVideo(content, title, no);
      toast.success("successfully store video!");
    } else if (type === "DESCRIPTION") {
      setDescription(content, title);
      toast.success("successfully store description!");
    } else if (type === "QUIZ") {
      setQuiz(content, title);
      toast.success("successfully store quiz!");
    } else if (type === "ASSIGNMENT") {
      setAssignment(content, title);
      toast.success("successfully store assignment!");
    }
  };

  return (
    <section
      className="bg-[#160929] w-full rounded-xl p-4"
      style={{
        scrollbarColor: "#ff37f2 #0a0329",
      }}
    >
      <>
        {/* Show Modules when Milestone is Open */}
        <div className="mt-3 px-2 w-full flex flex-col gap-5">
          {data?.data?.module?.map((item: any, idx: number) => {
            return (
              <div key={item?.id} className="w-full">
                {/* Module Button */}
                <button
                  onClick={() => handleModuleToggle(idx)}
                  className="flex items-center justify-between gap-y-5 w-full gap-x-6 p-3 bg-[#291547] rounded-lg"
                >
                  <p className="text-start flex flex-col">
                    Module-{idx + 1}: {item?.title}
                  </p>
                  <MdKeyboardArrowDown
                    className={`text-2xl ${
                      openModuleIndex === idx && "rotate-180"
                    }`}
                  />
                </button>
                {/* Show videos only for the opened module */}
                {openModuleIndex === idx && (
                  <div className="mt-2">
                    {item?.content?.map((cont: any, videoIndex: number) => {
                      return (
                        <section className="sm:flex w-full sm:space-y-0  gap-x-4 space-y-2  py-4 mx-4">
                          {cont?.contentType === "DESCRIPTION" ? (
                            <button
                              className="flex items-center gap-x-3"
                              onClick={() =>
                                handleShowContent(
                                  cont?.description,
                                  cont?.contentType === "DESCRIPTION"
                                    ? cont?.title
                                    : null,
                                  cont?.contentType
                                )
                              }
                            >
                              <PiNoteDuotone className="text-2xl sm:text-3xl" />
                              <div className="w-full">
                                <h1 className="text-sm text-start">
                                  {cont?.title}
                                </h1>
                              </div>
                            </button>
                          ) : cont?.contentType === "VIDEO" ? (
                            <button
                              className="flex items-center gap-x-3"
                              onClick={() =>
                                handleShowContent(
                                  cont?.video,
                                  cont?.contentType === "VIDEO"
                                    ? cont?.title
                                    : null,
                                  cont?.contentType,
                                  videoIndex + 1
                                )
                              }
                            >
                              <IoIosCheckmarkCircleOutline className="text-2xl sm:text-3xl" />

                              <div className="w-full">
                                <h1 className="text-sm text-start">
                                  <span className="mr-2">
                                    {" "}
                                    {videoIndex + 1}
                                  </span>
                                  {cont?.title}
                                </h1>
                                <div className="flex items-center gap-3">
                                  <AiOutlineYoutube className="text-2xl text-gray-500" />
                                  <p className="text-gray-500">13mins</p>
                                </div>
                              </div>
                            </button>
                          ) : cont?.contentType === "QUIZ" ? (
                            <button
                              className="flex items-center gap-x-3"
                              onClick={() =>
                                handleShowContent(
                                  cont?.quiz,
                                  cont?.contentType === "QUIZ"
                                    ? cont?.title
                                    : null,
                                  cont?.contentType
                                )
                              }
                            >
                              <IoIosCheckmarkCircleOutline className="text-2xl sm:text-3xl" />
                              <div className="w-full">
                                <h1 className="text-sm text-start">
                                  <span className="mr-2">
                                    {" "}
                                    {videoIndex + 1}
                                  </span>
                                  Quiz
                                </h1>
                              </div>
                            </button>
                          ) : cont?.contentType === "ASSIGNMENT" ? (
                            <button
                              className="flex items-center gap-x-3"
                              onClick={() =>
                                handleShowContent(
                                  cont?.assignment,
                                  cont?.contentType === "ASSIGNMENT"
                                    ? cont?.title
                                    : null,
                                  cont?.contentType
                                )
                              }
                            >
                              <IoIosCheckmarkCircleOutline className="text-2xl sm:text-3xl" />
                              <div className="w-full">
                                <h1 className="text-sm text-start">
                                  Assignment
                                  <span className="mr-2">
                                    {" "}
                                    {videoIndex + 1}
                                  </span>
                                </h1>
                              </div>
                            </button>
                          ) : (
                            <NotFoundPage />
                          )}
                        </section>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </>
    </section>
  );
};

export default Outline;
