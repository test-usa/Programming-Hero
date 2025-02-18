import javascript from "../../assets/images/js.svg";
import html from "../../assets/images/html.svg";
import react from "../../assets/images/react.svg";
import tailwind from "../../assets/images/tailwind.svg";
import CommonContainer from "../../common/CommonContainer";

const HomeAnimation = () => {
  return (
    <CommonContainer>
      <div className="flex-col hidden pt-20 lg:flex">
        <div className="flex items-center justify-between ">
          <img
            className=" animate-rotated-bounce"
            src={html}
            alt="javascript"
          />
          <img className="animate-custom-spin" src={react} alt="react" />
        </div>
        <div className="flex items-center justify-between ">
          <img className="animate-bounce" src={tailwind} alt="tailwind" />
          <img className="animate-pulse " src={javascript} alt="react" />
        </div>
      </div>
    </CommonContainer>
  );
};

export default HomeAnimation;
