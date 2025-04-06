import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getAllFlights } from "../../api/services/transport/flightApi";
import { getFlightsById } from "../../api/services/transport/flightApi";
// import { bookFlightTicket } from "../../api/services/transport/flightApi";
import { bookFlightTicket } from "../../api/services/transport/flightApi";

const FlyBook = () => {
  const [flightData, setFlightData] = useState([]);
  const location = useLocation();
  const id = location.state?.id;

  const [formData, setFormData] = useState({
    airlineTicketId: "",
    flightDetails: [],
    userDetails: [
      {
        name: "",
        age: "",
        gender: "",
        email: "",
        mobile: "",
      },
    ],
  });

  useEffect(() => {
    const fetchSelectedFlight = async () => {
      try {
        const flight = await getFlightsById(id);
        setFlightData([flight]);
        setFormData((prev) => ({
          ...prev,
          airlineTicketId: id,
          flightDetails: [
            {
              departure: flight.airport.map((dep) => ({
                code: dep.code,
                name: dep.name,
                city: dep.city,
                country: dep.country,
                departureDate: dep.departureDate,
                departureTime: dep.departureTime,
              })),
              arrival: flight.destination.map((arr) => ({
                code: arr.code,
                name: arr.name,
                city: arr.city,
                country: arr.country,
                arrivalDate: arr.arrivalDate,
                arrivalTime: arr.arrivalTime,
              })),
            },
          ],
        }));
      } catch (error) {
        console.log("Error fetching flight data:", error);
      }
    };
    fetchSelectedFlight();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      userDetails: [
        {
          ...prev.userDetails[0],
          [name]: value,
        },
      ],
    }));
  };

  const handleSubmit = async (e) => {
    try {
      const flightBooking = await bookFlightTicket(formData);
      console.log("Booking Successful:", flightBooking);
    } catch (error) {
      console.error("Booking Failed:", error);
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Flight Booking Page
      </h1>

      {flightData.map((data) => (
        <div
          key={data._id}
          className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg p-4 gap-6"
        >
          {/* Fare Summary Section */}
          <div className="bg-gray-100 p-4 rounded-lg w-full md:w-1/3">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Fare Summary
            </h2>
            {data.prices.map((prices) => {
              const Tax = (prices.ecconomy / 100) * 8;
              const Fees = (prices.ecconomy / 100) * 3;
              const TotalAmount = prices.ecconomy + Tax + Fees;

              return (
                <div key={prices._id} className="space-y-3">
                  <div className="flex justify-between text-gray-600">
                    <span>Fare Type</span>
                    <span>Partially Refundable</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Base Price</span>
                    <span>${prices.ecconomy.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Taxes</span>
                    <span>${Tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Fees</span>
                    <span>${Fees.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-800 font-bold text-lg">
                    <span>Total Amount</span>
                    <span>${TotalAmount.toFixed(2)}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Flight Details and Booking Form */}
          <div className="flex-grow space-y-6">
            {/* Flight Details */}
            <div className="bg-gray-100 p-4 rounded-lg space-y-4">
              <h2 className="text-lg font-semibold text-gray-700">
                Flight Details
              </h2>
              {data.airport.map((airport) => (
                <div key={airport._id}>
                  <div className="flex justify-between items-center bg-gray-200 p-3 rounded-md">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">
                        {airport.city}
                      </h3>
                      <span className="text-sm text-gray-500">
                        {airport.name}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">
                        {data.destination[0]?.city || "Unknown"}
                      </h3>
                      <span className="text-sm text-gray-500">
                        {data.destination[0]?.name || "Unknown"}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between mt-2 text-sm text-gray-600">
                    <span>
                      Departure:{" "}
                      <span className="font-semibold">
                        {new Date(data.departureDateTime).toLocaleString()}
                      </span>
                    </span>
                    <span>
                      Arrival:{" "}
                      <span className="font-semibold">
                        {new Date(data.arrivalDateTime).toLocaleString()}
                      </span>
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Traveller Details */}
            <div className="bg-gray-100 p-4 rounded-lg space-y-4">
              <h2 className="text-lg font-semibold text-gray-700">
                Traveller Details
              </h2>
              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Gender
                  </label>
                  <input
                    type="text"
                    name="gender"
                    value={formData.userDetails[0]?.gender || ""}
                    onChange={handleInputChange}
                    className="w-full mt-1 px-3 py-2 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.userDetails[0]?.name || ""}
                    onChange={handleInputChange}
                    className="w-full mt-1 px-3 py-2 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Age
                  </label>
                  <input
                    type="number"
                    name="age"
                    value={formData.userDetails[0]?.age || ""}
                    onChange={handleInputChange}
                    className="w-full mt-1 px-3 py-2 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-gray-100 p-4 rounded-lg space-y-4">
              <h2 className="text-lg font-semibold text-gray-700">
                Contact Details
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.userDetails[0]?.email || ""}
                    onChange={handleInputChange}
                    className="w-full mt-1 px-3 py-2 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Mobile
                  </label>
                  <input
                    type="text"
                    name="mobile"
                    value={formData.userDetails[0]?.mobile || ""}
                    onChange={handleInputChange}
                    className="w-full mt-1 px-3 py-2 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                onClick={handleSubmit}
                className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlyBook;
