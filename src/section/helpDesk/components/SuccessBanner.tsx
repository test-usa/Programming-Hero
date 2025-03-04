import htmlImg from "../photo/Html.svg";
import reactImg from "../photo/React.svg";
import tailwindImg from "../photo/Tailwind.svg";
import CommonContainer from "../../../common/CommonContainer";
import CommonSpace from "../../../common/CommonSpace";

const SuccessBanner = () => {
  return (
    <div className="bg-gradient-to-b from-[#10031A] to-[#2E0746]   text-center">
      <CommonContainer>
        <CommonSpace>
          <div className="">
            {/* <img
              src={htmlImg}
              alt="Html"
              className="lg:block md:hidden hidden w-16 absolute top-[160px] left-[160px] animate-rotated-bounce"
            />

            <img
              src={reactImg}
              alt="React"
              className="lg:block md:hidden hidden w-16 absolute top-[250px] left-[250px] animate-custom-spin"
            />
            <img
              src={reactImg}
              alt="React"
              className="lg:block md:hidden hidden w-16 absolute top-[160px] right-[160px] animate-custom-spin"
            />
            <img
              src={tailwindImg}
              alt="Tailwind"
              className="lg:block md:hidden hidden w-16 absolute top-[250px] right-[250px] animate-swing-rotate"
            /> */}

            <div className=" md:w-[60%] w-full mx-auto text-center">
              <h2 className=" font-bold font-rubik text-2xl md:text-3xl lg:text-6xl uppercase text-colorBase text-transparent bg-clip-text bg-gradient-to-r from-[#cb43c2] to-[#0f16f1]">
                SuccessFull Students
              </h2>
              <p className="text-white/50 text-lg  text-center leading-7 pt-5">
                আমাদের কোর্স থেকে শিখে যারা বিভিন্ন জায়গায় চাকরি/ইন্টার্ন পেয়েছে
                তাদের মধ্যে কয়েকজন এর প্রোফাইল নিচে দেয়া হলো ।
              </p>
            </div>
          </div>
        </CommonSpace>
      </CommonContainer>
    </div>
  );
};

export default SuccessBanner;
