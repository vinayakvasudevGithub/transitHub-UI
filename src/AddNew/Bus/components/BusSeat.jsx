// import React, { useEffect, useState } from "react";

// import BusSeatLayout from "./BusSeatLayout/BusSeatLayout";

// const BusSeat = ({ BusData, handleSeatChange, SetBusData }) => {
//   const seatOptions = [
//     { label: "1+2", value: 1 },
//     { label: "1+3", value: 2 },
//     // { label: "2+1", value: 3 },
//     { label: "2+2", value: 4 },
//     { label: "2+3", value: 5 },
//     { label: "sleeper", value: 6 },
//   ];

//   const [totalSeats, setTotalSeats] = useState();
//   const [seatFormation, setSeatFormation] = useState();

//   return (
//     <div className=" ">
//       {BusData.seatdetails.map((seatdetails, index) => (
//         <div key={index} className="bg-gray-300 p-1">
//           <p className="bg-yellow-400 mt-4">seat arrangements</p>
//           <div className="bg-red-400 p-1">
//             <label>totalseats</label>
//             <input
//               type="text"
//               className="bg-green-300"
//               name="totalseats"
//               value={seatdetails.totalseats}
//               onChange={(e) => {
//                 handleSeatChange(index, e);
//                 setTotalSeats(e.target.value);
//               }}
//             />
//           </div>

//           <div className="bg-green-400 p-1 mt-2 " key={index}>
//             <div className="bg-blue-300 p-1">
//               <h3>select seat formation</h3>
//               <select
//                 name="seatformation"
//                 onChange={(e) => {
//                   handleSeatChange(index, e);
//                   setSeatFormation(e.target.value);
//                 }}
//                 className="form-control block px-3 py-2 text-base text-gray-700
//              bg-white border border-gray-300 rounded-md focus:outline-none
//              focus:ring focus:border-blue-500"
//               >
//                 <option value="">Select seat formation</option>
//                 {seatOptions.map((category) => (
//                   <option key={category.value} value={category.label}>
//                     {category.label}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>
//           {/* seat layout */}
//           {/* <div className="mt-4 bg-yellow-300 p-1">
//             <p>seat layout</p>
//             <div className="bg-red-400 p-1">
//               <label htmlFor="seatRows"> coloumn : </label>

//               <input
//                 type="text"
//                 name="seatRows"
//                 value={seatLength}
//                 onChange={(e) => setSeatLength(e.target.value)} // Only update seatLength
//                 className="border"
//               />
//               <div className="bg-blue-400 p-1">
//                 <button
//                   type="button"
//                   // onClick={handleSeatLayout} // Generate seat pattern on button click
//                   className="bg-green-400"
//                 >
//                   submit to setup seat layout
//                 </button>
//               </div>
//             </div>
//           </div> */}
//           {/* {console.log(seatdetails.totalseats)} */}
//           {/* seat layout ----------------------------------------------------->>>>> */}
//           {/* <div className="bg-green-300 mt-2">
//             <BusSeatLayout
//               seatNumber={seatNumber}
//               rows={rows}
//               seatPattern={seatPattern}
//               BusData={BusData}
//             />
//           </div> */}
//         </div>
//       ))}
//       <div className="bg-green-300 mt-2">
//         <BusSeatLayout
//           // addAndRemoveSeat={addAndRemoveSeat}
//           // seatNumber={seatNumber}
//           // rows={rows}
//           // seatPattern={seatPattern}
//           // genseats={genseats}
//           // setColumn={setColumn}
//           totalSeats={totalSeats}
//           seatFormation={seatFormation || "1 + 2"}
//           BusData={BusData}
//           SetBusData={SetBusData}
//         />
//       </div>
//     </div>
//   );
// };

// export default BusSeat;

import React, { useState } from "react";
import BusSeatLayout from "./BusSeatLayout/BusSeatLayout";

const BusSeat = ({ BusData, handleSeatChange, SetBusData }) => {
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

export default BusSeat;
