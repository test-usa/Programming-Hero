import { MdEdit, MdDelete, MdVisibility } from "react-icons/md";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Button } from '@heroui/button';
import { useEffect, useState } from "react";

interface ModuleListProps {
  data: Array<{
    id: string;
    title: string;
    contents: Array<{
      type: string;
      id: string;
      name: string;
      url?: string;
      questions?: Array<{ question: string; options: string[]; answer: string }>;
      description?: string;
    }>;
  }>;
  handleViewContent: (content: any) => void;
  handleAddContent: (moduleId: string) => void;
  openUpdateModal: (content: any) => void;
  openDeleteModal: (moduleId: string, contentId?: string) => void;
}

const ModuleList = ({
  data,
  handleViewContent,
  handleAddContent,
  openUpdateModal,
  openDeleteModal,
}: ModuleListProps) => {
  const [userRole, setUserRole] = useState<string | null>(null);
  const isInstructor = userRole === "INSTRUCTOR";

  useEffect(() => {
    const storedState = JSON.parse(localStorage.getItem("state"));
    setUserRole(storedState?.user?.data?.role || null);
  }, []);

  return (
    <ScrollArea
      className="h-[60vh] overflow-y-auto w-full rounded-md py-4"
      style={{ scrollbarColor: "#ff37f2 #0a0329" }}
    >
      <div className="flex flex-col gap-5">
        {data?.map((module) => (
          <div key={module.id} className="bg-[#2a213a] p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-[#EAAAFF] font-semibold text-lg">{module.title}</h2>
              <div className="flex items-center gap-2">
                {isInstructor && (
                  <button
                    onClick={() => openUpdateModal(module)}
                    className="bg-yellow-600 text-white px-3 py-1 rounded-lg hover:bg-yellow-700 transition-colors"
                  >
                    <MdEdit />
                  </button>
                )}
                {isInstructor && (
                  <button
                    onClick={() => openDeleteModal(module.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition-colors"
                  >
                    <MdDelete />
                  </button>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              {module.contents.map((content) => (
                <div key={content.id} className="flex items-center justify-between p-2 bg-[#3a324a] rounded-lg">
                  <span className="text-white">{content.name}</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleViewContent(content)}
                      className="bg-purple-600 text-white px-3 py-1 rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      <MdVisibility />
                    </button>
                    {isInstructor && (
                      <button
                        onClick={() => openUpdateModal(content)}
                        className="bg-yellow-600 text-white px-3 py-1 rounded-lg hover:bg-yellow-700 transition-colors"
                      >
                        <MdEdit />
                      </button>
                    )}
                    {isInstructor && (
                      <button
                        onClick={() => openDeleteModal(module.id, content.id)}
                        className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition-colors"
                      >
                        <MdDelete />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
            {isInstructor && (
              <button
                onClick={() => handleAddContent(module.id)}
                className="w-full mt-3 bg-[#C941F5] text-white py-2 rounded-lg hover:bg-[#C941F5]/90 transition-colors"
              >
                Add Content
              </button>
            )}
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};

export default ModuleList;