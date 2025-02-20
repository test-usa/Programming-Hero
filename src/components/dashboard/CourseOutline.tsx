import { ScrollArea } from "../ui/scroll-area";
import { Progress } from "../../components/ui/progress";
import { CiSquareMinus } from "react-icons/ci";
import { CiSquarePlus } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { AiOutlineYoutube } from "react-icons/ai";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "@heroui/react";

const CourseOutline = () => {
  const [opemMilestone, setOpemMilestone] = useState<boolean>(false);
  const [openModule, setOpenModule] = useState<boolean>(false);
  const [data, setData] = useState<[]>([]);

  useEffect(() => {
    const resFunc = async () => {
      try {
        const res = await fetch("content.json");
        const toData = await res.json();
        setData(toData);
      } catch (error) {
        console.log("not fetch data", error);
      }
    };
    resFunc();
  });

  console.log(data, "jsonnnnnnnnnnn");

  const SearchIcon = (props) => {
    return (
      <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height="1em"
        role="presentation"
        viewBox="0 0 24 24"
        width="1em"
        {...props}
      >
        <path
          d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M22 22L20 20"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    );
  };

  return (
    <div className="text-white">
      <div className="w-full flex items-center justify-between py-3">
        <h1 className="text-[#EAAAFF] ">Running Module : 58</h1>
        <div className="w-[60%] flex items-center gap-x-3">
          <div
            className="w-[100%] h-2 rounded-lg bg-gradient-to-r from-green-500 to-green-300"
            style={{ width: `${100}%` }} // You can dynamically change this width
          ></div>
          <p className="text-[#EAAAFF]">11/11</p>
        </div>
      </div>

      {/* SEARCHBAR START */}
      <Input
        isClearable
        classNames={{
          label: "text-black/50 dark:text-white/90",
          input: [
            "text-black/90 dark:text-white/90",
            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
          ],

          inputWrapper: [
            "bg-default-200/50",
            "dark:bg-default/60",

            "backdrop-saturate-200",
            "hover:bg-default-200/70",
            "dark:hover:bg-default/70",
            "group-data-[focus=true]:bg-default-200/50",
            "dark:group-data-[focus=true]:bg-default/60",
            "!cursor-text",
          ],
        }}
        label="Search"
        startContent={
          <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
        }
      />
      {/* SEARCHBAR END */}
      <section>
        <ScrollArea
          className="h-full w-full rounded-md py-4 overflow-y-auto"
          style={{
            scrollbarColor: "#ff37f2 #0a0329",
          }}
        >
          {/* DROPDOWN MENU START */}
          <section className="bg-[#160929] w-full rounded-xl p-4 ">
            <button
              onClick={() => setOpemMilestone(!opemMilestone)}
              className="flex justify-between items-center gap-x-10 bg-[#271641] p-5 w-full"
            >
              <div className="flex flex-col justify-start ">
                <h1 className="font-semibold text-xl text-start">
                  Milestone-01: Welcome To The Web Course{" "}
                  <span className="text-sm font-normal">0h 10m - 1/1</span>
                </h1>
              </div>
              {opemMilestone ? (
                <CiSquareMinus className="text-4xl " />
              ) : (
                <CiSquarePlus className="text-4xl" />
              )}
            </button>
            {opemMilestone && (
              <div className="mt-3 px-2 bg-[#291547] w-full">
                <button
                  onClick={() => setOpenModule(!openModule)}
                  className="flex items-center justify-between w-full gap-x-6 p-3"
                >
                  <p className="text-start">
                    Module-01:Introduction to Javascript{" "}
                    <span>2 h 3m . 12/12</span>
                  </p>

                  <MdKeyboardArrowDown
                    className={`text-2xl ${openModule && "rotate-180"}`}
                  />
                </button>
                <div className="h-[1px] w-full bg-gray-700 my-2"></div>

                {/* SHOW ALL MODULE */}
                {openModule && (
                  <section className="sm:flex w-full space-y-2 sm:space-y-0 items-center gap-x-4 p-3 mx-4">
                    <IoIosCheckmarkCircleOutline className="text-2xl" />
                    <button>
                      <h1>16-0 Roadmap of Milteston 01</h1>
                      <div className="flex items-center gap-x-2">
                        <AiOutlineYoutube className="text-2xl" />
                        <p>13m</p>
                      </div>
                    </button>
                  </section>
                )}
              </div>
            )}
          </section>

          {/* DROPDOWN MENU END */}
        </ScrollArea>
        <Button
          className="w-full my-3 bg-[#C941F5] hover:bg-[#C941F5] text-[18px]"
          size="lg"
        >
          Course Summary
        </Button>
      </section>
    </div>
  );
};

export default CourseOutline;
