import React from "react";
import { Eye, Trash2 } from "lucide-react";
import useFetchQuery from "../../../hooks/shared/useFetch";

// Define the Instructor interface
interface Instructor {
  id: string;
  email: string;
  name: string;
  profilePhoto: string | null;
  phone: string | null;
  contact: string | null;
  address: string | null;
  gender: string | null;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  userId: string;
}

// Define the API response structure
interface InstructorsResponse {
  statusCode: number;
  success: boolean;
  message: string;
  meta: {
    page: number;
    limit: number;
    total: number;
  };
  data: Instructor[];
}

const Instructors = () => {
  // Fetch instructors data
  const { data, isLoading, isSuccess } = useFetchQuery("/instructor") as {
    data: InstructorsResponse | undefined;
    isLoading: boolean;
    isSuccess: boolean;
  };

  // Display loading state
  if (isLoading) {
    return <div className="text-white p-6">Loading instructors...</div>;
  }

  // Display error message if fetching fails
  if (!isSuccess || !data) {
    return <div className="text-red-500 p-6">Error: Failed to fetch instructors</div>;
  }

  // Extract instructors data safely
  const instructors: Instructor[] = data.data;

  return (
    <div className="bg-[#170f21] rounded-xl p-6 text-white">
      <h2 className="text-xl font-bold mb-6">Instructors</h2>
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
          {instructors.map((instructor) => (
            <tr key={instructor.id} className="border-b border-gray-600">
              <td className="p-2">
                <img
                  src={instructor.profilePhoto || "https://i.pravatar.cc/50?img=1"}
                  alt={instructor.name}
                  className="w-10 h-10 rounded-full border border-gray-500"
                />
              </td>
              <td className="p-2">{instructor.name}</td>
              <td className="p-2">{instructor.email}</td>
              <td className="p-2">#{instructor.id}</td>
              <td className="p-2 text-right">
                <div className="flex justify-end items-center gap-2">
                  <button className="bg-gradient-to-r from-[#CB3EEC] to-[#6653fd] text-white px-3 py-1 rounded-lg hover:opacity-90 transition-colors flex items-center gap-2">
                    <Eye size={16} />
                  </button>
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

export default Instructors;
