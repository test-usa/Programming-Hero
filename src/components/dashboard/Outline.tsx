import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { AiOutlineYoutube } from "react-icons/ai";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/shared/useFetch";
import { useState } from "react";

const Outline = ({
  urlFunc,
}: {
  urlFunc: (
    url: string,
    name: string,
    No: number,
    description: string,
    quiz: string
  ) => void;
}) => {
  const [openModuleIndex, setOpenModuleIndex] = useState<number | null>(null);
  const { id } = useParams();
  const { data, isLoading } = useFetch(`/course/ac9b82fb-612e-4707-a7d3-af828a682df8`);
  console.log(data,id, "23333");

  // Handle module toggle to show videos of clicked module only
  const handleModuleToggle = (index: number) => {
    setOpenModuleIndex(openModuleIndex === index ? null : index);
  };

  // HANDLE-PLAY VIDEO ---->
  const handlePlayVideo = (
    url: string,
    name: string,
    No: number,
    description: string,
    quiz: string
  ) => {
    if (url && name) {
      urlFunc(url, name, No, description, quiz);
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
          <div className="w-full">
            {/* Module Button */}
            <button
              // onClick={() => handleModuleToggle(idx)}
              className="flex items-center justify-between gap-y-5 w-full gap-x-6 p-3 bg-[#291547] rounded-lg"
            >
              <p className="text-start flex flex-col">
                {/* Module-{idx + 1}: {item?.title} */} Module - 01 : javascript
                title
                <span>1h 10m totoal video</span>
              </p>
              <MdKeyboardArrowDown
              // className={`text-2xl ${
              //   openModuleIndex === idx ? "rotate-180" : ""
              // }`}
              />
            </button>

            {/* Show videos only for the opened module */}
            {/* {openModuleIndex === idx && ( */}
            <div className="mt-2">
              <section className="sm:flex w-full space-y-2 sm:space-y-0 items-center gap-x-4 py-4 mx-4">
                <IoIosCheckmarkCircleOutline className="text-2xl" />
                <button
                // onClick={() =>
                //   handlePlayVideo(
                //     cont?.video,
                //     cont?.title,
                //     videoIndex + 1,
                //     cont?.description,
                //     cont?.QuizInstance
                //   )
                // }
                >
                  <div className="w-full">
                    <>
                      <h1 className="text-sm">
                        {/* {videoIndex + 1} {cont?.title} */} 01 module title
                        here
                      </h1>
                      <div className="flex items-center gap-x-2">
                        <AiOutlineYoutube className="text-2xl" />
                        <p>13mins</p>
                      </div>
                    </>
                  </div>
                </button>
              </section>
            </div>
            {/* )} */}
          </div>
        </div>
      </>
    </section>
  );
};

export default Outline;
