export type Milestone = {
  No: number;
  name: string;
  time: { hour: number; mins: number };
  TotalModules: number;
  modules: Module[];
};

export interface Video {
  No: number;
  name: string;
  duration: string;
  file: string;
}
export interface Module {
  No: number;
  TotalVideos: number;
  time: { hour: number; mins: number };
  name: string;
  videos: Video[];
}

// ----- VIDEO PYLING PAGE TYPES ------ //
export type propsTypes = {
  url: string;
  name: string;
  description: [];
  quiz: [];
  assingment: [];
};

// ------ NAVBAR TYPES ------ //
export type muneItems = {
  href: string;
  path: string;
};
