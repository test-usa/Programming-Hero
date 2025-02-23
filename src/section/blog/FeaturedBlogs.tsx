import CommonContainer from "../../common/CommonContainer";



const blogs = [
  {
    id: 1,
    category: "Web Development",
    image: "https://phero-web.nyc3.cdn.digitaloceanspaces.com/blog-images-prod/public/files/1686368859721.jpg", // Replace with actual image
    title: "প্রোগ্রামিং হিরো জব প্লেসমেন্ট রিপোর্ট কার্ড মে ২০২২ - মে ২০২৩",
    description: "এই রিপোর্ট কার্ডে আমরা দেখবো, মে ২০২২ থেকে মে ২০২৩ পর্যন্ত প্রোগ্রামিং হিরোর শিক্ষার্থীরা কেমন পারফর্ম করেছে এবং কীভাবে তারা চাকরির বাজারে নিজেদের জায়গা করে নিয়েছে।",
  },
  {
    id: 2,
    category: "Web Development",
    image: "https://phero-web.nyc3.cdn.digitaloceanspaces.com/blog-images-prod/public/files/1669992976522.jpg", // Replace with actual image
    title: "ওয়েব ডেভেলপমেন্ট-এর চাহিদা কেমন? আর এর চাহিদা কি কমে যাবে?",
    description: "ওয়েব ডেভেলপমেন্ট কি ভবিষ্যতে টিকে থাকবে? নাকি এর চাহিদা কমে যাবে? এই ব্লগে আমরা ওয়েব ডেভেলপমেন্ট ইন্ডাস্ট্রির বর্তমান অবস্থা এবং ভবিষ্যৎ সম্ভাবনা নিয়ে আলোচনা করেছি।",
  },
  {
    id: 3,
    category: "Web Development",
    image: "https://phero-web.nyc3.cdn.digitaloceanspaces.com/blog-images-prod/public/files/1669700493261.png", // Replace with actual image
    title: "আমি একজন ওয়েব ডেভেলপার হতে চাই? কিভাবে শুরু করতে পারি?",
    description: "নতুনদের জন্য ওয়েব ডেভেলপমেন্ট শেখার সঠিক গাইডলাইন। কীভাবে শুরু করবেন, কোন স্কিল শেখা দরকার এবং কীভাবে চাকরির বাজারে প্রবেশ করবেন, তার বিস্তারিত দিকনির্দেশনা পাবেন এই ব্লগে।",
  },
];
const FeaturedBlogs = () => {
  return (
   <CommonContainer>
     <section className="bg-[#0B0D19] py-10 px-5 md:px-10 lg:px-20">
    <h2 className="text-white text-lg md:text-xl font-semibold mb-6">
      Featured Blogs
    </h2>

    <div className="grid grid-cols-[60%_40%] gap-x-4 relative">
    <div className="relative rounded-md cursor-pointer row-span-2 md:h-[320px] group">
  <img
    src={blogs[0].image}
    alt={blogs[0].title}
    className="object-cover w-full h-full"
  />
  <div className="absolute top-4 left-4 bg-[rgba(96,71,236,0.6)] text-white text-xs md:text-sm px-4 py-2 rounded-full">
    {blogs[0].category}
  </div>

  {/* Full-Card Gradient Overlay on Hover */}
  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(96,71,236,0.6)] to-[rgba(67,67,164,0.2)] opacity-0 
      group-hover:opacity-80 transition-opacity duration-500"></div>

  {/* Animated Heading - Starts Below the Card */}
  <div className="absolute left-0 w-full text-2xl text-white text-center py-2 
      transition-all duration-500 ease-in-out translate-y-[0%] group-hover:-translate-y-[300%]">
    {blogs[0].title}
  </div>
</div>

{/* Second Column - Wrapper for Two Cards */}
<div className="flex flex-col gap-10">
  {blogs.slice(1, 3).map((blog) => (
    <div
      key={blog.id}
      className="relative rounded-md cursor-pointer shadow-lg h-[120px] md:h-[140px] group"
    >
      <img
        src={blog.image}
        alt={blog.title}
        className="object-cover w-full h-full"
      />
      <div className="absolute top-4 left-4 bg-[rgba(96,71,236,0.6)] text-white text-xs md:text-sm px-4 py-2 rounded-full">
        {blog.category}
      </div>

      {/* Full-Card Gradient Overlay on Hover (Matched with First Card) */}
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(96,71,236,0.6)] to-[rgba(67,67,164,0.2)] opacity-0 
          group-hover:opacity-80 transition-opacity duration-500"></div>

      {/* Animated Heading - Starts Below the Card */}
      <div className="absolute left-0 w-full text-lg text-white text-center py-2 
      transition-all duration-500 ease-in-out translate-y-[0%] group-hover:translate-y-[-140%]">
        {blog.title}
      </div>
    </div>
  ))}
</div>

</div>




  </section>
   </CommonContainer>
  )
}

export default FeaturedBlogs;
