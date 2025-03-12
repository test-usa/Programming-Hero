import React, { useState } from "react";
import useUpdate from "../../hooks/shared/useUpdate";


const PasswordSection = () => {
  const [currentPassword, setCurrentPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>("");

  const { mutate, isPending, isSuccess } = useUpdate("/auth/change-password"); 

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword !== confirmNewPassword) {
      alert("New passwords do not match.");
      return;
    }

   
    const passwordData = {
      oldPassword: currentPassword,
      newPassword: newPassword,
    };

  
    mutate(passwordData);
  };

  // Check if all fields are filled and passwords match
  const isFormValid = currentPassword && newPassword && confirmNewPassword && newPassword === confirmNewPassword;

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold bg-gradient-to-r from-[#CB3EEC] to-[#6653fd] text-transparent bg-clip-text mb-4 border-b border-dashed border-[#2d1e38] pb-4">
        Password
      </h2>
      <form onSubmit={handlePasswordChange} className="grid grid-cols-2 gap-8">
        <div>
          <label className="text-gray-400 block mb-1">Current Password</label>
          <input
            type="password"
            name="currentPassword"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="bg-[#20172D] text-white p-2 rounded w-full"
          />
        </div>
        <div>
          <label className="text-gray-400 block mb-1">New Password</label>
          <input
            type="password"
            name="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="bg-[#20172D] text-white p-2 rounded w-full"
          />
        </div>
        <div>
          <label className="text-gray-400 block mb-1">Confirm New Password</label>
          <input
            type="password"
            name="confirmNewPassword"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            className="bg-[#20172D] text-white p-2 rounded w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-purple-500 text-white py-2 px-4 rounded mt-4 col-span-2 ml-auto disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!isFormValid || isPending}
        >
          {isPending ? "Updating..." : "Change Password"}
        </button>
        {isSuccess && <p className="text-green-500 mt-2">Password updated successfully!</p>}
      </form>
    </div>
  );
};

export default PasswordSection;
