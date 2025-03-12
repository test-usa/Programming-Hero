import SuccessBanner from "../section/helpDesk/components/SuccessBanner";
import SuccessBody from "../section/helpDesk/components/SuccessBody";
import CardList from "../section/helpDesk/components/card/CardList";
import SuccessFooter from "../section/helpDesk/components/SuccessFooter";
import CourseNav from "../section/course-details/CourseNav";
import { userStore } from "../store/UserStore";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Success = () => {
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
      <SuccessBanner />
      <SuccessBody />
      <CardList />
      <SuccessFooter />
    </div>
  );
};

export default Success;
