import CommonContainer from "../common/CommonContainer";
import Footer from "../layout/Footer";
import Login from "../section/loginSignup/Login";
import LoginHeader from "../section/loginSignup/LoginHeader";
import phone from "../assets/images/phone.png";
const LoginPage = () => {
  return (
    <>
      <div className="bg-black bg-login-signin bg-right w-full bg-no-repeat  ">
        <LoginHeader />
        <CommonContainer>
          <Login />
        </CommonContainer>
      </div>
      <Footer />
      <div className=" fixed bottom-4 right-4  cursor-pointer">
        <img src={phone} alt="" />
      </div>
    </>
  );
};

export default LoginPage;
