// components/ContentRenderer.tsx

import DescriptionViewer from "./descriptionViwer";
import QuizViewer from "./quizViwer";
import VideoPlayer from "./vidoePlayer";


interface ContentRendererProps {
  content: any;
}

const ContentRenderer = ({ content }: ContentRendererProps) => {
  if (!content) return null;

  switch (content.type) {
    case "VIDEO":
      return <VideoPlayer url={content.url} />;
    case "DESCRIPTION":
      return (
        <DescriptionViewer name={content.name} description={content.description} />
      );
    case "QUIZ":
      return <QuizViewer name={content.name} questions={content.questions} />;
    default:
      return null;
  }
};

export default ContentRenderer;