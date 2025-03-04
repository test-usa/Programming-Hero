import SuccessBanner from "../section/helpDesk/components/SuccessBanner";
import SuccessBody from "../section/helpDesk/components/SuccessBody";
import CardList from "../section/helpDesk/components/card/CardList";
import SuccessFooter from "../section/helpDesk/components/SuccessFooter";
import CourseNav from "../section/course-details/CourseNav";

const Success = () => {
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
