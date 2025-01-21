// import axios from "axios";
// import React, { useState } from "react";
// import { useSelector } from "react-redux";

// const BusBookingPage = () => {
//   const bookingBusDetails = useSelector((state) => state.busTicket.Details);
//   const lastBooking = bookingBusDetails?.[bookingBusDetails.length - 1];

//   const searchKey = useSelector((State) => State.bus.buses);
//   const lastSearch = searchKey?.[searchKey.length - 1];

//   // State for form inputs
//   const [formData, setFormData] = useState({
//     busdetails: [
//       {
//         departurecity: lastSearch.from,
//         arrivalcity: lastSearch.to,
//         busname: lastBooking.busname,
//         // busnumber: lastBooking.busnumber,
//         busseatnumber: lastBooking.busseatnumber,
//         bustype: lastBooking.bustype,
//         arrivaltime: lastBooking.arrivaltime,
//         departureTime: lastBooking.departureTime,
//       },
//     ],
//     userDetails: [
//       {
//         name: "",
//         age: "",
//         gender: "",
//         email: "",
//         mobile: "",
//       },
//     ],
//   });

//   // Handle input change
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       userDetails: [
//         {
//           ...prev.userDetails[0],
//           [name]: value,
//         },
//       ],
//     }));
//   };

//   // Handle gender button click
//   const handleGenderClick = (gender) => {
//     setFormData((prev) => ({
//       ...prev,
//       userDetails: [
//         {
//           ...prev.userDetails[0],
//           gender,
//         },
//       ],
//     }));
//   };

//   // Handle submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await axios.post(
//       "http://localhost:4001/busticket/booking",
//       formData
//     );
//     console.log(response.data);
//   };

//   return (
//     <div className="">
//       <h1>Bus Ticket Booking</h1>
//       <div>
//         {/* Bus Details */}
//         <div className="bg-gray-200 mx-2 p-4">
//           <div className="">
//             <p className="font-bold text-3xl">{lastBooking?.busName}</p>
//             <p className="font-semibold">{lastBooking?.busType}</p>
//           </div>
//           <div>
//             <p>Seat Number : {lastBooking?.busSeatNumber}</p>
//             <p>Arrival Time : {lastBooking?.arrivalTime}</p>
//             <p>Departure Time : {lastBooking?.departureTime}</p>
//             <p>departure : {lastSearch?.from}</p>
//             <p>arrival: {lastSearch?.to}</p>
//           </div>
//         </div>

//         {/* Travel Details */}
//         <div className="bg-red-200 mx-2 p-4 mt-3 grid sm:grid-cols-4 gap-2">
//           <div className="flex gap-[1rem] bg-green-400 col-span-2 p-2">
//             <div className="flex flex-col ">
//               <label htmlFor="name">Name:</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="flex flex-col ">
//               <label htmlFor="age">Age</label>
//               <input
//                 type="text"
//                 id="age"
//                 name="age"
//                 value={formData.age}
//                 onChange={handleInputChange}
//               />
//             </div>
//           </div>

//           <div className="">
//             <label htmlFor="gender">Gender</label>
//             <div className="flex border border-black">
//               <button
//                 type="button"
//                 className={`p-2 ${
//                   formData.userDetails[0].gender === "Male"
//                     ? "bg-blue-500 text-white"
//                     : "bg-blue-300"
//                 }`}
//                 onClick={() => handleGenderClick("Male")}
//               >
//                 Male
//               </button>
//               <button
//                 type="button"
//                 className={`p-2 ${
//                   formData.userDetails[0].gender === "Female"
//                     ? "bg-rose-500 text-white"
//                     : "bg-rose-300"
//                 }`}
//                 onClick={() => handleGenderClick("Female")}
//               >
//                 Female
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Contact Details */}
//         <div className="bg-gray-200 mt-3 mx-2 p-4">
//           <p className="font-semibold">Contact Details</p>
//           <div className="flex gap-[3rem]">
//             <div className="flex flex-col space-y-2">
//               <label htmlFor="email">Email Id</label>
//               <input
//                 type="text"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 className="border rounded px-3 py-2"
//               />
//             </div>
//             <div className="flex flex-col space-y-2">
//               <label htmlFor="mobile">Mobile Number</label>
//               <input
//                 type="text"
//                 id="mobile"
//                 name="mobile"
//                 value={formData.mobile}
//                 onChange={handleInputChange}
//                 className="border rounded px-3 py-2"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Continue Button */}
//         <div className="flex justify-end">
//           <button
//             onClick={handleSubmit}
//             className="bg-blue-500 mt-3 mx-2 p-2 text-white rounded"
//           >
//             Continue
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BusBookingPage;

