import React, { useEffect } from "react";
import { RxCross2 } from "react-icons/rx";

import { Link, useNavigate} from "react-router-dom";
import { userStore } from "../../store/UserStore";
import { FaArrowRightToBracket } from "react-icons/fa6";


interface User {
    email: string;
    role: string;
    id: string;
    name: string;
  }



type ProfileModalProps = {
  isOpen: boolean;
  onClose: () => void;
  
};

const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose }) => {
    const { user,logOutUser  } = userStore() 


    const nestedUser: User = user?.data?.user
    console.log("User Data:", nestedUser);
    const navigate = useNavigate();
   
  
    
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  const handleLogout = () => {
    logOutUser(); // Call the logout function
    navigate("/login"); // Redirect to login page
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end items-start p-5">
      <div className="bg-[#141026] text-white w-80 p-5 rounded-xl  relative top-[70px] border-[1px] border-t-[#8B348E] border-x-[#8B348E] border-b-0">
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-white"
          onClick={onClose}
        >
        < RxCross2 className="text-white text-lg"/>
        </button>
        <div className="flex flex-col items-center">
          <img
            src=" https://i.pravatar.cc/150?u=a04258114e29026702d"
            alt="Profile"
            className="w-20 h-20 rounded-full border-2 border-gray-400"
          />
          <h2 className="mt-3 text-lg font-semibold">{nestedUser?.name}</h2>
          <p className="text-gray-400 text-sm">{nestedUser?.email} </p>
         <Link to="/"> <button className="mt-3 px-4 py-2 bg-custom-gradient rounded-lg text-white font-medium">
            View Profile
          </button></Link>
        </div>
        <ul className="mt-5 text-base space-y-3 p-3">
          <li className="cursor-pointer border-b-1 border-gray-600 "> <Link to="/class"> My Classes</Link></li>
          <li className="cursor-pointer border-b-1 border-gray-600 "><Link to="/helpdesk">Helpdesk</Link> </li>
          <li className="cursor-pointer border-b-1 border-gray-600 ">Leaderboard</li>
          <li className="cursor-pointer border-b-1 border-gray-600 ">Announcement</li>
          <li className="cursor-pointer border-b-1 border-gray-600 ">Conceptual Sessions</li>
        </ul>
        <div onClick={handleLogout} className=" p-3  cursor-pointer flex items-center gap-2 ">
          <h2 className="text-[#cb4bc5]">LogOut </h2>
         <FaArrowRightToBracket className=" text-lg rotate-180"/>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;

