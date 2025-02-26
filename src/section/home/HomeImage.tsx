import bgimage from "../../assets/images/home.png";
const HomeImage = () => {
  return (
    <>
      <div className="w-full  bg-cover bg-center h-auto md:h-64 absolute bottom-[30%]  bg-custom-pattern  hidden sm:block" />
      <div className="absolute bottom-0 ">
        <img src={bgimage} alt="logo" />
      </div>
    </>
  );
};

export default HomeImage;
