import { Eye, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios"; // Import axios

const Courses = () => {
  const [courses, setCourses] = useState([]); // State to store courses
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to handle errors

  const url = import.meta.env.VITE_BACKEND_URL;

  // Fetch courses from the API
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(`${url}/courses/getAll`, {
          withCredentials: true, // Include credentials (cookies, tokens, etc.)
        });
        setCourses(response.data); // Set the fetched courses
      } catch (err) {
        setError(err.message); // Set error message
      } finally {
        setLoading(false); // Set loading to false
      }
    };

    fetchCourses();
  }, [url]);

  // Display loading state
  if (loading) {
    return <div className="text-white p-6">Loading courses...</div>;
  }

  // Display error message
  if (error) {
    return <div className="text-red-500 p-6">Error: {error}</div>;
  }

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
                  <Link to={`/dashboard/course/${course.id}`}>
                    <button className="bg-gradient-to-r from-[#CB3EEC] to-[#6653fd] text-white px-3 py-1 rounded-lg hover:opacity-90 transition-colors flex items-center gap-2">
                      <Eye size={16} /> {/* Show Details Icon */}
                    </button>
                  </Link>
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