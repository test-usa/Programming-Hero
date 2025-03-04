import { Eye, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import useFetchQuery from "../../../hooks/shared/useFetch";
import { FaPlusCircle } from "react-icons/fa";

// Define Course type based on API response
interface Course {
  id: string;
  title: string;
  price: number;
  isPublished: boolean;
}

const Courses = () => {
  // Fetch courses using custom hook
  const { data, isLoading, isSuccess } = useFetchQuery("/course");
  // Display loading state
  if (isLoading) {
    return <div className="p-6 text-white">Loading courses...</div>;
  }
  // Display error if data is not successfully fetched
  if (!isSuccess || !data) {
    return (
      <div className="p-6 text-red-500">Error: Failed to fetch courses</div>
    );
  }

  // Extract course data safely
  const courses: Course[] = data?.data || [];

  return (
    <div className="bg-[#170f21] rounded-xl p-6 text-white">
      <div className="flex items-center justify-between w-full ">
        <h2 className="mb-6 text-xl font-bold">Courses</h2>
        <Link
          to="create"
          className="p-1 text-2xl text-white rounded-full cursor-pointer"
        >
          <FaPlusCircle />
        </Link>
      </div>
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-600">
            <th className="p-2 text-left">Title</th>
            <th className="p-2 text-left">Price</th>
            <th className="p-2 text-left">Status</th>
            <th className="p-2 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id} className="border-b border-gray-600">
              <td className="p-2">{course.title}</td>
              <td className="p-2">${course.price.toFixed(2)}</td>
              <td className="p-2">
                <span
                  className={`px-2 py-1 rounded-full text-sm ${
                    course.isPublished
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                  }`}
                >
                  {course.isPublished ? "Published" : "Unpublished"}
                </span>
              </td>
              <td className="p-2 text-right">
                <div className="flex items-center justify-end gap-2">
                  <Link to={`/dashboard/course/${course.id}`}>
                    <button className="bg-gradient-to-r from-[#CB3EEC] to-[#6653fd] text-white px-3 py-1 rounded-lg hover:opacity-90 transition-colors flex items-center gap-2">
                      <Eye size={16} />
                    </button>
                  </Link>
                  <button className="flex items-center gap-2 px-3 py-1 text-white transition-colors bg-red-600 rounded-lg hover:bg-red-700">
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

export default Courses;
