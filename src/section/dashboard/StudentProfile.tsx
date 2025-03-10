import React, { useState, useEffect } from "react";
import { User } from "lucide-react"; // Import User icon
import { useParams } from "react-router-dom";
import useFetchQuery from "../../hooks/shared/useFetch";


const AdminProfile = () => {
  const { id } = useParams(); 


  const { data, isLoading, isSuccess } = useFetchQuery(`/student/${id}`);


  const [profileData, setProfileData] = useState({});


  useEffect(() => {
    if (isSuccess && data?.data) {
      setProfileData(data.data);
    }
  }, [isSuccess, data]);


  if (isLoading) {
    return <div className="text-purple-400 p-6 text-center">Loading  profile...</div>;
  }


  if (!isSuccess || !data) {
    return <div className="text-red-500 p-6 text-center">Error: Failed to fetch admin profile</div>;
  }

  return (
    <main className="w-full h-full flex justify-center items-center p-6">
      <div className="max-w-2xl w-full p-8 ">
   
        <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-[#CB3EEC] to-[#6653fd] text-transparent bg-clip-text mb-8">
          {profileData.name}'s Profile
        </h1>


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

 
        <div className="space-y-6">

          <div className="text-center">
            <label className="text-gray-400 block mb-1 text-sm font-medium">
              Full Name
            </label>
            <p className="text-[#bbafca] font-semibold text-lg">
              {profileData.name}
            </p>
          </div>

    
          <div className="text-center">
            <label className="text-gray-400 block mb-1 text-sm font-medium">
              Email
            </label>
            <p className="text-[#bbafca] font-semibold text-lg">
              {profileData.email}
            </p>
          </div>


          <div className="text-center">
            <label className="text-gray-400 block mb-1 text-sm font-medium">
              Phone Number
            </label>
            <p className="text-[#bbafca] font-semibold text-lg">
              {profileData.phone || "N/A"}
            </p>
          </div>


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

export default AdminProfile;