import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FaPen } from "react-icons/fa"; // Import edit (pen) icon
import CommonContainer from "../../common/CommonContainer";
import CommonSpace from "../../common/CommonSpace";
import useFetch from "../../hooks/shared/useFetch";
import usePost from "../../hooks/shared/usePost";
import { toast } from "react-toastify"; // For showing success/error messages
import useDelete from "../../hooks/shared/useDelete";

const Course = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // For redirecting after deletion
  const { data, isLoading } = useFetch(`/course/${id}`);

  const [openModule, setOpenModule] = useState<string | null>(null);
  const [newTitle, setNewTitle] = useState("");
  const [isTitleChangeModalOpen, setIsTitleChangeModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  // For creating a module
  const [newModuleTitle, setNewModuleTitle] = useState("");
  const [isCreateModuleModalOpen, setIsCreateModuleModalOpen] = useState(false);

  // Use the delete hook correctly
  const { mutate: deleteCourse, isPending } = useDelete(`/course/`);
  
  // Use the post hook for creating a module
  const { mutate: createModule, isPending: isCreatingModule } = usePost(`/module`);

  const toggleModule = (moduleId: string) => {
    setOpenModule(openModule === moduleId ? null : moduleId);
  };

  const handleTitleChange = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Updated title: ${newTitle}`);
    setIsTitleChangeModalOpen(false);
  };

  // Function to delete the course
  const handleDeleteCourse = () => {
    deleteCourse(id, {
      onSuccess: () => {
        toast.success("Course deleted successfully!");
        setIsDeleteModalOpen(false);
        navigate("/dashboard/courses");  // Redirect to /dashboard/courses after deletion
      },
      onError: (error) => {
        console.error("Error deleting course:", error);
        toast.error("Failed to delete course. Please try again.");
      },
    });
  };

  // Handle creating a new module
  const handleCreateModule = () => {
    const moduleData = {
      title: newModuleTitle,
      courseId: id,
    };
    createModule(moduleData, {
      onSuccess: () => {
        toast.success("Module created successfully!");
        setIsCreateModuleModalOpen(false);
      },
      onError: (error) => {
        console.error("Error creating module:", error);
        toast.error("Failed to create module. Please try again.");
      },
    });
  };

  // Retrieve the user data from localStorage
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  const isInstructor = user?.state?.user?.data?.user?.role === 'INSTRUCTOR';

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
              <Link to={`/course-modules/${id}`}>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                  Course Editor
                </button>
              </Link>
              <button
                onClick={() => setIsDeleteModalOpen(true)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
                disabled={isPending} // Disable while deleting
              >
                {isPending ? "Deleting..." : "Delete"}
              </button>
            </div>

            {/* Course Modules */}
            <div className="mt-12">
              <div className="p-4 bg-gradient-to-r from-[#405aff] to-[#ff37f2] rounded-tl-lg rounded-tr-lg flex justify-between">
                <h2 className="text-white capitalize md:text-2xl text-xl font-semibold">
                  Course Modules
                </h2>
                {/* Conditionally render Create Module button */}
                {isInstructor && (
                  <button
                    onClick={() => setIsCreateModuleModalOpen(true)}
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gradient-to-l transition-all"
                  >
                    <FaPen /> {/* Add the pen icon to the button */}
                    Create Module
                  </button>
                )}
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

      {/* Create Module Modal */}
      {isCreateModuleModalOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-opacity-50 bg-[#2E2E4F]">
          <div className="w-[400px] p-6 bg-[#1A1A2E] rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-white">Create New Module</h2>
            <form onSubmit={(e) => {
              e.preventDefault();
              handleCreateModule();
            }}>
              <input
                type="text"
                className="w-full p-2 rounded-lg mb-4 bg-[#2E2E4F] text-white"
                placeholder="Module Title"
                value={newModuleTitle}
                onChange={(e) => setNewModuleTitle(e.target.value)}
              />
              <button
                type="submit"
                className="w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
                disabled={isCreatingModule}
              >
                {isCreatingModule ? "Creating..." : "Create Module"}
              </button>
            </form>
            <button
              onClick={() => setIsCreateModuleModalOpen(false)}
              className="mt-4 w-full py-2 text-white bg-gray-500 rounded-lg hover:bg-gray-600 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Title Change Modal */}
      {isTitleChangeModalOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-opacity-50 bg-[#2E2E4F]">
          <div className="w-[400px] p-6 bg-[#1A1A2E] rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-white">Change Course Title</h2>
            <form onSubmit={handleTitleChange}>
              <input
                type="text"
                className="w-full p-2 rounded-lg mb-4 bg-[#2E2E4F] text-white"
                placeholder="New Course Title"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
              <button
                type="submit"
                className="w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Change Title
              </button>
            </form>
            <button
              onClick={() => setIsTitleChangeModalOpen(false)}
              className="mt-4 w-full py-2 text-white bg-gray-500 rounded-lg hover:bg-gray-600 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Delete Course Modal */}
      {isDeleteModalOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-opacity-50 bg-[#2E2E4F]">
          <div className="w-[400px] p-6 bg-[#1A1A2E] rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-white">Delete Course</h2>
            <p className="text-white">Are you sure you want to delete this course?</p>
            <div className="mt-4 flex justify-between gap-4">
              <button
                onClick={() => setIsDeleteModalOpen(false)}
                className="w-full py-2 text-white bg-gray-500 rounded-lg hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteCourse}
                className="w-full py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors"
                disabled={isPending}
              >
                {isPending ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Course;
