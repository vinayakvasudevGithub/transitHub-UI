// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";

// const FlightBookingPage = () => {
//   const [flightData, setFlightData] = useState([]);
//   const location = useLocation();
//   const id = location.state?.id;

//   useEffect(() => {
//     axios
//       .get(`http://localhost:4001/flight/${id}`)
//       .then((Response) => {
//         setFlightData([Response.data]);
//       })
//       .catch((error) => console.log("flight", error));
//   }, []);

//   const [formData, setFormData] = useState({
//     airlineTicketId: id,
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

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await axios.post(
//       "http://localhost:4001/flightticket/booking",
//       formData
//     );
//     console.log(response.data);
//   };

//   return (
//     <div className="p-1">
//       <p>flight booking page</p>
//       {flightData.map((data) => (
//         <div key={data._id} className="mt-5 bg-red-300 p-1 flex gap-7 mx-3">
//           <div className="bg-green-200 hidden md:block p-1 w-[35rem] ">
//             {data.prices.map((prices) => {
//               // Calculate Tax and Fees
//               const Tax = (prices.ecconomy / 100) * 8; // Example: 8% tax
//               const Fees = (prices.ecconomy / 100) * 3; // Example: 3% fees
//               const TotalAmount = prices.ecconomy + Tax + Fees;
//               return (
//                 <div key={prices._id} className="bg-blue-300 p-4 space-y-1 ">
//                   <span className="">Fare Summary</span>
//                   <div className="flex justify-between">
//                     <span>Fare type</span>
//                     <span>Partially refundable</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span>Base Price</span>
//                     <span>{prices.ecconomy.toFixed(2)}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span>Taxes</span>
//                     <span>{Tax.toFixed(2)}</span>{" "}
//                   </div>
//                   <div className="flex justify-between">
//                     <span>Fees</span>
//                     <span>{Fees.toFixed(2)}</span>{" "}
//                   </div>
//                   <div className="flex justify-between text-xl font-semibold">
//                     <span>Total Amount</span>
//                     <span>{TotalAmount.toFixed(2)}</span>{" "}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//           <div className=" bg-green-300 w-full p-1 space-y-3">
//             right bar
//             <div className="bg-yellow-200 p-1 ">
//               info about tickets
//               {data.airport.map((airport) => (
//                 <div key={airport._id} className="bg-red-400 p-1">
//                   <div className=" text-xl font-bold flex bg-green-400 gap-2 ">
//                     <h1>{airport.city}</h1>
//                     {data.destination.map((destination) => (
//                       <div key={destination._id}>{destination.city}</div>
//                     ))}
//                   </div>
//                   <div className="text-sm">
//                     {new Date(data.departureDate)
//                       .toDateString()
//                       .split(" ")
//                       .slice(0, 3)
//                       .join(" ")}
//                   </div>
//                 </div>
//               ))}
//               <div className="bg-blue-300 mt-2 flex ">
//                 <img
//                   className="h-7"
//                   src={`https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/${data.airlineimagecode}.png?v=19&quot`}
//                   alt=""
//                 />
//                 <div className="flex items-center ml-2 ">
//                   <h2>{data.airline}</h2>
//                 </div>
//                 <div className="bg-black w-[3px] ml-1 h-5 mt-[4px] "></div>
//                 <div className=" ml-1 flex items-center">
//                   <h2>{data.flightNumber}</h2>
//                 </div>
//               </div>
//               <div className="bg-red-300 mt-2 grid sm:grid-cols-2 p-1">
//                 <div className="bg-blue-500 p-1 flex">
//                   {data.airport.map((airport) => (
//                     <div key={airport._id} className="bg-green-300 w-full ">
//                       <div>{data.departureDate}</div>
//                       <div className="text-2xl font-semibold">
//                         {data.departureDateTime}
//                       </div>
//                       <div>{airport.city}</div>
//                       <div className="text-sm ">{airport.name}</div>
//                     </div>
//                   ))}
//                   {data.destination.map((destination) => (
//                     <div key={destination._id} className="bg-red-200 w-full ">
//                       <div>{data.arrivalDate}</div>
//                       <div className="text-2xl font-semibold">
//                         {data.arrivalDateTime}
//                       </div>
//                       <div>{destination.city}</div>
//                       <div className="text-sm">{destination.name}</div>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="bg-blue-300 flex justify-between">
//                   <div>
//                     <div className="">Baggagge</div>
//                     <span>per person</span>
//                   </div>
//                   <div>
//                     <div>Cabin</div>
//                     <span>7 Kg</span>
//                   </div>
//                   <div>
//                     <div>Check-in</div>
//                     <span>15 Kg</span>
//                   </div>
//                 </div>
//               </div>
//               <div className="gap-2 flex text-sm">
//                 <div>{data.aircraft}</div>
//                 <div>Standard</div>
//               </div>
//             </div>
//             {/* ----------- user details --------- */}
//             <div className="bg-red-50 p-1">
//               <span>Traveller Details</span>
//               <div className="bg-blue-300 p-1 grid sm:grid-cols-4 gap-1  ">
//                 <label>gender</label>
//                 <input
//                   type="text"
//                   name="gender"
//                   value={formData.gender}
//                   onChange={handleInputChange}
//                 />
//                 <label htmlFor="">Name</label>

//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                 />
//                 <label htmlFor="">age</label>
//                 <input
//                   type="number"
//                   name="age"
//                   value={formData.age}
//                   onChange={handleInputChange}
//                 />
//               </div>
//             </div>
//             <div className="bg-blue-300 p-1 ">
//               <span>Contact Details</span>
//               <div className="bg-red-200 grid sm:grid-cols-3 space-y-1 p-1 ">
//                 <label htmlFor="">email</label>
//                 <input
//                   type="text"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                 />
//                 <label htmlFor="">mobile</label>
//                 <input
//                   type="number"
//                   name="mobile"
//                   value={formData.mobile}
//                   onChange={handleInputChange}
//                 />
//               </div>
//             </div>
//             <div className="flex justify-end">
//               <button onClick={handleSubmit} className="bg-blue-400 p-2">
//                 continue
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FlightBookingPage;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const FlightBookingPage = () => {
  const [flightData, setFlightData] = useState([]);
  const location = useLocation();
  const id = location.state?.id;

  const [formData, setFormData] = useState({
    airlineTicketId: "",
    flightDetails: [],
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

  useEffect(() => {
    axios
      .get(`http://localhost:4001/flight/${id}`)
      .then((response) => {
        const flight = response.data;
        setFlightData([flight]);
        setFormData((prev) => ({
          ...prev,
          airlineTicketId: id,
          flightDetails: [
            {
              departure: flight.airport.map((dep) => ({
                code: dep.code,
                name: dep.name,
                city: dep.city,
                country: dep.country,
                departureDate: dep.departureDate,
                departureTime: dep.departureTime,
              })),
              arrival: flight.destination.map((arr) => ({
                code: arr.code,
                name: arr.name,
                city: arr.city,
                country: arr.country,
                arrivalDate: arr.arrivalDate,
                arrivalTime: arr.arrivalTime,
              })),
            },
          ],
        }));
      })
      .catch((error) => console.log("Error fetching flight data:", error));
  }, [id]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:4001/flightticket/booking",
      formData
    );
    console.log(response.data);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Flight Booking Page
      </h1>

      {flightData.map((data) => (
        <div
          key={data._id}
          className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg p-4 gap-6"
        >
          {/* Fare Summary Section */}
          <div className="bg-gray-100 p-4 rounded-lg w-full md:w-1/3">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Fare Summary
            </h2>
            {data.prices.map((prices) => {
              const Tax = (prices.ecconomy / 100) * 8;
              const Fees = (prices.ecconomy / 100) * 3;
              const TotalAmount = prices.ecconomy + Tax + Fees;

              return (
                <div key={prices._id} className="space-y-3">
                  <div className="flex justify-between text-gray-600">
                    <span>Fare Type</span>
                    <span>Partially Refundable</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Base Price</span>
                    <span>${prices.ecconomy.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Taxes</span>
                    <span>${Tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Fees</span>
                    <span>${Fees.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-800 font-bold text-lg">
                    <span>Total Amount</span>
                    <span>${TotalAmount.toFixed(2)}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Flight Details and Booking Form */}
          <div className="flex-grow space-y-6">
            {/* Flight Details */}
            <div className="bg-gray-100 p-4 rounded-lg space-y-4">
              <h2 className="text-lg font-semibold text-gray-700">
                Flight Details
              </h2>
              {data.airport.map((airport) => (
                <div key={airport._id}>
                  <div className="flex justify-between items-center bg-gray-200 p-3 rounded-md">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">
                        {airport.city}
                      </h3>
                      <span className="text-sm text-gray-500">
                        {airport.name}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">
                        {data.destination[0]?.city || "Unknown"}
                      </h3>
                      <span className="text-sm text-gray-500">
                        {data.destination[0]?.name || "Unknown"}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between mt-2 text-sm text-gray-600">
                    <span>
                      Departure:{" "}
                      <span className="font-semibold">
                        {new Date(data.departureDateTime).toLocaleString()}
                      </span>
                    </span>
                    <span>
                      Arrival:{" "}
                      <span className="font-semibold">
                        {new Date(data.arrivalDateTime).toLocaleString()}
                      </span>
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Traveller Details */}
            <div className="bg-gray-100 p-4 rounded-lg space-y-4">
              <h2 className="text-lg font-semibold text-gray-700">
                Traveller Details
              </h2>
              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Gender
                  </label>
                  <input
                    type="text"
                    name="gender"
                    value={formData.userDetails[0]?.gender || ""}
                    onChange={handleInputChange}
                    className="w-full mt-1 px-3 py-2 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.userDetails[0]?.name || ""}
                    onChange={handleInputChange}
                    className="w-full mt-1 px-3 py-2 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Age
                  </label>
                  <input
                    type="number"
                    name="age"
                    value={formData.userDetails[0]?.age || ""}
                    onChange={handleInputChange}
                    className="w-full mt-1 px-3 py-2 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-gray-100 p-4 rounded-lg space-y-4">
              <h2 className="text-lg font-semibold text-gray-700">
                Contact Details
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.userDetails[0]?.email || ""}
                    onChange={handleInputChange}
                    className="w-full mt-1 px-3 py-2 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Mobile
                  </label>
                  <input
                    type="text"
                    name="mobile"
                    value={formData.userDetails[0]?.mobile || ""}
                    onChange={handleInputChange}
                    className="w-full mt-1 px-3 py-2 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                onClick={handleSubmit}
                className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlightBookingPage;
