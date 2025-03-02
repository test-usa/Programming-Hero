import Header from "../layout/Header";

import HomeTitle from "../section/home/HomeTitle";
import HomeAnimation from "../section/home/HomeAnimation";
import HomeImage from "../section/home/HomeImage";
import Footer from "../layout/Footer";
import OurCourse from "../section/home/course/OurCourse";
import AbsoluteBeginner from "../section/home/AbsoluteBeginner";
import SuccesStory from "../section/home/SuccesStory";
import OurMission from "../section/home/OurMission";
import Svg from "../section/home/Svg";
const Home = () => {
  return (
    <>
      <div className="relative min-h-96 sm:min-h-screen bg-black max-sm:bg-gradient-to-r from-[#ff37f2]  to-[#405aff]">
        <Header />
        <HomeTitle />
        <HomeAnimation />
        <HomeImage />
        <div className="absolute -translate-y-1/2 top-1/2 -left-40 ">
          <Svg />
        </div>
        <div className="absolute -translate-y-1/2 top-1/2 -right-40 ">
          <Svg />
        </div>
      </div>
      <div>
        <OurCourse />
        <AbsoluteBeginner />
        <SuccesStory />
        <OurMission />
      </div>

      <Footer />
    </>
  );
};

export default Home;
