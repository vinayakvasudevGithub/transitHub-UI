import React from "react";

const BusRoutes = ({
  BusData,
  AddMoreStations,
  handleStationChange,
  handlePageChange,
  isStationsFilled,
}) => {
  return (
    <div>
      <p className="bg-yellow-300 mt-4 ">stations</p>
      {BusData.stations.map((stations, index) => (
        <div key={index}>
          <div className="">
            <label>Station Name:</label>
            <input
              className="bg-red-300"
              type="text"
              name="station"
              value={stations.station}
              onChange={(e) => handleStationChange(index, e)}
              required
            />
          </div>
          <div>
            <label>city : </label>
            <input
              className="bg-red-300"
              type="text"
              name="city"
              value={stations.city}
              onChange={(e) => handleStationChange(index, e)}
              required
            />
          </div>
          <div>
            <label>district : </label>
            <input
              className="bg-red-300"
              type="text"
              name="district"
              value={stations.district}
              onChange={(e) => handleStationChange(index, e)}
              required
            />
          </div>
          <div>
            <label>state : </label>
            <input
              className="bg-red-300"
              type="text"
              name="state"
              value={stations.state}
              onChange={(e) => handleStationChange(index, e)}
              required
            />
          </div>
          <div>
            <label>arrivaltime : </label>
            <input
              className="bg-red-300"
              type="time"
              name="arrivaltime"
              value={stations.arrivaltime}
              onChange={(e) => handleStationChange(index, e)}
              required
            />
          </div>
          <div>
            <label>departureTime : </label>
            <input
              className="bg-red-300"
              type="time"
              name="departureTime"
              value={stations.departureTime}
              onChange={(e) => handleStationChange(index, e)}
              required
            />
          </div>
        </div>
      ))}
      <button type="button" onClick={AddMoreStations}>
        Add++
      </button>
      <button
        className={!isStationsFilled ? "bg-red-500" : "bg-green-500"}
        onClick={(e) => {
          handlePageChange("SecondPage");
        }}
      >
        next page
      </button>
    </div>
  );
};

export default BusRoutes;
