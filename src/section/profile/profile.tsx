import React, { useEffect, useState } from "react";
import ProfileHeader from "./profileHeader";
import ProfileInfo from "./profileInfo";
import PasswordSection from "./passwordSection";
import ProfileForm from "./profileform";
import DeviceActivity from "./deviceStatus";
import useFetch from "../../hooks/shared/useFetch";


const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const initialProfile = {
    fullName: "No name provided",
    studentId: " ", 
    email: "No email provided",
    mobile: "No contact provided",
           
    address: "",
    contact: "",
    gender: "MALE",
    profileImage: "",     
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  };

  // Initialize profileData state using initialProfile
  const [profileData, setProfileData] = useState(initialProfile);

  const { data, isLoading, isSuccess, refetch } = useFetch("/user/me");
  console.log(data,"from eitty")

  useEffect(() => {
    if (isSuccess && data?.data) {
      setProfileData({
        fullName: data.data.name || "No name provided",
        studentId: data.data.id, 
        email: data.data.email || "No email provided",
        mobile: data.data.contact || "No contact provided",
     
        address: data.data.address || "",
        contact: data.data.contact || "",
        gender: data.data.gender || "MALE",
        profileImage: data.data.profileImage || "",
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: "",
      });
    }
  }, [data, isSuccess]); 


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

  const renderLoading = () => (
    <div className="text-center mt-5">
      <p className="text-lg font-semibold text-purple-400">Loading...</p>
    </div>
  );
  
  if (isLoading) {
    return renderLoading();
  }

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
