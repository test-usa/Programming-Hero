import DashNavbar from "../components/dashboard/DashNavbar";
import Course from "../section/course-details/Course";
import CoursedetailsHero from "../section/course-details/CoursedetailsHero";
import CourseFooter from "../section/course-details/CourseFooter";
import CourseNav from "../section/course-details/CourseNav";
import CourseWork from "../section/course-details/CourseWork";
import NextBatch from "../section/course-details/NextBatch";
import Project from "../section/course-details/Project";
import Specialty from "../section/course-details/Specialty";

const CourseDetails = () => {
  return (
    <div>
      <CourseNav />
      <CoursedetailsHero />
      <NextBatch />
      <Project />
      <Course />
      <Specialty />
      <CourseWork />
      <CourseFooter />
    </div>
  );
};

export default CourseDetails;
