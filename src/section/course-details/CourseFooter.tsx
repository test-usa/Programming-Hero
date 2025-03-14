import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import CommonContainer from "../../common/CommonContainer";
import CommonSpace from "../../common/CommonSpace";

import google from "../../assets/course details/google-play.webp";
import apps from "../../assets/course details/app-store.webp";
import mic from "../../assets/course details/microsoft.webp";

const CourseFooter = () => {
  return (
    <div className="text-white bg-cover bg-[#010314]  bg-custom-footer font-Grotesk">
      <CommonContainer>
        <CommonSpace>
          <div className="flex flex-col w-full max-w-7xl mx-auto gap-6 p-4 lg:p-8">
            <div className="flex flex-col items-center md:items-start md:flex-row justify-between w-full gap-6">
              {/* Office Address */}
              <div className="space-y-4 text-center md:text-left">
                <p className="text-lg font-semibold">Office Address</p>
                <section className="text-base">
                  <p>Level-4, 34, Awal Centre, Banani, Dhaka</p>
                  <p>Helpline: 01322901105 , 01332-502004</p>
                  <p>Support: web@programming-hero.com</p>
                  <p>(Available : 10:00am to 07:00pm)</p>
                </section>
              </div>

              {/* Useful Links */}
              <div className="space-y-4 text-center md:text-left">
                <p className="text-lg font-bold">Useful Links</p>
                <section className="flex flex-col gap-2 md:gap-3 font-semibold text-base">
                  <Link to="/">Blog</Link>
                  <Link to="/">Success</Link>
                  <Link to="/about">About Us</Link>
                  <Link to="/">Terms and Conditions</Link>
                  <Link to="/">Privacy Policy</Link>
                </section>
              </div>

              {/* Social & Apps */}
              <div className="flex flex-col items-center md:items-start space-y-4">
                <p className="text-lg font-semibold">Follow Us</p>
                <div className="flex items-center gap-4 text-xl">
                  <Link to="/" className="hover:text-gray-300">
                    <FaFacebook />
                  </Link>
                  <Link to="/" className="hover:text-gray-300">
                    <FaInstagram />
                  </Link>
                  <Link to="/" className="hover:text-gray-300">
                    <FaLinkedin />
                  </Link>
                  <Link to="/" className="hover:text-gray-300">
                    <FaYoutube />
                  </Link>
                </div>
                <p className="text-lg font-semibold pt-5">Download Apps</p>
                <div className="flex md:flex-col lg:flex-row flex-wrap items-center justify-center  gap-4 cursor-pointer">
                  <img src={google} alt="Google Play" className="h-12 w-[120px]" />
                  <img src={apps} alt="App Store" className="h-12 w-[120px]" />
                </div>
             
                  <img src={mic} alt="Microsoft" className="h-12  border-1 p-2 rounded-lg cursor-pointer w-[120px] " />
                
              </div>
            </div>
          </div>
        </CommonSpace>
      </CommonContainer>
    </div>
  );
};

export default CourseFooter;
