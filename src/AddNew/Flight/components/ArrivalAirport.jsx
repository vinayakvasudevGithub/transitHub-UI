// import React from "react";

// const ArrivalAirport = ({
//   handleArrivalAirport,
//   handleFlightInfoChange,
//   flightData,
// }) => {
//   return (
//     <div>
//       <p>arrival airport</p>
//       {flightData.destination.map((destination, index) => (
//         <div key={index}>
//           <div className="bg-red-300 p-1">
//             <label htmlFor="">code</label>
//             <input
//               type="text"
//               name="code"
//               value={destination.code}
//               onChange={(e) => handleArrivalAirport(index, e)}
//             />
//           </div>
//           <div className="bg-red-300 p-1">
//             <label htmlFor="">name</label>
//             <input
//               type="text"
//               name="name"
//               value={destination.name}
//               onChange={(e) => handleArrivalAirport(index, e)}
//             />
//           </div>
//           <div className="bg-red-300 p-1">
//             <label htmlFor="">city</label>
//             <input
//               type="text"
//               name="city"
//               value={destination.city}
//               onChange={(e) => handleArrivalAirport(index, e)}
//             />
//           </div>
//           <div className="bg-red-300 p-1">
//             <label htmlFor="">country</label>
//             <input
//               type="text"
//               name="country"
//               value={destination.country}
//               onChange={(e) => handleArrivalAirport(index, e)}
//             />
//           </div>
//         </div>
//       ))}
//       <div className="bg-red-300 p-1">
//         <label htmlFor="">arrival date : </label>
//         <input
//           type="date"
//           name="arrivalDate"
//           value={flightData.arrivalDate}
//           onChange={handleFlightInfoChange}
//         />
//       </div>
//       <div className="bg-red-300 p-1">
//         <label htmlFor="">arrival time : </label>
//         <input
//           type="time"
//           name="arrivalDateTime"
//           value={flightData.arrivalDateTime}
//           onChange={handleFlightInfoChange}
//         />
//       </div>
//     </div>
//   );
// };

// export default ArrivalAirport;

import React from "react";

const ArrivalAirport = ({
  handleArrivalAirport,
  handleFlightInfoChange,
  flightData,
}) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Arrival Airport Details
      </h2>

      {/* Destination Airport Fields */}
      {flightData.destination.map((destination, index) => (
        <div key={index} className="mb-6 p-4 border border-gray-200 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Airport Code */}
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Airport Code (IATA)
              </label>
              <input
                type="text"
                name="code"
                value={destination.code}
                onChange={(e) => handleArrivalAirport(index, e)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g., JFK"
              />
            </div>

            {/* Airport Name */}
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Airport Name
              </label>
              <input
                type="text"
                name="name"
                value={destination.name}
                onChange={(e) => handleArrivalAirport(index, e)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g., John F. Kennedy International Airport"
              />
            </div>

            {/* City */}
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                City
              </label>
              <input
                type="text"
                name="city"
                value={destination.city}
                onChange={(e) => handleArrivalAirport(index, e)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g., New York"
              />
            </div>

            {/* Country */}
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Country
              </label>
              <input
                type="text"
                name="country"
                value={destination.country}
                onChange={(e) => handleArrivalAirport(index, e)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g., United States"
              />
            </div>
          </div>
        </div>
      ))}

      {/* Arrival Date & Time */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {/* Arrival Date */}
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Arrival Date
          </label>
          <input
            type="date"
            name="arrivalDate"
            value={flightData.arrivalDate}
            onChange={handleFlightInfoChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Arrival Time */}
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Arrival Time
          </label>
          <input
            type="time"
            name="arrivalDateTime"
            value={flightData.arrivalDateTime}
            onChange={handleFlightInfoChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default ArrivalAirport;
