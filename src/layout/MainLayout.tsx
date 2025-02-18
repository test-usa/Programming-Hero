import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div>
      <div>
        <Outlet />
      </div>
      
    </div>
  );
};

export default MainLayout;
