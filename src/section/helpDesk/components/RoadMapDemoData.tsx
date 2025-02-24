import Roadmap, { RoadmapProps } from "./Roadmap";

// export interface RoadmapProps {
//   name: string;
//   profileImage?: string;
//   issueTitle: string;
//   issueDescription?: string;
//   tags: string[];
//   status: "investigating" | "in-progress" | "resolved";
// }

// Declare and type your demo data
const roadmapItems: RoadmapProps[] = [
  {
    name: "Nahid Sarkar",
    profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
    issueTitle: "Help desk and assessment issue",
    issueDescription: "Having trouble accessing the assessment portal.",
    tags: ["Courses Help"],
    status: "investigating",
  },
  {
    name: "Sadman Sakib",
    profileImage: "https://randomuser.me/api/portraits/men/2.jpg",
    issueTitle: "Assignment Submission Bug",
    issueDescription:
      "I am unable to submit my assignment despite multiple attempts.",
    tags: ["Bugs", "Website"],
    status: "in-progress",
  },
  {
    name: "Mohammad Nazmul Ahassan",
    profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
    issueTitle: "Assignment Submit Problem",
    issueDescription:
      "Submitted an assignment but it's not displaying the marks.",
    tags: ["Courses Help", "Android App"],
    status: "resolved",
  },
];

const RoadmapDemoData = () => {
  return (
    <div className="flex flex-wrap gap-5 p-5">
      <Roadmap roadmapItems={roadmapItems} />
    </div>
  );
};

export default RoadmapDemoData;
