import triangle from "../../../assets/images/triangle.svg";

const OurCourse = () => {
  return (
    <div>
      <div className="bg-black ">
        <div className="flex items-center justify-between">
          <h2 className=" relative text-center bg-[linear-gradient(97.64deg,#eaaaff,#b5acff)] bg-clip-text text-transparent text-7xl after:absolute after:bg-text-gradient after:inset-0 after:h-2  after:w-[10%] after:mx-auto after:top-20">
            Our Courses_
          </h2>
          <div>
            <img src={triangle} alt="" />
          </div>
        </div>
      </div>
      {/* <button className=" relative bg-clip-padding p-4  bg-[#080723] w-full before:absolute before:inset-0 before:bg-[linear-gradient(90deg,#384fde,#985cf0)] before:-m-[1px] before:rounded-lg before:-z-10 rounded-lg hover:bg-[linear-gradient(90deg,#384fde,#985cf0)] transition-all ">
        Login
      </button> */}
    </div>
  );
};

export default OurCourse;
