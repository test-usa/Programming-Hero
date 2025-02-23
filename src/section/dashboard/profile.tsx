import React, { useState } from "react";
import { Pencil } from "lucide-react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState(null);

  // Initial state
  const initialProfile = {
    fullName: "Shahriar Samir",
    studentId: "WEB9-0606",
    email: "shabusiness05@gmail.com",
    mobile: "+8801311297872",
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  };

  // State to track user input
  const [profileData, setProfileData] = useState(initialProfile);
  const [hasChanged, setHasChanged] = useState(false);

  const deviceActivities = [
    {
      serial: 1,
      platform: "Windows 10",
      date: "20-02-2025 03:56 PM",
      action: "Remove",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => {
      const updatedData = { ...prev, [name]: value };
      // Check if current state is different from the initial state
      const isDifferent = Object.keys(updatedData).some(
        (key) => updatedData[key] !== initialProfile[key]
      );
      setHasChanged(isDifferent);
      return updatedData;
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
        setHasChanged(true); // Mark changes if image is changed
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <main className="w-full h-full">
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

      {/* Profile Information */}
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
                <p className="text-[#bbafca] font-semibold">
                  {profileData.fullName}
                </p>
              )}
            </div>
            <div>
              <label className="text-gray-400 block mb-1">Student ID</label>
              <p className="text-[#bbafca] font-semibold">
                {profileData.studentId}
              </p>
            </div>
            {isEditing && (
              <div>
                <label className="text-gray-400 block mb-1">
                  Profile Image
                </label>
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
              <p className="text-[#bbafca] font-semibold">
                {profileData.email}
              </p>
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
                <p className="text-[#bbafca] font-semibold">
                  {profileData.mobile}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Password Section */}
      {isEditing && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold bg-gradient-to-r from-[#CB3EEC] to-[#6653fd] text-transparent bg-clip-text mb-4 border-b border-dashed border-[#2d1e38] pb-4">
            Password
          </h2>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <label className="text-gray-400 block mb-1">
                Current Password
              </label>
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
              <label className="text-gray-400 block mb-1">
                Confirm New Password
              </label>
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
      )}

      {/* Save Changes Button */}
      {isEditing && (
        <button
          className={`p-2 rounded block ms-auto ${
            hasChanged
              ? "bg-purple-500 hover:bg-purple-600 text-white"
              : "bg-gray-500 text-gray-300 cursor-not-allowed"
          }`}
          disabled={!hasChanged}
        >
          Save Changes
        </button>
      )}

      {/* Device Activity */}
      <div>
        <h2 className="mt-5 text-xl font-semibold bg-gradient-to-r from-[#CB3EEC] to-[#6653fd] text-transparent bg-clip-text mb-4 border-b border-dashed border-[#2d1e38] pb-4">
          Device Activity
        </h2>
        <div className="rounded-lg overflow-hidden mt-8">
          <table className="w-full">
            <thead className="bg-[#231b2c]">
              <tr>
                <th className="text-left p-4 text-gray-400">Serial</th>
                <th className="text-left p-4 text-gray-400">Platform</th>
                <th className="text-left p-4 text-gray-400">Date</th>
                <th className="text-left p-4 text-gray-400">Action</th>
              </tr>
            </thead>
            <tbody>
              {deviceActivities.map((activity) => (
                <tr key={activity.serial} className="text-gray-400">
                  <td className="p-4">{activity.serial}</td>
                  <td className="p-4">{activity.platform}</td>
                  <td className="p-4">{activity.date}</td>
                  <td className="p-4">
                    <button className="font-semibold bg-gradient-to-r from-[#CB3EEC] to-[#6653fd] text-transparent bg-clip-text">
                      {activity.action}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default Profile;
