import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Outline from "./Outline";

const CourseOutline = ({
  urlFunc,
}: {
  urlFunc: (url: string, name: string, No: number) => void;
}) => {
  const [data, setData] = useState<[]>([]);

  useEffect(() => {
    const resFunc = async () => {
      try {
        const res = await fetch("/content.json");
        const jsonData = await res.json();
        setData(jsonData);
      } catch (error) {
        console.log(error, "error course-outline");
      }
    };
    resFunc();
  }, []);

  return (
    <div className="text-white">
      <div className="w-full flex items-center justify-between py-3">
        <h1 className="text-[#EAAAFF] ">Running Module : 58</h1>
        <div className="w-[60%] flex items-center gap-x-3">
          <div
            className="w-[100%] h-2 rounded-lg bg-gradient-to-r from-green-500 to-green-300"
            style={{ width: `${100}%` }}
          ></div>
          <p className="text-[#EAAAFF]">11/11</p>
        </div>
      </div>

      {/* SEARCHBAR START */}
      <fieldset className="w-full space-y-1 dark:text-gray-800">
        <label htmlFor="Search" className="hidden">
          Search
        </label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button
              type="button"
              title="search"
              className="p-1 outline-none text-white"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 512 512"
                className="w-full h-4 text-white"
              >
                <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
              </svg>
            </button>
          </span>
          <input
            type="search"
            name="Search"
            placeholder="Search..."
            className="w-full py-3 pl-10 text-sm rounded-md focus:outline-none bg-gray-600 text-white "
          />
        </div>
      </fieldset>
      {/* SEARCHBAR END */}
      <section>
        <div
          className={`h-80 overflow-y-auto w-full rounded-md py-4`}
          style={{
            scrollbarColor: "#ff37f2 #0a0329",
          }}
        >
          {/* DROPDOWN MENU START */}
          <div className="flex flex-col gap-5">
            {data?.map((milestone) => {
              return <Outline urlFunc={urlFunc} totalMilestone={milestone} />;
            })}
          </div>
          {/* DROPDOWN MENU END */}
        </div>
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
