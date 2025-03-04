import CommonContainer from "../../common/CommonContainer";
import team from "../../assets/team.webp";
import SapceBottom from "../../common/SapceBottom";
import Border from "./Border";
import square from "../../assets/images/blue-square.svg";
import triangle from "../../assets/images/triangle.svg";

const OurMission = () => {
  return (
    <div className="bg-[#0D0518] p-5 ">
      <CommonContainer>
        <div className="items-center justify-between hidden w-full lg:flex ">
          <div className="">
            <img className="w-40" src={triangle} alt="triangle" />
          </div>
          <div className="">
            <img className="w-40 " src={square} alt="triangle" />
          </div>
        </div>

        <SapceBottom>
          <div className="flex flex-col items-center justify-center gap-4">
            <h2 className=" text-center bg-[linear-gradient(97.64deg,#eaaaff,#b5acff)] bg-clip-text text-transparent md:text-7xl text-4xl">
              Our Mission_
            </h2>
            <Border />
          </div>
        </SapceBottom>
        <div className="md:w-[85%] p-5 md:flex gap-5 w-full">
          <div className="w-full p-3 md:w-1/2">
            <img src={team} alt="" className="w-full rounded-lg" />
          </div>
          <div className="w-full p-3 md:w-1/2">
            <div className="text-lg text-white">
              <span className="text-[#D14DC9]">Why:</span> We are passionate
              about empowering individuals to transform their lives through the
              power of coding. We believe that everyone should have access to
              high-quality, affordable coding education, regardless of their
              background or experience.
            </div>

            <div className="pt-3 text-lg text-white">
              <span className="text-[#D14DC9]">What:</span> We provide a
              comprehensive range of online programming courses, from
              beginner-level Web Development to advanced CSE Fundamentals and
              Advanced Programming Courses. Our courses are designed to be
              engaging, effective, and tailored to the needs of today's
              learners.
            </div>

            <div className="pt-3 text-lg text-white">
              <span className="text-[#D14DC9]">How:</span> We nurture our
              students in a personalized and supportive environment that fosters
              confidence and success. Our friendly and dedicated instructors are
              always available to guide and mentor our students, ensuring they
              receive the support they need to achieve their coding goals.
            </div>
          </div>
        </div>
      </CommonContainer>
    </div>
  );
};

export default OurMission;
