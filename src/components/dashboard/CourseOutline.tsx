import { ScrollArea } from "../ui/scroll-area";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "@heroui/react";
import Outline from "./Outline";

const CourseOutline = () => {
  const [data, setData] = useState<[]>([]);

  useEffect(() => {
    const resFunc = async () => {
      try {
        const res = await fetch("/content.json");
        const jsonData = await res.json();
        setData(jsonData);
      } catch (error) {
        console.log("Fetch Error:", error);
      }
    };
    resFunc();
  }, []);


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
          className={`h-80 overflow-y-auto w-full rounded-md py-4`}
          style={{
            scrollbarColor: "#ff37f2 #0a0329",
          }}
        >
          {/* DROPDOWN MENU START */}
          <div className="flex flex-col gap-5">
            {data?.map((milestone) => {
              return <Outline totalMilestone={milestone} />;
            })}
          </div>
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
