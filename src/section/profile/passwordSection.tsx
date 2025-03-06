import React from "react";

interface PasswordSectionProps {
  profileData: any;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordSection = ({ profileData, handleInputChange }: PasswordSectionProps) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold bg-gradient-to-r from-[#CB3EEC] to-[#6653fd] text-transparent bg-clip-text mb-4 border-b border-dashed border-[#2d1e38] pb-4">
        Password
      </h2>
      <div className="grid grid-cols-2 gap-8">
        <div>
          <label className="text-gray-400 block mb-1">Current Password</label>
          <input
            type="password"
            name="currentPassword"
            className="bg-[#20172D] text-white p-2 rounded w-full"
            value={profileData.currentPassword}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className="text-gray-400 block mb-1">New Password</label>
          <input
            type="password"
            name="newPassword"
            className="bg-[#20172D] text-white p-2 rounded w-full"
            value={profileData.newPassword}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className="text-gray-400 block mb-1">Confirm New Password</label>
          <input
            type="password"
            name="confirmNewPassword"
            className="bg-[#20172D] text-white p-2 rounded w-full"
            value={profileData.confirmNewPassword}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
};

export default PasswordSection;
