import { create } from "zustand";
import { persist } from "zustand/middleware";

type ContentItem = {
  id: string;
  type: "video" | "description" | "quiz" | "assignment";
  title: string;
  url?: string;
  description?: string;
  quiz?: object;
  assignment?: object;
  no?: number;
};

type Outlinetype = {
  video: { url: string; title: string; no?: number; id: string } | null;
  description: { description: string; title: string; id: string } | null;
  quiz: { quiz: object; title: string; id: string } | null;
  assignment: { assignment: object; title: string; id: string } | null;
  allContent: { content: ContentItem[]; currentContent?: ContentItem } | null;
  setVideo: (url: string, title: string, no?: number, id: string) => void;
  setDescription: (description: string, title: string, id: string) => void;
  setQuiz: (quiz: object, title: string, id: string) => void;
  setAssignment: (assignment: object, title: string, id: string) => void;
  setAllContent: (content: ContentItem[], currentContent?: ContentItem) => void;
  handleNext: () => void;
  handlePrevious: () => void;
};

export const useOutlineStore = create<Outlinetype>()(
  persist(
    (set, get) => ({
      video: null,
      description: null,
      quiz: null,
      assignment: null,
      allContent: null,

      setVideo: (url, title, no, id) =>
        set({
          video: { url, title, no, id },
          description: null,
          quiz: null,
          assignment: null,
        }),

      setDescription: (description, title, id) =>
        set({
          description: { description, title, id },
          video: null,
          quiz: null,
          assignment: null,
        }),

      setQuiz: (quiz, title, id) =>
        set({
          quiz: { quiz, title, id },
          video: null,
          description: null,
          assignment: null,
        }),

      setAssignment: (assignment, title, id) =>
        set({
          assignment: { assignment, title, id },
          video: null,
          description: null,
          quiz: null,
        }),

      setAllContent: (content, currentContent) =>
        set({
          allContent: { content, currentContent: currentContent ?? content[0] },
        }),

      handleNext: () => {
        const { allContent } = get();
        if (!allContent || !Array.isArray(allContent?.content)) return;

        const currentIndex = allContent.content.findIndex(
          (item) => item.id === allContent.currentContent?.id
        );

        if (
          currentIndex !== -1 &&
          currentIndex < allContent.content.length - 1
        ) {
          set({
            allContent: {
              ...allContent,
              currentContent: allContent.content[currentIndex + 1],
            },
          });
        } else {
          console.log("Last content reached");
        }
      },

      handlePrevious: () => {
        const { allContent } = get();
        if (!allContent || !Array.isArray(allContent.content)) return;

        const currentIndex = allContent?.content?.findIndex(
          (item) =>
            item.id === allContent.currentContent?.assignment?.id ||
            allContent.currentContent?.description?.id ||
            allContent.currentContent?.video?.id || allContent.currentContent?.quiz?.id
        );

        if (currentIndex > 0) {
          set({
            allContent: {
              ...allContent,
              currentContent: allContent.content[currentIndex - 1],
            },
          });
        } else {
          console.log("First content reached");
        }
      },
    }),
    {
      name: "courseOutline",
    }
  )
);
