import React from "react";

interface ProfileInfoProps {
  profileData: any;
  isEditing: boolean;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  profileImage: string | null;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProfileInfo = ({
  profileData,
  isEditing,
  handleInputChange,

}: ProfileInfoProps) => {
  return (
    <div className="rounded-lg mb-8">
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-4">
          {/* Full Name */}
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

          {/* Student ID */}
          <div>
            <label className="text-gray-400 block mb-1">ID</label>
            <p className="text-[#bbafca] font-semibold">{profileData.Id}</p>
          </div>

          {/* Profile Image */}
          {isEditing && (
            <div>
              <label className="text-gray-400 block mb-1">Profile Image</label>
              <div className="flex items-center gap-4">
                {/* <img
                  src={profileImage || "https://via.placeholder.com/100"}
                  alt="Profile"
                  className="w-20 h-20 rounded-full border border-gray-600"
                /> */}
                <input
                type="text"
                name="text"
                className="bg-[#20172D] text-white p-2 rounded w-full"
          
                onChange={handleInputChange}
              />
              </div>
            </div>
          )}

          {/* Phone */}
          {/* {isEditing && (
            <div>
              <label className="text-gray-400 block mb-1">Phone Number</label>
              <input
                type="text"
                name="phone"
                className="bg-[#20172D] text-white p-2 rounded w-full"
                value={profileData.phone || ""}
                onChange={handleInputChange}
              />
            </div>
          )} */}

          {/* Address */}
          {isEditing && (
            <div>
              <label className="text-gray-400 block mb-1">Address</label>
              <input
                type="text"
                name="address"
                className="bg-[#20172D] text-white p-2 rounded w-full"
                value={profileData.address || ""}
                onChange={handleInputChange}
              />
            </div>
          )}
        </div>

        <div className="space-y-4">
          {/* Email */}
          {/* <div>
            <label className="text-gray-400 block mb-1">Email</label>

            {isEditing ? (
              <input
                type="email"
                name="email"
                className="bg-[#20172D] text-white p-2 rounded w-full"
                value={profileData.email}
                onChange={handleInputChange}
              />
            ) : (
              <p className="text-[#bbafca] font-semibold">{profileData.email}</p>
            )}
          </div> */}
           <div>
            <label className="text-gray-400 block mb-1">Email</label>
            <p className="text-[#bbafca] font-semibold">{profileData.email}</p>
          </div>

          {/* Mobile */}
          {/* <div>
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
          </div> */}

          {/* Contact */}
          {isEditing && (
            <div>
              <label className="text-gray-400 block mb-1">Contact</label>
              <input
                type="text"
                name="contact"
                className="bg-[#20172D] text-white p-2 rounded w-full"
                value={profileData.contact || ""}
                onChange={handleInputChange}
              />
            </div>
          )}

          {/* Gender */}
          {isEditing && (
            <div>
              <label className="text-gray-400 block mb-1">Gender</label>
              <select
                name="gender"
                className="bg-[#20172D] text-white p-2 rounded w-full"
                value={profileData.gender || "MALE"}
                onChange={handleInputChange}
              >
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
                <option value="OTHER">Other</option>
              </select>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