import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const BusBookingPage = () => {
  const bookingBusDetails = useSelector((state) => state.busTicket.Details);
  const lastBooking = bookingBusDetails?.[bookingBusDetails.length - 1];

  const searchKey = useSelector((State) => State.bus.buses);
  const lastSearch = searchKey?.[searchKey.length - 1];

  const [formData, setFormData] = useState({
    busdetails: [
      {
        departurecity: lastSearch?.from,
        arrivalcity: lastSearch?.to,
        busname: lastBooking?.busName,
        busseatnumber: lastBooking?.busSeatNumber,
        bustype: lastBooking?.busType,
        arrivaltime: lastBooking?.arrivalTime,
        departuretime: lastBooking?.departureTime,
      },
    ],
    userDetails: [
      {
        name: "",
        age: "",
        gender: "",
        email: "",
        mobile: "",
      },
    ],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      userDetails: [
        {
          ...prev.userDetails[0],
          [name]: value,
        },
      ],
    }));
  };

  const handleGenderClick = (gender) => {
    setFormData((prev) => ({
      ...prev,
      userDetails: [
        {
          ...prev.userDetails[0],
          gender,
        },
      ],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:4001/busticket/booking",
      formData
    );
    console.log(response.data);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Bus Ticket Booking
        </h1>

        {/* Bus Details */}
        <div className="bg-gray-100 rounded-lg p-4 mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            {lastBooking?.busName || "Bus Name"}
          </h2>
          <p className="text-gray-600">{lastBooking?.busType || "Bus Type"}</p>
          <div className="grid grid-cols-2 gap-4 mt-4 text-gray-700">
            <p>
              <span className="font-semibold">Seat Number:</span>{" "}
              {lastBooking?.busSeatNumber || "-"}
            </p>
            <p>
              <span className="font-semibold">Arrival Time:</span>{" "}
              {lastBooking?.arrivalTime || "-"}
            </p>
            <p>
              <span className="font-semibold">Departure Time:</span>{" "}
              {lastBooking?.departureTime || "-"}
            </p>
            <p>
              <span className="font-semibold">From:</span>{" "}
              {lastSearch?.from || "-"}
            </p>
            <p>
              <span className="font-semibold">To:</span> {lastSearch?.to || "-"}
            </p>
          </div>
        </div>

        {/* Travel Details */}
        <div className="bg-gray-100 rounded-lg p-4 mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Passenger Details
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="font-medium text-gray-700">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.userDetails[0].name}
                onChange={handleInputChange}
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="age" className="font-medium text-gray-700">
                Age:
              </label>
              <input
                type="text"
                id="age"
                name="age"
                value={formData.userDetails[0].age}
                onChange={handleInputChange}
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="font-medium text-gray-700">Gender:</label>
            <div className="flex gap-4 mt-2">
              <button
                type="button"
                className={`px-4 py-2 rounded ${
                  formData.userDetails[0].gender === "Male"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => handleGenderClick("Male")}
              >
                Male
              </button>
              <button
                type="button"
                className={`px-4 py-2 rounded ${
                  formData.userDetails[0].gender === "Female"
                    ? "bg-pink-500 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => handleGenderClick("Female")}
              >
                Female
              </button>
            </div>
          </div>
        </div>

        {/* Contact Details */}
        <div className="bg-gray-100 rounded-lg p-4 mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Contact Details
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="email" className="font-medium text-gray-700">
                Email:
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.userDetails[0].email}
                onChange={handleInputChange}
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="mobile" className="font-medium text-gray-700">
                Mobile Number:
              </label>
              <input
                type="text"
                id="mobile"
                name="mobile"
                value={formData.userDetails[0].mobile}
                onChange={handleInputChange}
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>
        </div>

        {/* Continue Button */}
        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-6 py-2 rounded shadow-md hover:bg-blue-600 transition duration-200"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusBookingPage;
