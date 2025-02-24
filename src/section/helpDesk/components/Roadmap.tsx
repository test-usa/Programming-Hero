export interface RoadmapProps {
  name: string;
  profileImage?: string;
  issueTitle: string;
  issueDescription?: string;
  tags: string[];
  status: "investigating" | "in-progress" | "resolved";
}

// The child component receives the array as a prop
const Roadmap = ({ roadmapItems }: { roadmapItems: RoadmapProps[] }) => {
  return (
    <div className="flex flex-wrap gap-5 p-5">
      {roadmapItems.map((item, index) => (
        <div
          key={index}
          className="p-4 border rounded-lg shadow-sm w-full max-w-md"
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
                <span className="text-gray-600">{item.name.charAt(0)}</span>
              </div>
            )}
            <span className="font-semibold">{item.name}</span>
          </div>

          {/* Issue Title & Description */}
          <h3 className="mt-2 font-semibold">{item.issueTitle}</h3>
          {item.issueDescription && (
            <p className="text-sm text-gray-700 mt-1">
              {item.issueDescription}
            </p>
          )}

          {/* Tags */}
          <div className="mt-3 flex flex-wrap gap-2">
            {item.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Roadmap;
