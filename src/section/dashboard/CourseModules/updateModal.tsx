// components/UpdateModal.tsx
import { Button } from '@heroui/button';

interface UpdateModalProps {
  isOpen: boolean;
  contentToUpdate: any;
  closeUpdateModal: () => void;
  handleUpdateContent: (moduleId: number, contentId: number, updatedContent: any) => void;
}

const UpdateModal = ({
  isOpen,
  contentToUpdate,
  closeUpdateModal,
  handleUpdateContent,
}: UpdateModalProps) => {
  if (!isOpen || !contentToUpdate) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-[#2a213a] p-6 rounded-lg w-[400px]">
        <h2 className="text-[#EAAAFF] font-semibold text-lg mb-4">Update Content</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const updatedContent = {
              ...contentToUpdate,
              name: e.currentTarget.contentName.value,
              url: e.currentTarget.contentUrl.value,
              description: e.currentTarget.contentDescription.value,
            };
            handleUpdateContent(contentToUpdate.moduleId, contentToUpdate.id, updatedContent);
          }}
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="contentName" className="block text-sm font-medium text-[#EAAAFF]">
                Content Name
              </label>
              <input
                type="text"
                id="contentName"
                name="contentName"
                defaultValue={contentToUpdate.name}
                className="w-full px-3 py-2 mt-1 bg-[#3a324a] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#9886FA]"
                required
              />
            </div>
            {contentToUpdate.type === "video" && (
              <div>
                <label htmlFor="contentUrl" className="block text-sm font-medium text-[#EAAAFF]">
                  Video URL
                </label>
                <input
                  type="url"
                  id="contentUrl"
                  name="contentUrl"
                  defaultValue={contentToUpdate.url}
                  className="w-full px-3 py-2 mt-1 bg-[#3a324a] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#9886FA]"
                  required
                />
              </div>
            )}
            {contentToUpdate.type === "description" && (
              <div>
                <label htmlFor="contentDescription" className="block text-sm font-medium text-[#EAAAFF]">
                  Description
                </label>
                <textarea
                  id="contentDescription"
                  name="contentDescription"
                  defaultValue={contentToUpdate.description}
                  className="w-full px-3 py-2 mt-1 bg-[#3a324a] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#9886FA]"
                  rows={4}
                  required
                />
              </div>
            )}
          </div>
          <div className="flex justify-end gap-4 mt-6">
            <Button
              type="button"
              onClick={closeUpdateModal}
              className="bg-gray-600 text-white hover:bg-gray-700"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-[#9886FA] text-white hover:bg-[#503dbb]"
            >
              Save
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateModal;