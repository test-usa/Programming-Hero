import { useState, useEffect } from "react";
import backIcons from "/photo/backicons.png";
import { Button } from '@heroui/button';
import DashNavbar from "../../../components/dashboard/DashNavbar";
import CommonContainer from "../../../common/CommonContainer";
import Footer from "../../../layout/Footer";
import useFetch from "../../../hooks/shared/useFetch";
import { useParams } from "react-router-dom";
import CreateContentModal from "./CreateContent";
import QuizViewer from "./quizViwer";
import { toast } from "react-toastify";
import useDelete from "../../../hooks/shared/useDelete";
import usePost from "../../../hooks/shared/usePost";
import AssignmentViewer from "./assignmentViewer";
import ContentRenderer from "./contentRenderer";
import ModuleList from "./moduleList";
import UpdateModal from "./updateModal";
import DeleteContentModal from "./deleteContentModal";
import DeleteModuleModal from "./deleteModuleModal";

// Utility function to get user role from local storage
const getUserRole = () => {
  const userData = localStorage.getItem("state");
  if (userData) {
    const parsedData = JSON.parse(userData);
    return parsedData.state.user.data.user.role;
  }
  return null;
};

interface Content {
  id: string;
  type: string; // VIDEO, QUIZ, DESCRIPTION, ASSIGNMENT
  name: string;
  url: string | null;
  description: string | null;
  quiz?: any;
  assignment?: {
    id: string;
    title: string;
    totalMark: number;
  } | null;
}

interface Module {
  id: string;
  title: string;
  contents: Content[];
}

