import React, { useEffect, useState } from "react";
import ProfileHeader from "./profileHeader";
import ProfileInfo from "./profileInfo";
import PasswordSection from "./passwordSection";
import ProfileForm from "./profileform";
import DeviceActivity from "./deviceStatus";
import useFetch from "../../hooks/shared/useFetch";
import useUpdate from "../../hooks/shared/useUpdate";
import useUpdatePut from "../../hooks/shared/useUpdatePut";


const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [url, setUrl] = useState('');
  const [profileData, setProfileData] = useState({
    fullName: null,
    Id: null,
    email: null,
    mobile: null,
    address: null,
    contact: null,
    gender: null,
    profileImage: null,
  });

  const { data, isLoading, isSuccess, refetch } = useFetch("/user/me");

  // Define separate mutation hooks
  const updateAdmin = useUpdatePut(`/admin/update-admin/${profileData.Id}`);
  const updateInstructor = useUpdatePut(`/instructor/update-instructor/${profileData.Id}`);
  const updateStudent = useUpdatePut(`/student/update-student/${profileData.Id}`);

  useEffect(() => {
    if (isSuccess && data?.data) {
      const role = data?.data?.user?.role;
      if (role === 'STUDENT') setUrl(`/student/update-student/${data.data.id}`);
      if (role === 'ADMIN') setUrl(`/admin/update-admin/${data.data.id}`);
      if (role === 'INSTRUCTOR') setUrl(`/instructor/update-instructor/${data.data.id}`);

      setProfileData({
        fullName: data.data.name || null,
        Id: data.data.id,
        email: data.data.email || null,
        mobile: data.data.contact || null,
        address: data.data.address || null,
        contact: data.data.contact || null,
        gender: data.data.gender || null,
        profileImage: data.data.profileImage || null,
      });
    }
  }, [data, isSuccess]);

  const [hasChanged, setHasChanged] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => {
      const updatedData = { ...prev, [name]: value };
      const isDifferent = Object.keys(updatedData).some(
        (key) => updatedData[key] !== (data?.data?.[key] || "")
      );
      setHasChanged(isDifferent);
      return updatedData;
    });
  };

  const saveChanges = () => {
    const role = data?.data?.user?.role;
    let mutateFn;

    if (role === 'ADMIN') mutateFn = updateAdmin.mutate;
    else if (role === 'INSTRUCTOR') mutateFn = updateInstructor.mutate;
    else if (role === 'STUDENT') mutateFn = updateStudent.mutate;
    else return;

    mutateFn(profileData, {
      onSuccess: () => {
        alert("Profile updated successfully!");
        setIsEditing(false);
        setHasChanged(false);
      },
      onError: (error) => {
        alert("Failed to update profile: " + error.message);
      },
    });
  };

  if (isLoading) {
    return (
      <div className="text-center mt-5">
        <p className="text-lg font-semibold text-purple-400">Loading...</p>
      </div>
    );
  }

  return (
    <main className="w-full h-full">
      <ProfileHeader isEditing={isEditing} setIsEditing={setIsEditing} />
      <ProfileInfo profileData={profileData} isEditing={isEditing} handleInputChange={handleInputChange} />
      <ProfileForm isEditing={isEditing} hasChanged={hasChanged} saveChanges={saveChanges} />
      {isEditing && <PasswordSection />}
      <DeviceActivity />
    </main>
  );
};

export default Profile;
