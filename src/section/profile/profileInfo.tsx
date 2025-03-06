import React from "react";

interface ProfileInfoProps {
  profileData: any;
  isEditing: boolean;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  profileImage: string | null;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProfileInfo = ({ profileData, isEditing, handleInputChange, profileImage, handleImageChange }: ProfileInfoProps) => {
  return (
    <div className="rounded-lg mb-8">
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-4">
          <div>
            <label className="text-gray-400 block mb-1">Full Name</label>
            {isEditing ? (
              <input
                type="text"
                name="fullName"
                className="bg-[#20172D] text-white p-2 rounded w-full"
                value={profileData.fullName}
                onChange={handleInputChange}
              />
            ) : (
              <p className="text-[#bbafca] font-semibold">{profileData.fullName}</p>
            )}
          </div>
          <div>
            <label className="text-gray-400 block mb-1">Student ID</label>
            <p className="text-[#bbafca] font-semibold">{profileData.studentId}</p>
          </div>
          {isEditing && (
            <div>
              <label className="text-gray-400 block mb-1">Profile Image</label>
              <div className="flex items-center gap-4">
                <img
                  src={profileImage || "https://via.placeholder.com/100"}
                  alt="Profile"
                  className="w-20 h-20 rounded-full border border-gray-600"
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>
            </div>
          )}
        </div>
        <div className="space-y-4">
          <div>
            <label className="text-gray-400 block mb-1">Email</label>
            <p className="text-[#bbafca] font-semibold">{profileData.email}</p>
          </div>
          <div>
            <label className="text-gray-400 block mb-1">Mobile Number</label>
            {isEditing ? (
              <input
                type="text"
                name="mobile"
                className="bg-[#20172D] text-white p-2 rounded w-full"
                value={profileData.mobile}
                onChange={handleInputChange}
              />
            ) : (
              <p className="text-[#bbafca] font-semibold">{profileData.mobile}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
