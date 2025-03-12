import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FaPen } from "react-icons/fa";
import CommonContainer from "../../common/CommonContainer";
import CommonSpace from "../../common/CommonSpace";
import useFetch from "../../hooks/shared/useFetch";
import usePost from "../../hooks/shared/usePost";
import { toast } from "react-toastify";
import useDelete from "../../hooks/shared/useDelete";
import useUpdate from "../../hooks/shared/useUpdate";
import { IoTrash } from "react-icons/io5";

const Course = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useFetch(`/course/${id}`);
  const { data: instructorsData, isLoading: isInstructorsLoading } = useFetch('/instructor?sortBy=email&sortOrder=desc');

  const [openModule, setOpenModule] = useState<string | null>(null);
  const [newTitle, setNewTitle] = useState("");
  const [isTitleChangeModalOpen, setIsTitleChangeModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [newModuleTitle, setNewModuleTitle] = useState("");
  const [isCreateModuleModalOpen, setIsCreateModuleModalOpen] = useState(false);
  const [instructors, setInstructors] = useState<any[]>([]);
  const [selectedInstructor, setSelectedInstructor] = useState<string | null>(null);
  const [isInstructorDropdownOpen, setIsInstructorDropdownOpen] = useState(false);
  const [isRemoveInstructorModalOpen, setIsRemoveInstructorModalOpen] = useState(false);
  const [moduleToDelete, setModuleToDelete] = useState<string | null>(null);
  const [isDeleteModuleModalOpen, setIsDeleteModuleModalOpen] = useState(false);
  const [contentToDelete, setContentToDelete] = useState<string | null>(null);
  const [isDeleteContentModalOpen, setIsDeleteContentModalOpen] = useState(false);

  const { mutate: deleteCourse, isPending } = useDelete(`/course/`);
  const { mutate: createModule, isPending: isCreatingModule } = usePost(`/module`);
  const { mutate: assignInstructor, isPending: isAssigningInstructor } = useUpdate(`/course/add-instructor/${id}`);
  const { mutate: removeInstructor, isPending: isRemovingInstructor } = useUpdate(`/course/remove-instructor/${id}`);
  const { mutate: deleteModule, isPending: isDeletingModule } = useDelete(`/module/`);
  const { mutate: deleteContent, isPending: isDeletingContent } = useDelete(`/content/delete-content/`);

  useEffect(() => {
    if (instructorsData?.data) {
      setInstructors(instructorsData.data);
    }
  }, [instructorsData]);

  const toggleModule = (moduleId: string) => {
    setOpenModule(openModule === moduleId ? null : moduleId);
  };

  const handleTitleChange = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Updated title: ${newTitle}`);
    setIsTitleChangeModalOpen(false);
  };

  const handleDeleteCourse = () => {
    deleteCourse(id, {
      onSuccess: () => {
        toast.success("Course deleted successfully!");
        setIsDeleteModalOpen(false);
        navigate("/dashboard/courses");
      },
      onError: (error) => {
        console.error("Error deleting course:", error);
        toast.error("Failed to delete course. Please try again.");
      },
    });
  };

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

  const handleAssignInstructor = (instructorId: string) => {
    const instructorData = {
      instructorId: instructorId,
    };
    assignInstructor(instructorData, {
      onSuccess: () => {
        toast.success("Instructor assigned successfully!");
        setSelectedInstructor(instructorId);
      },
      onError: (error) => {
        console.error("Error assigning instructor:", error);
        toast.error("Failed to assign instructor. Please try again.");
      },
    });
  };

  const handleRemoveInstructor = () => {
    removeInstructor({}, {
      onSuccess: () => {
        toast.success("Instructor removed successfully!");
        setIsRemoveInstructorModalOpen(false);
      },
      onError: (error) => {
        console.error("Error removing instructor:", error);
        toast.error("Failed to remove instructor. Please try again.");
      },
    });
  };

  const handleDeleteModule = () => {
    if (moduleToDelete) {
      deleteModule(moduleToDelete, {
        onSuccess: () => {
          toast.success("Module deleted successfully!");
          setIsDeleteModuleModalOpen(false);
          setModuleToDelete(null);
        },
        onError: (error) => {
          console.error("Error deleting module:", error);
          toast.error("Failed to delete module. Please try again.");
        },
      });
    }
  };

  const handleDeleteContent = () => {
    if (contentToDelete) {
      deleteContent(contentToDelete, {
        onSuccess: () => {
          toast.success("Content deleted successfully!");
          setIsDeleteContentModalOpen(false);
          setContentToDelete(null);
        },
        onError: (error) => {
          console.error("Error deleting content:", error);
          toast.error("Failed to delete content. Please try again.");
        },
      });
    }
  };

  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const isInstructor = user?.state?.user?.data?.user?.role === 'INSTRUCTOR';

  return (
    <div className="p-4">
      <CommonSpace>
        <CommonContainer>
          <div className="md:w-[85%] w-full mx-auto">
            {/* Header and Course Title */}
            <div className=" ">
              <div className="flex items-center">
                <h1 className="text-white font-semibold md:text-4xl text-2xl text-center ">
                  {isLoading ? "Loading..." : data?.data?.title || "Course Curriculum"}
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

              {/* Show Details, Delete Button, Assign Instructor Button */}
              <div className="mt-2">
                {data?.data?.instructor ? (
                  <div className="text-white text-center flex gap-1 items-center">
                    Current Instructor: {data.data.instructor.email}
                    <button
                      onClick={() => setIsRemoveInstructorModalOpen(true)}
                      className="ml-4 bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition-colors"
                    >
                      <IoTrash />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setIsInstructorDropdownOpen(!isInstructorDropdownOpen)}
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                  >
                    Assign Instructor
                  </button>
                )}
              </div>
            </div>
            <div className="flex mb-4 gap-4 mt-5">
              <Link to={`/course-modules/${id}`}>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                  Course Editor
                </button>
              </Link>
              <button
                onClick={() => setIsDeleteModalOpen(true)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
                disabled={isPending}
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
                {isInstructor && (
                  <button
                    onClick={() => setIsCreateModuleModalOpen(true)}
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gradient-to-l transition-all"
                  >
                    <FaPen />
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
                      <button
                        onClick={() => toggleModule(module.id)}
                        className="w-full text-left p-4 bg-[#1E1E2F] text-white font-semibold rounded-lg flex justify-between items-center"
                      >
                        {module.title}
                        <div className="flex items-center gap-2">
                          <span>{openModule === module.id ? "▲" : "▼"}</span>
                          {isInstructor && (
                            <button
                              onClick={() => {
                                setModuleToDelete(module.id);
                                setIsDeleteModuleModalOpen(true);
                              }}
                              className="text-red-500 hover:text-red-600"
                            >
                              <IoTrash />
                            </button>
                          )}
                        </div>
                      </button>
                      {openModule === module.id && (
                        <div className="bg-[#22223A] p-4 mt-2 rounded-lg">
                          {module.content.length > 0 ? (
                            module.content.map((content: any) => (
                              <div key={content.id} className="mb-3 p-3 bg-[#1E1E2F] rounded-lg">
                                <p className="text-white font-semibold">{content.title}</p>
                                <p className="text-sm text-white/70">Type: {content.contentType}</p>
                                {content.contentType !== "QUIZ" && (
                                  <>
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
                                <div className="mt-3 flex gap-2">
                                  <Link to={`/course-modules/${content.id}`}>
                                    <button className="bg-purple-600 text-white px-3 py-1 rounded-lg hover:bg-purple-700 transition-colors">
                                      Show Details
                                    </button>
                                  </Link>
                                  {isInstructor && (
                                    <button
                                      onClick={() => {
                                        setContentToDelete(content.id);
                                        setIsDeleteContentModalOpen(true);
                                      }}
                                      className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition-colors"
                                    >
                                      Remove
                                    </button>
                                  )}
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

      {/* Assign Instructor Modal */}
      {isInstructorDropdownOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-opacity-50 bg-[#2E2E4F]">
          <div className="w-[400px] p-6 bg-[#1A1A2E] rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-white">Select Instructor</h2>
            <select
              className="w-full p-2 rounded-lg mb-4 bg-[#2E2E4F] text-white"
              onChange={(e) => setSelectedInstructor(e.target.value)}
            >
              <option value="">Select an instructor</option>
              {instructors.map((instructor) => (
                <option key={instructor.id} value={instructor.id}>
                  {instructor.email}
                </option>
              ))}
            </select>
            <button
              onClick={() => {
                if (selectedInstructor) {
                  handleAssignInstructor(selectedInstructor);
                }
                setIsInstructorDropdownOpen(false);
              }}
              className="w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Assign
            </button>
            <button
              onClick={() => setIsInstructorDropdownOpen(false)}
              className="mt-4 w-full py-2 text-white bg-gray-500 rounded-lg hover:bg-gray-600 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Remove Instructor Modal */}
      {isRemoveInstructorModalOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-opacity-50 bg-[#2E2E4F]">
          <div className="w-[400px] p-6 bg-[#1A1A2E] rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-white">Remove Instructor</h2>
            <p className="text-white">Are you sure you want to remove the current instructor?</p>
            <div className="mt-4 flex justify-between gap-4">
              <button
                onClick={() => setIsRemoveInstructorModalOpen(false)}
                className="w-full py-2 text-white bg-gray-500 rounded-lg hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleRemoveInstructor}
                className="w-full py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors"
                disabled={isRemovingInstructor}
              >
                {isRemovingInstructor ? "Removing..." : "Remove"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Module Modal */}
      {isDeleteModuleModalOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-opacity-50 bg-[#2E2E4F]">
          <div className="w-[400px] p-6 bg-[#1A1A2E] rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-white">Delete Module</h2>
            <p className="text-white">Are you sure you want to delete this module?</p>
            <div className="mt-4 flex justify-between gap-4">
              <button
                onClick={() => setIsDeleteModuleModalOpen(false)}
                className="w-full py-2 text-white bg-gray-500 rounded-lg hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteModule}
                className="w-full py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors"
                disabled={isDeletingModule}
              >
                {isDeletingModule ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Content Modal */}
      {isDeleteContentModalOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-opacity-50 bg-[#2E2E4F]">
          <div className="w-[400px] p-6 bg-[#1A1A2E] rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-white">Delete Content</h2>
            <p className="text-white">Are you sure you want to delete this content?</p>
            <div className="mt-4 flex justify-between gap-4">
              <button
                onClick={() => setIsDeleteContentModalOpen(false)}
                className="w-full py-2 text-white bg-gray-500 rounded-lg hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteContent}
                className="w-full py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors"
                disabled={isDeletingContent}
              >
                {isDeletingContent ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Course;