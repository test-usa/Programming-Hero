import Footer from "../layout/Footer"
import Header from "../layout/Header"
import FeaturedBlogs from "../section/blog/FeaturedBlogs"
import RecentBlogs from "../section/blog/RecentBlogs"


const Blog = () => {
  return (
    <div className="bg-[#010313]">
      <Header/>
      <FeaturedBlogs/>
      <RecentBlogs/>
      <Footer/>
    </div>
  )
}

export default Blog
