import React from "react";
import AssignmentViewer from "./AssignmentViewer";
import QuizViewer from "./quizViwer";

interface ContentRendererProps {
  content: {
    type: string;
    name: string;
    url?: string;
    description?: string;
    quiz:any,
    assignment?: {
      id: string;
      title: string;
      totalMark: number;
      createdAt: string;
      updatedAt: string;
    };
  };
}

// Helper function to convert YouTube URL to embed URL
const getYouTubeEmbedUrl = (url: string): string => {
  const videoId = url.match(/(?:v=|\/)([a-zA-Z0-9_-]{11})/)?.[1];
  return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
};

const ContentRenderer = ({ content }: ContentRendererProps) => {
  if (!content) return <div>No content selected</div>;
  console.log(content)
  return (
    <div className="text-white">
      <h2 className="text-2xl font-semibold mb-4">{content.name}</h2>
      {content.type === "VIDEO" && (
        <div>
          <iframe
            src={getYouTubeEmbedUrl(content.url || "")} // Use the embed URL
            title={content.name}
            className="w-full h-96 rounded-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
      {content.type === "DESCRIPTION" && (
        <div>
          <p className="text-gray-300">{content.description}</p>
        </div>
      )}
      {content.type === "QUIZ" && (
        <div>
          <QuizViewer name={content.name} questions={content?.quiz.quiz}/>
        </div>
      )}
      {content.type === "ASSIGNMENT" && (
        <div>
          <AssignmentViewer assignment={content.assignment} />
        </div>
      )}
    </div>
  );
};

export default ContentRenderer;