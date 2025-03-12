
import { useNavigate } from "react-router-dom";
import Course from "../section/course-details/Course";
import CoursedetailsHero from "../section/course-details/CoursedetailsHero";
import CourseFooter from "../section/course-details/CourseFooter";
import CourseNav from "../section/course-details/CourseNav";
import CourseWork from "../section/course-details/CourseWork";
import NextBatch from "../section/course-details/NextBatch";
import Project from "../section/course-details/Project";
import Specialty from "../section/course-details/Specialty";
import { userStore } from "../store/UserStore";
import { useEffect } from "react";

const CourseDetails = () => {
    const {user} = userStore();
  
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/login"); 
        }
    }, [user, navigate]);

    if (!user) {
        return null;
    }

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
