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

const PlayingSec = ({ url, name }: { url: string; name: string }) => {
  const [Tabs, setTabs] = useState<number>(1);
  const handleChangeTabs = (numbers: number) => {
    setTabs(numbers);
  };

 

  return (
    <div className="w-full">
      {/* VIDEO PLAYING SECTION START */}
      <section>
        <ReactPlayer url={url} controls width="100%" height="500px" />
      </section>
      {/* VIDEO PLAYING SECTION END */}
      {/* BUTTON START */}
      <div className="flex items-center justify-end py-2 gap-x-4">
        <Button
          size="lg"
          variant="outline"
          className="border border-[#9886FA] bg-gray-900 hover:bg-gray-900 hover:text-gray-400 text-gray-400"
        >
          Previos
        </Button>
        <Button
          size="lg"
          className="text-gray-950 bg-[#9886FA] hover:bg-[#503dbb]"
        >
          Next
        </Button>
      </div>
      {/* BUTTON END */}

      {/* TABS SECTION START */}
      <section className="flex items-center justify-between pt-4 py-4">
        <div className="flex items-center gap-x-4">
          <button
            onClick={() => handleChangeTabs(1)}
            className="flex items-center gap-x-2"
          >
            {Tabs === 1 ? (
              <img src={unBoxGift} className="w-6 h-6" />
            ) : (
              <CiGift className="text-2xl text-white" />
            )}
            <h1 className="text-white"> Reward</h1>
          </button>
          <button
            onClick={() => handleChangeTabs(2)}
            className="flex items-center gap-x-2"
          >
            {Tabs === 2 ? (
              <img src={writeNotes} className="w-6 h-6" />
            ) : (
              <TbNotes className="text-2xl text-white" />
            )}
            <h1 className="text-white">Notes</h1>
          </button>
          <button
            onClick={() => handleChangeTabs(3)}
            className="flex items-center gap-x-2"
          >
            <AiOutlineExclamationCircle
              className={`${
                Tabs === 3 && "bg-red-500 rounded-full text-white text-2xl"
              } text-2xl text-white`}
            />
            <h1
              className={`${
                Tabs === 3 && "text-red-900 font-semibold "
              } text-white`}
            >
              Copyright Warning
            </h1>
          </button>
        </div>
        <div className="flex items-center gap-x-3">
          <button>
            <LuBookmark className="text-2xl text-white" />
          </button>
          <Separator orientation="vertical" className="text-white" />
          <Separator orientation="vertical" className="   F text-white" />
          <button>
            <SlLike className="text-2xl text-white" />
          </button>
          <button>
            <SlDislike className="text-2xl text-white" />
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
