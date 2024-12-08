import React from "react";

const ArrivalAirport = ({
  handleArrivalAirport,
  handleFlightInfoChange,
  flightData,
}) => {
  return (
    <div>
      <p>arrival airport</p>
      {flightData.destination.map((destination, index) => (
        <div key={index}>
          <div className="bg-red-300 p-1">
            <label htmlFor="">code</label>
            <input
              type="text"
              name="code"
              value={destination.code}
              onChange={(e) => handleArrivalAirport(index, e)}
            />
          </div>
          <div className="bg-red-300 p-1">
            <label htmlFor="">name</label>
            <input
              type="text"
              name="name"
              value={destination.name}
              onChange={(e) => handleArrivalAirport(index, e)}
            />
          </div>
          <div className="bg-red-300 p-1">
            <label htmlFor="">city</label>
            <input
              type="text"
              name="city"
              value={destination.city}
              onChange={(e) => handleArrivalAirport(index, e)}
            />
          </div>
          <div className="bg-red-300 p-1">
            <label htmlFor="">country</label>
            <input
              type="text"
              name="country"
              value={destination.country}
              onChange={(e) => handleArrivalAirport(index, e)}
            />
          </div>
        </div>
      ))}
      <div className="bg-red-300 p-1">
        <label htmlFor="">arrival date : </label>
        <input
          type="date"
          name="arrivalDate"
          value={flightData.arrivalDate}
          onChange={handleFlightInfoChange}
        />
      </div>
      <div className="bg-red-300 p-1">
        <label htmlFor="">arrival time : </label>
        <input
          type="time"
          name="arrivalDateTime"
          value={flightData.arrivalDateTime}
          onChange={handleFlightInfoChange}
        />
      </div>
    </div>
  );
};

export default ArrivalAirport;
