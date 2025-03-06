// Module.tsx
import { useState, useEffect } from "react";
import backIcons from "/photo/backicons.png";
import { Button } from '@heroui/button';
import ContentRenderer from "./contentRenderer";
import UpdateModal from "./updateModal";
import DeleteModal from "./deleteModal";
import ModuleList from "./moduleList";
import DashNavbar from "../../../components/dashboard/DashNavbar";
import CommonContainer from "../../../common/CommonContainer";
import Footer from "../../../layout/Footer";
import useFetch from "../../../hooks/shared/useFetch";
import { useParams } from "react-router-dom";
import CreateContentModal from "./CreateContent";

const Modules = () => {
  const { courseId } = useParams(); // Get the course ID from the URL
  const [url, setUrl] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [no, setNo] = useState<number>(0);
  const [modules, setModules] = useState<Array<{
    id: string;
    title: string;
    contents: Array<{
      id: string;
      type: string; // VIDEO, QUIZ, DESCRIPTION, ASSIGNMENT
      name: string;
      url: string | null;
      description: string | null;
    }>;
  }>>([]);
  const [selectedContent, setSelectedContent] = useState<any>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState<boolean>(false);
  const [contentToDelete, setContentToDelete] = useState<{ moduleId: string; contentId: string } | null>(null);
  const [contentToUpdate, setContentToUpdate] = useState<any>(null);

  const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);
  const [selectedModuleId, setSelectedModuleId] = useState<string | null>(null);

  // Fetch data from the API
  const { data: apiResponse, loading, error } = useFetch(`/module/${courseId}`);

  // Map API response to the expected format
  useEffect(() => {
    if (apiResponse && apiResponse.success) {
      const formattedModules = apiResponse.data.map((module: any) => ({
        id: module.id,
        title: module.title,
        contents: module.content.map((content: any) => ({
          id: content.id,
          type: content.contentType, // Use contentType from the API
          name: content.title,
          url: content.video || "",
          description: content.description || "",
          totalMark: content.totalMark || 0, // Add totalMark for assignment type
        })),
      }));
      setModules(formattedModules);
    }
  }, [apiResponse]);

  // Define handleAddModule
  const handleAddModule = () => {
    const newModule = {
      id: Date.now().toString(), // Ensure ID is a string
      title: `New Module ${modules.length + 1}`,
      contents: [],
    };

    setModules((prevModules) => [...prevModules, newModule]);
  };

  // Define handleAddContent
  const handleAddContent = (moduleId: string) => {
    setSelectedModuleId(moduleId);
    setIsCreateModalOpen(true);
  };

  const handleContentCreated = () => {
    // Refresh the module list or update the state as needed
    setIsCreateModalOpen(false);
    setSelectedModuleId(null);
  };

  // Define handleViewContent
  const handleViewContent = (content: any) => {
    setSelectedContent(content);
    if (content.type === "VIDEO") {
      setUrl(content.url || "");
      setName(content.name);
      setNo(parseInt(content.id)); // Ensure ID is a number for display
    } else if (content.type === "QUIZ") {
      setName(content.name);
      setNo(parseInt(content.id));
    } else if (content.type === "DESCRIPTION") {
      setName(content.name);
      setNo(parseInt(content.id));
    } else if (content.type === "ASSIGNMENT") {
      setName(content.name);
      setNo(parseInt(content.id));
      // Add totalMark to the selectedContent object
      setSelectedContent((prevContent: any) => ({
        ...prevContent,
        totalMark: content.totalMark || 0, // Default to 0 if totalMark is not provided
      }));
    }
  };

  // Define openUpdateModal
  const openUpdateModal = (content: any) => {
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
                content.id === contentId ? { ...content, ...updatedContent } : content
              ),
            }
          : module
      )
    );
    setIsUpdateModalOpen(false); // Close the modal
  };

  // Define openDeleteModal
  const openDeleteModal = (moduleId: string, contentId: string) => {
    setContentToDelete({ moduleId, contentId });
    setIsDeleteModalOpen(true);
  };

  // Define closeDeleteModal
  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setContentToDelete(null);
  };

  // Define handleDeleteContent
  const handleDeleteContent = (moduleId: string, contentId: string) => {
    setModules((prevModules) =>
      prevModules.map((module) =>
        module.id === moduleId
          ? {
              ...module,
              contents: module.contents.filter(
                (content) => content.id !== contentId
              ),
            }
          : module
      )
    );
    setSelectedContent(null); // Clear the selected content after deletion
    setIsDeleteModalOpen(false); // Close the modal
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <main className="bg-[#010313] w-full">
      <DashNavbar />
      <CommonContainer>
        <div className="pt-10 flex w-full gap-10 ">
          {/* HEADER SECTION START */}
          {/* video section */}
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
              <Button
                onClick={handleAddModule}
                className="bg-[#C941F5] text-white hover:bg-[#C941F5]/90 transition-colors"
              >
                Add Module
              </Button>
            </section>
            {/* HEADER SECTION END */}
            <div className="w-full h-[1px] my-6 bg-gradient-to-b from-purple-400 to-blue-950 via-blue-300"></div>

            {/* VIDEO PLAYING SECTION START */}
            <section className="flex flex-col w-full gap-x-5">
              <ContentRenderer content={selectedContent} />
              {/* BUTTON START */}
              <div className="flex items-center justify-between py-2 gap-x-4">
                <div className="flex items-center gap-x-4">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border border-[#9886FA] bg-gray-900 hover:bg-gray-900 hover:text-gray-400 text-gray-400"
                  >
                    Previous
                  </Button>
                  <Button
                    size="lg"
                    className="text-gray-950 bg-[#9886FA] hover:bg-[#503dbb]"
                  >
                    Next
                  </Button>
                </div>
                <div className="flex items-center gap-x-4">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border border-yellow-600 bg-gray-900 hover:bg-gray-900 hover:text-yellow-600 text-yellow-600"
                    onClick={() => openUpdateModal(selectedContent)}
                  >
                    Update
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border border-red-600 bg-gray-900 hover:bg-gray-900 hover:text-red-600 text-red-600"
                    onClick={() => openDeleteModal(selectedContent?.moduleId, selectedContent?.id)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
              {/* BUTTON END */}
            </section>
            {/* VIDEO PLAYING SECTION END */}
          </section>
          {/* video section */}

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
                  <button
                    type="button"
                    title="search"
                    className="p-1 outline-none text-white"
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 512 512"
                      className="w-full h-4 text-white"
                    >
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

      {/* DELETE MODAL */}
      <DeleteModal
        isOpen={isDeleteModalOpen}
        closeDeleteModal={closeDeleteModal}
        handleDeleteContent={handleDeleteContent}
        contentToDelete={contentToDelete}
      />

      <div className="mt-20">
        <Footer /> 
      </div>
    </main>
  );
};

export default Modules;