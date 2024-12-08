import React from "react";

const DepartureAirport = ({
  handleDepartureAirport,
  handleFlightInfoChange,
  flightData,
}) => {
  return (
    <div>
      <p>departure airport</p>
      {flightData.airport.map((airport, index) => (
        <div key={index}>
          <div className="bg-green-300 p-1">
            <label htmlFor="">Airport Code : </label>
            <input
              type="text"
              name="code"
              value={airport.Code}
              onChange={(e) => handleDepartureAirport(index, e)}
            />
          </div>
          <div className="bg-red-400 p-1">
            <label>Airport Name : </label>
            <input
              type="text"
              name="name"
              value={airport.name}
              onChange={(e) => handleDepartureAirport(index, e)}
            />
          </div>
          <div className="bg-green-300 p-1">
            <label>Airport city : </label>
            <input
              type="text"
              name="city"
              value={airport.city}
              onChange={(e) => handleDepartureAirport(index, e)}
            />
          </div>
          <div className="bg-red-300 p-1">
            <label>Airport country : </label>
            <input
              type="text"
              name="country"
              value={airport.country}
              onChange={(e) => handleDepartureAirport(index, e)}
            />
          </div>
        </div>
      ))}
      <div className="bg-green-300 p-1">
        <label htmlFor="">departute date</label>
        <input
          type="date"
          name="departureDate"
          value={flightData.departureDate}
          onChange={handleFlightInfoChange}
        />
      </div>
      <div className="bg-green-300 p-1">
        <label htmlFor="">departute time</label>
        <input
          type="time"
          name="departureDateTime"
          value={flightData.departureDateTime}
          onChange={handleFlightInfoChange}
        />
      </div>
    </div>
  );
};

export default DepartureAirport;
