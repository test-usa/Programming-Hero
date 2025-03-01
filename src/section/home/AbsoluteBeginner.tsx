
import CommonContainer from "../../common/CommonContainer"
import CommonSpace from "../../common/CommonSpace"
import mobile from "../../assets/mobile.webp"
import SapceBottom from "../../common/SapceBottom"
import AbsoluteCard from "./AbsoluteCard"
import { FaPlus } from "react-icons/fa";
import star from "../../assets/star.svg"
import app from "../../assets/appStore.svg"
import google from "../../assets/googlePlay.svg"
import triangle from "../../assets/images/triangle.svg";
import rocket from "../../assets/rocket.webp";
import circle from "../../assets/images/circle.svg";

const AbsoluteBeginner = () => {
  return (
    <div className="w-full bg-black">
      <SapceBottom>
        <div className="relative w-full px-20">
          <div className="flex items-center justify-between">
            <div className="">
              <img src={circle} alt="triangle" />
            </div>
            <h2 className="   relative text-center bg-[linear-gradient(97.64deg,#eaaaff,#b5acff)] bg-clip-text text-transparent md:text-7xl text-4xl after:absolute after:bg-text-gradient after:inset-0 after:h-2  after:w-[20%] after:mx-auto after:top-12 md:after:top-24">
              Are you absolute_ Beginner?
            </h2>
            <div>
              <img src={rocket} alt="triangle" />
            </div>
          </div>
          <div className="absolute hidden top-20 right-20 lg:block ">
            <img src={triangle} alt="triangle" />
          </div>
        </div>
      </SapceBottom>

      <div className="w-full bg-cover pb-96 bg-bg-globe">
        <CommonContainer>
          <div className="flex items-center justify-center gap-20 ">
            <div className="">
              <img src={mobile} />
            </div>
            <div className="flex flex-col max-w-xl gap-6 ">
              <h2 className="md:text-5xl text-3xl bg-[linear-gradient(97.64deg,#eaaaff,#b5acff)] bg-clip-text text-transparent ">
                Our Mobile App
              </h2>
              <div className="py-12 bg-custom-gradient rounded-3xl">
                <div className="flex flex-col items-center justify-around w-full lg:flex-row">
                  <div className="w-full text-white border-r-2 border-white/20 md:last:border-r-0">
                    <div className="flex items-center justify-center w-full text-4xl font-bold">
                      <h2>1.5M</h2> <span>+</span>
                    </div>
                    <p className="text-center">
                      Worldwide <br /> Learners!
                    </p>
                  </div>
                  <div className="w-full text-white border-r-2 border-white/20 md:last:border-r-0">
                    <div className="flex items-center justify-center w-full text-4xl font-bold">
                      <h2>12</h2>
                      <span>
                        <img src={star} alt="star" />
                      </span>
                    </div>
                    <p className="text-center">
                      Skill based <br /> Courses
                    </p>
                  </div>
                  <div className="w-full text-white border-r-2 border-white/20 md:last:border-r-0">
                    <div className="flex items-center justify-center w-full text-4xl font-bold">
                      <h2>1.5M</h2> <span>+</span>
                    </div>
                    <p className="text-center">
                      Positive <br /> Reviews
                    </p>
                  </div>
                </div>
              </div>
              <h2 className="text-lg text-white ">
                Learn programming the fun way with the Programming Hero app!
                Download now on the App Store or Google Play.
              </h2>
              <div className="flex items-center gap-6 ">
                <img src={app} alt="" />
                <img src={google} alt="" className="" />
              </div>
            </div>
          </div>
        </CommonContainer>
      </div>
    </div>
  );
};

export default AbsoluteBeginner
