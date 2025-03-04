import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Quiz = () => {
  return (
    <div className="w-full h-[450px] ">
      <div className="w-full h-[350px]  bg-[#160A2A]  rounded-md p-6">
        <section className="flex items-center justify-between gap-x-4 w-full">
          <div className="flex items-center w-full gap-x-4">
            <p className="text-white">Quiz Progress</p>

            <div className="flex w-[50%] items-center gap-x-4">
              <div className="w-[100%] h-2 bg-gradient-to-r from-green-500 to-green-300 rounded-md" />
              <p className="text-white">
                {1}/{10}
              </p>
            </div>
          </div>

          <button className="bg-[#1f1134] text-red-500 py-1 px-3 rounded-full">
            Quit
          </button>
        </section>
        <div className="w-[100%] h-0.5 bg-gray-800 my-4" />
        {/* SELECT QUESTION  */}
        <section className="w-full">
          <h1 className="text-gray-300 sm:text-xl">
            Question paper title here
          </h1>
          <div className="flex flex-col md:flex-row py-3 gap-4 items-center w-full">
            <div className="md:flex flex-col w-full gap-4 space-y-2 lg:space-y-0">
              <div className="flex items-center gap-x-2 border border-gray-700 rounded-lg p-2">
                <h1 className="text-white sm:text-xl">A</h1>
                <p className="text-gray-700 sm:text-xl">What is mane ki?</p>
              </div>
              <div className="flex items-center gap-x-2 border border-gray-700 rounded-lg p-2">
                <h1 className="text-white sm:text-xl">B</h1>
                <p className="text-gray-700 sm:text-xl">Barir Nam ki?</p>
              </div>
            </div>
            <div className="md:flex flex-col gap-4 space-y-2 lg:space-y-0 w-full">
              <div className="flex items-center gap-x-2 border border-gray-700 rounded-lg p-2">
                <h1 className="text-white sm:text-xl">C</h1>
                <p className="text-gray-700 sm:text-xl">
                  Programming er bolod{" "}
                </p>
              </div>
              <div className="flex items-center gap-x-2 border border-gray-700 rounded-lg p-2">
                <h1 className="text-white sm:text-xl">D</h1>
                <p className="text-gray-700 sm:text-xl">Javascript mastary</p>
              </div>
            </div>
          </div>
          {/* PAGINATION BUTTON  */}
          <div className="flex items-center justify-end gap-x-4 w-full pt-4">
            <button className="text-purple-500 border border-purple-500 py-1.5 px-3 rounded-full flex gap-x-2 items-center">
              <MdKeyboardArrowLeft className="text-purple-500" />
              <span>Prev</span>
            </button>
            <button className="text-purple-500 border  border-purple-500 py-1.5 px-3 rounded-full flex gap-x-2 items-center">
              <span>Next</span>
              <MdKeyboardArrowRight  />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Quiz;
