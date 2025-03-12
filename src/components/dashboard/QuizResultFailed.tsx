import { useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/react";
import { MdKeyboardArrowRight } from "react-icons/md";

const QuizResultFailed = (successResult: any) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  console.log(successResult);
  return (
    <div className="w-full h-[450px] flex items-center justify-center bg-[#160A2A]">
      <section className="py-5 w-full">
        {/* Circle of count assignment marks */}
        <div className="flex items-center justify-center mx-auto w-44 h-44 rounded-full border-4 border-red-500 ">
          <div className="flex items-center justify-center w-32 h-32 bg-red-200 rounded-full shadow-2xl shadow-red-400">
            <p className="text-black text-sm sm:text-2xl font-semibold">
              {2}/{10}
            </p>
          </div>
        </div>

        {/* Circle of count assignment marks */}
        <div className="flex flex-col gap-4 items-center justify-center py-4 w-full">
          <h1 className="text-red-500 font-semibold text-sm sm:text-2xl">
            Very Disappointing!
          </h1>
          <p className="text-white font-semibold text-center sm:text-start text-sm md:text-xl">
            You have total marks only 5!
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsOpen(true)}
              className="border border-red-500 text-red-500 py-2 px-4 rounded-full flex items-center"
            >
              <span>See result</span>
              <MdKeyboardArrowRight />
            </button>
          </div>
        </div>

        {/* Show modal */}

        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          backdrop="blur"
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        >
          <ModalContent className="mx-auto max-w-4xl max-h-80 my-auto">
            <ModalHeader className="flex flex-col gap-1 text-white">
              Modal Title
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
            </ModalBody>
            <ModalFooter>
              <Button
                color="danger"
                variant="light"
                onClick={() => setIsOpen(false)}
              >
                Close
              </Button>
              <Button color="primary" onClick={() => setIsOpen(false)}>
                Action
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </section>
    </div>
  );
};

export default QuizResultFailed;
