import { useState, useEffect } from "react";
import { Button } from '@heroui/button';
import { toast } from "react-toastify";
import useUpdate from "../../../hooks/shared/useUpdate"; // Import useUpdate hook

interface UpdateModalProps {
  isOpen: boolean;
  contentToUpdate: any;
  closeUpdateModal: () => void;
  handleUpdateContent: (moduleId: string, contentId: string, updatedContent: any) => void;
}

const UpdateModal = ({
  isOpen,
  contentToUpdate,
  closeUpdateModal,
  handleUpdateContent,
}: UpdateModalProps) => {
  const [title, setTitle] = useState(contentToUpdate?.name || "");
  const [video, setVideo] = useState(contentToUpdate?.url || "");
  const [description, setDescription] = useState(contentToUpdate?.description || "");

  const { mutate: updateContent, isPending: isUpdating } = useUpdate(`/content/${contentToUpdate?.id}`); // Use the useUpdate hook

  // Pre-fill fields with existing data when contentToUpdate changes
  useEffect(() => {
    if (contentToUpdate) {
      setTitle(contentToUpdate.name || "");
      setVideo(contentToUpdate.url || "");
      setDescription(contentToUpdate.description || "");
    }
  }, [contentToUpdate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct the payload dynamically
    const updatedContent: any = { title };
    if (contentToUpdate.type === "VIDEO" && video) {
      updatedContent.video = video;
    }
    if (contentToUpdate.type === "DESCRIPTION" && description) {
      updatedContent.description = description;
    }

    updateContent(updatedContent, {
      onSuccess: () => {
        toast.success("Content updated successfully!");
        handleUpdateContent(contentToUpdate.moduleId, contentToUpdate.id, updatedContent);
        closeUpdateModal();
      },
      onError: (error) => {
        console.error("Error updating content:", error);
        toast.error("Failed to update content. Please try again.");
      },
    });
  };

  if (!isOpen || !contentToUpdate) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-[#2a213a] p-6 rounded-lg w-[400px]">
        <h2 className="text-[#EAAAFF] font-semibold text-lg mb-4">Update Content</h2>
        <form onSubmit={handleSubmit}>
          {/* Title Field (Always Visible) */}
          <div className="mb-4">
            <label className="block text-white text-sm mb-2">Title</label>
            <input
              type="text"
              className="w-full p-2 rounded-lg bg-[#1E1E2F] text-white"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Video URL Field (Only for VIDEO type) */}
          {contentToUpdate.type === "VIDEO" && (
            <div className="mb-4">
              <label className="block text-white text-sm mb-2">Video URL</label>
              <input
                type="text"
                className="w-full p-2 rounded-lg bg-[#1E1E2F] text-white"
                value={video}
                onChange={(e) => setVideo(e.target.value)}
              />
            </div>
          )}

          {/* Description Field (Only for DESCRIPTION type) */}
          {contentToUpdate.type === "DESCRIPTION" && (
            <div className="mb-4">
              <label className="block text-white text-sm mb-2">Description</label>
              <textarea
                className="w-full p-2 rounded-lg bg-[#1E1E2F] text-white"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          )}

          {/* Buttons */}
          <div className="flex justify-end gap-4">
            <Button
              onClick={closeUpdateModal}
              className="bg-gray-600 text-white hover:bg-gray-700"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-blue-600 text-white hover:bg-blue-700"
              disabled={isUpdating}
            >
              {isUpdating ? "Updating..." : "Update"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateModal;