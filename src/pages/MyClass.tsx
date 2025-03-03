import DashFoote from "../components/dashboard/DashFoote";
import LavelOne from "../components/dashboard/LavelOne";
import CourseNav from "../section/course-details/CourseNav";

const MyClass = () => {
  return (
    <div className=" bg-[#010314]">
    <CourseNav/>
      <div className="my-12">
        <LavelOne />
      </div>
      <DashFoote />
    </div>
  );
};

export default MyClass;
