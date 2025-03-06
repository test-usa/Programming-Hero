import React from "react";
import { Pencil } from "lucide-react";

interface ProfileHeaderProps {
  isEditing: boolean;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProfileHeader = ({ isEditing, setIsEditing }: ProfileHeaderProps) => {
  return (
    <div className="flex justify-between items-center mb-8 border-b border-dashed border-[#2d1e38] pb-5">
      <h1 className="text-xl font-semibold bg-gradient-to-r from-[#CB3EEC] to-[#6653fd] text-transparent bg-clip-text">
        My Profile
      </h1>
      <button
        className="text-purple-400 hover:text-purple-300"
        onClick={() => setIsEditing(!isEditing)}
      >
        <Pencil size={20} />
      </button>
    </div>
  );
};

export default ProfileHeader;
