// src/section/dashboard/superAdmin/StudentRow.tsx
import React from "react";
import { Eye, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import useDelete from "../../../hooks/shared/useDelete";
import { toast } from "react-toastify";

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

interface StudentRowProps {
  student: Student;
}

const StudentRow: React.FC<StudentRowProps> = ({ student }) => {
  // Use delete mutation for deleting a student
  const { mutate: deleteStudent, isPending,isSuccess} = useDelete(`/student/delete-student/`);
  React.useEffect(() => {
    if (isSuccess) {
      toast.success("Student deleted successfully!");
    }
  }, [isSuccess]);
  return (
    <tr key={student.id} className="border-b border-gray-600">
      <td className="p-2">
        <img
          src={student.profilePhoto || "https://i.pravatar.cc/50?img=1"}
          alt={student.name}
          className="w-10 h-10 rounded-full border border-gray-500"
        />
      </td>
      <td className="p-2">{student.name}</td>
      <td className="p-2">{student.email}</td>
      <td className="p-2">#{student.id}</td>
      <td className="p-2 text-right">
        <div className="flex justify-end items-center gap-2">
          <Link to={`/dashboard/student-profile/${student.id}`}>
            <button className="bg-gradient-to-r from-[#CB3EEC] to-[#6653fd] text-white px-3 py-1 rounded-lg hover:opacity-90 transition-colors flex items-center gap-2">
              <Eye size={16} />
            </button>
          </Link>
          <button
            onClick={() => deleteStudent(student.id)}
           
            
            className={`bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2 ${isPending ? "bg-gray-500 cursor-not-allowed" : ""}`}
          >
            
            {isPending ? "Deleting..." : <Trash2 size={16} />}
          
          </button>
        </div>
      </td>
    </tr>
  );
};

export default StudentRow;
