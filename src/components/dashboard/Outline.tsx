import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { AiOutlineYoutube } from "react-icons/ai";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/shared/useFetch";
import { useEffect, useState } from "react";
import { PiNoteDuotone } from "react-icons/pi";
import NotFoundPage from "./NotFoundPage";
import { useOutlineStore } from "../../store/useOutlineStore";
const Outline = ({
  content,
  handleProgressBar,
}: {
  content: any;
  handleProgressBar: (contentId: string) => void;
}) => {
  const [openModuleIndex, setOpenModuleIndex] = useState<number | null>(null);
  const { id } = useParams();
  // GET PROGRESSBAR --->
  const { data: getProgress } = useFetch(`/student/progress/${id}`);
  const { data } = useFetch(`/course/${id}`);
  const {
    setVideo,
    setDescription,
    setQuiz,
    setAssignment,
    setAllContent,
    video,
    description,
    quiz,
    assignment,
    allContent,
  } = useOutlineStore();
  const currentContent = {
    video,
    description,
    quiz,
    assignment,
  };

  const handSetAllContent = () => {
    const contents = data?.data?.module[0]?.content;
    setAllContent(contents, currentContent);
    // console.log(contents, currentContent, "37 no lineeeeee");
  };

  // Handle module toggle to show videos of clicked module only
  const handleModuleToggle = (index: number) => {
    setOpenModuleIndex(openModuleIndex === index ? null : index);
  };


  //searching data --->
  useEffect(() => {
    if (!content?.data?.length) return;
    const firstContent = content?.data?.[0] || {};
    const { contentType, title, id, video, description, assignment, quiz } =
      firstContent;

    if (content?.data?.length) {
      switch (contentType) {
        case "VIDEO":
          if (useOutlineStore.getState().video?.id !== id) {
            setVideo(video, title, id);
            handleProgressBar(id);
          }
          break;
        case "DESCRIPTION":
          if (useOutlineStore.getState().description?.id !== id) {
            setDescription(description, title, id);
            handleProgressBar(id);
          }
          break;
        case "QUIZ":
          if (useOutlineStore.getState().quiz?.id !== id) {
            setQuiz(quiz, title, id);
            handleProgressBar(id);
          }
          break;
        case "ASSIGNMENT":
          if (useOutlineStore.getState().assignment?.id !== id) {
            setAssignment(assignment, title, id);
            handleProgressBar(id);
          }
          break;
      }
    }
  }, [content?.data]);

  // HANDLE-PLAY VIDEO ---->
  const handleShowContent = (
    content: string | object,
    title: string,
    type: string,
    no?: number,
    id?: string
  ) => {
    if (type === "VIDEO") {
      setVideo(content, title, no, id);
      handleProgressBar(id);
    } else if (type === "DESCRIPTION") {
      setDescription(content, title, id);
      handleProgressBar(id);
    } else if (type === "QUIZ") {
      setQuiz(content, title, content?.id);
      handleProgressBar(id);
    } else if (type === "ASSIGNMENT") {
      setAssignment(content, title, id);
      handleProgressBar(id);
    }
    handSetAllContent();
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
                {/* Show content only for the opened module */}
                {openModuleIndex === idx && (
                  <div className="mt-2">
                    {item?.content?.map((cont: any, videoIndex: number) => {
                      const incresProgress =
                        getProgress?.data?.watchedContents?.some(
                          (item: string) => item === cont?.id
                        );

                      return (
                        <section
                          key={videoIndex}
                          className="sm:flex w-full sm:space-y-0  gap-x-4 space-y-2  py-4 mx-4"
                        >
                          {cont?.contentType === "DESCRIPTION" ? (
                            <button
                              className="flex items-center gap-x-3"
                              onClick={() =>
                                handleShowContent(
                                  cont?.description,
                                  cont?.contentType === "DESCRIPTION"
                                    ? cont?.title
                                    : null,
                                  cont?.contentType,
                                  cont?.id
                                )
                              }
                            >
                              <PiNoteDuotone
                                className={`text-2xl sm:text-3xl ${
                                  incresProgress
                                    ? "text-green-600"
                                    : "text-white"
                                }`}
                              />
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
                                  videoIndex + 1,
                                  cont?.id
                                )
                              }
                            >
                              <IoIosCheckmarkCircleOutline
                                className={`text-2xl sm:text-3xl ${
                                  incresProgress
                                    ? "text-green-600"
                                    : "text-white"
                                }`}
                              />

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
                                  cont?.contentType,
                                  cont?.id
                                )
                              }
                            >
                              <IoIosCheckmarkCircleOutline
                                className={`text-2xl sm:text-3xl ${
                                  incresProgress
                                    ? "text-green-600"
                                    : "text-white"
                                }`}
                              />
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
                                  cont?.contentType,
                                  cont?.id
                                )
                              }
                            >
                              <IoIosCheckmarkCircleOutline
                                className={`text-2xl sm:text-3xl ${
                                  incresProgress
                                    ? "text-green-600"
                                    : "text-white"
                                }`}
                              />
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
