// components/DeleteModuleModal.tsx
import { Button } from '@heroui/button';

interface DeleteModuleModalProps {
  isOpen: boolean;
  closeDeleteModal: () => void;
  handleDeleteModule: (moduleId: string) => void; // Function to delete a module
  moduleToDelete: string | null; // ID of the module to delete
}

const DeleteModuleModal = ({
  isOpen,
  closeDeleteModal,
  handleDeleteModule,
  moduleToDelete,
}: DeleteModuleModalProps) => {
  if (!isOpen || !moduleToDelete) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-[#2a213a] p-6 rounded-lg w-[400px]">
        <h2 className="text-[#EAAAFF] font-semibold text-lg mb-4">Delete Module</h2>
        <p className="text-white">Are you sure you want to delete this module?</p>
        <div className="flex justify-end gap-4 mt-6">
          <Button
            onClick={closeDeleteModal}
            className="bg-gray-600 text-white hover:bg-gray-700"
          >
            Cancel
          </Button>
          <Button
            onClick={() => handleDeleteModule(moduleToDelete)}
            className="bg-red-600 text-white hover:bg-red-700"
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModuleModal;