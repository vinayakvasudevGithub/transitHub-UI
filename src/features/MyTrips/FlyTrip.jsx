import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";

const FlyTrip = () => {
  const { user } = useContext(UserContext);
  const [bookedTickets, setBookedTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookedTickets = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "http://localhost:2001/flightticket/user",
          {
            withCredentials: true,
          }
        );
        setBookedTickets(response.data);
      } catch (err) {
        console.error("Failed to fetch tickets:", err);
        setError(
          err.response?.data?.message || "Failed to load booked tickets"
        );
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchBookedTickets();
    }
  }, [user]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 max-w-md">
          <p className="font-bold">Error</p>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    // <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
    <div className=" bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {bookedTickets.length === 0 ? (
          <div className="bg-white shadow rounded-lg p-6 text-center">
            <p className="text-gray-600 text-lg">
              You haven't booked any flights yet
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {bookedTickets.map((ticket) => (
              <div
                key={ticket._id}
                className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-[1.01]"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        Booking ID: {ticket._id}
                      </h3>
                      <p className="text-sm text-gray-500">
                        Booked by: {ticket.user.transithubUser}
                      </p>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      Confirmed
                    </span>
                  </div>

                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Flight Details */}
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-3 pb-2 border-b">
                        Flight Information
                      </h4>
                      {ticket.flightDetails.map((flight, index) => (
                        <div key={index} className="space-y-4">
                          <div className="flex items-center space-x-4">
                            <div className="flex-1">
                              <div className="font-medium text-gray-700">
                                Departure
                              </div>
                              <div className="text-sm text-gray-500">
                                {flight.departure[0].city} (
                                {flight.departure[0].code})
                              </div>
                              <div className="text-sm">
                                {flight.departure[0].name}
                              </div>
                              <div className="text-sm font-medium mt-1">
                                {flight.departure[0].departureDate} at{" "}
                                {flight.departure[0].departureTime}
                              </div>
                            </div>
                            <div className="text-gray-400">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M8 7l4-4m0 0l4 4m-4-4v18"
                                />
                              </svg>
                            </div>
                            <div className="flex-1">
                              <div className="font-medium text-gray-700">
                                Arrival
                              </div>
                              <div className="text-sm text-gray-500">
                                {flight.arrival[0].city} (
                                {flight.arrival[0].code})
                              </div>
                              <div className="text-sm">
                                {flight.arrival[0].name}
                              </div>
                              <div className="text-sm font-medium mt-1">
                                {flight.arrival[0].arrivalDate} at{" "}
                                {flight.arrival[0].arrivalTime}
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                            <div>
                              <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded">
                                Ticket ID: {ticket.airlineTicketId}
                              </span>
                            </div>
                            <div className="text-sm text-gray-500">
                              Duration: 3h 0m
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Passenger Details */}
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-3 pb-2 border-b">
                        Passenger Information
                      </h4>
                      {ticket.userDetails?.map((passenger, index) => (
                        <div
                          key={passenger._id}
                          className="space-y-2 mb-4 last:mb-0"
                        >
                          <div className="flex justify-between">
                            <span className="text-gray-600">
                              Passenger {index + 1}:
                            </span>
                            <span className="font-medium">
                              {passenger.name}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Age:</span>
                            <span className="font-medium">{passenger.age}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Gender:</span>
                            <span className="font-medium capitalize">
                              {passenger.gender}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Email:</span>
                            <span className="font-medium">
                              {passenger.email}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Mobile:</span>
                            <span className="font-medium">
                              {passenger.mobile}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex justify-end space-x-3">
                    <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                      Print Ticket
                    </button>
                    <button className="px-4 py-2 bg-red-600 rounded-md text-sm font-medium text-white hover:bg-red-700">
                      Cancel Flight
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FlyTrip;
