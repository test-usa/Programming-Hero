import { cn } from "../../lib/utils";

const Tabs = ({
  setTabs,
  tabs,
}: {
  setTabs: React.Dispatch<React.SetStateAction<boolean>>;
  tabs: boolean;
}) => {
  return (
    <div className="mt-8 w-full">
      <div className={`flex items-center gap-x-6 w-full`}>
        <button
          onClick={() => setTabs(false)}
          className={cn(
            "text-white",
            !tabs &&
              "relative px-4 py-2 text-purple-400 font-semibold border border-b-0  border-purple-700 rounded-t-lg"
          )}
        >
          Level 1 Course
        </button>
        <button
          onClick={() => setTabs(true)}
          className={cn(
            "text-white",
            tabs &&
              "relative px-4 py-2 text-purple-400 font-semibold border border-b-0  border-purple-700 rounded-t-lg"
          )}
        >
          Conceptual Session
        </button>
      </div>
    </div>
  );
};

export default Tabs;