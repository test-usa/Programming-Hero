import { useEffect, useState } from "react";
import CommonContainer from "../../common/CommonContainer";
import CommonSpace from "../../common/CommonSpace";

const Course = () => {
  const [modules, setModules] = useState([
    {
      id: 1,
      moduleNumber: "Module 11",
      title: "Responsive Website Assignment",
      status: "completed",
    },
    {
      id: 2,
      moduleNumber: "Module 12",
      title: "Introduction To Talented",
      status: "in-progress",
    },
    {
      id: 3,
      moduleNumber: "Module 13",
      title: "Biker Zone With Daisy UI",
      status: "not-started",
    },
    {
      id: 4,
      moduleNumber: "Module 14",
      title: "Tea Landing Page With DaisyUI",
      status: "completed",
    },
  ]);

  // Comment out the API fetching logic
  /*
  useEffect(() => {
    fetch("https://ph-lms.onrender.com/modules")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched Data:", data);
        setModules(data.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  */

  return (
    <div className="bg-[#010313] p-4">
      <CommonSpace>
        <CommonContainer>
          <div className="md:w-[85%] w-full mx-auto">
            {/* Header and Description */}
            <div className="md:w-[70%] w-full mx-auto">
              <h1 className="mb-6 text-2xl font-semibold text-center text-white md:text-4xl">
                Course Curriculum
              </h1>
              <p className="text-lg text-center text-white/50">
                Programming Hero's dynamic course guides students from MERN
                stack basics to complete mastery, ensuring a strong foundation.
                This comprehensive approach makes the learning journey smooth
                and engaging.
              </p>
            </div>

            {/* Course Modules Table */}
            <div className="mt-12">
              <div className="p-4 bg-gradient-to-r from-[#405aff] to-[#ff37f2] rounded-tl-lg rounded-tr-lg">
                <h2 className="text-xl font-semibold text-white capitalize md:text-2xl">
                  Course Modules
                </h2>
              </div>
              <div className="bg-[#0A0329] p-5 rounded-bl-lg rounded-br-lg">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-600">
                      <th className="p-2 text-left text-white">Module</th>
                      <th className="p-2 text-left text-white">Title</th>
                      <th className="p-2 text-left text-white">Status</th>
                      <th className="p-2 text-left text-white">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {modules.length > 0 ? (
                      modules.map((module) => (
                        <tr
                          key={module.id}
                          className="border-b border-gray-600"
                        >
                          <td className="p-2 text-white">
                            {module.moduleNumber}
                          </td>
                          <td className="p-2 text-white">{module.title}</td>
                          <td className="p-2">
                            <span
                              className={`px-2 py-1 rounded-full text-sm ${
                                module.status === "completed"
                                  ? "bg-green-500 text-white"
                                  : module.status === "in-progress"
                                  ? "bg-yellow-500 text-black"
                                  : "bg-red-500 text-white"
                              }`}
                            >
                              {module.status}
                            </span>
                          </td>
                          <td className="p-2">
                            <button className="px-3 py-1 mr-2 text-white transition-colors bg-purple-600 rounded-lg hover:bg-purple-700">
                              Show Details
                            </button>
                            {module.status === "completed" && (
                              <button className="px-3 py-1 text-white transition-colors bg-red-600 rounded-lg hover:bg-red-700">
                                Remove
                              </button>
                            )}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="4" className="p-4 text-center text-white">
                          Loading...
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </CommonContainer>
      </CommonSpace>
    </div>
  );
};

export default Course;