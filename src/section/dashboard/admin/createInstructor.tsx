import React, { useState } from "react";

const CreateInstructor = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    profilePhoto: "",
    contact: "",
    address: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the role as "instructor" before submitting
    const instructorData = { ...formData, role: "instructor" };
    console.log("Instructor Data:", instructorData);
    // Handle form submission (e.g., send data to an API)
  };

  return (
    <div className="bg-[#170f21] rounded-xl p-6 text-white">
      <h2 className="text-xl font-bold mb-6">Create Instructor</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter full name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 bg-[#2a213a] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 bg-[#2a213a] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 bg-[#2a213a] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Profile Photo */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Profile Photo URL
          </label>
          <input
            type="text"
            name="profilePhoto"
            placeholder="Enter profile photo URL"
            value={formData.profilePhoto}
            onChange={handleChange}
            className="w-full p-2 bg-[#2a213a] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Contact */}
        <div>
          <label className="block text-sm font-medium mb-1">Contact</label>
          <input
            type="text"
            name="contact"
            placeholder="Enter contact number"
            value={formData.contact}
            onChange={handleChange}
            className="w-full p-2 bg-[#2a213a] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Address */}
        <div>
          <label className="block text-sm font-medium mb-1">Address</label>
          <input
            type="text"
            name="address"
            placeholder="Enter address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 bg-[#2a213a] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Gender */}
        <div>
          <label className="block text-sm font-medium mb-1">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full p-2 bg-[#2a213a] rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Create Instructor
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateInstructor;
