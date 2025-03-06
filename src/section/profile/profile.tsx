import React, { useState } from "react";
import ProfileHeader from "./profileHeader";
import ProfileInfo from "./profileInfo";
import PasswordSection from "./passwordSection";
import ProfileForm from "./profileform";
import DeviceActivity from "./deviceStatus";


const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [profileData, setProfileData] = useState({
    fullName: "Shahriar Samir",
    studentId: "WEB9-0606",
    email: "shabusiness05@gmail.com",
    mobile: "+8801311297872",
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const [hasChanged, setHasChanged] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => {
      const updatedData = { ...prev, [name]: value };
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
        setHasChanged(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const saveChanges = () => {
    // Save logic here
  };

  return (
    <main className="w-full h-full">
      <ProfileHeader isEditing={isEditing} setIsEditing={setIsEditing} />
      <ProfileInfo
        profileData={profileData}
        isEditing={isEditing}
        handleInputChange={handleInputChange}
        profileImage={profileImage}
        handleImageChange={handleImageChange}
      />
      {isEditing && <PasswordSection profileData={profileData} handleInputChange={handleInputChange} />}
      <ProfileForm isEditing={isEditing} hasChanged={hasChanged} saveChanges={saveChanges} />
      <DeviceActivity />
    </main>
  );
};

export default Profile;
