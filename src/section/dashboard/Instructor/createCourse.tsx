import { useState } from "react";

const CreateCourse = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    isPublished: false,
    modules: "",
    payment: "",
    students: "",
    classroom: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  console.log("first", formData);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to an API)
    console.log("Course Data:", formData);
  };

  return (
    <div className="bg-[#170f21] rounded-xl p-6 text-white">
      <h2 className="mb-6 text-xl font-bold">Create Course</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Course Title */}
        <div>
          <label className="block mb-1 text-sm font-medium">Course Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter course title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 bg-[#2a213a] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 text-sm font-medium">
            Course Description
          </label>
          <textarea
            name="description"
            placeholder="Enter course description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 bg-[#2a213a] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block mb-1 text-sm font-medium">Course Price</label>
          <input
            type="number"
            name="price"
            placeholder="Enter course price"
            value={formData.price}
            onChange={handleChange}
            className="w-full p-2 bg-[#2a213a] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Is Published */}
        <div>
          <label className="block mb-1 text-sm font-medium">Is Published</label>
          <select
            name="isPublished"
            value={formData.isPublished}
            onChange={handleChange}
            className="w-full p-2 bg-[#2a213a] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value={false}>No</option>
            <option value={true}>Yes</option>
          </select>
        </div>

        {/* Modules */}
        <div>
          <label className="block mb-1 text-sm font-medium">Modules</label>
          <input
            type="text"
            name="modules"
            placeholder="Enter modules (comma separated)"
            value={formData.modules}
            onChange={handleChange}
            className="w-full p-2 bg-[#2a213a] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Payment */}
        <div>
          <label className="block mb-1 text-sm font-medium">
            Payment Methods
          </label>
          <input
            type="text"
            name="payment"
            placeholder="Enter payment methods (comma separated)"
            value={formData.payment}
            onChange={handleChange}
            className="w-full p-2 bg-[#2a213a] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Students */}
        <div>
          <label className="block mb-1 text-sm font-medium">Students</label>
          <input
            type="text"
            name="students"
            placeholder="Enter student IDs (comma separated)"
            value={formData.students}
            onChange={handleChange}
            className="w-full p-2 bg-[#2a213a] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Classroom */}
        <div>
          <label className="block mb-1 text-sm font-medium">Classroom</label>
          <input
            type="text"
            name="classroom"
            placeholder="Enter classroom name (optional)"
            value={formData.classroom}
            onChange={handleChange}
            className="w-full p-2 bg-[#2a213a] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full py-2 text-white transition-colors bg-purple-600 rounded-lg hover:bg-purple-700"
          >
            Create Course
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCourse;
