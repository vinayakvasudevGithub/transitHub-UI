import axios from "axios";
import React, { useState } from "react";
import FlightDetails from "./components/FlightDetails";
import DepartureAirport from "./components/DepartureAirport";
import ArrivalAirport from "./components/ArrivalAirport";
import TravelClassAndPrices from "./components/TravelClassAndPrices";

const ToAddNewFlightToData = () => {
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
        "http://localhost:4001/flight/create",
        flightData
      );
      console.log(response.data);
      window.location.reload();
    } catch (error) {
      console.log("there was an error posting this data");
    }
  };
  return (
    <div className=" mt-5 flex justify-center">
      <form>
        <button onClick={(e) => handleSubmit(e)}>click</button>
        <FlightDetails
          handleFlightInfoChange={handleFlightInfoChange}
          flightData={flightData}
        />
        <DepartureAirport
          handleDepartureAirport={handleDepartureAirport}
          flightData={flightData}
          handleFlightInfoChange={handleFlightInfoChange}
        />
        <ArrivalAirport
          handleArrivalAirport={handleArrivalAirport}
          flightData={flightData}
          handleFlightInfoChange={handleFlightInfoChange}
        />
        <TravelClassAndPrices
          handlePrices={handlePrices}
          handleSeats={handleSeats}
          handleTravelclass={handleTravelclass}
          flightData={flightData}
        />
      </form>
    </div>
  );
};

export default ToAddNewFlightToData;