const Modules = () => {
  const { courseId } = useParams<{ courseId: string }>(); // Get the course ID from the URL
  const [url, setUrl] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [no, setNo] = useState<number>(0);
  const [modules, setModules] = useState<Module[]>([]);
  const [selectedContent, setSelectedContent] = useState<Content | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState<boolean>(false);
  const [contentToDelete, setContentToDelete] = useState<{ moduleId: string; contentId: string } | null>(null);
  const [contentToUpdate, setContentToUpdate] = useState<Content | null>(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);
  const [selectedModuleId, setSelectedModuleId] = useState<string | null>(null);
  const [moduleToDelete, setModuleToDelete] = useState<string | null>(null);
  const [isDeleteModuleModalOpen, setIsDeleteModuleModalOpen] = useState<boolean>(false);

  // State for Create Module Modal
  const [isCreateModuleModalOpen, setIsCreateModuleModalOpen] = useState<boolean>(false);
  const [newModuleTitle, setNewModuleTitle] = useState<string>("");

  // Get the user role from local storage
  const [userRole, setUserRole] = useState<string | null>(null);
  const [isInstructor,setIsInstructor] = useState<boolean | null>(null)

  useEffect(() => {
    const storedState = JSON.parse(localStorage.getItem("user"));
    storedState?.state?.user?.data?.user?.role === "INSTRUCTOR"? setIsInstructor(true) : setIsInstructor(false)
  }, []);



  // Fetch data from the API
  const { data: apiResponse, loading, error } = useFetch(`/module/${courseId}`);

  // Map API response to the expected format
  useEffect(() => {
    if (apiResponse && apiResponse.success) {
      const formattedModules: Module[] = apiResponse.data.map((module: any) => ({
        id: module.id,
        title: module.title,
        contents: module.content.map((content: any) => ({
          id: content.id,
          type: content.contentType, // Use contentType from the API
          name: content.title,
          url: content.video || "",
          description: content.description || "",
          quiz: content.quiz,
          assignment: content.assignment || null,
        })),
      }));

      setModules(formattedModules);
    }
  }, [apiResponse]);

  // Define handleAddModule
  const { mutate: createModule, isPending: isCreatingModule } = usePost(`/module`);

  const handleCreateModule = () => {
    const moduleData = {
      title: newModuleTitle,
      courseId,
    };

    createModule(moduleData, {
      onSuccess: (response) => {
        if (response.success) {
          toast.success("Module created successfully!");
          setModules((prevModules) => [
            ...prevModules,
            {
              id: response.data.id,
              title: newModuleTitle,
              contents: [],
            },
          ]);
          setIsCreateModuleModalOpen(false);
          setNewModuleTitle("");
        }
      },
      onError: (error) => {
        console.error("Error creating module:", error);
        toast.error("Failed to create module. Please try again.");
      },
    });
  };

  // Define handleAddContent
  const handleAddContent = (moduleId: string) => {
    setSelectedModuleId(moduleId);
    setIsCreateModalOpen(true);
  };

  const handleContentCreated = () => {
    setIsCreateModalOpen(false);
    setSelectedModuleId(null);
  };

  // Define handleViewContent
  const handleViewContent = (content: Content, moduleId: string) => {
    setSelectedContent(content);
    setSelectedModuleId(moduleId); // Set the selected module ID
    if (content.type === "VIDEO") {
      setUrl(content.url || "");
      setName(content.name);
      setNo(parseInt(content.id));
    } else if (content.type === "QUIZ") {
      setName(content.name);
      setNo(parseInt(content.id));
    } else if (content.type === "DESCRIPTION") {
      setName(content.name);
      setNo(parseInt(content.id));
    } else if (content.type === "ASSIGNMENT") {
      setName(content.name);
      setNo(parseInt(content.id));
      setSelectedContent((prevContent) => ({
        ...prevContent,
        assignment: content.assignment || null,
      }));
    }
  };

  // Define openUpdateModal
  const openUpdateModal = (content: Content) => {
    setContentToUpdate(content);
    setIsUpdateModalOpen(true);
  };

  // Define closeUpdateModal
  const closeUpdateModal = () => {
    setIsUpdateModalOpen(false);
    setContentToUpdate(null);
  };

  // Define handleUpdateContent
  const handleUpdateContent = (moduleId: string, contentId: string, updatedContent: any) => {
    setModules((prevModules) =>
      prevModules.map((module) =>
        module.id === moduleId
          ? {
              ...module,
              contents: module.contents.map((content) =>
                content.id === contentId
                  ? {
                      ...content,
                      name: updatedContent.title,
                      url: updatedContent.video || content.url,
                      description: updatedContent.description || content.description,
                    }
                  : content
              ),
            }
          : module
      )
    );
  };

  // Define openDeleteModal
  const openDeleteModal = (moduleId: string, contentId?: string) => {
    if (contentId) {
      setContentToDelete({ moduleId, contentId });
      setIsDeleteModalOpen(true);
    } else {
      setModuleToDelete(moduleId);
      setIsDeleteModuleModalOpen(true);
    }
  };

  // Define closeDeleteModal
  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setContentToDelete(null);
  };

  

  // Define handleDeleteContent
  const { mutate: deleteContent, isPending: isDeletingContent } = useDelete(`/content/delete-content/`);

  const handleDeleteContent = (moduleId: string, contentId: string) => {
    deleteContent(contentId, {
      onSuccess: () => {
        toast.success("Content deleted successfully!");
        setIsDeleteModalOpen(false);
        setContentToDelete(null);
        setModules((prevModules) =>
          prevModules.map((module) =>
            module.id === moduleId
              ? {
                  ...module,
                  contents: module.contents.filter((content) => content.id !== contentId),
                }
              : module
          )
        );
        setSelectedContent(null);
      },
      onError: (error) => {
        console.error("Error deleting content:", error);
        toast.error("Failed to delete content. Please try again.");
      },
    });
  };

  // Define handleDeleteModule
  const { mutate: deleteModule, isPending: isDeletingModule } = useDelete(`/module/`);

  const handleDeleteModule = () => {
    if (moduleToDelete) {
      deleteModule(moduleToDelete, {
        onSuccess: () => {
          toast.success("Module deleted successfully!");
          setIsDeleteModuleModalOpen(false);
          setModuleToDelete(null);
          setModules((prevModules) => prevModules.filter((module) => module.id !== moduleToDelete));
        },
        onError: (error) => {
          console.error("Error deleting module:", error);
          toast.error("Failed to delete module. Please try again.");
        },
      });
    }
  };

  // Handle "Previous" and "Next" button clicks
  const handleNextContent = () => {
    if (selectedModuleId && selectedContent) {
      const selectedModule = modules.find((module) => module.id === selectedModuleId);
      if (selectedModule) {
        const currentIndex = selectedModule.contents.findIndex((content) => content.id === selectedContent.id);
        if (currentIndex < selectedModule.contents.length - 1) {
          const nextContent = selectedModule.contents[currentIndex + 1];
          handleViewContent(nextContent, selectedModuleId); // Pass moduleId
        }
      }
    }
  };

  const handlePreviousContent = () => {
    if (selectedModuleId && selectedContent) {
      const selectedModule = modules.find((module) => module.id === selectedModuleId);
      if (selectedModule) {
        const currentIndex = selectedModule.contents.findIndex((content) => content.id === selectedContent.id);
        if (currentIndex > 0) {
          const previousContent = selectedModule.contents[currentIndex - 1];
          handleViewContent(previousContent, selectedModuleId); // Pass moduleId
        }
      }
    }
  };

  // Disable "Previous" and "Next" buttons when no content is selected or at the start/end
  const isPreviousDisabled =
    !selectedContent ||
    !selectedModuleId ||
    (selectedModuleId &&
      selectedContent &&
      modules
        .find((module) => module.id === selectedModuleId)
        ?.contents.findIndex((content) => content.id === selectedContent.id) === 0);


        
  const isNextDisabled =
    !selectedContent ||
    !selectedModuleId ||
    (selectedModuleId &&
      selectedContent &&
      modules
        .find((module) => module.id === selectedModuleId)
        ?.contents.findIndex((content) => content.id === selectedContent.id) ===
        modules.find((module) => module.id === selectedModuleId)?.contents.length - 1);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <main className="bg-[#010313] w-full">
      <DashNavbar />
      <CommonContainer>
        <div className="pt-10 flex w-full gap-10">
          {/* HEADER SECTION START */}
          <section className="w-2/3 h-full">
      <section className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-x-3">
          <button>
            <img
              src={backIcons}
              alt="back-button"
              className="max-w-[36px] min-w-[28px]"
            />
          </button>
          <h1 className="font-semibold text-2xl text-[#EAAAFF]">
            {no} {name}
          </h1>
        </div>

        {isInstructor && (
          <Button
            onClick={() => setIsCreateModuleModalOpen(true)}
            className="bg-[#C941F5] text-white hover:bg-[#C941F5]/90 transition-colors"
            disabled={isCreatingModule}
          >
            {isCreatingModule ? "Creating..." : "Add Module"}
          </Button>
        )}
      </section>

      <div className="w-full h-[1px] my-6 bg-gradient-to-b from-purple-400 to-blue-950 via-blue-300"></div>

      {/* VIDEO PLAYING SECTION */}
      <section className="flex flex-col w-full gap-x-5">
        {selectedContent?.type === "ASSIGNMENT" ? (
          <AssignmentViewer assignment={selectedContent.assignment} />
        ) : selectedContent?.type === "QUIZ" ? (
          <QuizViewer
            name={selectedContent.name}
            questions={selectedContent.quiz.quiz}
            contentId={selectedContent.id}
          />
        ) : (
          <ContentRenderer content={selectedContent} />
        )}

        {/* BUTTON SECTION */}
        <div className="flex items-center flex-row-reverse justify-between py-2 gap-x-4 mt-5">
          <div className="flex items-center gap-x-4">
            <Button
              size="lg"
              variant="outline"
              className="border border-[#9886FA] bg-gray-900 hover:bg-gray-900 hover:text-gray-400 text-gray-400"
              onClick={handlePreviousContent}
              disabled={isPreviousDisabled}
            >
              Previous
            </Button>
            <Button
              size="lg"
              className="text-gray-950 bg-[#9886FA] hover:bg-[#503dbb]"
              onClick={handleNextContent}
              disabled={isNextDisabled}
            >
              Next
            </Button>
          </div>

          {isInstructor && (
            <div className="flex items-center gap-x-4">
              <Button
                size="lg"
                variant="outline"
                className="border border-yellow-600 bg-gray-900 hover:bg-gray-900 hover:text-yellow-600 text-yellow-600"
                onClick={() => openUpdateModal(selectedContent!)}
                disabled={!selectedContent}
              >
                Update
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border border-red-600 bg-gray-900 hover:bg-gray-900 hover:text-red-600 text-red-600"
                onClick={() => openDeleteModal(selectedModuleId!, selectedContent?.id)}
                disabled={!selectedContent}
              >
                Delete
              </Button>
            </div>
          )}
        </div>
      </section>
    </section>

          {/* COURSE MODULES SECTION START */}
          <div className="text-white w-1/3 h-full">
            <div className="w-full flex items-center justify-between py-3">
              <h1 className="text-[#EAAAFF]">Running Module : 58</h1>
              <div className="w-[60%] flex items-center gap-x-3">
                <div
                  className="w-[100%] h-2 rounded-lg bg-gradient-to-r from-green-500 to-green-300"
                  style={{ width: `${100}%` }}
                ></div>
                <p className="text-[#EAAAFF]">11/11</p>
              </div>
            </div>

            {/* SEARCHBAR START */}
            <fieldset className="w-full space-y-1 dark:text-gray-800">
              <label htmlFor="Search" className="hidden">
                Search
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <button type="button" title="search" className="p-1 outline-none text-white">
                    <svg fill="currentColor" viewBox="0 0 512 512" className="w-full h-4 text-white">
                      <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                    </svg>
                  </button>
                </span>
                <input
                  type="search"
                  name="Search"
                  placeholder="Search..."
                  className="w-full py-3 pl-10 text-sm rounded-md focus:outline-none bg-gray-600 text-white"
                />
              </div>
            </fieldset>

            <section>
              <ModuleList
                data={modules}
                handleViewContent={handleViewContent}
                handleAddContent={handleAddContent}
                openUpdateModal={openUpdateModal}
                openDeleteModal={openDeleteModal}
                showDeleteButtons={userRole === "SUPER_ADMIN"} // Pass the user role to ModuleList
              />
            </section>
          </div>
          {/* COURSE MODULES SECTION END */}
        </div>
      </CommonContainer>

      {/* CREATE CONTENT MODAL */}
      <CreateContentModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        moduleId={selectedModuleId || ""}
        onContentCreated={handleContentCreated}
      />

      {/* UPDATE MODAL */}
      <UpdateModal
        isOpen={isUpdateModalOpen}
        contentToUpdate={contentToUpdate}
        closeUpdateModal={closeUpdateModal}
        handleUpdateContent={handleUpdateContent}
      />

      {/* DELETE CONTENT MODAL */}
      <DeleteContentModal
        isOpen={isDeleteModalOpen}
        closeDeleteModal={closeDeleteModal}
        handleDeleteContent={handleDeleteContent}
        contentToDelete={contentToDelete}
      />

      {/* DELETE MODULE MODAL */}
      <DeleteModuleModal
        isOpen={isDeleteModuleModalOpen}
        closeDeleteModal={() => setIsDeleteModuleModalOpen(false)}
        handleDeleteModule={handleDeleteModule}
        moduleToDelete={moduleToDelete}
      />

      {/* CREATE MODULE MODAL */}
      {isCreateModuleModalOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-opacity-50 bg-[#2E2E4F]">
          <div className="w-[400px] p-6 bg-[#1A1A2E] rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-white">Create New Module</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleCreateModule();
              }}
            >
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

      <div className="mt-20">
        <Footer />
      </div>
    </main>
  );
};

export default Modules;