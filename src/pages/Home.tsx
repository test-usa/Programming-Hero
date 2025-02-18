import Header from "../layout/Header";
import logo from "../assets/images/home.png";
import bottomLayer from "../assets/images/layer.png";

import javascript from "../assets/images/js.svg";
import html from "../assets/images/html.svg";
import react from "../assets/images/react.svg";
import tailwind from "../assets/images/tailwind.svg";
import CommonContainer from "../common/CommonContainer";
const Home = () => {
  return (
    <div className="relative min-h-screen bg-black ">
      <Header />
      {/* bg-gradient-to-r from-[#ff37f2]  to-[#405aff] bla  */}

      <div className="absolute flex flex-col items-center justify-center w-full gap-4 text-white top-1/4 font-Grotesk">
        <h2 className="font-extrabold text-7xl bg-text-gradient ">
          Let's code_ Your Career
        </h2>
        <p className="max-w-2xl text-xl text-center">
          We're on a mission to provide personalized learning and empower
          individuals to kick-start their careers.
        </p>
        <button className="px-10 py-2 text-xl ring-3 rounded-br-3xl rounded-tl-3xl bg-custom-gradient">
          Explore
        </button>
      </div>

      <CommonContainer>
        <div className="flex flex-col pt-20 ">
          <div className="flex items-center justify-between ">
            <img className="animate-bounce" src={html} alt="javascript" />
            <img className="animate-spin" src={react} alt="react" />
          </div>
          <div className="flex items-center justify-between ">
            <img className=" animate-bounce" src={tailwind} alt="tailwind" />
            <img className=" animate-ping" src={javascript} alt="react" />
          </div>
        </div>
      </CommonContainer>
      <div className="w-full  bg-cover bg-center h-64 absolute bottom-[30%]  bg-custom-pattern "></div>
      <div className="absolute bottom-0 ">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Home;
