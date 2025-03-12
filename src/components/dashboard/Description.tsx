import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/react";
import mic from "/photo/description.png";
import { useState } from "react";

interface Descriptionprops {
  description: {
    description: string;
    title: string;
  };
}
const Description = ({ description }: Descriptionprops) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="bg-[#160A2A] p-4 rounded-lg w-full">
      <div className="w-full my-6 space-y-4">
        <h1 className="text-gray-400 text-sm sm:text-xl">
          {description?.title}
        </h1>
        <p className="text-gray-400">
          {description?.description?.slice(0, 380)}..
        </p>

        <div className=" mt-5 flex items-center justify-end">
          <button
            onClick={() => setIsOpen(true)}
            className="border border-gray-300 hover:border-red-500 py-2 px-4 rounded-full text-gray-300 hover:text-red-500"
          >
            See More
          </button>
        </div>
      </div>
      {/* MODAL START */}
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        backdrop="blur"
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      >
        <ModalContent className="mx-auto max-w-4xl max-h-fit my-auto">
          <ModalHeader className="flex flex-col gap-1 text-white">
            <img
              src={mic}
              alt="announcment-icon"
              className="max-w-32 sm:max-w-[200px] mt-10 sm:mt-0"
            />
          </ModalHeader>
          <ModalBody>
            <p className="text-white first-letter:text-purple-500 first-letter:text-2xl first-letter:font-semibold">
              {description?.description}
            </p>
          </ModalBody>
          <ModalFooter>
            <Button
              color="danger"
              variant="light"
              onClick={() => setIsOpen(false)}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Description;
