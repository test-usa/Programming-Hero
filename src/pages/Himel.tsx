import HelpDeskCategory from "../section/helpDesk/components/HelpDeskCategory";
import PostType from "../section/helpDesk/components/PostType";
import HelpDesk from "../section/helpDesk/HelpDesk";
import HelpDeskHeader from "../section/helpDesk/HelpDeskHeader";

const Himel = () => {
  return (
    <div>
      <HelpDeskHeader></HelpDeskHeader>
      <HelpDeskCategory></HelpDeskCategory>
      <PostType></PostType>
    </div>
  );
};

export default Himel;
