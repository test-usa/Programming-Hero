const HomeTitle = () => {
  return (
    <div className="absolute flex flex-col items-center justify-center w-full gap-4 text-white top-1/4 font-Grotesk">
      <h2 className="text-4xl font-extrabold text-center md:text-7xl bg-text-gradient ">
        Let's code_ Your Career
      </h2>
      <p className="max-w-2xl text-xl text-center">
        We're on a mission to provide personalized learning and empower
        individuals to kick-start their careers.
      </p>
      <button className="px-10 py-2 text-xl ring-3 rounded-br-3xl rounded-tl-3xl bg-custom-gradient">
        Explore
      </button>
    </div>
  );
};

export default HomeTitle;
