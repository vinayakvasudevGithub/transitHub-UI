import React, { useState } from "react";

const BusSeat = ({ BusData, handleSeatChange }) => {
  const seatOptions = [
    { label: "1X2", value: 1 },
    { label: "1X3", value: 2 },
    { label: "2X1", value: 3 },
    { label: "2X2", value: 4 },
    { label: "2X3", value: 5 },
    { label: "sleeper", value: 6 },
  ];

  const [seatLength, setSeatLength] = useState();

  const handleSeatLayout = () => {
    console.log(seatLength);
  };

  return (
    <div>
      {BusData.seatdetails.map((seatdetails, index) => (
        <div key={index}>
          <p className="bg-yellow-400 mt-4">seat arrangements</p>
          <div>
            <label>totalseats</label>
            <input
              type="text"
              className="bg-green-300"
              name="totalseats"
              value={seatdetails.totalseats}
              onChange={(e) => handleSeatChange(index, e)}
            />
          </div>

          <div className="bg-green-400" key={index}>
            <div>
              <h3>select seat category</h3>
              <select
                name="seatformation"
                onChange={(e) => handleSeatChange(index, e)}
                className="form-control block px-3 py-2 text-base text-gray-700
             bg-white border border-gray-300 rounded-md focus:outline-none 
             focus:ring focus:border-blue-500"
              >
                <option value="">Select seat formation</option>
                {seatOptions.map((category) => (
                  <option key={category.value} value={category.label}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* seat layout */}
          <div className="mt-4">
            <p>seat layout</p>
            <div>
              <label htmlFor=""> coloumn : </label>
              <input
                type="text"
                onChange={(e) => setSeatLength(e.target.value)}
                className="border"
              />
              <div>
                <button
                  type="button"
                  onClick={(e) => handleSeatLayout("car")}
                  className="bg-green-400"
                >
                  submit to setup seat layout
                </button>
              </div>
              <p>{seatLength}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BusSeat;
