import React from "react";

const PrintTicket = ({ setShowPrintModal, showPrintModal, selectedTicket }) => {
  return (
    <>
      {showPrintModal && selectedTicket && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-800">Your Ticket</h3>
                <button
                  onClick={() => setShowPrintModal(false)}
                  className="text-gray-400 hover:text-gray-500"
                >
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
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>

              {/* Ticket content */}
              <div className="border-2 border-gray-200 rounded-lg p-6 mb-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-indigo-600">
                      TransitHub
                    </h2>
                    <p className="text-gray-500">
                      Booking ID: {selectedTicket._id}
                    </p>
                  </div>
                  <div className="bg-indigo-600 text-white px-3 py-1 rounded-lg">
                    <span className="font-medium">CONFIRMED</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-3">
                      FROM
                    </h4>
                    <p className="text-xl font-bold">
                      {selectedTicket.busdetails[0]?.departurecity ||
                        "Departure City"}
                    </p>
                    <p className="text-gray-500">
                      {selectedTicket.busdetails[0]?.departuredate || "N/A"} •{" "}
                      {selectedTicket.busdetails[0]?.departuretime || "N/A"}
                    </p>
                  </div>

                  <div className="flex justify-center items-center">
                    <div className="relative">
                      <div className="h-1 w-24 bg-gray-300"></div>
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <svg
                          className="h-6 w-6 text-indigo-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-3">
                      TO
                    </h4>
                    <p className="text-xl font-bold">
                      {selectedTicket.busdetails[0]?.arrivalcity ||
                        "Arrival City"}
                    </p>
                    <p className="text-gray-500">
                      {selectedTicket.busdetails[0]?.arrivaldate || "N/A"} •{" "}
                      {selectedTicket.busdetails[0]?.arrivaltime || "N/A"}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-3">
                      BUS DETAILS
                    </h4>
                    <p className="font-medium">
                      {selectedTicket.busdetails[0]?.busname || "N/A"} (
                      {selectedTicket.busdetails[0]?.bustype || "N/A"})
                    </p>
                    <p className="text-gray-500">
                      Duration:{" "}
                      {selectedTicket.busdetails[0]?.duration || "N/A"}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-3">
                      PASSENGER
                    </h4>
                    <p className="font-medium">
                      {selectedTicket.userDetails?.[0]?.name || "N/A"} • Seat{" "}
                      {selectedTicket.busdetails[0]?.busseatnumber || "N/A"}
                    </p>
                    <p className="text-gray-500">
                      {selectedTicket.userDetails?.[0]?.age || "N/A"} yrs •{" "}
                      {selectedTicket.userDetails?.[0]?.gender || "N/A"}
                    </p>
                  </div>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-1">
                        FARE
                      </h4>
                      <p className="text-xl font-bold">
                        ₹
                        {selectedTicket.busdetails[0]?.price
                          ? selectedTicket.busdetails[0].price + 50
                          : "0"}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">
                        Booking Date:{" "}
                        {new Date(
                          selectedTicket.createdAt
                        ).toLocaleDateString()}
                      </p>
                      <p className="text-sm text-gray-500">Status: Confirmed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-4">
                <button
                  onClick={() => setShowPrintModal(false)}
                  className="px-6 py-2 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50"
                >
                  Close
                </button>
                <button
                  onClick={() => window.print()}
                  className="px-6 py-2 bg-indigo-600 rounded-lg font-medium text-white hover:bg-indigo-700"
                >
                  Print Ticket
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PrintTicket;
