import { CiSquareMinus } from "react-icons/ci";
import { CiSquarePlus } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { AiOutlineYoutube } from "react-icons/ai";
import { useState } from "react";

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
      <button
        onClick={() => setOpemMilestone(!opemMilestone)}
        className="flex justify-between items-center gap-x-10 w-full"
      >
        <div className="flex justify-between w-full">
          <h1 className="font-semibold text-sm md:text-xl text-start">
            Milestone-{totalMilestone?.No}: {totalMilestone?.name}
            <span className="text-sm font-normal pl-2">
              h{totalMilestone?.time?.hour} mins{totalMilestone?.time?.mins}-{" "}
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
          {totalMilestone?.modules.map((module, index) => (
            <div key={index} className="w-full">
              {/* Module Button */}
              <button
                onClick={() => handleModuleToggle(index)}
                className="flex items-center justify-between gap-y-5 w-full gap-x-6 p-3 bg-[#291547] rounded-lg"
              >
                <p className="text-start flex flex-col">
                  Module-{module.No}: {module.name}
                  <span>
                    {module.time.hour} h {module.time.mins}m .{" "}
                    {module.TotalVideos}
                  </span>
                </p>
                <MdKeyboardArrowDown
                  className={`text-2xl ${
                    openModuleIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Show videos only for the opened module */}
              {openModuleIndex === index && (
                <div className="mt-2">
                  {module?.videos?.map((video, videoIndex) => (
                    <section
                      key={videoIndex}
                      className="sm:flex w-full space-y-2 sm:space-y-0 items-center gap-x-4 p-3 mx-4"
                    >
                      <IoIosCheckmarkCircleOutline className="text-2xl" />
                      <button
                        onClick={() =>
                          handlePlayVideo(video?.file, video?.name, video?.No)
                        }
                      >
                        <h1>
                          {video?.No} {video?.name} {totalMilestone?.No}
                        </h1>
                        <div className="flex items-center gap-x-2">
                          <AiOutlineYoutube className="text-2xl" />
                          <p>{video?.duration}</p>
                        </div>
                      </button>
                    </section>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Outline;
