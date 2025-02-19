import DashFoote from "../components/dashboard/DashFoote";
import DashNavbar from "../components/dashboard/DashNavbar";
import LavelOne from "../components/dashboard/LavelOne";
import VideoOutline from "./VideoOutline";

const Mehedi = () => {
  return (
    <div className=" bg-[#010314]">
      <DashNavbar />
      <div className="my-12">
        <LavelOne />
        <VideoOutline />
      </div>
      <DashFoote />
    </div>
  );
};

export default Mehedi;
