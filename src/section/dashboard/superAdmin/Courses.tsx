import React from "react";
import { Eye, Trash2 } from "lucide-react";

const Courses = () => {
  // Dummy courses data
  const courses = [
    { id: 1, courseName: "Introduction to React", status: "approved" },
    { id: 2, courseName: "Advanced JavaScript", status: "pending" },
    { id: 3, courseName: "Node.js Fundamentals", status: "rejected" },
    { id: 4, courseName: "Database Design", status: "approved" },
  ];

  return (
    <div className="bg-[#170f21] rounded-xl p-6 text-white">
      <h2 className="text-xl font-bold mb-6">Courses</h2>
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-600">
            <th className="text-left p-2">Course Name</th>
            <th className="text-left p-2">Status</th>
            <th className="text-right p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id} className="border-b border-gray-600">
              <td className="p-2">{course.courseName}</td>
              <td className="p-2">
                <span
                  className={`px-2 py-1 rounded-full text-sm ${
                    course.status === "approved"
                      ? "bg-green-500 text-white"
                      : course.status === "pending"
                      ? "bg-yellow-500 text-black"
                      : "bg-red-500 text-white"
                  }`}
                >
                  {course.status}
                </span>
              </td>
              <td className="p-2 text-right">
                {/* Flex container for buttons */}
                <div className="flex justify-end items-center gap-2">
                  <button className="bg-gradient-to-r from-[#CB3EEC] to-[#6653fd] text-white px-3 py-1 rounded-lg hover:opacity-90 transition-colors flex items-center gap-2">
                    <Eye size={16} /> {/* Show Details Icon */}
                  </button>
                  {course.status === "approved" && (
                    <button className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2">
                      <Trash2 size={16} /> {/* Remove Icon */}
                    </button>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Courses;
