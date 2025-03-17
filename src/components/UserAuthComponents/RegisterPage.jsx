import React, { useState } from "react";
import { registerUser } from "../../api/services/auth/authApi";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  console.log(formData);

  // Handle input changes correctly
  const handleInputChange = (e) => {
    const { name, value } = e.target; // Correctly extract name & value
    setFormData((prev) => ({ ...prev, [name]: value })); // Correctly update state
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(formData); // API Call
      console.log("User Registered:", response);
      navigate("/login");
    } catch (error) {
      console.error("Registration Error:", error);
    }
  };

  return (
    <div className="flex justify-center items-center bg-red-100 h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label className="block mb-1">Name</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className="border px-2 py-1 w-full rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="border px-2 py-1 w-full rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="border px-2 py-1 w-full rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-red-500 text-white px-4 py-2 rounded w-full"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
