import Header from "../layout/Header";

import HomeTitle from "../section/home/HomeTitle";
import HomeAnimation from "../section/home/HomeAnimation";
import HomeImage from "../section/home/HomeImage";
import Footer from "../layout/Footer";
const Home = () => {
  return (
    <>
      <div className="relative min-h-screen sm:bg-black max-sm:bg-gradient-to-r from-[#ff37f2]  to-[#405aff]">
        <Header />
        <HomeTitle />
        <HomeAnimation />
        <HomeImage />
      </div>
      <Footer />
    </>
  );
};

export default Home;
