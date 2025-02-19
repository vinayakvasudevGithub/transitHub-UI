import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const BusBookingPage = () => {
  const bookingBusDetails = useSelector((state) => state.busTicket.Details);
  const lastBooking = bookingBusDetails?.[bookingBusDetails.length - 1];

  const searchKey = useSelector((State) => State.bus.buses);
  const lastSearch = searchKey?.[searchKey.length - 1];

  const [formData, setFormData] = useState({
    busdetails: [
      {
        departurecity: lastSearch?.from,
        arrivalcity: lastSearch?.to,
        busname: lastBooking?.busName,
        busseatnumber: lastBooking?.busSeatNumber,
        bustype: lastBooking?.busType,
        arrivaltime: lastBooking?.arrivalTime,
        departuretime: lastBooking?.departureTime,
      },
    ],
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

  const handleGenderClick = (gender) => {
    setFormData((prev) => ({
      ...prev,
      userDetails: [
        {
          ...prev.userDetails[0],
          gender,
        },
      ],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:4001/busticket/booking",
      formData
    );
    console.log(response.data);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Bus Ticket Booking
        </h1>

        {/* Bus Details */}
        <div className="bg-gray-100 rounded-lg p-4 mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            {lastBooking?.busName || "Bus Name"}
          </h2>
          <p className="text-gray-600">{lastBooking?.busType || "Bus Type"}</p>
          <div className="grid grid-cols-2 gap-4 mt-4 text-gray-700">
            <p>
              <span className="font-semibold">Seat Number:</span>{" "}
              {lastBooking?.busSeatNumber || "-"}
            </p>
            <p>
              <span className="font-semibold">Arrival Time:</span>{" "}
              {lastBooking?.arrivalTime || "-"}
            </p>
            <p>
              <span className="font-semibold">Departure Time:</span>{" "}
              {lastBooking?.departureTime || "-"}
            </p>
            <p>
              <span className="font-semibold">From:</span>{" "}
              {lastSearch?.from || "-"}
            </p>
            <p>
              <span className="font-semibold">To:</span> {lastSearch?.to || "-"}
            </p>
          </div>
        </div>

        {/* Travel Details */}
        <div className="bg-gray-100 rounded-lg p-4 mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Passenger Details
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="font-medium text-gray-700">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.userDetails[0].name}
                onChange={handleInputChange}
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="age" className="font-medium text-gray-700">
                Age:
              </label>
              <input
                type="text"
                id="age"
                name="age"
                value={formData.userDetails[0].age}
                onChange={handleInputChange}
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="font-medium text-gray-700">Gender:</label>
            <div className="flex gap-4 mt-2">
              <button
                type="button"
                className={`px-4 py-2 rounded ${
                  formData.userDetails[0].gender === "Male"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => handleGenderClick("Male")}
              >
                Male
              </button>
              <button
                type="button"
                className={`px-4 py-2 rounded ${
                  formData.userDetails[0].gender === "Female"
                    ? "bg-pink-500 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => handleGenderClick("Female")}
              >
                Female
              </button>
            </div>
          </div>
        </div>

        {/* Contact Details */}
        <div className="bg-gray-100 rounded-lg p-4 mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Contact Details
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="email" className="font-medium text-gray-700">
                Email:
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.userDetails[0].email}
                onChange={handleInputChange}
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="mobile" className="font-medium text-gray-700">
                Mobile Number:
              </label>
              <input
                type="text"
                id="mobile"
                name="mobile"
                value={formData.userDetails[0].mobile}
                onChange={handleInputChange}
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>
        </div>

        {/* Continue Button */}
        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-6 py-2 rounded shadow-md hover:bg-blue-600 transition duration-200"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusBookingPage;
