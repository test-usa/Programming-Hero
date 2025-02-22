import CommonContainer from "../common/CommonContainer";
import Footer from "../layout/Footer";
import LoginHeader from "../section/loginSignup/LoginHeader";
import SiginUp from "../section/loginSignup/SiginUp";
import phone from "../assets/images/phone.png";
const SignUpPage = () => {
  return (
    <>
      <div className="bg-black bg-login-signin bg-right w-full bg-no-repeat  ">
        <LoginHeader />
        <CommonContainer>
          <SiginUp />
        </CommonContainer>
      </div>
      <Footer />
      <div className=" fixed bottom-4 right-4 cursor-pointer">
        <img src={phone} alt="" />
      </div>
    </>
  );
};

export default SignUpPage;
