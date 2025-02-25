import startCourse from "/photo/batch9.jpg";
import secondImage from "/photo/recomended.png";
import { Button } from "../../components/ui/button";
const Conseptual = () => {
  return (
    <div className="w-full">
      <div className="mt-8 flex flex-row sm:flex-col gap-5 md:gap-0">
        <div className=" py-5 w-[40%] px-5 bg-[#181024]   rounded-lg mt-1">
          <section className="md:flex w-full gap-5 space-y-4 md:space-y-0">
            <div className="w-full">
              <img
                src={secondImage}
                alt="course-starting-image"
                className="max-w-80 w-full  max-h-36 h-full rounded-2xl"
              />
            </div>

            <section className="w-full">
              <h1 className="text-[#AE34E4] text-sm md:text-xl font-semibold">
                Next Level Developmet
              </h1>
              <p className="text-xs font-semibold text-white py-2">
                Programming Hero
              </p>
            </section>
          </section>
        </div>

        <h1 className="text-xl md:text-2xl md:block hidden my-8 font-semibold text-[#896ab7] pb-3">
          Available For You
        </h1>

        {/* SECOND CARD START */}
        <div className=" py-5 w-[40%] px-5 bg-[#181024]  rounded-lg mt-1">
          <section className="md:flex w-full gap-5  space-y-4 md:space-y-0">
            <div className="w-full">
              <img
                src={startCourse}
                alt="course-starting-image"
                className="max-w-72 w-full  max-h-36 h-full rounded-2xl"
              />
            </div>
            <div>
              <section>
                <h1 className="text-[#AE34E4] text-sm md:text-xl font-semibold">
                  Next Level Developmet
                </h1>
                <p className="text-xs font-semibold text-white py-2">
                  Programming Hero
                </p>
                <div className="flex  md:flex-row sm:items-center md:items-start justify-between">
                  <p className="text-bold font-semibold text-xs  text-white">
                    $6500
                  </p>
                  <p className=" text-white text-xs md:text-sm px-8 ">
                    <span className="text-orange-500">Closed</span> 9th Oct-24th
                    Oct,2024
                  </p>
                </div>
              </section>
            </div>
          </section>
          <section className="lg:flex md:items-center w-full  space-y-2 md:space-y-0 md:space-x-7 space-x-0 py-2">
            <p className="text-[#AE34E4]  text-xs md:text-sm  font-semibold">
              This course is only for existing students only
            </p>
            <Button
              variant="outline"
              className="text-[#AE34E4] bg-black hover:bg-black hover:text-[#AE34E4] text-sm"
            >
              Learn More
            </Button>
          </section>
        </div>
        {/* SECOND CARD END */}
      </div>
    </div>
  );
};

export default Conseptual;
