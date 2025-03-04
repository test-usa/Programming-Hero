import React, { useState, useEffect } from "react";
import { User } from "lucide-react"; // Import User icon
import { useParams } from "react-router-dom";
import useFetchQuery from "../../hooks/shared/useFetch";


const InstructorProfile = () => {
  const { id } = useParams(); // Get the admin ID from the URL

  // Fetch admin data using the custom hook
  const { data, isLoading, isSuccess } = useFetchQuery(`/instructor/${id}`);

  // State to track user input
  const [profileData, setProfileData] = useState({});

  // Update profileData when data is successfully fetched
  useEffect(() => {
    if (isSuccess && data?.data) {
      setProfileData(data.data);
    }
  }, [isSuccess, data]);

  // Display loading state
  if (isLoading) {
    return <div className="text-white p-6 text-center">Loading admin profile...</div>;
  }

  // Display error state if data fetching fails
  if (!isSuccess || !data) {
    return <div className="text-red-500 p-6 text-center">Error: Failed to fetch admin profile</div>;
  }

  return (
    <main className="w-full h-full flex justify-center items-center p-6">
      <div className="max-w-2xl w-full p-8 ">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-[#CB3EEC] to-[#6653fd] text-transparent bg-clip-text mb-8">
          {profileData.name}'s Profile
        </h1>

        {/* Profile Image */}
        <div className="flex justify-center items-center mb-8">
          <div className="w-32 h-32 rounded-full border-4 border-[#2d1e38] flex items-center justify-center overflow-hidden bg-[#2d1e38]">
            {profileData.profilePhoto ? (
              <img
                src={profileData.profilePhoto}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <User size={64} className="text-gray-400" /> // User icon as fallback
            )}
          </div>
        </div>

        {/* Profile Information */}
        <div className="space-y-6">
          {/* Full Name */}
          <div className="text-center">
            <label className="text-gray-400 block mb-1 text-sm font-medium">
              Full Name
            </label>
            <p className="text-[#bbafca] font-semibold text-lg">
              {profileData.name}
            </p>
          </div>

          {/* Email */}
          <div className="text-center">
            <label className="text-gray-400 block mb-1 text-sm font-medium">
              Email
            </label>
            <p className="text-[#bbafca] font-semibold text-lg">
              {profileData.email}
            </p>
          </div>

          {/* Phone Number */}
          <div className="text-center">
            <label className="text-gray-400 block mb-1 text-sm font-medium">
              Phone Number
            </label>
            <p className="text-[#bbafca] font-semibold text-lg">
              {profileData.phone || "N/A"}
            </p>
          </div>

          {/* Address */}
          <div className="text-center">
            <label className="text-gray-400 block mb-1 text-sm font-medium">
              Address
            </label>
            <p className="text-[#bbafca] font-semibold text-lg">
              {profileData.address || "N/A"}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default InstructorProfile;