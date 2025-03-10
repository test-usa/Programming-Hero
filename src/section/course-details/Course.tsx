import CommonContainer from "../../common/CommonContainer";
import CommonSpace from "../../common/CommonSpace";
import useFetch from "../../hooks/shared/useFetch";

const Course = () => {
  const { data } = useFetch("/course");
  return (
    <div className="bg-[#010313] p-4">
      <CommonSpace>
        <CommonContainer>
          <div className=" md:w-[85%] w-full mx-auto">
            <div className="md:w-[70%] w-full mx-auto">
              <h1 className="mb-6 text-2xl font-semibold text-center text-white md:text-4xl">
                Course Curriculum
              </h1>
              <p className="text-lg text-center text-white/50 ">
                Programming Hero's dynamic course guides students from MERN
                stack basics to complete mastery, ensuring a strong foundation.
                This comprehensive approach makes the learning journey smooth
                and engaging.
              </p>
            </div>

            <div className="mt-12">
              <div className="p-4 bg-gradient-to-r from-[#405aff] to-[#ff37f2] rounded-tl-lg rounded-tr-lg">
                <h2 className="text-xl font-semibold text-white capitalize md:text-2xl">
                  Courses
                </h2>
              </div>
              <div
                className="bg-[#0A0329] p-5 max-h-60 overflow-y-auto"
                style={{
                  scrollbarColor: "#ff37f2 #0a0329",
                }}
              >
                {data?.data.length > 0 ? (
                  data?.data.map((product) => (
                    <div
                      key={product?.id}
                      className="hover:bg-gradient-to-l border hover:border-[#a855f7] hover:from-[#11043C] hover:to-[#291139] 
                          border-[rgb(255,125,255,0.05)] bg-[rgb(255,255,255,0.05)] p-4 rounded-lg mb-3 overflow-hidden hover:brightness-100"
                    >
                      <h2 className="relative text-base text-white md:text-lg">
                        {product?.title}
                      </h2>
                    </div>
                  ))
                ) : (
                  <h2 className="text-white">Loading...</h2>
                )}
              </div>
            </div>
          </div>
        </CommonContainer>
      </CommonSpace>
    </div>
  );
};

export default Course;
