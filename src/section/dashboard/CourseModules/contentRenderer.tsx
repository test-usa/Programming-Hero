import React from "react";

interface ContentRendererProps {
  content: {
    type: string;
    name: string;
    url?: string;
    description?: string;
    totalMark?: number; // Add totalMark for assignment type
  };
}

const ContentRenderer = ({ content }: ContentRendererProps) => {
  if (!content) return <div>No content selected</div>;

  return (
    <div className="text-white">
      <h2 className="text-2xl font-semibold mb-4">{content.name}</h2>
      {content.type === "VIDEO" && (
        <div>
          <iframe
            src={content.url || ""}
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
          <p className="text-gray-300">Quiz content will be displayed here.</p>
        </div>
      )}
      {content.type === "ASSIGNMENT" && (
        <div>
          <p className="text-gray-300">Assignment Details:</p>
          <p className="text-gray-300">Total Mark: {content.totalMark}</p>
          {/* Add more assignment details here if needed */}
        </div>
      )}
    </div>
  );
};

export default ContentRenderer;