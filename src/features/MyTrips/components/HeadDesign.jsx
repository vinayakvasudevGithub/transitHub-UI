import React from "react";

const HeadDesign = ({ user }) => {
  return (
    <div className="md:w-2/3">
      <h1 className="text-3xl md:text-4xl font-bold leading-tight">
        Welcome back, {user.user?.name || "Traveler"}
      </h1>
      <p className="mt-3 text-indigo-100 text-lg max-w-xl">
        Your journey companion for seamless travel experiences. Manage tickets,
        check schedules, and plan your next adventure.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        {/* <button className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg shadow-md hover:bg-indigo-50 transition-colors focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"> */}
        <button className="px-6 py-3 bg-white text-teal-600 font-medium rounded-lg shadow-md hover:bg-teal-50 transition-colors focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-teal-600">
          Book New Trip
        </button>
        <button className="px-6 py-3 bg-teal-700 text-white font-medium rounded-lg shadow-md hover:bg-teal-800 transition-colors focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-teal-600">
          Explore Destinations
        </button>
      </div>
    </div>
  );
};

export default HeadDesign;
