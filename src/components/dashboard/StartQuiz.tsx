import light from "/photo/light.png";
import { useEffect, useState } from "react";
import Quiz from "./Quiz";
import useFetch from "../../hooks/shared/useFetch";

interface Quizprops {
  quiz: {
    quiz: {
      contentId: number| string;
      quiz: [];
      totalMark: number;
    };
  };
}
const StartQuiz = ({ quiz }: Quizprops) => {
  const [showQuiz, setShowQuiz] = useState<boolean>(false);
  const [Id, setId] = useState<number | string>();
  const { data, refetch } = useFetch(`/quiz/start-quiz/${Id}`, {
    manual: true,
  });
  const handleShowQuizzes = (Id: number | string) => {
    setId(Id);
  };
  useEffect(() => {
    if (Id !== null) {
      refetch();
    }
  }, [Id, refetch]);

  useEffect(() => {
    if (data) {
      setShowQuiz(true);
    }
  }, [data]);

 

  return (
    <div className="w-full h-[450px] flex flex-col items-center justify-center bg-[#160A2A] gap-y-5">
      {showQuiz ? (
        <Quiz data={data} contentId={quiz?.quiz.contentId}/>
      ) : (
        <>
          <div>
            <img src={light} alt="quiz-start-image" />
          </div>
          <div className="pt-5">
            <h1 className="sm:text-xl font-semibold text-white">
              Total Number of Question{" "}
              <span className="text-orange-400">
                {quiz?.quiz?.quiz?.length}
              </span>
            </h1>
            <h1 className="sm:text-xl font-semibold text-white">
              Total Question Marks{" "}
              <span className="text-orange-400">{quiz?.quiz?.totalMark}</span>
            </h1>
          </div>
          <button
            onClick={() => handleShowQuizzes(quiz?.quiz?.contentId)}
            className="sm:text-xl bg-gradient-to-tr from-purple-500 to-purple-600 text-white py-1.5 px-4 rounded-lg mt-5"
          >
            Start Quiz
          </button>
        </>
      )}
    </div>
  );
};

export default StartQuiz;
