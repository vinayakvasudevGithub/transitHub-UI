import React from "react";

const UpcomingTrips = ({ bookingsData }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Upcoming Trips
      </h3>
      <div className="space-y-4">
        {bookingsData
          .filter((b) => b.status === "upcoming")
          .map((booking) => (
            <div
              key={booking.id}
              className="border-l-4 border-blue-500 pl-4 py-2"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-gray-800">{booking.busId}</h4>
                  <p className="text-sm text-gray-500">
                    {new Date(booking.date).toLocaleDateString("en-US", {
                      weekday: "short",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                  {booking.seats} seats
                </span>
              </div>
              <div className="mt-1 flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">
                  ${booking.revenue}
                </span>
                <button className="text-blue-600 text-sm hover:text-blue-800">
                  View
                </button>
              </div>
            </div>
          ))}
        {bookingsData.filter((b) => b.status === "upcoming").length === 0 && (
          <div className="text-center py-4 text-gray-400">
            <FiCalendar className="mx-auto text-2xl mb-2" />
            <p>No upcoming trips scheduled</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UpcomingTrips;
