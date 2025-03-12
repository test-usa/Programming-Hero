import React, { useState } from "react";
import { Plus } from "lucide-react"; // Import a plus icon for the create button
import { toast } from "react-toastify";
import usePost from "../../../hooks/shared/usePost"; // Assuming you have a usePost hook

interface QuizViewerProps {
  name: string;
  questions: Array<{
    question: string;
    options: string[];
    correctAnswer: string;
  }>;
  moduleId: string; // Add moduleId to associate quizzes with a module
  contentId: string; // Add contentId to associate quizzes with content
  onQuizzesCreated: () => void; // Callback to refresh the quiz list
}

const QuizViewer = ({ name, questions, moduleId, contentId, onQuizzesCreated }: QuizViewerProps) => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [newQuizzes, setNewQuizzes] = useState<
    Array<{
      question: string;
      options: string[];
      correctAnswer: number; // Use number for correctAnswer index (0-based)
    }>
  >([]);

  const { mutate: createQuiz, isPending: isQuizPending } = usePost("/quiz"); // API hook for creating quizzes

  // Function to open the modal for creating quizzes
  const handleCreateQuizClick = () => {
    setIsCreateModalOpen(true);
  };

  // Function to add a new quiz question
  const handleAddQuiz = () => {
    setNewQuizzes([
      ...newQuizzes,
      {
        question: "",
        options: ["", "", "", ""],
        correctAnswer: 0, // Default to the first option (0-based)
      },
    ]);
  };

  // Function to handle changes in quiz questions
  const handleQuizChange = (
    index: number,
    field: "question" | "options" | "correctAnswer",
    value: string | number | string[]
  ) => {
    const updatedQuizzes = [...newQuizzes];
    updatedQuizzes[index][field] = value as never;
    setNewQuizzes(updatedQuizzes);
  };

  // Function to save the created quizzes
  const handleSaveQuizzes = () => {
    // Validate quiz questions
    for (const quiz of newQuizzes) {
      if (quiz.question.trim().length < 4) {
        toast.error("Each quiz question must be at least 4 characters long.");
        return; // Stop submission if validation fails
      }
    }

    // Prepare quiz data for the API
    const quizData = {
      contentId, // Use the provided contentId
      totalMark: newQuizzes.length * 10, // Assuming each question is worth 10 marks
      quizesData: newQuizzes.map((quiz) => ({
        ...quiz,
        correctAnswer: quiz.correctAnswer + 1, // Convert 0-based index to 1-based index
      })),
    };

    // Send the quiz data to the API
    createQuiz(quizData, {
      onSuccess: () => {
        toast.success("Quizzes created successfully!");
        setIsCreateModalOpen(false); // Close the modal
        onQuizzesCreated(); // Refresh the quiz list
        setNewQuizzes([]); // Clear the form
      },
      onError: (error) => {
        toast.error(error.response?.data?.message || "Failed to create quizzes");
      },
    });
  };

  return (
    <div className="max-h-[600px] w-full p-4 bg-[#2a213a] rounded-lg">
      <h2 className="text-[#EAAAFF] font-semibold text-lg mb-2">{name}</h2>

      {/* Display existing quiz questions */}
      {questions?.map((question, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-white font-semibold">{question.question}</h3>
          <ul className="list-disc list-inside text-white">
            {question.options.map((option, idx) => (
              <li key={idx}>{option}</li>
            ))}
          </ul>
          <p className="text-green-400">Correct Answer: {question.correctAnswer}</p>
        </div>
      ))}

      {/* Button to open the "Create Quiz" modal */}
      <button
        onClick={handleCreateQuizClick}
        className="mt-4 flex items-center gap-1 text-sm text-purple-400 hover:text-purple-300"
      >
        <Plus size={16} /> Create Quiz
      </button>

      {/* Modal for Creating Quizzes */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-100">
          <div className="bg-[#2a213a] rounded-lg p-6 w-full max-w-2xl max-h-[80vh] overflow-y-auto">
            <h3 className="text-[#EAAAFF] font-semibold text-lg mb-4">Create Quiz Questions</h3>

            {/* List of new quiz questions */}
            {newQuizzes.map((quiz, index) => (
              <div key={index} className="mb-6">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-400">Question {index + 1}</label>
                  <input
                    type="text"
                    value={quiz.question}
                    onChange={(e) => handleQuizChange(index, "question", e.target.value)}
                    className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#C941F5]"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-400">Options</label>
                  {quiz.options.map((option, idx) => (
                    <input
                      key={idx}
                      type="text"
                      value={option}
                      onChange={(e) => {
                        const newOptions = [...quiz.options];
                        newOptions[idx] = e.target.value;
                        handleQuizChange(index, "options", newOptions);
                      }}
                      className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#C941F5]"
                      required
                    />
                  ))}
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-400">Correct Answer</label>
                  <select
                    value={quiz.correctAnswer}
                    onChange={(e) => handleQuizChange(index, "correctAnswer", parseInt(e.target.value))}
                    className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#C941F5]"
                    required
                  >
                    {quiz.options.map((_, optionIndex) => (
                      <option key={optionIndex} value={optionIndex}>
                        {optionIndex + 1} {/* Display as 1, 2, 3, 4 */}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            ))}

            {/* Button to add a new quiz question */}
            <button
              onClick={handleAddQuiz}
              className="w-full flex items-center justify-center gap-1 text-sm text-purple-400 hover:text-purple-300 mb-4"
            >
              <Plus size={16} /> Add Another Question
            </button>

            {/* Modal Actions */}
            <div className="flex justify-end gap-2 mt-6">
              <button
                onClick={() => setIsCreateModalOpen(false)}
                className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveQuizzes}
                className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
                disabled={isQuizPending}
              >
                {isQuizPending ? "Saving..." : "Save Quizzes"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizViewer;