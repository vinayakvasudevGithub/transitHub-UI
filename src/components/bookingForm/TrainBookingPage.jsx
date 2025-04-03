import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { bookTrainTicket } from "../../api/services/transport/trainApi";
import { useLocation, useNavigate } from "react-router-dom";
import { trainTicketApiStructure } from "../../api/structure/ticket/trainTicketApiStructure";
import { useTrainTicketForm } from "../../api/ticketform/useTrainTicketForm";

const TrainBookingPage = () => {
  const searchKey = useSelector((state) => state.train.TrainList) || [];
  const location = useLocation();
  const trainId = location?.state?.trainId;

  const [trainData, setTrainData] = useState([]);

  useEffect(() => {
    const fetchTrainData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:2001/train/${trainId}`
        );
        setTrainData([response.data]);
      } catch (error) {
        console.error("Error fetching train data:", error.message);
      }
    };
    location.state?.trainId && fetchTrainData();
  }, [location.state?.trainId]);

  const [formData, setFormData] = useState({
    trainId: trainId,
    // train: "car",
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

  // const [formData, setFormData] = useState(trainTicketApiStructure);

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

  const isFormDataFilled = () => {
    const isArrayFilled = (array) => {
      return array.every((item) =>
        Object.values(item).every((field) => field !== "")
      );
    };

    const { userDetails } = formData;
    const isUserDetailsFilled = isArrayFilled(userDetails);

    return {
      isUserDetailsFilled,
    };
  };

  const { isUserDetailsFilled } = isFormDataFilled();

  const navigate = useNavigate();

  const handleSubmit = ({ departureStationDetails, arrivalStationDetails }) => {
    isUserDetailsFilled &&
      navigate("/payment/trainPayment", {
        state: {
          formData,
          trainData,
          departureStationDetails,
          arrivalStationDetails,
        },
      });
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-semibold mb-4">Train Booking</h1>

        {trainData.map((data) => {
          const fromCity = searchKey.at(-1)?.departureCity?.toLowerCase();
          const toCity = searchKey.at(-1)?.destinationCity?.toLowerCase();
          // const fromCity = searchKey.at(-1)?.from?.toLowerCase();
          // const toCity = searchKey.at(-1)?.to?.toLowerCase();

          const departureStationDetails = data.stations?.find(
            (stations) => stations.city.toLowerCase() === fromCity
          );

          const arrivalStationDetails = data.stations?.find(
            (stations) => stations.city.toLowerCase() === toCity
          );

          return (
            <div key={data._id} className="space-y-6">
              {/* Train Info */}
              <div className="bg-blue-50 p-4 rounded-md">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-medium">
                    {departureStationDetails.city} →{" "}
                    {arrivalStationDetails.city}
                  </h2>
                  <span className="text-sm text-gray-600">
                    {departureStationDetails.departureTime} -{" "}
                    {arrivalStationDetails.departureTime}
                  </span>
                </div>
                <div className="text-sm text-gray-500 mt-2">
                  {departureStationDetails.station} -{" "}
                  {arrivalStationDetails.station}
                </div>
              </div>

              {/* Passenger Details */}
              <div className="bg-gray-50 p-4 rounded-md">
                <h3 className="text-lg font-semibold mb-3">
                  Passenger Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.userDetails[0].name}
                      onChange={handleInputChange}
                      placeholder="Enter full name"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Gender</label>
                    <input
                      type="text"
                      name="gender"
                      value={formData.userDetails[0].gender}
                      onChange={handleInputChange}
                      placeholder="Male/Female"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Age</label>
                    <input
                      type="number"
                      name="age"
                      value={formData.userDetails[0].age}
                      onChange={handleInputChange}
                      placeholder="Enter age"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">
                      Berth Preference
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Upper/Lower"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div className="bg-gray-50 p-4 rounded-md">
                <h3 className="text-lg font-semibold mb-3">Contact Details</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Your tickets will be sent to the details below.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium">Mobile</label>
                    <input
                      type="text"
                      name="mobile"
                      value={formData.userDetails[0].mobile}
                      onChange={handleInputChange}
                      placeholder="Enter mobile number"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.userDetails[0].email}
                      onChange={handleInputChange}
                      placeholder="Enter email address"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  onClick={(e) =>
                    handleSubmit({
                      departureStationDetails,
                      arrivalStationDetails,
                    })
                  }
                  className={`px-4 py-2 text-white rounded-md ${
                    isUserDetailsFilled
                      ? "bg-blue-600 hover:bg-blue-700"
                      : "bg-gray-400 cursor-not-allowed"
                  }`}
                  disabled={!isUserDetailsFilled}
                >
                  Submit
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrainBookingPage;
