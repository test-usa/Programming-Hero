import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

import microsoft from "../photo/microsoft.webp";
import applestore from "../photo/applestore.webp";
import googlestroe from "../photo/googleplay.webp";
import CommonContainer from "../../../common/CommonContainer";
import CommonSpace from "../../../common/CommonSpace";

const SuccessFooter = () => {
  return (
    <div className="gap-4 text-white bg-cover bg-custom-footer font-Grotesk">
      <CommonContainer>
        <CommonSpace>
          <div className="flex flex-col gap-6 w-full md:flex-row justify-between">
            {/* FIRST ONE SECTION */}
            <div className="flex flex-col w-full items-center md:items-start">
              <p className="hidden md:block">Office Addrees</p>
              <section>
                <p>Level-4, 34, Awal Centre, Banani, Dhaka</p>
                <p>Helpline: 01322901105 , 01332-502004</p>
                <p>Support: web@programming-hero.com</p>
                <p>(Available : 10:00am to 07:00pm)</p>
              </section>
            </div>
            {/* SECOND ONE SECTION */}
            <div className="flex flex-col w-full justify-center md:justify-normal items-center md:items-start">
              <p className="hidden md:block">Useful Links</p>
              <section className="flex md:flex-col gap-2 md:gap-4 flex-row ">
                <Link to="/">Home</Link>
                <Link to="/about">About Page</Link>
                <Link to="/success">Success Page</Link>
                <Link to="/">Terms and Condition</Link>
                <Link to="/">Privacy Policy</Link>
              </section>
            </div>
            {/* THIRD ONE SECTION */}
            <div className="flex flex-col gap-4 w-full justify-center md:justify-normal items-center md:items-start">
              <div className="flex flex-col w-full gap-4 justify-center md:justify-normal items-center md:items-start">
                <p className="hidden md:block">Follow Us</p>
                <div className="flex  gap-6 text-2xl ">
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
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-start hidden md:block">Download Apps</p>
                <div className="flex  lg:flex-row flex-col items-center md:items-start w-full gap-4 ">
                  <div className="gap-4 flex md:flex-col items-center w-full">
                    <img src={applestore} alt="" className="max-w-40 h-12" />
                    <img src={googlestroe} alt="" className="max-w-40  h-12" />
                  </div>
                  <img src={microsoft} alt="" className="max-w-36 h-8" />
                </div>
              </div>
            </div>
          </div>
        </CommonSpace>
      </CommonContainer>
    </div>
  );
};

export default SuccessFooter;
