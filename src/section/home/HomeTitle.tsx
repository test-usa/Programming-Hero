const HomeTitle = () => {
  return (
    <div className="absolute flex flex-col items-center justify-center w-full text-white top-1/4 font-Grotesk ">
      <div className="rounded-full w-96 h-80 bg-black sm:bg-text-gradient blur-[90px] "></div>
      <div className="absolute z-20 flex flex-col items-center justify-center w-full gap-4 top-5">
        <h2 className="px-4 text-5xl font-extrabold text-center lg:text-7xl lg">
          Let's code_ Your Career
        </h2>
        {/*  */}
        <p className="max-w-lg px-4 text-lg text-center lg:max-w-xl sm:text-xl">
          We're on a mission to provide personalized learning and empower
          individuals to kick-start their careers.
        </p>
        <button className="px-10 py-2 text-xl bg-black rounded-full ring-3 sm:bg-custom-gradient">
          Explore
        </button>
      </div>
    </div>
  );
};

export default HomeTitle;
