import { Link } from "react-router-dom";
import light from "/photo/light.png";

const StartQuiz = () => {
  return (
    <div className="w-full h-[450px] flex flex-col items-center justify-center bg-[#160A2A] gap-y-5">
      <div>
        <img src={light} alt="quiz-start-image" />
      </div>
      <div className="pt-5">
        <h1 className="sm:text-xl font-semibold text-white">
          Total Number of Question <span className="text-orange-400">{10}</span>
        </h1>
        <h1 className="sm:text-xl font-semibold text-white">
          Total Question Marks <span className="text-orange-400">{10}</span>
        </h1>
      </div>
      <Link
        to="#"
        className="sm:text-xl bg-gradient-to-tr from-purple-500 to-purple-600 text-white py-1.5 px-4 rounded-lg mt-5"
      >
        Start Quiz
      </Link>
    </div>
  );
};

export default StartQuiz;
