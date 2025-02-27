
import CommonContainer from "../../common/CommonContainer"
import CommonSpace from "../../common/CommonSpace"
import mobile from "../../assets/mobile.webp"
import SapceBottom from "../../common/SapceBottom"
import AbsoluteCard from "./AbsoluteCard"
import { FaPlus } from "react-icons/fa";
import star from "../../assets/star.svg"
import app from "../../assets/appStore.svg"
import google from "../../assets/googlePlay.svg"


const AbsoluteBeginner = () => {
  return (
   <div className="bg-gradient-to-b from-[#000000] via-[#6304B6] to-[]  w-full overflow-hidden">
    <CommonSpace>
    <CommonContainer>
   <SapceBottom>
   <div className="w-[85%] mx-auto">
   <div className="flex items-center justify-center">
          <h2 className=" relative text-center bg-[linear-gradient(97.64deg,#eaaaff,#b5acff)] bg-clip-text text-transparent md:text-7xl text-4xl after:absolute after:bg-text-gradient after:inset-0 after:h-2  after:w-[10%] after:mx-auto after:top-20">
          Are you absolute_ Beginner?
          </h2>
         
        </div>
   </div>
   </SapceBottom>
            <div className=" mx-auto pt-5">
                <div className=" md:flex gap-3">
                    <div className="md:w-1/2 p-3 w-full flex justify-center">
                        <img src={mobile} alt="" className="md:h-[600px] h-[300px]" />
                    </div>
                    <div className=" md:w-1/2 w-full p-5">
                        <h2 className=" relative md:pb-10 pb-5 bg-[linear-gradient(97.64deg,#eaaaff,#b5acff)] bg-clip-text text-transparent md:text-4xl text-2xl font-semibold">Our Mobile App</h2>
                            <div className=" bg-custom-gradient  px-3 py-5 rounded-[30px] gap-2 max-w-[600px] ">
                              <div className="flex flex-col lg:flex-row justify-around items-center">
                              <AbsoluteCard icon={FaPlus} value="150" label="Worldwide Learners!" />
                                   <AbsoluteCard icon={star} value="75%" label=" Positive Reviews" />
                                  <AbsoluteCard icon={FaPlus} value="500" label=" Skill based Courses" />
                              </div>
                             
                            </div>
                            <h2 className="text-white text-lg py-5">Learn programming the fun way with the Programming Hero app! Download now on the App Store or Google Play.</h2>
                             <div className="md:flex gap-3">
                                <img src={app} alt="" />
                                <img src={google} alt=""  className="mt-3 md:mt-0"/>
                             </div>

                    </div>
                </div>

            </div>

   
    </CommonContainer>
    </CommonSpace>
   
   </div>
  )
}

export default AbsoluteBeginner
