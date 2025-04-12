import React from "react";
import { FiAlertTriangle } from "react-icons/fi";

const Alerts = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
        <FiAlertTriangle className="text-yellow-500 mr-2" />
        Alerts & Maintenance
      </h3>
      <div className="space-y-3">
        <div className="p-3 bg-red-50 rounded-lg flex items-start">
          <div className="bg-red-100 p-2 rounded-full mr-3">
            <FiAlertTriangle className="text-red-500" />
          </div>
          <div>
            <h4 className="font-medium text-gray-800">
              BUS-003 Requires Service
            </h4>
            <p className="text-sm text-gray-600">
              Engine check needed before next trip
            </p>
            <p className="text-xs text-gray-500 mt-1">Reported: 2 days ago</p>
          </div>
        </div>
        <div className="p-3 bg-yellow-50 rounded-lg flex items-start">
          <div className="bg-yellow-100 p-2 rounded-full mr-3">
            <FiAlertTriangle className="text-yellow-500" />
          </div>
          <div>
            <h4 className="font-medium text-gray-800">
              BUS-004 Maintenance Due
            </h4>
            <p className="text-sm text-gray-600">
              Scheduled maintenance overdue by 7 days
            </p>
            <p className="text-xs text-gray-500 mt-1">Due: 2023-05-30</p>
          </div>
        </div>
        <div className="p-3 bg-blue-50 rounded-lg flex items-start">
          <div className="bg-blue-100 p-2 rounded-full mr-3">
            <FiAlertTriangle className="text-blue-500" />
          </div>
          <div>
            <h4 className="font-medium text-gray-800">
              BUS-001 Insurance Renewal
            </h4>
            <p className="text-sm text-gray-600">
              Insurance expires in 15 days
            </p>
            <p className="text-xs text-gray-500 mt-1">Expires: 2023-06-30</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alerts;
