import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import CommonContainer from "../common/CommonContainer";
import payment from "../assets/payment.png";
import CommonSpace from "../common/CommonSpace";
const Footer = () => {
  return (
    <div className="gap-4 text-white bg-cover bg-custom-footer font-Grotesk">
      <CommonContainer>
        <CommonSpace>
          <div className="flex flex-col w-full gap-4">
            <div className="flex flex-col items-center justify-between w-full gap-4 md:flex-row">
              <div>
                <p>Level-4, 34, Awal Centre, Banani, Dhaka</p>
                <p>Support: web@programming-hero.com</p>
                <p>(Available : 10:00am to 07:00pm)</p>
              </div>
              <div className="flex flex-row gap-2 font-bold md:gap-4 md:flex-col ">
                <Link to="/">Home</Link>
                <Link to="/about">About Page</Link>
                <Link to="/success">Success Page</Link>
                <Link to="/">Terms and Condition</Link>
                <Link to="/">Privacy Policy</Link>
              </div>
              <div className="flex flex-col items-center justify-center gap-4">
                <p>Follow Us</p>
                <div className="flex items-center gap-6 text-2xl ">
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
            </div>
            <div className="flex flex-col items-center justify-between w-full gap-6 md:flex-row ">
              <div className="flex flex-col items-center justify-center gap-2 md:items-start">
                <p>Pay with</p>
                <p>ssl commerze</p>
                <div>
                  <img src={payment} alt="payment" />
                </div>
              </div>
              <div>
                <p>@Programming Hero 2025</p>
              </div>
            </div>
          </div>
        </CommonSpace>
      </CommonContainer>
    </div>
  );
};

export default Footer;
