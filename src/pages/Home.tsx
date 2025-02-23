import Header from "../layout/Header";

import HomeTitle from "../section/home/HomeTitle";
import HomeAnimation from "../section/home/HomeAnimation";
import HomeImage from "../section/home/HomeImage";
import Footer from "../layout/Footer";
import OurCourse from "../section/home/course/OurCourse";
const Home = () => {
  return (
    <>
      <div className="relative min-h-screen sm:bg-black max-sm:bg-gradient-to-r from-[#ff37f2]  to-[#405aff]">
        <Header />
        <HomeTitle />
        <HomeAnimation />
        <HomeImage />
      </div>
      <div>
        <OurCourse />
      </div>
      <Footer />
    </>
  );
};

export default Home;
