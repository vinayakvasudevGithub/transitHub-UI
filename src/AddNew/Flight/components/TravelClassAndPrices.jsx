import React from "react";

const TravelClassAndPrices = ({
  handlePrices,
  handleSeats,
  handleTravelclass,
  flightData,
}) => {
  return (
    <div>
      <p>Travel Class</p>
      {flightData.travelclass.map((travelclass, index) => (
        <div key={index} className="bg-yellow-300">
          <p>Ecconomy</p>
          <p>premiumEcconomy</p>
          <p>Bussiness</p>
        </div>
      ))}

      <p>seates</p>
      {flightData.seats.map((seats, index) => (
        <div key={index} className="bg-red-300 p-1">
          <div>
            <label htmlFor="">ecconomy</label>
            <input
              type="number"
              name="ecconomy"
              value={seats.ecconomy}
              onChange={(e) => handleSeats(index, e)}
            />
          </div>
          <div>
            <label htmlFor="">premiumEcconomy</label>
            <input
              type="number"
              name="premiumEcconomy"
              value={seats.premiumEcconomy}
              onChange={(e) => handleSeats(index, e)}
            />
          </div>
          <div>
            <label htmlFor="">bussiness</label>
            <input
              type="number"
              name="bussiness"
              value={seats.bussiness}
              onChange={(e) => handleSeats(index, e)}
            />
          </div>
        </div>
      ))}
      <p>travel class and price</p>
      {flightData.prices.map((prices, index) => (
        <div key={index} className="bg-green-300 p-1">
          <div>
            <label htmlFor="">ecconomy</label>
            <input
              type="number"
              name="ecconomy"
              value={prices.ecconomy}
              onChange={(e) => handlePrices(index, e)}
            />
          </div>
          <div>
            <label htmlFor="">premiumEcconomy</label>
            <input
              type="number"
              name="premiumEcconomy"
              value={prices.premiumEcconomy}
              onChange={(e) => handlePrices(index, e)}
            />
          </div>
          <div>
            <label htmlFor="">bussiness</label>
            <input
              type="number"
              name="bussiness"
              value={prices.bussiness}
              onChange={(e) => handlePrices(index, e)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TravelClassAndPrices;
