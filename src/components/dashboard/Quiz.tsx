import { useEffect, useState } from "react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import usePost from "../../hooks/shared/usePost";
import QuizResultFailed from "./QuizResultFailed";
import QuizResult from "./QuizResult";

const Quiz = (quizData: any) => {
  const {
    data: postData,
    mutate,
    isPending,
    isSuccess,
  } = usePost(`/quiz/submit-quiz`);

  console.log(postData, isSuccess, isPending, "15 line posted data");
  const data = quizData?.data?.data;
  const navigate = useNavigate();
  const [quizLength, setQuizLenght] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<
    string | number | null
  >();
  const [sumbitedData, setSumitedData] = useState<
    {
      quizId: string | number;
      answer: number | string;
    }[]
  >([]);
  const allQuiz = data?.[quizLength];
  const handleNextQuiz = () => {
    if (quizLength < data?.length - 1) {
      setQuizLenght(quizLength + 1);
    }
  };
  const handlePreviousQuiz = () => {
    if (quizLength > 0) {
      setQuizLenght(quizLength - 1);
    } else if (quizLength >= data?.length) {
      setQuizLenght(quizLength);
    }
  };

  useEffect(() => {
    const previousAnswer = sumbitedData.find(
      (item) => item.quizId === allQuiz?.id
    );
    if (previousAnswer) {
      setSelectedOption(previousAnswer?.answer);
    } else {
      setSelectedOption(null);
    }
  }, [quizLength, allQuiz?.id, sumbitedData]);

  const handleSelect = (selectedAnswer: number, quizId: string) => {
    setSelectedOption(selectedAnswer);
    setSumitedData((prev) => {
      const existingIndex = prev.findIndex((item) => item.quizId === quizId);
      if (existingIndex !== -1) {
        return prev.map((item, index) =>
          index === existingIndex ? { ...item, answer: selectedAnswer } : item
        );
      } else {
        return [...prev, { quizId, answer: selectedAnswer }];
      }
    });
  };

  const handleSubmit = () => {
    if (sumbitedData.length === data?.length) {
      const payload = {
        contentId: quizData?.contentId,
        answerSheet: sumbitedData,
      };
      console.log("Submitted:", payload);
      mutate(payload);
      if (isSuccess && postData) {
        setSumitedData([]);
        setSelectedOption(null);
        setQuizLenght(0);
      }
    } else {
      toast.error("Please complete all questions before submitting!");
    }
  };
  const resultData = postData?.data?.data;

  return (
    <div className="w-full h-[450px]">
      {isSuccess &&
      resultData?.correctAnswers < 5 &&
      resultData?.incorrectAnswers > 5 &&
      resultData?.isCompleted ? (
        <QuizResultFailed successResult={postData} />
      ) : isSuccess &&
        resultData?.correctAnswers > 6 &&
        resultData?.incorrectAnswers < 5 &&
        resultData?.isCompleted ? (
        <QuizResult successResult={postData} />
      ) : (
        <div className="w-full bg-[#160A2A] rounded-md p-6">
          <section className="flex items-center justify-between gap-x-4 w-full">
            <div className="flex items-center w-full gap-x-4">
              <p className="text-white">Quiz Progress</p>

              <div className="flex w-[50%] items-center gap-x-4">
                <div
                  className={`w-[${
                    quizLength * 10
                  }%] h-2 bg-gradient-to-r from-green-500 to-green-300 rounded-md`}
                />
                <p className="text-white">
                  {quizLength + 1}/{data?.length}
                </p>
              </div>
            </div>

            <button
              onClick={() => navigate(-1)}
              className="bg-[#1f1134] text-red-500 py-1 px-3 rounded-full"
            >
              Quit
            </button>
          </section>
          <div className="w-[100%] h-0.5 bg-gray-800 my-4" />
          {/* SELECT QUESTION  */}
          <section className="w-full space-y-6">
            <h1 className="text-gray-300 sm:text-xl">{allQuiz?.question}</h1>
            <div className="grid sm:grid-cols-2 py-3 gap-4 items-center w-full">
              {allQuiz?.options?.map((item: string, index: number) => {
                return (
                  <>
                    <label className="flex items-center gap-x-5 w-full border border-gray-700 rounded-lg p-2 cursor-pointer">
                      <input
                        type="radio"
                        name="quizOption"
                        checked={selectedOption === index + 1}
                        className="hidden peer"
                        onChange={() => handleSelect(index + 1, allQuiz?.id)}
                      />
                      <h1 className="text-white sm:text-xl">
                        {String.fromCharCode(65 + index)}
                      </h1>
                      <p className="text-gray-700 sm:text-xl">{item}</p>
                      <IoCheckmarkCircleOutline
                        className={`text-2xl rounded-full transition-all duration-200 ml-auto ${
                          selectedOption === index + 1
                            ? "text-black bg-purple-700"
                            : "hidden"
                        }`}
                      />
                    </label>
                  </>
                );
              })}
            </div>

            {/* PAGINATION BUTTON  */}
            <div className="flex items-center justify-end gap-x-8 w-full pt-4">
              {quizLength === data?.length - 1 ? (
                <>
                  <button
                    onClick={handlePreviousQuiz}
                    className="text-purple-500 border border-purple-500 py-2 px-5 rounded-full flex gap-x-2 items-center"
                  >
                    <MdKeyboardArrowLeft className="text-purple-500 text-xl" />
                    <span>Prev</span>
                  </button>

                  <button
                    onClick={handleSubmit}
                    className="border border-purple-600 text-purple-500 py-2 px-5 rounded-full gap-x-2 items-center flex"
                  >
                    Submit
                  </button>
                </>
              ) : (
                <>
                  {quizLength > 0 && (
                    <button
                      onClick={handlePreviousQuiz}
                      className="text-purple-500 border border-purple-500 py-2 px-5 rounded-full flex gap-x-2 items-center"
                    >
                      <MdKeyboardArrowLeft className="text-purple-500 text-xl" />
                      <span>Prev</span>
                    </button>
                  )}

                  <button
                    onClick={handleNextQuiz}
                    className="border border-purple-600 text-purple-500 py-2 px-5 rounded-full gap-x-2 items-center flex"
                  >
                    <span>Next</span>
                    <MdKeyboardArrowRight className="text-xl" />
                  </button>
                </>
              )}
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Quiz;
