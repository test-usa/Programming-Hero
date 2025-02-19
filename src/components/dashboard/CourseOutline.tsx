import { ScrollArea } from "../ui/scroll-area";
import { Progress } from "../../components/ui/progress";
import { CiSquareMinus } from "react-icons/ci";
import { CiSquarePlus } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { AiOutlineYoutube } from "react-icons/ai";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

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

  return (
    <div className="text-white">
      <div className="w-full flex items-center justify-between py-3">
        <h1 className="text-black">Running Module : 58</h1>
        <div className="w-[60%] flex items-center gap-x-3">
          <Progress value={100} className="w-[100%] h-2" />
          <p className="text-black">11/11</p>
        </div>
      </div>

      {/* SEARCHBAR START */}
      <fieldset className="w-full space-y-1 border rounded-lg my-3">
        <label htmlFor="Search" className="hidden">
          Search
        </label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button
              type="button"
              title="search"
              className="p-1 focus:outline-none focus:ring"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 512 512"
                className="w-4 h-4"
              >
                <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
              </svg>
            </button>
          </span>
          <input
            type="search"
            name="Search"
            placeholder="Search..."
            className="w-full py-2 pl-10 text-sm rounded-md px-10  focus:outline-none text-black"
          />
        </div>
      </fieldset>
      {/* SEARCHBAR END */}
      <section>
        <ScrollArea className="h-full w-full rounded-md border p-4">
          {/* DROPDOWN MENU START */}
          <section className="bg-[#160929] w-full rounded-xl p-4">
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
