import bgimage from "../../assets/images/home.png";
const HomeImage = () => {
  return (
    <>
      <div className="w-full bg-cover bg-center h-64 absolute bottom-[30%] hidden bg-custom-pattern sm:block" />

      <div className="absolute bottom-0 ">
        <img className="" src={bgimage} alt="logo" />
        <div className=" w-full h-10 text-white bg-black blur-[60px] "></div>
      </div>
    </>
  );
};

export default HomeImage;
