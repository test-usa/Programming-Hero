import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import CommonContainer from "../../common/CommonContainer";
import CommonSpace from "../../common/CommonSpace";

import google from "../../assets/course details/google-play.webp"
import apps from "../../assets/course details/app-store.webp"
import mic from "../../assets/course details/microsoft.webp"


const CourseFooter = () => {
  return (
    <div className="gap-4 text-white bg-cover bg-custom-footer font-Grotesk">
    <CommonContainer>
      <CommonSpace>
        <div className="flex flex-col w-[85%] mx-auto gap-4 p-4">
          <div className="flex flex-col items-center justify-between w-full gap-4 md:flex-row text-lg ">
            <div className="space-y-4">
              <p>Office Addrees</p>
              <section>
                <p>Level-4, 34, Awal Centre, Banani, Dhaka</p>
                <p>Helpline: 01322901105 , 01332-502004</p>
                <p>Support: web@programming-hero.com</p>
                <p>(Available : 10:00am to 07:00pm)</p>
              </section>
            </div>
            <div className="space-y-4">
              <p className="text-lg font-bold">Useful Links</p>
              <section className="flex flex-col gap-2 font-bold md:gap-4  text-lg ">
                <Link to="/">Blog</Link>
                <Link to="/">Success</Link>
                <Link to="/about">About Us</Link>
              
                <Link to="/">Terms and Condition</Link>
                <Link to="/">Privacy Policy</Link>
              </section>
            </div>

            <div className="   ">
              <p className="text-lg">Follow Us</p>
              <div className="flex items-center gap-6 text-2xl pt-5 ">
                <Link to="/" className="">
                  <FaFacebook />
                </Link>
                <Link to="/">
                  <FaInstagram />
                </Link>
                <Link to="/">
                  <FaLinkedin />
                </Link>
                <Link to="/">
                  <FaYoutube />
                </Link>
              </div>
              <p className=" pt-5 text-lg ">Download Apps</p>
              <div className="pt-5">
              <div className="flex gap-4 w-[50%]">
              <img src={google} alt=""  className=" h-[50px] w-[150px]"/>
              <img src={apps} alt="" className=" h-[50px] w-[150px]"/>
              </div>
               <div className="mt-3 border rounded-xl flex flex-col w-[50%] gap-4">
               <img src={mic} alt="" className=" h-[50px] w-[150px] p-1"/>
             
               </div>
              </div>
            </div>
          </div>
        </div>
      </CommonSpace>
    </CommonContainer>
  </div>
  )
}

export default CourseFooter

