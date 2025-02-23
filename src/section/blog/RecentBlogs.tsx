import CommonContainer from "../../common/CommonContainer";

export const blogs = [
    {
      id: 1,
      category: "Web Development",
      title: "ওয়েব ডেভেলপমেন্ট-এর চাহিদা কেমন?",
      description:
        "ওয়েব ডেভেলপমেন্টে তবুও ওয়েবের চাহিদা ক্রমাগত বাড়তেই থাকবে...",
      author: "Jhankar Mahbub",
      date: "Dec 02, 2022",
      image: "https://phero-web.nyc3.cdn.digitaloceanspaces.com/blog-images-prod/public/files/1693318086202.png",
      tagColor: "bg-purple-600",
    },
    {
      id: 2,
      category: "Web Development",
      title: "আমি একজন ওয়েব ডেভেলপার হতে চাই? কিভাবে শুরু করতে পারি?",
      description:
        "ওয়েব ডেভেলপমেন্ট শেখার পীচটা সেটিংয়ে আছে, শুরু করুন freeCodeCamp...",
      author: "Jhankar Mahbub",
      date: "Nov 29, 2022",
      image: "/images/blog2.png",
      tagColor: "bg-purple-600",
    },
    {
      id: 3,
      category: "Web Development",
      title: "ওয়েব ডেভেলপমেন্ট পরিচিতি যা কিছু জানা প্রয়োজন",
      description:
        "ওয়েব ডেভেলপমেন্ট কি? আমাদের প্রথমে জানতে হবে যে এটি আসলে কি...",
      author: "Rebeka Putul",
      date: "Nov 29, 2022",
      image: "/images/blog3.png",
      tagColor: "bg-yellow-500",
    },
  ];
  

const RecentBlogs = () => {
  return (
    <CommonContainer>
        <div className="bg-[#0b0b13] px-4 py-20">
    <div className="max-w-6xl mx-auto">
      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="relative bg-[#13131A] rounded-lg shadow-lg overflow-hidden cursor-pointer group transition-all duration-300"
          >
            {/* Blog Image */}
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-[200px] md:h-[220px] object-cover"
            />

            {/* Category Tag */}
            <div
              className={`absolute top-4 left-4 ${blog.tagColor} text-white text-xs md:text-sm px-3 py-1 rounded-full`}
            >
              {blog.category}
            </div>

            {/* Gradient Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500"></div>

            {/* Blog Details */}
            <div className="p-5">
              <h3 className="text-white text-lg font-semibold group-hover:text-purple-400 transition-colors duration-300">
                {blog.title}
              </h3>
              <p className="text-gray-400 text-sm mt-2 line-clamp-2">
                {blog.description}
              </p>
              <div className="flex justify-between items-center text-gray-500 text-xs mt-4">
                <span>{blog.author}</span>
                <span>{blog.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <button className="px-4 py-2 mx-1 bg-gray-700 text-white rounded-md hover:bg-purple-600 transition">
          1
        </button>
        <button className="px-4 py-2 mx-1 bg-gray-700 text-white rounded-md hover:bg-purple-600 transition">
          2
        </button>
        <button className="px-4 py-2 mx-1 bg-gray-700 text-white rounded-md hover:bg-purple-600 transition">
          3
        </button>
      </div>
    </div>
  </div>
    </CommonContainer>
  )
}

export default RecentBlogs
