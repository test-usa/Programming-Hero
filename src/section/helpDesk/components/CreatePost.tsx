import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdOndemandVideo } from "react-icons/md";

const CreatePost = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All Posts");
  return (
    <div className="flex flex-col lg:flex-row gap-6 w-full px-6 py-4">
      {/* Left Side: Post Input */}
      <div className="w-full lg:w-2/3 bg-white p-5 rounded-xl shadow-md">
        <div className="flex items-center gap-3">
          {/* User Avatar */}
          <FaUserCircle className="text-gray-500 text-4xl" />
          {/* Input Field */}
          <div className="w-full bg-gray-100 text-gray-500 px-4 py-2 rounded-full">
            Share or Ask Something to Everyone?
          </div>
          {/* Create Post Button */}
          <button className="px-4 py-2 text-white font-semibold bg-gradient-to-r from-[#cb43c2] to-[#0f16f1] rounded-lg">
            Create Post
          </button>
        </div>
        {/* Photo/Video Option */}
        <div className="flex items-center gap-2 text-gray-500 mt-3">
          <MdOndemandVideo className="text-pink-500" />
          <span>Photo/Video</span>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
