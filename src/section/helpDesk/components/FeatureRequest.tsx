import React from "react";
import CommonContainer from "../../../common/CommonContainer";

const features = [
  {
    id: 1,
    name: "Md. Asif Shahriar Tauhid",
    time: "a day ago",
    profileImage:
      "https://th.bing.com/th/id/OIP.eU8MYLNMRBadK-YgTT6FJQHaHw?rs=1&pid=ImgDetMain",
    description: "Request to implement Picture-in-Picture(PiP).",
    comments: 1,
    category: "Website",
    status: "Acknowledged",
    votes: 0,
  },
  {
    id: 2,
    name: "Md Soriful Hasan",
    time: "10 days ago",
    profileImage:
      "https://th.bing.com/th/id/OIP.eU8MYLNMRBadK-YgTT6FJQHaHw?rs=1&pid=ImgDetMain",
    description:
      "বার বার feedback এবং Problem reason লিখলে একটু বিব্রত কাজ করে ক্লিপ & বলা যায় না ।",
    comments: 2,
    category: "Website",
    status: "Acknowledged",
    votes: 1,
  },
  {
    id: 3,
    name: "Md Sharful Islam",
    time: "14 days ago",
    profileImage:
      "https://th.bing.com/th/id/OIP.eU8MYLNMRBadK-YgTT6FJQHaHw?rs=1&pid=ImgDetMain",
    description:
      "Video resolution resets to 'Auto' in next videos although selected 720p in the previous video(s).",
    comments: 1,
    category: "Website",
    status: "Dev In-Progress",
    votes: 0,
  },
  {
    id: 4,
    name: "Md. Mostafizur Rahman",
    time: "17 days ago",
    profileImage:
      "https://th.bing.com/th/id/OIP.eU8MYLNMRBadK-YgTT6FJQHaHw?rs=1&pid=ImgDetMain",
    description: "Loop features on video.",
    comments: 1,
    category: "Website",
    status: "Dev In-Progress",
    votes: 0,
  },
];

const RequestedFeatures = () => {
  return (
    <CommonContainer>
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-semibold">Requested Features</h2>
            <p className="text-gray-600 text-sm">
              Here is a list of all the features that many of you asked for.
              <br /> It includes different things students like you wanted.
            </p>
          </div>
          <button className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg shadow-md">
            + Share New Idea
          </button>
        </div>

        {/* Feature List */}
        <div className="space-y-4">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="p-4 bg-gray-100 rounded-lg shadow-md"
            >
              <div className="flex items-center gap-3">
                <img
                  src={feature.profileImage}
                  alt={feature.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {feature.name}
                  </h3>
                  <span className="text-sm text-gray-500">{feature.time}</span>
                </div>
              </div>
              <p className="mt-2 text-gray-700">{feature.description}</p>
              <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
                <span>💬 {feature.comments} Comments</span>
                <span>🌐 {feature.category}</span>
                <span>🔄 {feature.status}</span>
              </div>
              <button className="mt-3 px-3 py-1 border rounded-md bg-white shadow-sm text-gray-700 hover:bg-gray-200">
                ⬆ {feature.votes} Votes
              </button>
            </div>
          ))}
        </div>
      </div>
    </CommonContainer>
  );
};

export default RequestedFeatures;
