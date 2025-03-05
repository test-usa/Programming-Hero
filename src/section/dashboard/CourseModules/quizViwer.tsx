// components/QuizViewer.tsx
interface QuizViewerProps {
    name: string;
    questions: Array<{
      question: string;
      options: string[];
      answer: string;
    }>;
  }
  
  const QuizViewer = ({ name, questions }: QuizViewerProps) => {
    return (
      <div className="max-h-[600px] w-full p-4 bg-[#2a213a] rounded-lg">
        <h2 className="text-[#EAAAFF] font-semibold text-lg mb-2">{name}</h2>
        {questions?.map((question, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-white font-semibold">{question.question}</h3>
            <ul className="list-disc list-inside text-white">
              {question.options.map((option, idx) => (
                <li key={idx}>{option}</li>
              ))}
            </ul>
            <p className="text-green-400">Correct Answer: {question.answer}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default QuizViewer;