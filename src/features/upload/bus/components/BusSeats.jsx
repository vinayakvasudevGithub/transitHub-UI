import React, { useState } from "react";
import BusSeatLayout from "./BusSeatLayout";
// import BusSeatLayout from "../../../../AddNew/Bus/components/BusSeatLayout/BusSeatLayout";

const BusSeats = ({ BusData, handleSeatChange, SetBusData }) => {
  const seatOptions = [
    { label: "1+2", value: 1 },
    { label: "1+3", value: 2 },
    { label: "2+2", value: 4 },
    { label: "2+3", value: 5 },
    { label: "sleeper", value: 6 },
  ];

  const [totalSeats, setTotalSeats] = useState("");
  const [seatFormation, setSeatFormation] = useState("");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-blue-600 text-white p-4 rounded-t-lg">
        <h2 className="text-xl font-bold">Seat Configuration</h2>
      </div>

      {/* Main Form */}
      <div className="p-6 bg-white rounded-b-lg shadow-sm space-y-6">
        {BusData.seatdetails.map((seatdetails, index) => (
          <div key={index} className="space-y-6">
            {/* Seat Configuration Section */}
            <div className="p-4 border border-gray-200 rounded-lg space-y-4">
              <h3 className="text-lg font-medium text-gray-800">
                Seat Arrangement
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Total Seats Input */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Total Seats
                  </label>
                  <input
                    type="number"
                    name="totalseats"
                    value={seatdetails.totalseats}
                    onChange={(e) => {
                      handleSeatChange(index, e);
                      setTotalSeats(e.target.value);
                    }}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    min="1"
                  />
                </div>

                {/* Seat Formation Select */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Seat Formation
                  </label>
                  <select
                    name="seatformation"
                    value={seatdetails.seatformation}
                    onChange={(e) => {
                      handleSeatChange(index, e);
                      setSeatFormation(e.target.value);
                    }}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select seat formation</option>
                    {seatOptions.map((option) => (
                      <option key={option.value} value={option.label}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Seat Layout Preview */}
            <div className="p-4 bg-gray-100 border border-gray-200 rounded-lg">
              <h3 className="text-lg font-medium text-gray-800 mb-4">
                Seat Layout Preview
              </h3>
              <BusSeatLayout
                totalSeats={totalSeats || seatdetails.totalseats}
                seatFormation={
                  seatFormation || seatdetails.seatformation || "1+2"
                }
                BusData={BusData}
                SetBusData={SetBusData}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusSeats;
