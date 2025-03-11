import { Eye, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import CreateCourse from "./CreateCourse";
import useFetch from "../../../hooks/shared/useFetch";
import useDelete from "../../../hooks/shared/useDelete";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
} from "../../../components/ui/dialog";

// Define Course type based on API response
interface Course {
  id: string;
  title: string;
  price: number;
  isPublished: boolean;
}

const AllCourse = () => {
  const { data, isLoading, isSuccess, refetch } = useFetch("/course");
  const { mutate: deleteCourse, isPending } = useDelete("/course/");

  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isSuperAdmin, setIsSuperAdmin] = useState(false);

  // Check if the user is SUPER_ADMIN
  useEffect(() => {
    const storedState = JSON.parse(localStorage.getItem("user") || "{}");
    if (storedState?.state?.user?.data?.user?.role === "SUPER_ADMIN") {
      setIsSuperAdmin(true);
    }
  }, []);

  if (isLoading) {
    return <div className="p-6 text-white">Loading courses...</div>;
  }
  if (!isSuccess || !data) {
    return (
      <div className="p-6 text-red-500">Error: Failed to fetch courses</div>
    );
  }

  const courses: Course[] = data?.data || [];

  const handleDelete = (id: string) => {
    deleteCourse(id, {
      onSuccess: () => {
        refetch();
        setSelectedCourse(null);
      },
    });
  };

  return (
    <div className="bg-[#170f21] rounded-xl p-6 text-white">
      <div className="flex items-center justify-between w-full">
        <h2 className="mb-6 text-xl font-bold">Courses</h2>
        {
          isSuperAdmin && <CreateCourse refetch={refetch} />
        }
      </div>
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-600">
            <th className="p-2 text-left">Title</th>
            <th className="p-2 text-left">Price</th>
            <th className="p-2 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id} className="border-b border-gray-600">
              <td className="p-2">{course.title}</td>
              <td className="p-2">${course.price.toFixed(2)}</td>
              <td className="p-2 text-right">
                <div className="flex items-center justify-end gap-2">
                  <Link to={`/dashboard/courses/${course.id}`}>
                    <button className="bg-gradient-to-r from-[#CB3EEC] to-[#6653fd] text-white px-3 py-1 rounded-lg hover:opacity-90 transition-colors flex items-center gap-2">
                      <Eye size={16} />
                    </button>
                  </Link>
                  {isSuperAdmin && (
                    <button
                      onClick={() => setSelectedCourse(course)}
                      className="flex items-center gap-2 px-3 py-1 text-white transition-colors bg-red-600 rounded-lg hover:bg-red-700"
                    >
                      <Trash2 size={16} />
                    </button>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Delete Confirmation Modal */}
      <Dialog open={selectedCourse !== null} onOpenChange={() => setSelectedCourse(null)}>
        <DialogContent className="sm:max-w-md bg-[#170f21] text-white">
          <div className="p-4">
            <h3 className="text-lg font-semibold">
              Are you sure you want to delete this course?
            </h3>
            <p className="text-gray-300">This action cannot be undone.</p>
            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={() => setSelectedCourse(null)}
                className="px-4 py-2 text-gray-300 transition-colors bg-gray-700 rounded-lg hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={() => selectedCourse && handleDelete(selectedCourse.id)}
                className="px-4 py-2 text-white transition-colors bg-red-600 rounded-lg hover:bg-red-700"
              >
                {isPending ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AllCourse;