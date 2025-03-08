import ReactPlayer from "react-player";
import { Button } from "../ui/button";
import { CiGift } from "react-icons/ci";
import unBoxGift from "/photo/gift.png";
import { Separator } from "../ui/separator";
import writeNotes from "/photo/writingNotes.png";
import { TbNotes } from "react-icons/tb";
import { useState } from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { LuBookmark } from "react-icons/lu";
import { SlDislike, SlLike } from "react-icons/sl";
import Reward from "./Rewad";
import Notes from "./Notes";
import CopyRight from "./CopyRight";
import Description from "./Description";
import { useOutlineStore } from "../../store/useOutlineStore";
import AssignmentMarks from "./AssignmentMarks";
import StartQuiz from "./StartQuiz";

const PlayingSec = () => {
  const [Tabs, setTabs] = useState<number>(1);
  const { video, description, quiz, assignment } = useOutlineStore();
  console.log(video, "description pageeeeeeeee 122");
  // SET CURRENT TAB --
  const handleChangeTabs = (numbers: number): void => {
    setTabs(numbers);
  };

  console.log(quiz, "32 line description");

  // HANDLE PREVIOUS BUTTON --
  const handePrevour = (): void => {};
  // HANDLE NEXT BUTTON --
  const handleNext = (): void => {};

  return (
    <div className="w-full">
      {/* CONTENT SECTION START */}
      <section className="max-h-[500px]">
        {video && typeof video?.url === "string" ? (
          <ReactPlayer url={video?.url} controls width="100%" height="500px" />
        ) : description && typeof description === "object" ? (
          <Description description={description} />
        ) : quiz && typeof quiz === "object" ? (
          <StartQuiz quiz={quiz} />
        ) : assignment ? (
          <AssignmentMarks assingment={assignment} />
        ) : (
          ""
        )}

      </section>
      {/* CONTENT SECTION END */}
      {/* BUTTON START */}
      <div className="flex items-center justify-end py-2 gap-x-4 pt-20 md:pt-4">
        <Button
          onChange={handePrevour}
          size="lg"
          variant="outline"
          className="border border-[#9886FA] bg-gray-900 hover:bg-gray-900 hover:text-gray-400 text-gray-400"
        >
          Previos
        </Button>
        <Button
          onChange={handleNext}
          size="lg"
          className="text-gray-950 bg-[#9886FA] hover:bg-[#503dbb]"
        >
          Next
        </Button>
      </div>
      {/* BUTTON END */}

      {/* TABS SECTION START */}
      <section className="flex items-center justify-between pt-4 py-4">
        <div className="flex items-center flex-wrap gap-x-4 gap-y-4">
          <button
            onClick={() => handleChangeTabs(1)}
            className="flex items-center gap-x-2"
          >
            {Tabs === 1 ? (
              <img src={unBoxGift} className="w-6 h-6" />
            ) : (
              <CiGift className="text-xl md:text-2xl text-white" />
            )}
            <h1 className="text-white text-sm md:text-xl"> Reward</h1>
          </button>
          <button
            onClick={() => handleChangeTabs(2)}
            className="flex items-center gap-x-2"
          >
            {Tabs === 2 ? (
              <img src={writeNotes} className="w-6 h-6" />
            ) : (
              <TbNotes className="text-xl md:text-2xl text-white" />
            )}
            <h1 className="text-white text-sm md:text-xl">Notes</h1>
          </button>
          <button
            onClick={() => handleChangeTabs(3)}
            className="flex items-center gap-x-2"
          >
            <AiOutlineExclamationCircle
              className={`${
                Tabs === 3 &&
                "bg-red-500 rounded-full text-white text-xl md:text-2xl"
              } text-xl md:text-2xl text-white`}
            />
            <h1
              className={`${
                Tabs === 3 && "text-red-900 font-semibold text-sm md:text-xl"
              } text-white text-sm md:text-xl`}
            >
              Copyright Warning
            </h1>
          </button>
        </div>
        <div className="flex items-center gap-x-3">
          <button>
            <LuBookmark className="text-xl md:text-2xl text-white" />
          </button>
          <Separator orientation="vertical" className="text-white" />
          <Separator orientation="vertical" className="   F text-white" />
          <button>
            <SlLike className="text-xl md:text-2xl text-white" />
          </button>
          <button>
            <SlDislike className="text-xl md:text-2xl text-white" />
          </button>
        </div>
      </section>
      <Separator orientation="horizontal" className="text-white" />

      <div className="mt-3">{Tabs === 1 && <Reward />}</div>
      <div className="mt-3">{Tabs === 2 && <Notes />}</div>
      <div className="mt-3">{Tabs === 3 && <CopyRight />}</div>
      {/* TABS SECTION END */}
    </div>
  );
};

export default PlayingSec;
