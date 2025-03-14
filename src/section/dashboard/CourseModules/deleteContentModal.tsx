// components/DeleteContentModal.tsx
import { Button } from '@heroui/button';

interface DeleteContentModalProps {
  isOpen: boolean;
  closeDeleteModal: () => void;
  handleDeleteContent: (moduleId: string, contentId: string) => void; // Function to delete content
  contentToDelete: { moduleId: string; contentId: string } | null; // Module and content IDs to delete
}

const DeleteContentModal = ({
  isOpen,
  closeDeleteModal,
  handleDeleteContent,
  contentToDelete,
}: DeleteContentModalProps) => {
  if (!isOpen || !contentToDelete) return null;

  return (
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
            onClick={() => handleDeleteContent(contentToDelete.moduleId, contentToDelete.contentId)}
            className="bg-red-600 text-white hover:bg-red-700"
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteContentModal;