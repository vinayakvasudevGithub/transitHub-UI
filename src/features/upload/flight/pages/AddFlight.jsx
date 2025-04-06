import axios from "axios";
import React, { useState } from "react";
import {
  FaPlane,
  FaUpload,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaChair,
} from "react-icons/fa";
import FlightInfo from "../components/FlightInfo";
import Departure from "../components/Departure";
import Arrival from "../components/Arrival";
import FareOptions from "../components/FareOptions";
// import FlightDetails from "./components/FlightDetails";
// import DepartureAirport from "./components/DepartureAirport";
// import ArrivalAirport from "./components/ArrivalAirport";
// import TravelClassAndPrices from "./components/TravelClassAndPrices";

const AddFlight = () => {
  // ... (keep all existing state and handler functions exactly the same)

  const [flightData, setFlightData] = useState({
    airline: "",
    airlineimagecode: "",
    flightNumber: "",
    airport: [
      {
        code: "",
        name: "",
        city: "",
        country: "",
      },
    ],
    destination: [
      {
        code: "",
        name: "",
        city: "",
        country: "",
      },
    ],
    departureDate: "",
    departureDateTime: "",
    arrivalDate: "",
    arrivalDateTime: "",
    aircraft: "",
    travelclass: [""],
    prices: [
      {
        ecconomy: "",
        premiumEcconomy: "",
        bussiness: "",
      },
    ],
    seats: [{ ecconomy: "", premiumEcconomy: "", bussiness: "" }],
  });

  const handleFlightInfoChange = (e) => {
    const { name, value } = e.target;
    setFlightData({
      ...flightData,
      [name]: value,
    });
  };

  const handleDepartureAirport = (index, e) => {
    const { name, value } = e.target;
    const departureAirport = flightData.airport.map((airport, i) =>
      i === index ? { ...airport, [name]: value } : airport
    );
    setFlightData({ ...flightData, airport: departureAirport });
  };

  const handleArrivalAirport = (index, e) => {
    const { name, value } = e.target;
    const arrivalAirport = flightData.destination.map((destination, i) =>
      i === index ? { ...destination, [name]: value } : destination
    );
    setFlightData({ ...flightData, destination: arrivalAirport });
  };

  const handlePrices = (index, e) => {
    const { name, value } = e.target;
    const updatedPrice = flightData.prices.map((prices, i) =>
      i === index ? { ...prices, [name]: value } : prices
    );
    setFlightData({ ...flightData, prices: updatedPrice });
  };

  const handleSeats = (index, e) => {
    const { name, value } = e.target;

    const updatedSeats = flightData.seats.map((seats, i) =>
      i === index ? { ...seats, [name]: value } : seats
    );
    setFlightData({ ...flightData, seats: updatedSeats });
  };

  const handleTravelclass = (index, e) => {
    const { name, value } = e.target;

    const updatedTravelClass = flightData.travelclass.map((travelclass, i) =>
      i === index ? { ...travelclass, [name]: value } : travelclass
    );
    setFlightData({ ...flightData, travelclass: updatedTravelClass });
  };

  const isFlightDataFilled = () => {
    const { airline, airlineimagecode, flightNumber, aircraft } = flightData;
    const isFlightInfoFilled = !!(
      airline &&
      airlineimagecode &&
      flightNumber &&
      aircraft
    );
    return {
      isFlightInfoFilled,
    };
  };

  const { isFlightInfoFilled } = isFlightDataFilled();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:2001/flight/create",
        flightData
      );
      console.log(response.data);
      window.location.reload();
    } catch (error) {
      console.log("there was an error posting this data");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <FaPlane className="text-blue-600 text-2xl" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Add New Flight</h1>
          <p className="mt-2 text-gray-600">Enter flight details below</p>
        </div>

        {/* Form Container */}
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          {/* Form Sections */}
          <form className="divide-y divide-gray-200">
            {/* Flight Details */}
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <FaPlane className="mr-2 text-blue-500" />
                Flight Information
              </h2>
              <FlightInfo
                handleFlightInfoChange={handleFlightInfoChange}
                flightData={flightData}
              />
            </div>

            {/* Departure Airport */}
            <div className="p-6 bg-gray-50">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <FaCalendarAlt className="mr-2 text-blue-500" />
                Departure Details
              </h2>
              <Departure
                handleDepartureAirport={handleDepartureAirport}
                flightData={flightData}
                handleFlightInfoChange={handleFlightInfoChange}
              />
            </div>

            {/* Arrival Airport */}
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <FaCalendarAlt className="mr-2 text-blue-500" />
                Arrival Details
              </h2>
              <Arrival
                handleArrivalAirport={handleArrivalAirport}
                flightData={flightData}
                handleFlightInfoChange={handleFlightInfoChange}
              />
            </div>

            {/* Travel Class & Prices */}
            <div className="p-6 bg-gray-50">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <FaMoneyBillWave className="mr-2 text-blue-500" />
                Pricing & Seating
              </h2>
              <FareOptions
                handlePrices={handlePrices}
                handleSeats={handleSeats}
                handleTravelclass={handleTravelclass}
                flightData={flightData}
              />
            </div>

            {/* Submit Button */}
            <div className="px-6 py-4 bg-gray-100 text-right">
              <button
                type="button"
                onClick={handleSubmit}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                <FaUpload className="mr-2" />
                Submit Flight
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddFlight;
