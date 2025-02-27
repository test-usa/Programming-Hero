import { useEffect, useState } from "react";
import CommonContainer from "../../common/CommonContainer";
import CommonSpace from "../../common/CommonSpace";
import Cookies from "js-cookie";
const Course = () => {
  const [products, setProducts] = useState([]);
  const [id, setId] = useState<string>("");
  const [modules, setModules] = useState<[]>([]);
  const token = Cookies.get("user");
  // GET ALL COURSES DATA --
  useEffect(() => {
    fetch("https://ph-lms.onrender.com/courses/getAll", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("Fetched Data,", data);
        setModules(data.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  // GET AND SETID --
  useEffect(() => {
    if (modules?.length > 0) {
      modules?.map((item) => {
        // console.log(item?.id, "2888888");
        setId(item?.id);
      });
    }
  }, [modules]);

  // GET SFECIFIC MODULES OF A MILESTONE --
  useEffect(() => {
    fetch(`https://ph-lms.onrender.com/modules/course/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched Modules Data:etty", data);
        setProducts(data.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [modules]);

  return (
    <div className="bg-[#010313] p-4">
      <CommonSpace>
        <CommonContainer>
          <div className=" md:w-[85%] w-full mx-auto">
            <div className="md:w-[70%] w-full mx-auto">
              <h1 className="text-white font-semibold md:text-4xl text-2xl text-center mb-6">
                Course Curriculum
              </h1>
              <p className="text-lg text-white/50 text-center ">
                Programming Hero's dynamic course guides students from MERN
                stack basics to complete mastery, ensuring a strong foundation.
                This comprehensive approach makes the learning journey smooth
                and engaging.
              </p>
            </div>

            <div className="mt-12">
              <div className="p-4 bg-gradient-to-r from-[#405aff] to-[#ff37f2] rounded-tl-lg rounded-tr-lg">
                <h2 className="text-white capitalize md:text-2xl text-xl font-semibold">
                  Course Module
                </h2>
              </div>
              <div
                className="bg-[#0A0329] p-5 max-h-60 overflow-y-auto"
                style={{
                  scrollbarColor: "#ff37f2 #0a0329",
                }}
              >
                {products?.length > 0 ? (
                  products.map((product) => (
                    <div
                      key={product?.id}
                      className="hover:bg-gradient-to-l border hover:border-[#a855f7] hover:from-[#11043C] hover:to-[#291139] 
                          border-[rgb(255,125,255,0.05)] bg-[rgb(255,255,255,0.05)] p-4 rounded-lg mb-3 overflow-hidden hover:brightness-100"
                    >
                      <h2 className="relative text-white text-base md:text-lg">
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