import React from "react";
import { Eye, Trash2 } from "lucide-react";
import useFetchQuery from "../../../hooks/shared/useFetch";
import { Link } from "react-router-dom";
import useDelete from "../../../hooks/shared/useDelete";
import StudentRow from "./StudentRow";

// Define the Student interface
interface Student {
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
interface StudentsResponse {
  statusCode: number;
  success: boolean;
  message: string;
  meta: {
    page: number;
    limit: number;
    total: number;
  };
  data: Student[];
}

const Students = () => {
  // Fetch students data
  const { data, isLoading, isSuccess } = useFetchQuery("/student") as {
    data: StudentsResponse | undefined;
    isLoading: boolean;
    isSuccess: boolean;
  };

 

  // Display loading state
  if (isLoading) {
    return <div className=" p-6 text-purple-400">Loading students...</div>;
  }

  // Display error message if fetching fails
  if (!isSuccess || !data) {
    return <div className="text-red-500 p-6">Error: Failed to fetch students</div>;
  }

  // Extract students data safely
  const students: Student[] = data.data;
  

  return (
    <div className="bg-[#170f21] rounded-xl p-6 text-white overflow-x-scroll ">
      <h2 className="text-xl font-bold mb-6">Students</h2>
      <table className=" w-full">
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
          {students.map((student) => (
          
            <StudentRow key={student.id} student={student} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Students;
