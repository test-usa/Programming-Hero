import React from "react";
import { Eye, Trash2 } from "lucide-react";
import useFetchQuery from "../../../hooks/shared/useFetch";
import { Link } from "react-router-dom";



const Admins = () => {
  // Use the custom hook with correct type
  const { data, isLoading, isSuccess } = useFetchQuery("/admin");

  console.log(isLoading)
  // Display loading state
  if (isLoading) {
    return <div className="text-white p-6">Loading admins...</div>;
  }

  // Check that the response is successful and data is defined
  if (!isSuccess || !data) {
    return <div className="text-red-500 p-6">Error: Failed to fetch admins</div>;
  }

  // Extract admin data safely after the checks
  const admins = data?.data;

  return (
    <div className="bg-[#170f21] rounded-xl p-6 text-white">
      <h2 className="text-xl font-bold mb-6">Admins</h2>
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-600">
            <th className="text-left p-2">Profile</th>
            <th className="text-left p-2">Full Name</th>
            <th className="text-left p-2">Email</th>
            <th className="text-left p-2">ID</th>
            <th className="text-right p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {admins.map((admin) => (
            <tr key={admin.id} className="border-b border-gray-600">
              <td className="p-2">
                <img
                  src={admin.profilePhoto || "https://i.pravatar.cc/50?img=1"} // Fallback avatar
                  alt={admin.name}
                  className="w-10 h-10 rounded-full border border-gray-500"
                />
              </td>
              <td className="p-2">{admin.name}</td>
              <td className="p-2">{admin.email}</td>
              <td className="p-2">#{admin.id}</td>
              <td className="p-2 text-right">
                <div className="flex justify-end items-center gap-2">
                  <Link to={`/dashboard/admin-profile/${admin.id}`}>
                  <button className="bg-gradient-to-r from-[#CB3EEC] to-[#6653fd] text-white px-3 py-1 rounded-lg hover:opacity-90 transition-colors flex items-center gap-2">
                    <Eye size={16} />
                  </button>
                  </Link>
                  <button className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2">
                    <Trash2 size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admins;
