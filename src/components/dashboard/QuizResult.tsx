import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/react";
import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const QuizResult = (successResult: any) => {
  const result = successResult?.successResult?.data?.data;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="w-full h-[450px] flex items-center justify-center bg-[#160A2A]">
      <section className="py-5">
        {/* circle of count assigment marks */}
        <div className="flex items-center justify-center mx-auto w-44 h-44 rounded-full border-4 border-green-400 ">
          <div className="flex items-center justify-center w-32 h-32 bg-green-100 rounded-full shadow-2xl shadow-green-400">
            <p className="text-black text-xl sm:text-2xl font-semibold">
              {result?.correctAnswers}/10
            </p>
          </div>
        </div>

        {/* circle of count assigment marks */}
        <div className="flex flex-col gap-4 items-center justify-center py-4">
          <h1 className="text-green-500 font-semibold text-sm sm:text-2xl">
            Greate Job!
          </h1>
          <p className="text-gray-400 font-semibold text-center sm:text-start sm:text-xl  ">
            You have completed the 10 quiz and achieve {result?.correctAnswers}{" "}
            Marks!
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsOpen(true)}
              className="border flex items-center border-green-500 text-green-500 py-2 px-4 gap-2 rounded-full "
            >
              <span>See Result</span>
              <MdKeyboardArrowRight />
            </button>
          </div>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
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
        </div>
      </section>
    </div>
  );
};

export default QuizResult;

