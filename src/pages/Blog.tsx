import Footer from "../layout/Footer"
import Header from "../layout/Header"
import CategorySearch from "../section/blog/CategorySearch"
import FeaturedBlogs from "../section/blog/FeaturedBlogs"
import RecentBlogs from "../section/blog/RecentBlogs"


const Blog = () => {
  return (
    <div className="bg-[#010313]">
      <Header/>
      <FeaturedBlogs/>
      <CategorySearch/>
      <RecentBlogs/>
      <Footer/>
    </div>
  )
}

export default Blog
