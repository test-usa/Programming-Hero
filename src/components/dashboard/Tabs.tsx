import { cn } from "../../lib/utils";

const tabs = ({
  setTabs,
  tabs,
}: {
  setTabs: React.Dispatch<React.SetStateAction<boolean>>;
  tabs: boolean;
}) => {
  return (
    <div className="mt-8 w-full">
      <div
        className={`flex items-center gap-x-6 w-full
        }`}
      >
        <button
          onClick={() => setTabs(false)}
          className={cn(
            "text-white",
            tabs === false &&
              "relative px-4 py-2 text-purple-300 font-semibold border  border-purple-700 rounded-t-lg bg-[#0d0b17] after:absolute after:h-[1px] after:bg-purple-700  after:bottom-0"
          )}
        >
          Level 1 Course
        </button>
        <button
          onClick={() => setTabs(true)}
          className={cn(
            "text-white",
            tabs === true &&
              "relative px-4 py-2 text-purple-300 font-semibold border  border-purple-700 rounded-t-lg bg-[#0d0b17] after:absolute after:h-[1px] after:bg-purple-700  after:bottom-0"
          )}
        >
          Conseptual Session
        </button>
      </div>
    </div>
  );
};

export default tabs;
