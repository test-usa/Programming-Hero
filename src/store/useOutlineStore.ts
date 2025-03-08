import { create } from "zustand";
import { persist } from "zustand/middleware";

type Outlinetype = {
  video: { url: string | object; title: string; no?: number } | null;
  description: { description: string; title: string } | null;
  quiz: { quiz: object; title: string } | null;
  assignment: { assignment: object; title: string } | null;
  setVideo: (url: string | object, title: string, no?: number) => void;
  setDescription: (description: string, title: string) => void;
  setQuiz: (quiz: object, title: string) => void;
  setAssignment: (assignment: object, title: string) => void;
};

export const useOutlineStore = create<Outlinetype>()(
  persist(
    (set) => ({
      video: null,
      description: null,
      quiz: null,
      assignment: null,

      setVideo: (url, title, no) =>
        set({
          video: { url, title, no },
          description: null,
          quiz: null,
          assignment: null,
        }),

      setDescription: (description, title) =>
        set({
          description: { description, title },
          video: null,
          quiz: null,
          assignment: null,
        }),

      setQuiz: (quiz, title) =>
        set({
          quiz: { quiz, title },
          video: null,
          description: null,
          assignment: null,
        }),

      setAssignment: (assignment, title) =>
        set({
          assignment: { assignment, title },
          video: null,
          description: null,
          quiz: null,
        }),
    }),
    {
      name: "courseOutline",
    }
  )
);
