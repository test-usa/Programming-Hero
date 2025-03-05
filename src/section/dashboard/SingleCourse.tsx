import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaPen } from "react-icons/fa"; // Import edit (pen) icon
import CommonContainer from "../../common/CommonContainer";
import CommonSpace from "../../common/CommonSpace";
import useFetch from "../../hooks/shared/useFetch";

const Course = () => {
  const { id } = useParams();
  const { data, isLoading } = useFetch(`course/${id}`);

  const [openModule, setOpenModule] = useState<string | null>(null);
  const [newTitle, setNewTitle] = useState("");
  const [isTitleChangeModalOpen, setIsTitleChangeModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const toggleModule = (moduleId: string) => {
    setOpenModule(openModule === moduleId ? null : moduleId);
  };

  const handleTitleChange = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Updated title: ${newTitle}`);
    // Call API to update title here
    setIsTitleChangeModalOpen(false);
  };

  const handleDeleteCourse = () => {
    console.log(`Course deleted with ID: ${id}`);
    // Call API to delete course here
    setIsDeleteModalOpen(false);
  };

  return (
    <div className="p-4">
      <CommonSpace>
        <CommonContainer>
          <div className="md:w-[85%] w-full mx-auto">
            
            {/* Header and Course Title */}
            <div className="md:w-[70%] w-full mx-auto">
              <h1 className="text-white font-semibold md:text-4xl text-2xl text-center mb-6">
                {isLoading ? "Loading..." : data?.data?.title || "Course Curriculum"}
                {/* Edit Icon for title */}
                <button
                  className="ml-4 text-xl text-gray-400 hover:text-gray-500"
                  onClick={() => {
                    setNewTitle(data?.data?.title || "");
                    setIsTitleChangeModalOpen(true);
                  }}
                >
                  <FaPen />
                </button>
              </h1>
            </div>
            
            {/* Show Details, Delete Button */}
            <div className="flex justify-center mb-4 gap-4">
              <Link to="/course-modules">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                  Course Editor
                </button>
              </Link>
              <button
                onClick={() => setIsDeleteModalOpen(true)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
              >
                Delete
              </button>
            </div>

            {/* Course Modules */}
            <div className="mt-12">
              <div className="p-4 bg-gradient-to-r from-[#405aff] to-[#ff37f2] rounded-tl-lg rounded-tr-lg">
                <h2 className="text-white capitalize md:text-2xl text-xl font-semibold">
                  Course Modules
                </h2>
              </div>
              <div className="p-5 rounded-bl-lg rounded-br-lg">
                {isLoading ? (
                  <p className="text-white text-center p-4">Loading modules...</p>
                ) : data?.data?.module?.length > 0 ? (
                  data.data.module.map((module: any) => (
                    <div key={module.id} className="mb-4">
                      {/* Module Title */}
                      <button
                        onClick={() => toggleModule(module.id)}
                        className="w-full text-left p-4 bg-[#1E1E2F] text-white font-semibold rounded-lg flex justify-between items-center"
                      >
                        {module.title}
                        <span>{openModule === module.id ? "▲" : "▼"}</span>
                      </button>

                      {/* Module Content (Quiz, Assignment, Video, etc.) */}
                      {openModule === module.id && (
                        <div className="bg-[#22223A] p-4 mt-2 rounded-lg">
                          {module.content.length > 0 ? (
                            module.content.map((content: any) => (
                              <div key={content.id} className="mb-3 p-3 bg-[#1E1E2F] rounded-lg">
                                <p className="text-white font-semibold">{content.title}</p>
                                <p className="text-sm text-white/70">Type: {content.contentType}</p>

                                {/* Exclude QUIZ content */}
                                {content.contentType !== "QUIZ" && (
                                  <>
                                    {/* Assignment Details */}
                                    {content.contentType === "ASSIGNMENT" && content.assignment && (
                                      <div className="mt-2 p-2 bg-purple-800 rounded-lg">
                                        <p className="text-white text-sm">
                                          <strong>Assignment:</strong> {content.assignment.title}
                                        </p>
                                        <p className="text-white text-sm">
                                          <strong>Marks:</strong> {content.assignment.totalMark}
                                        </p>
                                      </div>
                                    )}
                                  </>
                                )}

                                {/* Buttons */}
                                <div className="mt-3 flex gap-2">
                                  <Link to={`/course-modules/${content.id}`}>
                                    <button className="bg-purple-600 text-white px-3 py-1 rounded-lg hover:bg-purple-700 transition-colors">
                                      Show Details
                                    </button>
                                  </Link>
                                  <button className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition-colors">
                                    Remove
                                  </button>
                                </div>
                              </div>
                            ))
                          ) : (
                            <p className="text-white text-center">No content available.</p>
                          )}
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <p className="text-white text-center p-4">No modules available.</p>
                )}
              </div>
            </div>
          </div>
        </CommonContainer>
      </CommonSpace>

      {/* Custom Modal for Updating Course Title */}
      {isTitleChangeModalOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-opacity-50 bg-[#1E1E2F]">
          <div className="w-[400px] p-6 bg-[#2E2E4F] rounded-lg shadow-md">
            <form onSubmit={handleTitleChange}>
              <h2 className="text-xl font-semibold mb-4 text-white">Change Course Title</h2>
              <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md mb-4"
                placeholder="Enter new course title"
              />
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsTitleChangeModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg mr-2"
                >
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Custom Modal for Deleting Course */}
      {isDeleteModalOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-opacity-50 bg-[#1E1E2F]">
          <div className="w-[400px] p-6 bg-[#2E2E4F] rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-white">Are you sure you want to delete this course?</h2>
            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setIsDeleteModalOpen(false)}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleDeleteCourse}
                className="px-4 py-2 bg-red-500 text-white rounded-lg"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Course;
