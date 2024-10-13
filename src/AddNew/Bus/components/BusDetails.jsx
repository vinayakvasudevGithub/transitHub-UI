import React, { useEffect, useState } from "react";

const BusDetails = ({
  BusData,
  handleBusInfoChange,
  isBusInfoFilled,
  handlePageChange,
}) => {
  return (
    <div>
      <p className="bg-yellow-400 mt-2">bus details</p>
      <div className="bg-blue-300 flex justify-center  ">
        <div className="mt-4">
          <div>
            <label>busname</label>
            <input
              type="text"
              name="busname"
              value={BusData.busname}
              onChange={handleBusInfoChange}
              className="bg-red-300"
              required
            />
          </div>
          <div>
            <label>busnumber</label>
            <input
              className="bg-green-400"
              type="text"
              name="busnumber"
              value={BusData.busnumber}
              onChange={handleBusInfoChange}
            />
          </div>
          <div>
            <label>bustype</label>
            <input
              className="bg-green-400"
              type="text"
              name="bustype"
              value={BusData.bustype}
              onChange={handleBusInfoChange}
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              // onClick={IsBusDataFilled}
              onClick={(e) => handlePageChange("firstPage")}
              className={!isBusInfoFilled ? "bg-red-500" : "bg-green-600"}
            >
              next page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusDetails;
