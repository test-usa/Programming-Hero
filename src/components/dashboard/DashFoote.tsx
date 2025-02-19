import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import CommonContainer from "../../common/CommonContainer";
import CommonSpace from "../../common/CommonSpace";
import microsoft from "../../assets/images/microsoft.webp";
import applestore from "../../assets/images/applestore.webp";
import googlestroe from "../../assets/images/googleplay.webp";

const DashFoote = () => {
  return (
    <div className="gap-4 text-white bg-cover bg-custom-footer font-Grotesk">
      <CommonContainer>
        <CommonSpace>
          <div className="flex flex-col w-full gap-4">
            <div className="flex flex-col items-center justify-between w-full gap-4 md:flex-row">
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
                <p>Useful Links</p>
                <section className="flex flex-row gap-2 font-bold md:gap-4 md:flex-col ">
                  <Link to="/">Home</Link>
                  <Link to="/about">About Page</Link>
                  <Link to="/success">Success Page</Link>
                  <Link to="/">Terms and Condition</Link>
                  <Link to="/">Privacy Policy</Link>
                </section>
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
                <p>Download Apps</p>
                <div >
                  <img src={applestore} alt=""  className="w-52 h-16"/>
                  <img src={googlestroe} alt="" className="w-52 h-16"/>
                  <img src={microsoft} alt="" className="w-52 h-16"/>
                </div>
              </div>
            </div>
          </div>
        </CommonSpace>
      </CommonContainer>
    </div>
  );
};

export default DashFoote;
