import React from "react";
import CommonContainer from "../../../common/CommonContainer";

const statusColors: Record<string, string> = {
  investigating: "bg-purple-100 border-purple-300",
  "in-progress": "bg-blue-100 border-blue-300",
  resolved: "bg-green-100 border-green-300",
};

const headerColors: Record<string, string> = {
  investigating:
    "bg-purple-600 dark:bg-purple-300 text-white dark:text-gray-600",
  "in-progress": "bg-blue-600 dark:bg-blue-300 text-white dark:text-gray-600",
  resolved: "bg-green-600 dark:bg-green-300 text-white dark:text-gray-600",
};

const statusLabels: Record<string, string> = {
  investigating: "Investigating",
  "in-progress": "Dev In-Progress",
  resolved: "Resolved",
};
type RoadmapItem = {
  status: string;
  name: string;
  issueTitle: string;
  issueDescription?: string;
  tags: string[];
  profileImage?: string;
};

const roadmapItems = [
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
  {
    name: "Foysal Munsy",
    profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
    issueTitle: "Video and OTP problem",
    issueDescription: "",
    tags: ["Others", "Website"],
    status: "investigating",
  },
  {
    name: "SK NOBEL RAHMAN",
    profileImage: "https://randomuser.me/api/portraits/men/2.jpg",
    issueTitle: "Gem problem",
    issueDescription: "",
    tags: ["Bugs"],
    status: "in-progress",
  },
  {
    name: "Touhid Tamim",
    profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
    issueTitle: "Need a one-on-one session",
    issueDescription: "",
    tags: ["Suggestion"],
    status: "resolved",
  },
];

const Roadmap = () => {
  // Group items by status
  const groupedItems = roadmapItems.reduce<Record<string, RoadmapItem[]>>(
    (acc, item) => {
      if (!acc[item.status]) acc[item.status] = [];
      acc[item.status].push(item);
      return acc;
    },
    {} // Initial value with correct type
  );

  return (
    <CommonContainer>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {Object.entries(groupedItems).map(([status, items]) => (
          <div key={status} className="flex flex-col">
            {/* Section Header */}
            <div
              className={`py-2 px-4 rounded-lg text-lg font-semibold flex items-center gap-2 ${headerColors[status]}`}
            >
              {statusLabels[status]} ({items.length})
            </div>

            {/* Issue Cards */}
            <div className="mt-3 space-y-3">
              {items?.map((item, index) => (
                <div
                  key={index}
                  className={`p-4 border rounded-lg shadow-sm ${statusColors[status]}`}
                >
                  {/* Profile Section */}
                  <div className="flex items-center gap-3">
                    {item.profileImage ? (
                      <img
                        src={item.profileImage}
                        alt={item.name}
                        className="w-8 h-8 rounded-full"
                      />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                        <span className="text-gray-600">
                          {item.name.charAt(0)}
                        </span>
                      </div>
                    )}
                    <span className="font-semibold dark:text-gray-500">
                      {item.name}
                    </span>
                  </div>

                  {/* Issue Title & Description */}
                  <h3 className="mt-2 font-semibold dark:text-gray-500">
                    {item.issueTitle}
                  </h3>
                  {item.issueDescription && (
                    <p className="text-sm text-gray-700 mt-1 dark:text-gray-600 ">
                      {item.issueDescription}
                    </p>
                  )}

                  {/* Tags */}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-transparent shadow-md text-gray-700 text-xs px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </CommonContainer>
  );
};

export default Roadmap;
