import React, { useEffect, useState } from "react";

const BusDetails = ({
  BusData,
  handleBusInfoChange,
  handlePriceChange,
  isBusInfoFilled,
  isTicketpriceFilled,
  handlePageChange,
}) => {
  const BusAndTicketFilled = isBusInfoFilled && isTicketpriceFilled;

  return (
    <div>
      <p className="bg-yellow-400 mt-2 ">bus details</p>
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

          {/* {console.log(BusData)} */}
          {/* bus fare details */}
          {BusData.ticketprices.map((ticketprices, index) => {
            return (
              <div key={index} className="bg-yellow-300 mt-3 p-1">
                <h1 className="">Bus Fare details</h1>
                <div>
                  <label htmlFor="">Minimum Fare</label>
                  <input
                    type="number"
                    name="minimumfare"
                    value={ticketprices.minimumfare}
                    onChange={(e) => handlePriceChange(index, e)}
                  />
                </div>
                <div>
                  <label htmlFor="">Fare Per Kilometre</label>
                  <input
                    type="number"
                    name="perkilometre"
                    value={ticketprices.perkilometre}
                    onChange={(e) => handlePriceChange(index, e)}
                  />
                </div>
              </div>
            );
          })}

          <div className="flex justify-end">
            <button
              type="button"
              onClick={(e) => handlePageChange("firstPage")}
              className={!BusAndTicketFilled ? "bg-red-500" : "bg-green-600"}
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
