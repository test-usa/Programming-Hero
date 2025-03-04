import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const AssignmentMarks = () => {
  return (
    <div className="w-full h-[450px] flex items-center justify-center bg-[#160A2A]">
      <section className="py-5">
        {/* circle of count assigment marks */}
        <div className="flex items-center justify-center mx-auto w-44 h-44 rounded-full border-4 border-green-400 ">
          <div className="flex items-center justify-center w-32 h-32 bg-green-100 rounded-full shadow-2xl shadow-green-400">
            <p className="text-black text-sm sm:text-2xl font-semibold">
              41/50
            </p>
          </div>
        </div>

        {/* circle of count assigment marks */}

        <div className="flex flex-col gap-4 items-center justify-center py-4">
          <h1 className="text-green-500 font-semibold text-sm sm:text-2xl">
            Greate Job!
          </h1>
          <p className="text-white font-semibold text-center sm:text-start text-sm md:text-xl">
            You have completed the{" "}
            <span className="text-green-500">Assignment 8</span> and achieve 41
            Marks!
          </p>
          <div className="flex items-center gap-4">
            <button className="border border-green-500 text-green-500 w-28 h-12 rounded-full shrink ">
              Recheck
            </button>
            <button className="border w-40 h-12 rounded-full text-white font-semibold bg-gradient-to-bl from-green-700 to-green-500 shrink flex items-center justify-center">
              <p>My Submission</p>
              <MdOutlineKeyboardArrowRight className="text-2xl" />
            </button>
          </div>
          <p className="text-sm text-green-400">View Examiner's Feedback</p>
        </div>
      </section>
    </div>
  );
};

export default AssignmentMarks;
