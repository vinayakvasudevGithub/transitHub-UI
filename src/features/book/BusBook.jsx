// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import { bookBusTicket } from "../../api/services/transport/busApi";

// const BusBook = () => {
//   const bookingBusDetails = useSelector((state) => state.bus.tripDetails);
//   const lastBooking = bookingBusDetails?.[bookingBusDetails.length - 1];
//   const searchKey = useSelector((State) => State.bus.BusList);
//   const lastSearch = searchKey?.[searchKey.length - 1];

//   // console.log(lastSearch?.departureCity);
//   // console.log(lastBooking?.departureTime);

//   const [formData, setFormData] = useState({
//     busdetails: [
//       {
//         departurecity: lastSearch?.departureCity,
//         arrivalcity: lastSearch?.destinationCity,
//         busname: lastBooking?.busName,
//         busnumber: lastBooking?.busnumber,
//         busseatnumber: lastBooking?.busSeatNumber,
//         bustype: lastBooking?.busType,
//         arrivaltime: lastBooking?.arrivalTime,
//         departureTime: lastBooking?.departureTime,
//         price: lastBooking?.price,
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

//   console.log(formData.busdetails);

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

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const busBooking = await bookBusTicket(formData);
//       console.log("Booking Successful:", busBooking);
//     } catch (error) {
//       console.error("Booking Failed:", error);
//     }
//   };

//   // console.log(lastBooking)

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
//         <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
//           Bus Ticket Booking
//         </h1>

//         {/* Bus Details */}
//         <div className="bg-gray-100 rounded-lg p-4 mb-6">
//           <h2 className="text-xl font-semibold text-gray-700 mb-2">
//             {lastBooking?.busName || "Bus Name"}
//           </h2>
//           <p>bys number : {lastBooking?.busnumber}</p>
//           <p className="text-gray-600">{lastBooking?.busType || "Bus Type"}</p>
//           <div className="grid grid-cols-2 gap-4 mt-4 text-gray-700">
//             <p>
//               <span className="font-semibold">Seat Number:</span>{" "}
//               {lastBooking?.busSeatNumber || "-"}
//             </p>
//             <p>
//               <span className="font-semibold">Arrival Time:</span>{" "}
//               {lastBooking?.arrivalTime || "-"}
//             </p>
//             <p>
//               <span className="font-semibold">Departure Time:</span>{" "}
//               {lastBooking?.departureTime || "-"}
//             </p>
//             <p>
//               <span className="font-semibold">From:</span>{" "}
//               {lastSearch?.departureCity || "-"}
//             </p>
//             <p>
//               <span className="font-semibold">To:</span>{" "}
//               {lastSearch?.destinationCity || "-"}
//             </p>
//           </div>
//         </div>

//         {/* Travel Details */}
//         <div className="bg-gray-100 rounded-lg p-4 mb-6">
//           <h2 className="text-xl font-semibold text-gray-700 mb-4">
//             Passenger Details
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div className="flex flex-col">
//               <label htmlFor="name" className="font-medium text-gray-700">
//                 Name:
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.userDetails[0].name}
//                 onChange={handleInputChange}
//                 className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//               />
//             </div>
//             <div className="flex flex-col">
//               <label htmlFor="age" className="font-medium text-gray-700">
//                 Age:
//               </label>
//               <input
//                 type="text"
//                 id="age"
//                 name="age"
//                 value={formData.userDetails[0].age}
//                 onChange={handleInputChange}
//                 className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//               />
//             </div>
//           </div>
//           <div className="mt-4">
//             <label className="font-medium text-gray-700">Gender:</label>
//             <div className="flex gap-4 mt-2">
//               <button
//                 type="button"
//                 className={`px-4 py-2 rounded ${
//                   formData.userDetails[0].gender === "Male"
//                     ? "bg-blue-500 text-white"
//                     : "bg-gray-200"
//                 }`}
//                 onClick={() => handleGenderClick("Male")}
//               >
//                 Male
//               </button>
//               <button
//                 type="button"
//                 className={`px-4 py-2 rounded ${
//                   formData.userDetails[0].gender === "Female"
//                     ? "bg-pink-500 text-white"
//                     : "bg-gray-200"
//                 }`}
//                 onClick={() => handleGenderClick("Female")}
//               >
//                 Female
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Contact Details */}
//         <div className="bg-gray-100 rounded-lg p-4 mb-6">
//           <h2 className="text-xl font-semibold text-gray-700 mb-4">
//             Contact Details
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div className="flex flex-col">
//               <label htmlFor="email" className="font-medium text-gray-700">
//                 Email:
//               </label>
//               <input
//                 type="text"
//                 id="email"
//                 name="email"
//                 value={formData.userDetails[0].email}
//                 onChange={handleInputChange}
//                 className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//               />
//             </div>
//             <div className="flex flex-col">
//               <label htmlFor="mobile" className="font-medium text-gray-700">
//                 Mobile Number:
//               </label>
//               <input
//                 type="text"
//                 id="mobile"
//                 name="mobile"
//                 value={formData.userDetails[0].mobile}
//                 onChange={handleInputChange}
//                 className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Continue Button */}
//         <div className="flex justify-end">
//           <button
//             onClick={handleSubmit}
//             className="bg-blue-500 text-white px-6 py-2 rounded shadow-md hover:bg-blue-600 transition duration-200"
//           >
//             Continue
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BusBook;

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { bookBusTicket } from "../../api/services/transport/busApi";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiCheckCircle,
  FiUser,
  FiCalendar,
  FiPhone,
  FiMail,
  FiCreditCard,
} from "react-icons/fi";

const BusBook = () => {
  const bookingBusDetails = useSelector((state) => state.bus.tripDetails);
  const lastBooking = bookingBusDetails?.[bookingBusDetails.length - 1];
  const searchKey = useSelector((state) => state.bus.BusList);
  const lastSearch = searchKey?.[searchKey.length - 1];

  const [formData, setFormData] = useState({
    busdetails: [
      {
        departurecity: lastSearch?.departureCity,
        arrivalcity: lastSearch?.destinationCity,
        busname: lastBooking?.busName,
        busnumber: lastBooking?.busnumber,
        busseatnumber: lastBooking?.busSeatNumber,
        bustype: lastBooking?.busType,
        arrivaltime: lastBooking?.arrivalTime,
        departureTime: lastBooking?.departureTime,
        price: lastBooking?.price,
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

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    const user = formData.userDetails[0];

    if (!user.name) newErrors.name = "Name is required";
    if (!user.age || user.age < 1 || user.age > 120)
      newErrors.age = "Please enter valid age";
    if (!user.gender) newErrors.gender = "Please select gender";
    if (!user.email || !/^\S+@\S+\.\S+$/.test(user.email))
      newErrors.email = "Valid email required";
    if (!user.mobile || !/^\d{10}$/.test(user.mobile))
      newErrors.mobile = "10-digit mobile required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

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
    setErrors((prev) => ({ ...prev, gender: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      await bookBusTicket(formData);
      setBookingSuccess(true);
    } catch (error) {
      console.error("Booking Failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (bookingSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white p-6"
      >
        <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring" }}
            className="mb-6"
          >
            <FiCheckCircle className="w-20 h-20 text-green-500 mx-auto" />
          </motion.div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Booking Confirmed!
          </h2>
          <p className="text-gray-600 mb-6">
            Your seat {lastBooking?.busSeatNumber} on {lastBooking?.busName} has
            been successfully booked.
          </p>
          <div className="bg-blue-50 rounded-xl p-4 mb-6 text-left">
            <p className="font-medium text-gray-800">
              <span className="text-blue-600">Booking ID:</span>{" "}
              {Math.random().toString(36).substring(2, 10).toUpperCase()}
            </p>
            <p className="text-gray-600 mt-1">
              We've sent the details to {formData.userDetails[0].email}
            </p>
          </div>
          <button
            onClick={() => window.location.reload()}
            className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
          >
            Book Another Ticket
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-6"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Booking Progress */}
          <div className="bg-gray-900 text-white p-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center mr-2">
                  <span className="text-white font-bold">1</span>
                </div>
                <span className="font-medium">Passenger Details</span>
              </div>
              <div className="h-1 flex-1 mx-4 bg-gray-700 rounded-full">
                <div
                  className="h-full bg-blue-500 rounded-full"
                  style={{ width: "33%" }}
                ></div>
              </div>
              <div className="flex items-center text-gray-400">
                <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center mr-2">
                  <span className="text-gray-400 font-bold">2</span>
                </div>
                <span>Payment</span>
              </div>
            </div>
          </div>

          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Complete Your Booking
            </h1>
            <p className="text-gray-600 mb-8">
              Please fill in your details to secure your seat
            </p>

            {/* Bus Summary Card */}

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative overflow-hidden rounded-2xl p-6 mb-8 shadow-2xl"
              style={{
                background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              {/* Glow effect */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-indigo-500 rounded-full filter blur-3xl opacity-20"></div>

              <div className="relative z-10">
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-1">
                      {lastBooking?.busName || "Premium Express"}
                    </h2>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 bg-indigo-500/20 text-indigo-300 text-xs font-medium rounded-full">
                        {lastBooking?.busType || "Luxury Class"}
                      </span>
                      <span className="text-slate-300 text-sm">
                        Seat {lastBooking?.busSeatNumber || "A12"}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-white">
                      ₹
                      {lastBooking?.price
                        ? lastBooking.price.toLocaleString()
                        : "0"}
                    </p>
                    <p className="text-slate-300 text-sm">Total Fare</p>
                  </div>
                </div>

                {/* Journey details */}
                <div className="mt-8 grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">
                      From
                    </p>
                    <p className="text-white font-semibold text-lg">
                      {lastSearch?.departureCity || "Mumbai"}
                    </p>
                    <p className="text-slate-400 text-sm mt-1">
                      {lastBooking?.departureDate || "15 Jun"} •{" "}
                      {lastBooking?.departureTime || "08:30 AM"}
                    </p>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="relative w-full flex justify-center">
                      <div className="absolute top-3 h-0.5 bg-slate-600 w-full"></div>
                      <div className="relative z-10 bg-indigo-500 p-1 rounded-full">
                        <svg
                          className="h-4 w-4 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 5l7 7-7 7M5 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                    <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mt-6 mb-1">
                      Duration
                    </p>
                    <p className="text-white font-medium">4h 30m</p>
                  </div>

                  <div className="text-right">
                    <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-1">
                      To
                    </p>
                    <p className="text-white font-semibold text-lg">
                      {lastSearch?.destinationCity || "Goa"}
                    </p>
                    <p className="text-slate-400 text-sm mt-1">
                      {lastBooking?.arrivalDate || "15 Jun"} •{" "}
                      {lastBooking?.arrivalTime || "01:00 PM"}
                    </p>
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-8 pt-5 border-t border-slate-700/50 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center">
                      <svg
                        className="h-4 w-4 text-indigo-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <span className="text-slate-300 text-sm">
                      Booking ID: {lastBooking?._id?.slice(-8) || "X7B92K4D"}
                    </span>
                  </div>
                  <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-lg transition-all flex items-center gap-2">
                    View Ticket
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
            {/* <motion.div
              whileHover={{ scale: 1.01 }}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 text-white mb-8 shadow-lg"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-bold mb-1">
                    {lastBooking?.busName || "Bus Name"}
                  </h2>
                  <p className="text-blue-100">
                    {lastBooking?.busType || "Bus Type"} • Seat{" "}
                    {lastBooking?.busSeatNumber || "-"}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold">
                    ₹{lastBooking?.price || "0"}
                  </p>
                  <p className="text-blue-100 text-sm">Total Fare</p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4">
                <div>
                  <p className="text-blue-100 text-sm">From</p>
                  <p className="font-medium">
                    {lastSearch?.departureCity || "-"}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-blue-100 text-sm">Duration</p>
                  <p className="font-medium">4h 30m</p>
                </div>
                <div className="text-right">
                  <p className="text-blue-100 text-sm">To</p>
                  <p className="font-medium">
                    {lastSearch?.destinationCity || "-"}
                  </p>
                </div>
              </div>
            </motion.div> */}

            {/* Passenger Form */}
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                {/* Personal Details */}
                <div className="border-b border-gray-200 pb-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <FiUser className="mr-2 text-blue-500" />
                    Passenger Details
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="name"
                          value={formData.userDetails[0].name}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.name ? "border-red-500" : "border-gray-300"
                          } focus:ring-2 focus:ring-blue-500 outline-none`}
                          placeholder="Enter your full name"
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.name}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Age
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          name="age"
                          value={formData.userDetails[0].age}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.age ? "border-red-500" : "border-gray-300"
                          } focus:ring-2 focus:ring-blue-500 outline-none`}
                          placeholder="Enter your age"
                          min="1"
                          max="120"
                        />
                        {errors.age && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.age}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Gender
                    </label>
                    <div className="flex gap-3">
                      <motion.button
                        type="button"
                        whileTap={{ scale: 0.95 }}
                        className={`px-6 py-2 rounded-full font-medium transition-all flex items-center ${
                          formData.userDetails[0].gender === "Male"
                            ? "bg-blue-600 text-white"
                            : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                        }`}
                        onClick={() => handleGenderClick("Male")}
                      >
                        Male
                      </motion.button>
                      <motion.button
                        type="button"
                        whileTap={{ scale: 0.95 }}
                        className={`px-6 py-2 rounded-full font-medium transition-all flex items-center ${
                          formData.userDetails[0].gender === "Female"
                            ? "bg-pink-500 text-white"
                            : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                        }`}
                        onClick={() => handleGenderClick("Female")}
                      >
                        Female
                      </motion.button>
                      <motion.button
                        type="button"
                        whileTap={{ scale: 0.95 }}
                        className={`px-6 py-2 rounded-full font-medium transition-all flex items-center ${
                          formData.userDetails[0].gender === "Other"
                            ? "bg-purple-500 text-white"
                            : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                        }`}
                        onClick={() => handleGenderClick("Other")}
                      >
                        Other
                      </motion.button>
                    </div>
                    {errors.gender && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.gender}
                      </p>
                    )}
                  </div>
                </div>

                {/* Contact Details */}
                <div className="border-b border-gray-200 pb-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                    <FiMail className="mr-2 text-blue-500" />
                    Contact Information
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          value={formData.userDetails[0].email}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.email ? "border-red-500" : "border-gray-300"
                          } focus:ring-2 focus:ring-blue-500 outline-none`}
                          placeholder="your@email.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Mobile Number
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-gray-500">+91</span>
                        </div>
                        <input
                          type="tel"
                          name="mobile"
                          value={formData.userDetails[0].mobile}
                          onChange={handleInputChange}
                          className={`w-full pl-12 py-3 rounded-lg border ${
                            errors.mobile ? "border-red-500" : "border-gray-300"
                          } focus:ring-2 focus:ring-blue-500 outline-none`}
                          placeholder="9876543210"
                          maxLength="10"
                        />
                        {errors.mobile && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.mobile}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => window.history.back()}
                  className="text-blue-600 font-medium hover:text-blue-800 transition-colors"
                >
                  ← Back to seat selection
                </button>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  disabled={isSubmitting}
                  className={`px-8 py-3 rounded-xl font-semibold text-white shadow-lg ${
                    isSubmitting
                      ? "bg-blue-400"
                      : "bg-blue-600 hover:bg-blue-700"
                  } transition-colors flex items-center`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      Continue to Payment
                      <FiCreditCard className="ml-2" />
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BusBook;

// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import { bookBusTicket } from "../../api/services/transport/busApi";

// const BusBook = () => {
//   const bookingBusDetails = useSelector((state) => state.bus.tripDetails);
//   const lastBooking = bookingBusDetails?.[bookingBusDetails.length - 1];
//   const searchKey = useSelector((state) => state.bus.BusList);
//   const lastSearch = searchKey?.[searchKey.length - 1];

//   const [formData, setFormData] = useState({
//     busdetails: [
//       {
//         departurecity: lastSearch?.departureCity,
//         arrivalcity: lastSearch?.destinationCity,
//         busname: lastBooking?.busName,
//         busnumber: lastBooking?.busnumber,
//         busseatnumber: lastBooking?.busSeatNumber,
//         bustype: lastBooking?.busType,
//         arrivaltime: lastBooking?.arrivalTime,
//         departureTime: lastBooking?.departureTime,
//         price: lastBooking?.price,
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

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const busBooking = await bookBusTicket(formData);
//       console.log("Booking Successful:", busBooking);
//     } catch (error) {
//       console.error("Booking Failed:", error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-6">
//       <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-3xl p-8">
//         <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
//           🚌 Book Your Journey
//         </h1>

//         {/* 🚌 Bus Details */}
//         <div className="bg-gray-100 rounded-xl p-6 mb-8 shadow-inner">
//           <h2 className="text-2xl font-semibold text-gray-700 mb-3">
//             {lastBooking?.busName || "Bus Name"}
//           </h2>
//           <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-600">
//             <p>
//               <span className="font-semibold">Bus No:</span>{" "}
//               {lastBooking?.busnumber || "-"}
//             </p>
//             <p>
//               <span className="font-semibold">Seat:</span>{" "}
//               {lastBooking?.busSeatNumber || "-"}
//             </p>
//             <p>
//               <span className="font-semibold">Type:</span>{" "}
//               {lastBooking?.busType || "-"}
//             </p>
//             <p>
//               <span className="font-semibold">From:</span>{" "}
//               {lastSearch?.departureCity || "-"}
//             </p>
//             <p>
//               <span className="font-semibold">To:</span>{" "}
//               {lastSearch?.destinationCity || "-"}
//             </p>
//             <p>
//               <span className="font-semibold">Arrival:</span>{" "}
//               {lastBooking?.arrivalTime || "-"}
//             </p>
//             <p>
//               <span className="font-semibold">Departure:</span>{" "}
//               {lastBooking?.departureTime || "-"}
//             </p>
//             <p>
//               <span className="font-semibold">Price:</span> ₹
//               {lastBooking?.price || "-"}
//             </p>
//           </div>
//         </div>

//         {/* 👤 Passenger Details */}
//         <div className="bg-gray-100 rounded-xl p-6 mb-8 shadow-inner">
//           <h2 className="text-xl font-semibold text-gray-700 mb-4">
//             Passenger Details
//           </h2>
//           <div className="grid sm:grid-cols-2 gap-6">
//             <div>
//               <label className="block text-gray-700 font-medium mb-1">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.userDetails[0].name}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
//                 placeholder="Full Name"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 font-medium mb-1">
//                 Age
//               </label>
//               <input
//                 type="number"
//                 name="age"
//                 value={formData.userDetails[0].age}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
//                 placeholder="Age"
//               />
//             </div>
//           </div>

//           <div className="mt-6">
//             <label className="block text-gray-700 font-medium mb-2">
//               Gender
//             </label>
//             <div className="flex gap-4">
//               <button
//                 type="button"
//                 className={`px-6 py-2 rounded-full font-medium transition-all ${
//                   formData.userDetails[0].gender === "Male"
//                     ? "bg-blue-600 text-white"
//                     : "bg-gray-200 hover:bg-blue-100"
//                 }`}
//                 onClick={() => handleGenderClick("Male")}
//               >
//                 Male
//               </button>
//               <button
//                 type="button"
//                 className={`px-6 py-2 rounded-full font-medium transition-all ${
//                   formData.userDetails[0].gender === "Female"
//                     ? "bg-pink-500 text-white"
//                     : "bg-gray-200 hover:bg-pink-100"
//                 }`}
//                 onClick={() => handleGenderClick("Female")}
//               >
//                 Female
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* 📱 Contact Details */}
//         <div className="bg-gray-100 rounded-xl p-6 mb-8 shadow-inner">
//           <h2 className="text-xl font-semibold text-gray-700 mb-4">
//             Contact Details
//           </h2>
//           <div className="grid sm:grid-cols-2 gap-6">
//             <div>
//               <label className="block text-gray-700 font-medium mb-1">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.userDetails[0].email}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
//                 placeholder="you@example.com"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700 font-medium mb-1">
//                 Mobile Number
//               </label>
//               <input
//                 type="tel"
//                 name="mobile"
//                 value={formData.userDetails[0].mobile}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
//                 placeholder="Enter mobile number"
//               />
//             </div>
//           </div>
//         </div>

//         {/* ✅ Submit Button */}
//         <div className="flex justify-end">
//           <button
//             onClick={handleSubmit}
//             className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition duration-300"
//           >
//             Continue Booking
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BusBook;
