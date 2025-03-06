import { useState } from "react";
import { Button } from '@heroui/button';
import { toast } from "react-toastify";
import usePost from "../../../hooks/shared/usePost";

interface CreateContentModalProps {
  isOpen: boolean;
  onClose: () => void;
  moduleId: string;
  onContentCreated: () => void; // Callback to refresh the module list
}

interface QuizData {
  question: string;
  options: string[];
  correctAnswer: number;
}

interface AssignmentData {
  totalMark: number;
}

const CreateContentModal = ({ isOpen, onClose, moduleId, onContentCreated }: CreateContentModalProps) => {
  const [title, setTitle] = useState<string>("");
  const [contentType, setContentType] = useState<string>("VIDEO");
  const [videoUrl, setVideoUrl] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [quizzes, setQuizzes] = useState<QuizData[]>([
    { question: "", options: ["", "", "", ""], correctAnswer: 0 },
  ]);
  const [assignment, setAssignment] = useState<AssignmentData>({
    totalMark: 0,
  });

  const { mutate: createContent, isPending } = usePost("/content/create-content");
  const { mutate: createQuiz, isPending: isQuizPending } = usePost("/quiz");
  const { mutate: createAssignment, isPending: isAssignmentPending } = usePost("/assignment");

  const handleAddQuiz = () => {
    setQuizzes([...quizzes, { question: "", options: ["", "", "", ""], correctAnswer: 0 }]);
  };

  const handleRemoveQuiz = (index: number) => {
    const updatedQuizzes = quizzes.filter((_, i) => i !== index);
    setQuizzes(updatedQuizzes);
  };

  const handleQuizChange = (index: number, field: keyof QuizData, value: string | number | string[]) => {
    const updatedQuizzes = [...quizzes];
    updatedQuizzes[index][field] = value as never;
    setQuizzes(updatedQuizzes);
  };

  const handleAssignmentChange = (field: keyof AssignmentData, value: number) => {
    setAssignment({ ...assignment, [field]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const contentData = {
      title,
      contentType,
      video: contentType === "VIDEO" ? videoUrl : undefined,
      description: contentType === "DESCRIPTION" ? description : undefined,
      moduleId,
    };

    createContent(contentData, {
      onSuccess: (response) => {
        toast.success("Content created successfully!");
        const contentId = response.data.data.id;

        if (contentType === "QUIZ") {
          const quizData = {
            contentId,
            totalMark: quizzes.length * 10, // Assuming each question is worth 10 marks
            quizesData: quizzes,
          };

          createQuiz(quizData, {
            onSuccess: () => {
              toast.success("Quiz created successfully!");
              onClose();
              onContentCreated(); // Refresh the module list
            },
            onError: (error) => {
              toast.error(error.response?.data?.message || "Failed to create quiz");
            },
          });
        } else if (contentType === "ASSIGNMENT") {
          const assignmentData = {
            contentId,
            totalMark: assignment.totalMark,
          };

          createAssignment(assignmentData, {
            onSuccess: () => {
              toast.success("Assignment created successfully!");
              onClose();
              onContentCreated(); // Refresh the module list
            },
            onError: (error) => {
              toast.error(error.response?.data?.message || "Failed to create assignment");
            },
          });
        } else {
          onClose();
          onContentCreated(); // Refresh the module list
        }
      },
      onError: (error) => {
        toast.error(error.response?.data?.message || "Failed to create content");
      },
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-[#010313] p-6 rounded-lg w-full max-w-md max-h-[70vh] overflow-y-auto">
        <h2 className="text-[#EAAAFF] text-xl font-semibold mb-4">Create New Content</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-400">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#C941F5]"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400">Content Type</label>
            <select
              value={contentType}
              onChange={(e) => setContentType(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#C941F5]"
              required
            >
              <option value="VIDEO">Video</option>
              <option value="QUIZ">Quiz</option>
              <option value="DESCRIPTION">Description</option>
              <option value="ASSIGNMENT">Assignment</option>
            </select>
          </div>
          {contentType === "VIDEO" && (
            <div>
              <label className="block text-sm font-medium text-gray-400">Video URL</label>
              <input
                type="url"
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#C941F5]"
                required
              />
            </div>
          )}
          {contentType === "DESCRIPTION" && (
            <div>
              <label className="block text-sm font-medium text-gray-400">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#C941F5]"
                rows={4}
                required
              />
            </div>
          )}
          {contentType === "QUIZ" && (
            <div>
              <label className="block text-sm font-medium text-gray-400">Quizzes</label>
              {quizzes.map((quiz, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-sm font-medium text-gray-400">Question {index + 1}</label>
                    <Button
                      type="button"
                      onClick={() => handleRemoveQuiz(index)}
                      className="bg-red-600 text-white px-2 py-1 rounded-lg hover:bg-red-700 transition-colors"
                    >
                      Remove
                    </Button>
                  </div>
                  <input
                    type="text"
                    value={quiz.question}
                    onChange={(e) => handleQuizChange(index, "question", e.target.value)}
                    className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#C941F5]"
                    required
                  />
                  <div className="mb-2">
                    <label className="block text-sm font-medium text-gray-400">Options</label>
                    {quiz.options.map((option, optionIndex) => (
                      <input
                        key={optionIndex}
                        type="text"
                        value={option}
                        onChange={(e) => {
                          const updatedOptions = [...quiz.options];
                          updatedOptions[optionIndex] = e.target.value;
                          handleQuizChange(index, "options", updatedOptions);
                        }}
                        className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#C941F5]"
                        required
                      />
                    ))}
                  </div>
                  <div className="mb-2">
                    <label className="block text-sm font-medium text-gray-400">Correct Answer</label>
                    <select
                      value={quiz.correctAnswer}
                      onChange={(e) => handleQuizChange(index, "correctAnswer", parseInt(e.target.value))}
                      className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#C941F5]"
                      required
                    >
                      {quiz.options.map((_, optionIndex) => (
                        <option key={optionIndex} value={optionIndex}>
                          Option {optionIndex + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              ))}
              <Button
                type="button"
                onClick={handleAddQuiz}
                className="bg-[#C941F5] text-white hover:bg-[#C941F5]/90"
              >
                Add Quiz
              </Button>
            </div>
          )}
          {contentType === "ASSIGNMENT" && (
            <div>
              <label className="block text-sm font-medium text-gray-400">Total Mark</label>
              <input
                type="number"
                value={assignment.totalMark}
                onChange={(e) => handleAssignmentChange("totalMark", parseInt(e.target.value))}
                className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#C941F5]"
                required
              />
            </div>
          )}
          <div className="flex justify-end gap-2">
            <Button
              type="button"
              onClick={onClose}
              className="bg-gray-600 text-white hover:bg-gray-700"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-[#C941F5] text-white hover:bg-[#C941F5]/90"
              disabled={isPending || isQuizPending || isAssignmentPending}
            >
              {isPending || isQuizPending || isAssignmentPending ? "Creating..." : "Create"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateContentModal;