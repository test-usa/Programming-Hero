

import React from "react";
import { Eye, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import useDelete from "../../../hooks/shared/useDelete";
import { toast } from "react-toastify";

interface Admin {
  id: string;
  name: string;
  email: string;
  profilePhoto: string | null;
}

interface AdminRowProps {
  admin: Admin;
}

const AdminRow: React.FC<AdminRowProps> = ({ admin }) => {
const{mutate:deleteAdmin,isPending,isSuccess}=useDelete(`/admin/delete-admin/`)

  React.useEffect(() => {
    if (isSuccess) {
      toast.success("Student deleted successfully!");
    }
  }, [isSuccess]);

  return (
    <tr key={admin.id} className="border-b border-gray-600">
      <td className="p-2">
        <img
          src={admin.profilePhoto || "https://i.pravatar.cc/50?img=1"} 
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
          <button onClick={() => deleteAdmin(admin.id)}
          className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2">
             {isPending ? "Deleting..." : <Trash2 size={16} />}
          </button>
        </div>
      </td>
    </tr>
  );
};

export default AdminRow;
