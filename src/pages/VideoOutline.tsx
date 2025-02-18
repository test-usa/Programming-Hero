import CommonContainer from "../common/CommonContainer";
import backIcons from "/photo/backicons.png";
import reward from "/photo/gift.png";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { TbNotes } from "react-icons/tb";
import { BsBookmark } from "react-icons/bs";
import PlayingSec from "../components/dashboard/PlayingSec";
import CourseOutline from "../components/dashboard/CourseOutline";

const VideoOutline = () => {
  const count = "82-8";
  return (
    <CommonContainer>
      <div className="mt-10">
        {/* HEARDER SECTION START */}
        <section className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-x-3">
            <button>
              <img
                src={backIcons}
                alt="back-button "
                className="max-w-[36px] min-w-[28px]"
              />
            </button>
            <h1 className="font-semibold text-2xl">
              {count} Starting of a new Journey with special message
            </h1>
          </div>
          <div className="flex items-center gap-x-3 ml-auto">
            <button>
              <MdOutlineFavoriteBorder className="text-2xl " />
            </button>
            <button>
              {" "}
              <TbNotes className="text-2xl " />
            </button>
            <button>
              <img src={reward} alt="back-button w-[1rem] h-[2rem]" />
            </button>
            <button>
              <BsBookmark className="text-2xl " />
            </button>
          </div>
        </section>
        {/* HEARDER SECTION END */}
        <div className="w-full h-[1px] my-6 bg-gradient-to-b from-purple-400 to-blue-950 via-blue-300"></div>

        {/* VIDEO PLAYNING SECTION START */}
        <section className="lg:flex w-full gap-x-5">
          <PlayingSec />
          <CourseOutline />
        </section>
        {/* VIDEO PLAYNING SECTION END */}
      </div>
    </CommonContainer>
  );
};

export default VideoOutline;
