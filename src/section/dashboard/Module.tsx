import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { MdEdit, MdDelete, MdVisibility } from "react-icons/md";
import backIcons from "/photo/backicons.png";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Button } from '@heroui/button';
import CommonContainer from "../../common/CommonContainer";
import Footer from "../../layout/Footer";
import DashNavbar from "../../components/dashboard/DashNavbar";

const Module = () => {
  const [url, setUrl] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [no, setNo] = useState<number>(0);
  const [data, setData] = useState<Array<{ id: number; title: string; contents: Array<{ type: string; id: number; name: string; url?: string; questions?: Array<{ question: string; options: string[]; answer: string }>; description?: string }> }>>([]);
  const [selectedContent, setSelectedContent] = useState<any>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState<boolean>(false);
  const [contentToDelete, setContentToDelete] = useState<{ moduleId: number; contentId: number } | null>(null);


  const urlFunc = (url: string, name: string, No: number): void => {
    if (url && name) {
      setUrl(url);
      setName(name);
      setNo(No);
    } else {
      setUrl("");
      setName("");
    }
  };

  const handleAddModule = () => {
    const newModule = {
      id: Date.now(),
      title: `New Module ${data.length + 1}`,
      contents: [],
    };

    setData((prevData) => [...prevData, newModule]);
  };

  const handleAddContent = (moduleId: number) => {
    const newContent = {
      type: "video",
      id: Date.now(),
      name: "New Content",
      url: "",
    };

    setData((prevData) =>
      prevData.map((module) =>
        module.id === moduleId
          ? { ...module, contents: [...module.contents, newContent] }
          : module
      )
    );
  };

  const handleUpdateContent = (moduleId: number, contentId: number) => {
    console.log("Update Content:", moduleId, contentId);
    // Add logic to update the content
  };

  const handleDeleteContent = (moduleId: number, contentId: number) => {
    setData((prevData) =>
      prevData.map((module) =>
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

  const handleUpdateModule = (moduleId: number) => {
    console.log("Update Module:", moduleId);
    // Add logic to update the module
  };

  const handleDeleteModule = (moduleId: number) => {
    setData((prevData) => prevData.filter((module) => module.id !== moduleId));
    setIsDeleteModuleModalOpen(false); // Close the modal
  };

  const handleViewContent = (content: any) => {
    setSelectedContent(content);
    if (content.type === "video") {
      urlFunc(content.url || "", content.name, content.id);
    } else if (content.type === "quiz") {
      console.log("Start Quiz:", content.name);
    } else if (content.type === "description") {
      console.log("View Description:", content.description);
    }
  };

  const openDeleteModal = (moduleId: number, contentId: number) => {
    setContentToDelete({ moduleId, contentId });
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setContentToDelete(null);
  };



  const openUpdateModuleModal = (moduleId: number) => {
    setIsUpdateModalOpen(true);
  };

  const closeUpdateModuleModal = () => {
    setIsDeleteModalOpen(false);
  };

  useEffect(() => {
    const dummyData = [
      {
        id: 1,
        title: "Module 1: Introduction",
        contents: [
          { type: "video", id: 1, name: "Video 1: Getting Started", url: "https://example.com/video1" },
          { type: "quiz", id: 2, name: "Quiz 1: Basics", questions: [
            { question: "What is React?", options: ["A library", "A framework", "A language"], answer: "A library" },
            { question: "What is JSX?", options: ["A syntax extension", "A programming language", "A library"], answer: "A syntax extension" }
          ] },
          { type: "description", id: 3, name: "Description 1: Overview", description: "This module covers the basics of React and JSX." }
        ],
      },
      {
        id: 2,
        title: "Module 2: Advanced Topics",
        contents: [
          { type: "video", id: 4, name: "Video 2: Advanced Concepts", url: "https://example.com/video2" },
          { type: "quiz", id: 5, name: "Quiz 2: Advanced", questions: [
            { question: "What is a hook?", options: ["A function", "A component", "A state"], answer: "A function" },
            { question: "What is Redux?", options: ["A state management library", "A component library", "A framework"], answer: "A state management library" }
          ] },
          { type: "description", id: 6, name: "Description 2: Advanced Overview", description: "This module covers advanced topics like hooks and Redux." }
        ],
      },
      {
        id: 3,
        title: "Module 3: Project Work",
        contents: [
          { type: "video", id: 7, name: "Video 3: Project Setup", url: "https://example.com/video3" },
          { type: "quiz", id: 8, name: "Quiz 3: Project", questions: [
            { question: "What is npm?", options: ["A package manager", "A framework", "A language"], answer: "A package manager" },
            { question: "What is webpack?", options: ["A module bundler", "A framework", "A library"], answer: "A module bundler" }
          ] },
          { type: "description", id: 9, name: "Description 3: Project Overview", description: "This module covers project setup and deployment." }
        ],
      },
    ];

    setData(dummyData);
  }, []);

  const renderContent = () => {
    if (!selectedContent) return null;

    switch (selectedContent.type) {
      case "video":
        return (
          <div className="max-h-[600px] w-full">
            <ReactPlayer url={url} controls width="100%" height="600px" />
          </div>
        );
      case "description":
        return (
          <div className="max-h-[600px] w-full p-4 bg-[#2a213a] rounded-lg">
            <h2 className="text-[#EAAAFF] font-semibold text-lg mb-2">{selectedContent.name}</h2>
            <p className="text-white">{selectedContent.description}</p>
          </div>
        );
      case "quiz":
        return (
          <div className="max-h-[600px] w-full p-4 bg-[#2a213a] rounded-lg">
            <h2 className="text-[#EAAAFF] font-semibold text-lg mb-2">{selectedContent.name}</h2>
            {selectedContent.questions?.map((question: any, index: number) => (
              <div key={index} className="mb-4">
                <h3 className="text-white font-semibold">{question.question}</h3>
                <ul className="list-disc list-inside text-white">
                  {question.options.map((option: string, idx: number) => (
                    <li key={idx}>{option}</li>
                  ))}
                </ul>
                <p className="text-green-400">Correct Answer: {question.answer}</p>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

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
              {renderContent()}
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
                    onClick={() => handleUpdateContent(selectedContent?.moduleId, selectedContent?.id)}
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
              <ScrollArea
                className={`h-[60vh] overflow-y-auto w-full rounded-md py-4`}
                style={{
                  scrollbarColor: "#ff37f2 #0a0329",
                }}
              >
                {/* MODULES DROPDOWN START */}
                <div className="flex flex-col gap-5">
                  {data?.map((module) => (
                    <div key={module.id} className="bg-[#2a213a] p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h2 className="text-[#EAAAFF] font-semibold text-lg">
                          {module.title}
                        </h2>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleUpdateModule(module.id)}
                            className="bg-yellow-600 text-white px-3 py-1 rounded-lg hover:bg-yellow-700 transition-colors"
                          >
                            <MdEdit />
                          </button>
                          <button
                            onClick={() => openDeleteModuleModal(module.id)}
                            className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition-colors"
                          >
                            <MdDelete />
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3">
                        {module.contents.map((content) => (
                          <div
                            key={content.id}
                            className="flex items-center justify-between p-2 bg-[#3a324a] rounded-lg"
                          >
                            <span className="text-white">{content.name}</span>
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => handleViewContent(content)}
                                className="bg-purple-600 text-white px-3 py-1 rounded-lg hover:bg-purple-700 transition-colors"
                              >
                                <MdVisibility />
                              </button>
                              <button
                                onClick={() => handleUpdateContent(module.id, content.id)}
                                className="bg-yellow-600 text-white px-3 py-1 rounded-lg hover:bg-yellow-700 transition-colors"
                              >
                                <MdEdit />
                              </button>
                              <button
                                onClick={() => openDeleteModal(module.id, content.id)}
                                className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition-colors"
                              >
                                <MdDelete />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                      <button
                        onClick={() => handleAddContent(module.id)}
                        className="w-full mt-3 bg-[#C941F5] text-white py-2 rounded-lg hover:bg-[#C941F5]/90 transition-colors"
                      >
                        Add Content
                      </button>
                    </div>
                  ))}
                </div>
                {/* MODULES DROPDOWN END */}
              </ScrollArea>
            </section>
          </div>
          {/* COURSE MODULES SECTION END */}
        </div>
      </CommonContainer>
{/* Update modal */}
      {isUpdateModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-[#2a213a] p-6 rounded-lg w-[400px]">
            <h2 className="text-[#EAAAFF] font-semibold text-lg mb-4">Update Content</h2>
            <p className="text-white">Are you sure you want to delete this content?</p>
            <div className="flex justify-end gap-4 mt-6">
              <Button
                onClick={closeDeleteModal}
                className="bg-gray-600 text-white hover:bg-gray-700"
              >
                Cancel
              </Button>
              <Button
                onClick={() => {
                  if (contentToDelete) {
                    handleDeleteContent(contentToDelete.moduleId, contentToDelete.contentId);
                  }
                }}
                className="bg-red-600 text-white hover:bg-red-700"
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      )}
      {/* DELETE MODAL */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-[#2a213a] p-6 rounded-lg w-[400px]">
            <h2 className="text-[#EAAAFF] font-semibold text-lg mb-4">Delete Content</h2>
            <p className="text-white">Are you sure you want to delete this content?</p>
            <div className="flex justify-end gap-4 mt-6">
              <Button
                onClick={closeDeleteModal}
                className="bg-gray-600 text-white hover:bg-gray-700"
              >
                Cancel
              </Button>
              <Button
                onClick={() => {
                  if (contentToDelete) {
                    handleDeleteContent(contentToDelete.moduleId, contentToDelete.contentId);
                  }
                }}
                className="bg-red-600 text-white hover:bg-red-700"
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      )}

      <div className="mt-20">
        <Footer /> 
      </div>
    </main>
  );
};

export default Module;