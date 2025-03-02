import DashFoote from "../components/dashboard/DashFoote";
import DashNavbar from "../components/dashboard/DashNavbar";
import LavelOne from "../components/dashboard/LavelOne";

const Course = () => {
  return (
    <div className=" bg-[#010314]">
      <DashNavbar />
      <div className="my-12">
        <LavelOne />
      </div>
      <DashFoote />
    </div>
  );
};

export default Course;
