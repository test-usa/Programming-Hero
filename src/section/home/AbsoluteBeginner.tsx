
import CommonContainer from "../../common/CommonContainer";
import mobile from "../../assets/mobile.webp";
import SapceBottom from "../../common/SapceBottom";
import star from "../../assets/star.svg";
import app from "../../assets/appStore.svg";
import google from "../../assets/googlePlay.svg";
import triangle from "../../assets/images/triangle.svg";
import rocket from "../../assets/rocket.webp";
import circle from "../../assets/images/circle.svg";
import Border from "./Border";

const AbsoluteBeginner = () => {
  return (
    <div className="w-full bg-black overflow-hidden">
      <SapceBottom>
        <div className="relative w-full px-20 ">
          <div className="flex items-center justify-between">
            <div className="hidden lg:block">
              <img src={circle} alt="triangle" />
            </div>
            <div className="flex flex-col items-center justify-center w-full gap-4">
              <h2 className=" text-center bg-[linear-gradient(97.64deg,#eaaaff,#b5acff)] bg-clip-text text-transparent md:text-7xl text-4xl">
                Are you absolute_ Beginner?
              </h2>
              <Border />
            </div>

            <div className="hidden lg:block">
              <img src={rocket} alt="triangle" />
            </div>
          </div>
          <div className="absolute hidden top-20 right-20 lg:block ">
            <img src={triangle} alt="triangle" />
          </div>
        </div>
      </SapceBottom>

      <div className="bg-center bg-no-repeat bg-cover lg:h-screen bg-bg-globe">
        <CommonContainer>
          <div className="flex flex-col items-center justify-center gap-6 lg:pt-20 sm:gap-20 lg:flex-row">
            <div className=" max-w-72">
              <img className="w-full" src={mobile} />
            </div>
            <div className="flex flex-col items-center justify-center w-full max-w-xl gap-6">
              <h2 className="self-start hidden text-3xl font-bold text-white md:text-5xl lg:block">
                Our Mobile App
              </h2>
              <div className="w-full py-12 bg-custom-gradient rounded-3xl">
                <div className="flex items-center justify-around w-full">
                  <div className="w-full text-white border-r-2 border-white/20 md:last:border-r-0">
                    <div className="flex items-center justify-center w-full text-xl font-bold sm:text-4xl">
                      <h2>1.5M</h2> <span>+</span>
                    </div>
                    <p className="text-xs text-center sm:text-lg">
                      Worldwide <br /> Learners!
                    </p>
                  </div>
                  <div className="w-full text-white border-r-2 border-white/20 md:last:border-r-0">
                    <div className="flex items-center justify-center w-full text-xl font-bold sm:text-4xl">
                      <h2>4.7</h2>
                      <span>
                        <img className="w-6 sm:w-10" src={star} alt="star" />
                      </span>
                    </div>
                    <p className="text-xs text-center sm:text-lg">
                      Skill based <br /> Courses
                    </p>
                  </div>
                  <div className="w-full text-xs text-center text-white sm:text-lg">
                    <div className="flex items-center justify-center w-full text-xl font-bold sm:text-4xl">
                      <h2>1.5M</h2> <span>+</span>
                    </div>
                    <p className="text-xs text-center sm:text-lg">
                      Positive <br /> Reviews
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-lg text-center text-white lg:text-start">
                Learn programming the fun way with the Programming Hero app!
                Download now on the App Store or Google Play.
              </h2>

              <div className="flex items-center gap-6 pb-6 w-60 sm:w-full">
                <img className="md:w-full w-1/2" src={app} alt="" />
                <img className="md:w-full w-1/2" src={google} alt="" />
              </div>
            </div>
          </div>
        </CommonContainer>
      </div>
    </div>
  );
};

export default AbsoluteBeginner
