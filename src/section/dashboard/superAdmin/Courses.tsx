import { Eye, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import useFetchQuery from "../../../hooks/shared/useFetch";

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

  console.log(data)
  // Display loading state
  if (isLoading) {
    return <div className="text-white p-6">Loading courses...</div>;
  }

  // Display error if data is not successfully fetched
  if (!isSuccess || !data) {
    return <div className="text-red-500 p-6">Error: Failed to fetch courses</div>;
  }

  // Extract course data safely
  const courses: Course[] = data?.data || [];

  return (
    <div className="bg-[#170f21] rounded-xl p-6 text-white">
      <h2 className="text-xl font-bold mb-6">Courses</h2>
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-600">
            <th className="text-left p-2">Title</th>
            <th className="text-left p-2">Price</th>
            <th className="text-left p-2">Status</th>
            <th className="text-right p-2">Actions</th>
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
                    course.isPublished ? "bg-green-500 text-white" : "bg-red-500 text-white"
                  }`}
                >
                  {course.isPublished ? "Published" : "Unpublished"}
                </span>
              </td>
              <td className="p-2 text-right">
                <div className="flex justify-end items-center gap-2">
                  <Link to={`/dashboard/course/${course.id}`}>
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

export default Courses;
