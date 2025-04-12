import React from "react";
import { FiCalendar, FiDollarSign, FiUsers } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Actions = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Quick Actions
      </h3>
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={() => navigate("/upload/uploadbus")}
          className="bg-blue-100 text-blue-800 p-3 rounded-lg flex flex-col items-center hover:bg-blue-200 transition-colors"
        >
          {/* <FiBus className="text-xl mb-1" /> */}
          <span className="text-sm">Add New Bus</span>
        </button>
        <button className="bg-green-100 text-green-800 p-3 rounded-lg flex flex-col items-center hover:bg-green-200 transition-colors">
          <FiCalendar className="text-xl mb-1" />
          <span className="text-sm">Schedule Trip</span>
        </button>
        <button className="bg-purple-100 text-purple-800 p-3 rounded-lg flex flex-col items-center hover:bg-purple-200 transition-colors">
          <FiUsers className="text-xl mb-1" />
          <span className="text-sm">Manage Staff</span>
        </button>
        <button className="bg-yellow-100 text-yellow-800 p-3 rounded-lg flex flex-col items-center hover:bg-yellow-200 transition-colors">
          <FiDollarSign className="text-xl mb-1" />
          <span className="text-sm">Generate Report</span>
        </button>
      </div>
    </div>
  );
};

export default Actions;
