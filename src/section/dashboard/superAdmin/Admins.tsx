import React from "react";
import { Eye, Trash2 } from "lucide-react";

const Admins = () => {
  // Dummy admin data
  const admins = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      profile: "Admin",
      avatar: "https://i.pravatar.cc/50?img=1",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      profile: "Super Admin",
      avatar: "https://i.pravatar.cc/50?img=2",
    },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      profile: "Moderator",
      avatar: "https://i.pravatar.cc/50?img=3",
    },
    {
      id: 4,
      name: "Bob Brown",
      email: "bob.brown@example.com",
      profile: "Admin",
      avatar: "https://i.pravatar.cc/50?img=4",
    },
  ];

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
                  src={admin.avatar}
                  alt={admin.name}
                  className="w-10 h-10 rounded-full border border-gray-500"
                />
              </td>
              <td className="p-2">{admin.name}</td>
              <td className="p-2">{admin.email}</td>
              <td className="p-2">#{admin.id}</td>
              <td className="p-2 text-right">
                {/* Flex container for buttons */}
                <div className="flex justify-end items-center gap-2">
                  <button className="bg-gradient-to-r from-[#CB3EEC] to-[#6653fd] text-white px-3 py-1 rounded-lg hover:opacity-90 transition-colors flex items-center gap-2">
                    <Eye size={16} /> {/* View Details Icon */}
                  </button>
                  <button className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2">
                    <Trash2 size={16} /> {/* Remove Admin Icon */}
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
