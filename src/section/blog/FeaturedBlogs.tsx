import CommonContainer from "../../common/CommonContainer";



const blogs = [
    {
      id: 1,
      category: "Web Development",
      image: "https://phero-web.nyc3.cdn.digitaloceanspaces.com/blog-images-prod/public/files/1686368859721.jpg", // Replace with actual image
      title: "প্রোগ্রামিং হিরো জব প্লেসমেন্ট রিপোর্ট কার্ড মে ২০২২ - মে ২০২৩",
    },
    {
      id: 2,
      category: "Web Development",
      image: "https://phero-web.nyc3.cdn.digitaloceanspaces.com/blog-images-prod/public/files/1669992976522.jpg", // Replace with actual image
      title: "ওয়েব ডেভেলপমেন্ট-এর চাহিদা কেমন? আর এর চাহিদা কি কমে যাবে?",
    },
    {
      id: 3,
      category: "Web Development",
      image: "https://phero-web.nyc3.cdn.digitaloceanspaces.com/blog-images-prod/public/files/1669700493261.png", // Replace with actual image
      title: "আমি একজন ওয়েব ডেভেলপার হতে চাই? কিভাবে শুরু করতে পারি?",
    },
  ];
const FeaturedBlogs = () => {
  return (
   <CommonContainer>
     <section className="bg-[#0B0D19] py-10 px-5 md:px-10 lg:px-20">
    <h2 className="text-white text-xl md:text-3xl font-semibold mb-6">
      Featured Blogs
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 place-items-center">
      {blogs.map((blog, index) => (
        <div
          key={blog.id}
          className={`w-[400px] h-[300px] group relative overflow-hidden rounded-lg cursor-pointer shadow-lg ${
            index === 0 ? "md:col-span-2 row-span-2" : ""
          }`}
        >
          <img
            src={blog.image}
            alt={blog.title}
            className=" object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4 bg-purple-600 text-white text-xs md:text-sm px-3 py-1 rounded-full">
            {blog.category}
          </div>
          <div className="absolute inset-0 bg-[#6047ec] bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <p className="text-white text-center text-lg md:text-xl font-semibold">
              {blog.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
   </CommonContainer>
  )
}

export default FeaturedBlogs;
