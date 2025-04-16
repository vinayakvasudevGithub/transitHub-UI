import React from "react";

const TicketList = ({
  showDetailsForTicket,
  activeTab,
  filteredTickets,
  handlePrintTicket,
  toggleDetails,
}) => {
  return (
    <>
      {filteredTickets.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm p-12 border border-gray-100 text-center">
          <img
            src="/api/placeholder/120/120"
            alt="No tickets"
            className="mx-auto mb-6"
          />
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            No {activeTab} trips found
          </h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            {activeTab === "upcoming"
              ? "You don't have any upcoming trips scheduled. Book a new trip to get started!"
              : activeTab === "completed"
              ? "You haven't completed any trips yet. Your journey history will appear here."
              : "You don't have any cancelled trips. That's great!"}
          </p>
          {activeTab === "upcoming" && (
            <button className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors">
              Book Your First Trip
            </button>
          )}
        </div>
      ) : (
        <div className="space-y-6">
          {filteredTickets.map((ticket) => (
            <div
              key={ticket._id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all hover:shadow-md"
            >
              {/* Ticket header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex items-center mb-4 lg:mb-0">
                    <div className="bg-indigo-600 text-white p-3 rounded-xl mr-4">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <div className="flex items-center">
                        <h3 className="text-lg font-bold text-gray-900">
                          {ticket.busdetails[0]?.departurecity ||
                            "Departure City"}
                        </h3>
                        <svg
                          className="h-4 w-4 mx-2 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          ></path>
                        </svg>
                        <h3 className="text-lg font-bold text-gray-900">
                          {ticket.busdetails[0]?.arrivalcity || "Arrival City"}
                        </h3>
                      </div>
                      <p className="text-sm text-gray-500">
                        {ticket.busdetails[0]?.busname} •{" "}
                        {ticket.busdetails[0]?.bustype}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="hidden md:block">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        Confirmed
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">Departure</div>
                      <div className="text-base font-semibold text-gray-900">
                        April 20, 10:30 AM
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ticket preview */}
              <div className="p-6 flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="h-12 w-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                    <span className="font-bold text-gray-700">
                      {ticket.busdetails[0]?.busseatnumber || "A1"}
                    </span>
                  </div>
                  <div>
                    <span className="block text-sm text-gray-500">
                      Primary Passenger
                    </span>
                    <span className="font-medium">
                      {ticket.userDetails?.[0]?.name || "Passenger Name"}
                    </span>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <button
                    onClick={() => toggleDetails(ticket._id)}
                    className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors flex items-center"
                  >
                    {showDetailsForTicket === ticket._id ? (
                      <>
                        <svg
                          className="h-4 w-4 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 15l7-7 7 7"
                          ></path>
                        </svg>
                        Hide Details
                      </>
                    ) : (
                      <>
                        <svg
                          className="h-4 w-4 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                        View Details
                      </>
                    )}
                  </button>
                  <button
                    onClick={() => handlePrintTicket(ticket)}
                    className="px-4 py-2 bg-indigo-100 rounded-lg text-sm font-medium text-indigo-700 hover:bg-indigo-200 transition-colors flex items-center"
                  >
                    <svg
                      className="h-4 w-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 */}
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                      ></path>
                    </svg>
                    Print Ticket
                  </button>
                  {activeTab === "upcoming" && (
                    <button
                      onClick={() => handleCancelTicket(ticket._id)}
                      className="px-4 py-2 bg-red-50 rounded-lg text-sm font-medium text-red-600 hover:bg-red-100 transition-colors flex items-center"
                    >
                      <svg
                        className="h-4 w-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        ></path>
                      </svg>
                      Cancel
                    </button>
                  )}
                </div>
              </div>

              {/* Expanded details */}
              {showDetailsForTicket === ticket._id && (
                <div className="border-t border-gray-100 p-6 bg-gray-50">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-3">
                        TRIP DETAILS
                      </h4>
                      <div className="space-y-3">
                        <div>
                          <span className="block text-xs text-gray-500">
                            Departure
                          </span>
                          <span className="font-medium">
                            {ticket.busdetails[0]?.departuredate || "N/A"} •{" "}
                            {ticket.busdetails[0]?.departuretime || "N/A"}
                          </span>
                        </div>
                        <div>
                          <span className="block text-xs text-gray-500">
                            Arrival
                          </span>
                          <span className="font-medium">
                            {ticket.busdetails[0]?.arrivaldate || "N/A"} •{" "}
                            {ticket.busdetails[0]?.arrivaltime || "N/A"}
                          </span>
                        </div>
                        <div>
                          <span className="block text-xs text-gray-500">
                            Duration
                          </span>
                          <span className="font-medium">
                            {ticket.busdetails[0]?.duration || "N/A"}
                          </span>
                        </div>
                        <div>
                          <span className="block text-xs text-gray-500">
                            Distance
                          </span>
                          <span className="font-medium">
                            {ticket.busdetails[0]?.distance || "N/A"} km
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-3">
                        PASSENGER DETAILS
                      </h4>
                      <div className="space-y-3">
                        <div>
                          <span className="block text-xs text-gray-500">
                            Name
                          </span>
                          <span className="font-medium">
                            {ticket.userDetails?.[0]?.name || "N/A"}
                          </span>
                        </div>
                        <div>
                          <span className="block text-xs text-gray-500">
                            Age
                          </span>
                          <span className="font-medium">
                            {ticket.userDetails?.[0]?.age || "N/A"}
                          </span>
                        </div>
                        <div>
                          <span className="block text-xs text-gray-500">
                            Gender
                          </span>
                          <span className="font-medium">
                            {ticket.userDetails?.[0]?.gender || "N/A"}
                          </span>
                        </div>
                        <div>
                          <span className="block text-xs text-gray-500">
                            Seat
                          </span>
                          <span className="font-medium">
                            {ticket.busdetails[0]?.busseatnumber || "N/A"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-3">
                        FARE DETAILS
                      </h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-xs text-gray-500">
                            Base Fare
                          </span>
                          <span className="font-medium">
                            ₹{ticket.busdetails[0]?.price || "0"}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-xs text-gray-500">
                            Taxes & Fees
                          </span>
                          <span className="font-medium">₹50</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-xs text-gray-500">
                            Discount
                          </span>
                          <span className="font-medium text-green-600">
                            -₹0
                          </span>
                        </div>
                        <div className="pt-3 border-t border-gray-200 flex justify-between">
                          <span className="text-sm font-medium text-gray-700">
                            Total
                          </span>
                          <span className="text-lg font-bold">
                            ₹
                            {ticket.busdetails[0]?.price
                              ? ticket.busdetails[0].price + 50
                              : "0"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default TicketList;
