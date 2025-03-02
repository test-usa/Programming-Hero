import CommonContainer from "../common/CommonContainer";
import backIcons from "/photo/backicons.png";
import reward from "/photo/gift.png";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { TbNotes } from "react-icons/tb";
import { BsBookmark } from "react-icons/bs";
import PlayingSec from "../components/dashboard/PlayingSec";
import CourseOutline from "../components/dashboard/CourseOutline";
import DashFoote from "../components/dashboard/DashFoote";
import DashNavbar from "../components/dashboard/DashNavbar";
import { useState } from "react";

const CourseDetails = () => {
  const [url, setUrl] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [no, setNo] = useState<number>(0);
  const urlFunc = (url: string, name: string, No: number): void => {
    if (url && name) {
      setUrl(url);
      setName(name);
      setNo(No);
    } else {
      setUrl("");
      setName("");
    }
  };
  return (
    <div className=" bg-[#010314]">
      <CommonContainer>
        <DashNavbar />
        <div className="pt-10">
          {/* HEARDER SECTION START */}
          <section className="flex flex-col-reverse justify-between gap-4 md:flex-row md:items-center">
            <div className="flex items-center gap-x-3">
              <button>
                <img
                  src={backIcons}
                  alt="back-button"
                  className="max-w-[36px] min-w-[28px]"
                />
              </button>
              <h1 className="font-semibold text-2xl text-[#EAAAFF]">
                {no} {name}
              </h1>
            </div>
            <div className="flex items-center ml-auto gap-x-3">
              <button>
                <MdOutlineFavoriteBorder className="text-2xl text-white" />
              </button>
              <button>
                <TbNotes className="text-2xl text-white" />
              </button>
              <button>
                <img src={reward} alt="back-button w-[1rem] h-[2rem]" />
              </button>
              <button>
                <BsBookmark className="text-2xl text-white" />
              </button>
            </div>
          </section>
          {/* HEARDER SECTION END */}
          <div className="w-full h-[1px] my-6 bg-gradient-to-b from-purple-400 to-blue-950 via-blue-300"></div>

          {/* VIDEO PLAYNING SECTION START */}
          <section className="w-full lg:flex gap-x-5">
            <PlayingSec url={url} name={name} />
            <CourseOutline urlFunc={urlFunc} />
          </section>
          {/* VIDEO PLAYNING SECTION END */}
        </div>
      </CommonContainer>
      <DashFoote />
    </div>
  );
};

export default CourseDetails;
