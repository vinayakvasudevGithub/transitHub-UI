import React from "react";

const Error = ({ error }) => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-md">
        <div className="flex items-center mb-4">
          <div className="bg-red-100 p-2 rounded-full mr-4">
            <svg
              className="h-6 w-6 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <h3 className="text-lg font-bold text-gray-800">
            Something went wrong
          </h3>
        </div>
        <p className="text-gray-600 mb-6">{error}</p>
        <button
          // className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          className="w-full py-2 bg-teal-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          onClick={() => window.location.reload()}
        >
          Retry
        </button>
      </div>
    </div>
  );
};

export default Error;
