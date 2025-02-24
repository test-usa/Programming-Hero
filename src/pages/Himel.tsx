import HelpDeskCategory from "../section/helpDesk/components/HelpDeskCategory";
import HelpDeskHeader from "../section/helpDesk/HelpDeskHeader";
import { Outlet } from "react-router-dom";

const Himel = () => {
  return (
    <div>
      <HelpDeskHeader></HelpDeskHeader>
      <HelpDeskCategory></HelpDeskCategory>
      <Outlet />
    </div>
  );
};

export default Himel;
