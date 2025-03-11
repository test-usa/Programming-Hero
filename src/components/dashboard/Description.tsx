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
const Description = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="bg-[#160A2A] p-4 rounded-lg w-full">
      <div className="w-full my-6 space-y-4">
        <h1 className="text-gray-400 text-sm sm:text-xl">Module {10}</h1>
        <p className="text-gray-400">
          Description :- Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Molestiae illum, ullam ea, dolorum deserunt accusantium nam
          dolor doloremque ut, autem eveniet sint debitis pariatur ipsum vitae
          fugit explicabo sit inventore?
        </p>
        <p className="text-gray-400">
          Description :- Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Molestiae illum, ullam ea, dolorum deserunt accusantium nam
          dolor doloremque ut, autem eveniet sint debitis pariatur ipsum vitae
          fugit explicabo sit inventore?
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
        <ModalContent className="mx-auto max-w-4xl max-h-[550px] my-auto">
          <ModalHeader className="flex flex-col gap-1 text-white">
            <img
              src={mic}
              alt="announcment-icon"
              className="max-w-32 sm:max-w-[200px] mt-10 sm:mt-0"
            />
          </ModalHeader>
          <ModalBody>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              pulvinar risus non risus hendrerit venenatis. Pellentesque sit
              amet hendrerit risus, sed porttitor quam.
            </p>
            <p className="text-white">
              Magna exercitation reprehenderit magna aute tempor cupidatat
              consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
              incididunt cillum quis.
            </p>
            <p className="text-white">
              Magna exercitation reprehenderit magna aute tempor cupidatat
              consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
              incididunt cillum quis.
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
