// import { useContext, useEffect, useState } from "react";
// import axios from "axios";
// import { UserContext } from "../../../context/UserContext";

// const BusTrip = () => {
//   const { user, loading: userLoading } = useContext(UserContext);
//   const [bookedTickets, setBookedTickets] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchBookedTickets = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(
//           "http://localhost:2001/busticket/user",
//           {
//             withCredentials: true,
//           }
//         );
//         setBookedTickets(response.data);
//       } catch (err) {
//         console.error("Failed to fetch tickets:", err);
//         setError(
//           err.response?.data?.message || "Failed to load booked tickets"
//         );
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (user) {
//       fetchBookedTickets();
//     }
//   }, [user]);

//   if (userLoading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//       </div>
//     );
//   }

//   if (!user) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="bg-white p-8 rounded-lg shadow-lg text-center">
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">
//             Access Denied
//           </h2>
//           <p className="text-gray-600">
//             Please log in to view your booked tickets
//           </p>
//         </div>
//       </div>
//     );
//   }

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
//           <p className="text-gray-700">Loading your booked tickets...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 max-w-md">
//           <p className="font-bold">Error</p>
//           <p>{error}</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     // <div className="min-h-screen bg-gray-500 py-8 px-4 sm:px-6 lg:px-8">
//     <div className=" bg-gray-500 py-8 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl mx-auto">
//         {/* <div className="text-center mb-10">
//           <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
//             Welcome, {user.user?.name}!
//           </h1>
//           <h2 className="mt-2 text-xl font-semibold text-gray-600">
//             Your Booked Tickets
//           </h2>
//         </div> */}

//         {bookedTickets.length === 0 ? (
//           <div className="bg-white shadow rounded-lg p-6 text-center">
//             <p className="text-gray-600 text-lg">
//               You haven't booked any tickets yet
//             </p>
//           </div>
//         ) : (
//           <div className="space-y-6">
//             {bookedTickets.map((ticket) => (
//               <div
//                 key={ticket._id}
//                 className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-[1.01]"
//               >
//                 <div className="p-6">
//                   <div className="flex justify-between items-start">
//                     <div>
//                       <h3 className="text-lg font-bold text-gray-900 mb-2">
//                         Ticket ID: {ticket._id}
//                       </h3>
//                       <p className="text-sm text-gray-500">
//                         Booked by: {ticket.user.transithubUser}
//                       </p>
//                     </div>
//                     <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
//                       Confirmed
//                     </span>
//                   </div>

//                   <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
//                     {/* Bus Details */}
//                     <div className="border border-gray-200 rounded-lg p-4">
//                       <h4 className="font-semibold text-gray-800 mb-3 pb-2 border-b">
//                         Bus Information
//                       </h4>
//                       {ticket.busdetails.map((bus) => (
//                         <div key={bus._id} className="space-y-2">
//                           <div className="flex justify-between">
//                             <span className="text-gray-600">Bus Name:</span>
//                             <span className="font-medium">{bus.busname}</span>
//                           </div>
//                           <div className="flex justify-between">
//                             <span className="text-gray-600">Bus Type:</span>
//                             <span className="font-medium">{bus.bustype}</span>
//                           </div>
//                           <div className="flex justify-between">
//                             <span className="text-gray-600">Seat Number:</span>
//                             <span className="font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded">
//                               {bus.busseatnumber}
//                             </span>
//                           </div>
//                           <div className="flex justify-between">
//                             <span className="text-gray-600">Route:</span>
//                             <span className="font-medium">
//                               {bus.departurecity} → {bus.arrivalcity}
//                             </span>
//                           </div>
//                           <div className="flex justify-between">
//                             <span className="text-gray-600">Arrival Time:</span>
//                             <span className="font-medium">
//                               {bus.arrivaltime}
//                             </span>
//                           </div>
//                         </div>
//                       ))}
//                     </div>

//                     {/* Passenger Details */}
//                     <div className="border border-gray-200 rounded-lg p-4">
//                       <h4 className="font-semibold text-gray-800 mb-3 pb-2 border-b">
//                         Passenger Information
//                       </h4>
//                       {ticket.userDetails?.map((passenger, index) => (
//                         <div
//                           key={passenger._id}
//                           className="space-y-2 mb-4 last:mb-0"
//                         >
//                           <div className="flex justify-between">
//                             <span className="text-gray-600">
//                               Passenger {index + 1}:
//                             </span>
//                             <span className="font-medium">
//                               {passenger.name}
//                             </span>
//                           </div>
//                           <div className="flex justify-between">
//                             <span className="text-gray-600">Age:</span>
//                             <span className="font-medium">{passenger.age}</span>
//                           </div>
//                           <div className="flex justify-between">
//                             <span className="text-gray-600">Gender:</span>
//                             <span className="font-medium capitalize">
//                               {passenger.gender}
//                             </span>
//                           </div>
//                           <div className="flex justify-between">
//                             <span className="text-gray-600">Email:</span>
//                             <span className="font-medium">
//                               {passenger.email}
//                             </span>
//                           </div>
//                           <div className="flex justify-between">
//                             <span className="text-gray-600">Mobile:</span>
//                             <span className="font-medium">
//                               {passenger.mobile}
//                             </span>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="mt-6 flex justify-end space-x-3">
//                     <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
//                       Print Ticket
//                     </button>
//                     <button className="px-4 py-2 bg-red-600 rounded-md text-sm font-medium text-white hover:bg-red-700">
//                       Cancel Ticket
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BusTrip;

// import { useContext, useEffect, useState } from "react";
// import axios from "axios";
// import { UserContext } from "../../../context/UserContext";

// const BusTrip = () => {
//   const { user, loading: userLoading } = useContext(UserContext);
//   const [bookedTickets, setBookedTickets] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [activeTab, setActiveTab] = useState("upcoming");
//   const [showPrintModal, setShowPrintModal] = useState(false);
//   const [selectedTicket, setSelectedTicket] = useState(null);

//   useEffect(() => {
//     const fetchBookedTickets = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(
//           "http://localhost:2001/busticket/user",
//           {
//             withCredentials: true,
//           }
//         );
//         setBookedTickets(response.data);
//       } catch (err) {
//         console.error("Failed to fetch tickets:", err);
//         setError(
//           err.response?.data?.message || "Failed to load booked tickets"
//         );
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (user) {
//       fetchBookedTickets();
//     }
//   }, [user]);

//   const handlePrintTicket = (ticket) => {
//     setSelectedTicket(ticket);
//     setShowPrintModal(true);
//   };

//   const handleCancelTicket = async (ticketId) => {
//     if (window.confirm("Are you sure you want to cancel this ticket?")) {
//       try {
//         // Implement actual cancellation logic here
//         alert("Ticket cancellation functionality would be implemented here");
//         // After successful cancellation, refresh ticket list
//         // fetchBookedTickets();
//       } catch (err) {
//         console.error("Failed to cancel ticket:", err);
//         alert("Failed to cancel ticket. Please try again.");
//       }
//     }
//   };

//   // Filter tickets based on active tab
//   const filteredTickets = bookedTickets.filter((ticket) => {
//     if (activeTab === "upcoming") {
//       // Logic to determine if ticket is upcoming
//       return true; // Replace with actual logic
//     } else if (activeTab === "completed") {
//       // Logic to determine if trip is completed
//       return false; // Replace with actual logic
//     } else if (activeTab === "cancelled") {
//       // Logic to determine if ticket is cancelled
//       return false; // Replace with actual logic
//     }
//     return true;
//   });

//   if (userLoading) {
//     return (
//       <div className="flex justify-center items-center h-screen bg-gray-50">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//       </div>
//     );
//   }

//   if (!user) {
//     return (
//       <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
//         <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md w-full">
//           <svg
//             className="h-16 w-16 text-red-500 mx-auto mb-4"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M12 15v2m0 0v2m0-2h2m-2 0H9m3-4V8m0 0V6m0 0h2m-2 0H9"
//             ></path>
//           </svg>
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">
//             Access Required
//           </h2>
//           <p className="text-gray-600 mb-6">
//             Please log in to view and manage your booked tickets
//           </p>
//           <div className="flex justify-center space-x-4">
//             <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
//               Login
//             </button>
//             <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
//               Sign Up
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen bg-gray-50">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
//           <p className="text-gray-700">Loading your trips...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center h-screen bg-gray-50">
//         <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 max-w-md">
//           <p className="font-bold">Error</p>
//           <p>{error}</p>
//           <button
//             className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
//             onClick={() => window.location.reload()}
//           >
//             Try Again
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Hero section */}
//       <div className="bg-blue-700 text-white py-12">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center md:text-left md:flex md:justify-between md:items-center">
//             <div>
//               <h1 className="text-3xl font-extrabold sm:text-4xl">
//                 Welcome back, {user.user?.name || "Traveler"}!
//               </h1>
//               <p className="mt-2 text-blue-200">
//                 Manage your bus trips and travel plans in one place
//               </p>
//             </div>
//             <div className="mt-4 md:mt-0">
//               <button className="px-5 py-3 bg-white text-blue-700 font-medium rounded-md hover:bg-blue-50 transition-colors shadow-md">
//                 Book New Trip
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main content */}
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Stats cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <div className="text-gray-500 text-sm font-medium uppercase">
//               Total Trips
//             </div>
//             <div className="mt-2 flex items-baseline">
//               <span className="text-3xl font-semibold text-gray-900">
//                 {bookedTickets.length}
//               </span>
//               <span className="ml-2 text-sm text-gray-500">trips booked</span>
//             </div>
//           </div>
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <div className="text-gray-500 text-sm font-medium uppercase">
//               Upcoming Trips
//             </div>
//             <div className="mt-2 flex items-baseline">
//               <span className="text-3xl font-semibold text-green-600">
//                 {filteredTickets.length}
//               </span>
//               <span className="ml-2 text-sm text-gray-500">trips planned</span>
//             </div>
//           </div>
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <div className="text-gray-500 text-sm font-medium uppercase">
//               Total Distance
//             </div>
//             <div className="mt-2 flex items-baseline">
//               <span className="text-3xl font-semibold text-blue-600">
//                 1,248
//               </span>
//               <span className="ml-2 text-sm text-gray-500">kilometers</span>
//             </div>
//           </div>
//         </div>

//         {/* Tabs */}
//         <div className="bg-white rounded-lg shadow-md mb-8">
//           <div className="border-b border-gray-200">
//             <nav className="flex -mb-px">
//               <button
//                 onClick={() => setActiveTab("upcoming")}
//                 className={`py-4 px-6 font-medium text-sm border-b-2 ${
//                   activeTab === "upcoming"
//                     ? "border-blue-500 text-blue-600"
//                     : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
//                 }`}
//               >
//                 Upcoming Trips
//               </button>
//               <button
//                 onClick={() => setActiveTab("completed")}
//                 className={`py-4 px-6 font-medium text-sm border-b-2 ${
//                   activeTab === "completed"
//                     ? "border-blue-500 text-blue-600"
//                     : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
//                 }`}
//               >
//                 Completed Trips
//               </button>
//               <button
//                 onClick={() => setActiveTab("cancelled")}
//                 className={`py-4 px-6 font-medium text-sm border-b-2 ${
//                   activeTab === "cancelled"
//                     ? "border-blue-500 text-blue-600"
//                     : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
//                 }`}
//               >
//                 Cancelled Trips
//               </button>
//             </nav>
//           </div>
//         </div>

//         {/* Ticket list */}
//         {filteredTickets.length === 0 ? (
//           <div className="bg-white shadow rounded-lg p-12 text-center">
//             <svg
//               className="h-16 w-16 text-gray-400 mx-auto mb-4"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
//               ></path>
//             </svg>
//             <p className="text-gray-600 text-lg mb-4">
//               {activeTab === "upcoming"
//                 ? "You don't have any upcoming trips"
//                 : activeTab === "completed"
//                 ? "You don't have any completed trips"
//                 : "You don't have any cancelled trips"}
//             </p>
//             {activeTab === "upcoming" && (
//               <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
//                 Book Your First Trip
//               </button>
//             )}
//           </div>
//         ) : (
//           <div className="space-y-6">
//             {filteredTickets.map((ticket) => (
//               <div
//                 key={ticket._id}
//                 className="bg-white shadow-lg rounded-lg overflow-hidden transition-all hover:shadow-xl"
//               >
//                 <div className="p-6">
//                   {/* Ticket header */}
//                   <div className="flex flex-col md:flex-row md:justify-between md:items-center">
//                     <div className="flex items-center mb-4 md:mb-0">
//                       <div className="bg-blue-100 rounded-full p-3 mr-4">
//                         <svg
//                           className="h-6 w-6 text-blue-600"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
//                           ></path>
//                         </svg>
//                       </div>
//                       <div>
//                         <h3 className="text-lg font-bold text-gray-900">
//                           {ticket.busdetails[0]?.departurecity || "From"} to{" "}
//                           {ticket.busdetails[0]?.arrivalcity || "Destination"}
//                         </h3>
//                         <p className="text-sm text-gray-500">
//                           Ticket #{ticket._id.substring(0, 8)}
//                         </p>
//                       </div>
//                     </div>
//                     <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
//                       Confirmed
//                     </span>
//                   </div>

//                   {/* Trip details */}
//                   <div className="mt-6 border-t border-gray-200 pt-6">
//                     <div className="flex flex-col md:flex-row md:items-center">
//                       <div className="flex-1">
//                         <div className="flex items-center">
//                           <div className="font-medium text-lg text-gray-900">
//                             {ticket.busdetails[0]?.departurecity ||
//                               "Departure City"}
//                           </div>
//                           <div className="mx-3 flex-1 border-t border-gray-300"></div>
//                           <div className="bg-blue-500 text-white rounded-full p-1">
//                             <svg
//                               className="h-4 w-4"
//                               fill="none"
//                               stroke="currentColor"
//                               viewBox="0 0 24 24"
//                               xmlns="http://www.w3.org/2000/svg"
//                             >
//                               <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth="2"
//                                 d="M5 12h14"
//                               ></path>
//                             </svg>
//                           </div>
//                           <div className="mx-3 flex-1 border-t border-gray-300"></div>
//                           <div className="font-medium text-lg text-gray-900">
//                             {ticket.busdetails[0]?.arrivalcity ||
//                               "Arrival City"}
//                           </div>
//                         </div>
//                         <div className="flex justify-between mt-2 text-sm text-gray-500">
//                           <div>
//                             Departs:{" "}
//                             {ticket.busdetails[0]?.departuretime || "10:00 AM"}
//                           </div>
//                           <div>
//                             Arrives:{" "}
//                             {ticket.busdetails[0]?.arrivaltime || "2:00 PM"}
//                           </div>
//                         </div>
//                       </div>
//                       <div className="mt-4 md:mt-0 md:ml-6 flex flex-col md:items-end">
//                         <div className="text-sm font-medium text-gray-500">
//                           Bus Details
//                         </div>
//                         <div className="text-lg font-semibold text-gray-900">
//                           {ticket.busdetails[0]?.busname || "Express Bus"}
//                         </div>
//                         <div className="text-sm text-gray-600">
//                           {ticket.busdetails[0]?.bustype || "AC Sleeper"}
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Passenger and seat info */}
//                   <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div className="bg-gray-50 rounded-lg p-4">
//                       <h4 className="font-medium text-gray-800 mb-3">
//                         <svg
//                           className="h-5 w-5 inline-block mr-2 text-gray-500"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//                           ></path>
//                         </svg>
//                         Passenger
//                       </h4>
//                       {ticket.userDetails?.map((passenger, index) => (
//                         <div key={index} className="mb-2 last:mb-0">
//                           <div className="font-medium">{passenger.name}</div>
//                           <div className="text-sm text-gray-600">
//                             {passenger.age} yrs • {passenger.gender} •{" "}
//                             {passenger.mobile}
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                     <div className="bg-gray-50 rounded-lg p-4">
//                       <h4 className="font-medium text-gray-800 mb-3">
//                         <svg
//                           className="h-5 w-5 inline-block mr-2 text-gray-500"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
//                           ></path>
//                         </svg>
//                         Booking Details
//                       </h4>
//                       <div className="flex justify-between mb-2">
//                         <span className="text-gray-600">Seat Number:</span>
//                         <span className="font-medium px-2 py-1 bg-blue-100 text-blue-800 rounded">
//                           {ticket.busdetails[0]?.busseatnumber || "A1"}
//                         </span>
//                       </div>
//                       <div className="flex justify-between mb-2">
//                         <span className="text-gray-600">Booking Date:</span>
//                         <span className="font-medium">
//                           {new Date().toLocaleDateString()}
//                         </span>
//                       </div>
//                       <div className="flex justify-between">
//                         <span className="text-gray-600">Payment:</span>
//                         <span className="font-medium text-green-600">Paid</span>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Action buttons */}
//                   <div className="mt-6 flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-3">
//                     <button
//                       className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
//                       onClick={() => handlePrintTicket(ticket)}
//                     >
//                       <svg
//                         className="h-4 w-4 mr-2"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
//                         ></path>
//                       </svg>
//                       Print Ticket
//                     </button>
//                     <button
//                       className="flex items-center justify-center px-4 py-2 bg-red-600 rounded-md text-sm font-medium text-white hover:bg-red-700 transition-colors"
//                       onClick={() => handleCancelTicket(ticket._id)}
//                     >
//                       <svg
//                         className="h-4 w-4 mr-2"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M6 18L18 6M6 6l12 12"
//                         ></path>
//                       </svg>
//                       Cancel Ticket
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Print modal */}
//       {showPrintModal && selectedTicket && (
//         <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center p-4">
//           <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full">
//             <div className="p-6">
//               <div className="flex justify-between items-center mb-4">
//                 <h3 className="text-lg font-bold">Print Ticket</h3>
//                 <button
//                   className="text-gray-500 hover:text-gray-700"
//                   onClick={() => setShowPrintModal(false)}
//                 >
//                   <svg
//                     className="h-6 w-6"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M6 18L18 6M6 6l12 12"
//                     ></path>
//                   </svg>
//                 </button>
//               </div>
//               <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
//                 <div className="text-center mb-4">
//                   <h2 className="font-bold text-xl">TransitHub Bus Ticket</h2>
//                   <p className="text-sm text-gray-500">
//                     E-Ticket / Booking Confirmation
//                   </p>
//                 </div>
//                 <div className="flex flex-col md:flex-row md:justify-between mb-4 pb-4 border-b border-dashed">
//                   <div>
//                     <div className="text-xs text-gray-500">From</div>
//                     <div className="font-bold">
//                       {selectedTicket.busdetails[0]?.departurecity ||
//                         "Departure City"}
//                     </div>
//                   </div>
//                   <div className="flex items-center my-2 md:my-0">
//                     <div className="flex-1 h-0.5 bg-gray-300"></div>
//                     <svg
//                       className="h-6 w-6 text-gray-500 mx-2"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M17 8l4 4m0 0l-4 4m4-4H3"
//                       ></path>
//                     </svg>
//                     <div className="flex-1 h-0.5 bg-gray-300"></div>
//                   </div>
//                   <div>
//                     <div className="text-xs text-gray-500">To</div>
//                     <div className="font-bold">
//                       {selectedTicket.busdetails[0]?.arrivalcity ||
//                         "Arrival City"}
//                     </div>
//                   </div>
//                 </div>
//                 <div className="grid grid-cols-2 gap-4 mb-4">
//                   <div>
//                     <div className="text-xs text-gray-500">Bus Name</div>
//                     <div className="font-medium">
//                       {selectedTicket.busdetails[0]?.busname || "Express Bus"}
//                     </div>
//                   </div>
//                   <div>
//                     <div className="text-xs text-gray-500">Bus Type</div>
//                     <div className="font-medium">
//                       {selectedTicket.busdetails[0]?.bustype || "AC Sleeper"}
//                     </div>
//                   </div>
//                   <div>
//                     <div className="text-xs text-gray-500">Date</div>
//                     <div className="font-medium">April 20, 2025</div>
//                   </div>
//                   <div>
//                     <div className="text-xs text-gray-500">Seat Number</div>
//                     <div className="font-medium">
//                       {selectedTicket.busdetails[0]?.busseatnumber || "A1"}
//                     </div>
//                   </div>
//                 </div>
//                 <div className="mb-4 pb-4 border-b border-dashed">
//                   <div className="text-xs text-gray-500 mb-1">
//                     Passenger Details
//                   </div>
//                   {selectedTicket.userDetails?.map((passenger, index) => (
//                     <div key={index} className="text-sm">
//                       <span className="font-medium">{passenger.name}</span> (
//                       {passenger.age} yrs, {passenger.gender})
//                     </div>
//                   ))}
//                 </div>
//                 <div className="text-center text-sm">
//                   <p>Ticket ID: {selectedTicket._id}</p>
//                   <p className="text-xs text-gray-500 mt-2">
//                     Please arrive 30 minutes before departure time.
//                   </p>
//                 </div>
//               </div>
//               <div className="mt-6 flex justify-end space-x-3">
//                 <button
//                   className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
//                   onClick={() => setShowPrintModal(false)}
//                 >
//                   Close
//                 </button>
//                 <button
//                   className="px-4 py-2 bg-blue-600 rounded-md text-sm font-medium text-white hover:bg-blue-700"
//                   onClick={() => {
//                     alert("Print functionality would be implemented here");
//                     setShowPrintModal(false);
//                   }}
//                 >
//                   Print
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BusTrip;

import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../../../context/UserContext";

const BusTrip = () => {
  const { user, loading: userLoading } = useContext(UserContext);
  const [bookedTickets, setBookedTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("upcoming");
  const [showPrintModal, setShowPrintModal] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [showDetailsForTicket, setShowDetailsForTicket] = useState(null);

  useEffect(() => {
    const fetchBookedTickets = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "http://localhost:2001/busticket/user",
          {
            withCredentials: true,
          }
        );
        setBookedTickets(response.data);
      } catch (err) {
        console.error("Failed to fetch tickets:", err);
        setError(
          err.response?.data?.message || "Failed to load booked tickets"
        );
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchBookedTickets();
    }
  }, [user]);

  const handlePrintTicket = (ticket) => {
    setSelectedTicket(ticket);
    setShowPrintModal(true);
  };

  const handleCancelTicket = async (ticketId) => {
    if (window.confirm("Are you sure you want to cancel this ticket?")) {
      try {
        // Implement actual cancellation logic here
        alert("Ticket cancellation functionality would be implemented here");
        // After successful cancellation, refresh ticket list
        // fetchBookedTickets();
      } catch (err) {
        console.error("Failed to cancel ticket:", err);
        alert("Failed to cancel ticket. Please try again.");
      }
    }
  };

  const toggleDetails = (ticketId) => {
    if (showDetailsForTicket === ticketId) {
      setShowDetailsForTicket(null);
    } else {
      setShowDetailsForTicket(ticketId);
    }
  };

  // Filter tickets based on active tab
  const filteredTickets = bookedTickets.filter((ticket) => {
    if (activeTab === "upcoming") {
      // Logic to determine if ticket is upcoming
      return true; // Replace with actual logic
    } else if (activeTab === "completed") {
      // Logic to determine if trip is completed
      return false; // Replace with actual logic
    } else if (activeTab === "cancelled") {
      // Logic to determine if ticket is cancelled
      return false; // Replace with actual logic
    }
    return true;
  });

  if (userLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
          <p className="mt-4 text-indigo-600 font-medium">
            Loading your account...
          </p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 flex flex-col justify-center items-center p-4">
        <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 md:p-8">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="h-8 w-8 text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 15v2m0 0v2m0-2h2m-2 0H9m3-4V8m0 0V6m0 0h2m-2 0H9"
                ></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              Sign In Required
            </h2>
            <p className="text-gray-600 mt-2">
              Please sign in to view and manage your travel itinerary
            </p>
          </div>
          <div className="space-y-4">
            <button className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center justify-center">
              <svg
                className="h-5 w-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                ></path>
              </svg>
              Sign In
            </button>
            <button className="w-full bg-white text-indigo-600 border border-indigo-200 py-3 px-4 rounded-lg font-medium hover:bg-indigo-50 transition-colors flex items-center justify-center">
              <svg
                className="h-5 w-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                ></path>
              </svg>
              Create Account
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-700 font-medium">
            Loading your travel plans...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="bg-white rounded-xl shadow-lg p-6 max-w-md">
          <div className="flex items-center mb-4">
            <div className="bg-red-100 p-2 rounded-full mr-4">
              <svg
                className="h-6 w-6 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-800">
              Something went wrong
            </h3>
          </div>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            // className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            className="w-full py-2 bg-teal-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            onClick={() => window.location.reload()}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero section */}
      {/* <div className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white"> */}
      <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-12 md:py-20 flex flex-col md:flex-row md:items-center md:justify-between">
            {/* Left side */}
            <div className="md:w-2/3">
              <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                Welcome back, {user.user?.name || "Traveler"}
              </h1>
              <p className="mt-3 text-indigo-100 text-lg max-w-xl">
                Your journey companion for seamless travel experiences. Manage
                tickets, check schedules, and plan your next adventure.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                {/* <button className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg shadow-md hover:bg-indigo-50 transition-colors focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"> */}
                <button className="px-6 py-3 bg-white text-teal-600 font-medium rounded-lg shadow-md hover:bg-teal-50 transition-colors focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-teal-600">
                  Book New Trip
                </button>
                <button className="px-6 py-3 bg-teal-700 text-white font-medium rounded-lg shadow-md hover:bg-teal-800 transition-colors focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-teal-600">
                  Explore Destinations
                </button>
              </div>
            </div>
            {/* Right side with decorative element */}
            <div className="hidden md:block w-1/3">
              <div className="relative">
                <div className="absolute inset-0 bg-white bg-opacity-10 rounded-2xl transform -rotate-6"></div>
                <div className="absolute inset-0 bg-white bg-opacity-10 rounded-2xl transform rotate-3"></div>
                <div className="relative bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm p-6 rounded-2xl shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="h-3 w-3 rounded-full bg-teal-700 mr-2"></div>
                      <span className="text-sm font-medium">TransitHub</span>
                    </div>
                    <div className="text-sm font-medium">Premium</div>
                  </div>
                  <div className="mb-4">
                    <div className="text-sm mb-1">Next Trip</div>
                    <div className="font-bold">Mumbai → Delhi</div>
                    <div className="text-xs mt-1">
                      April 20, 2025 • 10:30 AM
                    </div>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-3">
                    <div className="text-xs mb-2">Seat Details</div>
                    <div className="flex justify-between items-center">
                      <span className="font-bold">A12</span>
                      <span className="text-xs">Window Seat</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 transition-all hover:shadow-md">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-indigo-100 rounded-lg mr-4">
                <svg
                  className="h-6 w-6 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="text-gray-500 text-sm font-medium">
                  Total Trips
                </h3>
                <p className="text-2xl font-bold text-gray-900">
                  {bookedTickets.length}
                </p>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              Lifetime journeys with TransitHub
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 transition-all hover:shadow-md">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-green-100 rounded-lg mr-4">
                <svg
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="text-gray-500 text-sm font-medium">Upcoming</h3>
                <p className="text-2xl font-bold text-gray-900">
                  {filteredTickets.length}
                </p>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              Trips scheduled in your calendar
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 transition-all hover:shadow-md">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-100 rounded-lg mr-4">
                <svg
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="text-gray-500 text-sm font-medium">On Time</h3>
                <p className="text-2xl font-bold text-gray-900">100%</p>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              Perfect on-time arrival record
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 transition-all hover:shadow-md">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-yellow-100 rounded-lg mr-4">
                <svg
                  className="h-6 w-6 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="text-gray-500 text-sm font-medium">Savings</h3>
                <p className="text-2xl font-bold text-gray-900">₹2,450</p>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              Total saved with loyalty program
            </div>
          </div>
        </div>

        {/* Quick actions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-8">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Quick Actions
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <button className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-3">
                  <svg
                    className="h-6 w-6 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v16m8-8H4"
                    ></path>
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">
                  New Booking
                </span>
              </button>
              <button className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                  <svg
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                    ></path>
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">
                  Check Status
                </span>
              </button>
              <button className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                  <svg
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">
                  Track Bus
                </span>
              </button>
              <button className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-3">
                  <svg
                    className="h-6 w-6 text-yellow-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    ></path>
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">
                  Payment Methods
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Travel plans section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Your Travel Plans
            </h2>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">View:</span>
              <div className="inline-flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setActiveTab("upcoming")}
                  className={`px-4 py-2 text-sm font-medium rounded-md ${
                    activeTab === "upcoming"
                      ? "bg-white text-indigo-600 shadow-sm"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Upcoming
                </button>
                <button
                  onClick={() => setActiveTab("completed")}
                  className={`px-4 py-2 text-sm font-medium rounded-md ${
                    activeTab === "completed"
                      ? "bg-white text-indigo-600 shadow-sm"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Completed
                </button>
                <button
                  onClick={() => setActiveTab("cancelled")}
                  className={`px-4 py-2 text-sm font-medium rounded-md ${
                    activeTab === "cancelled"
                      ? "bg-white text-indigo-600 shadow-sm"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Cancelled
                </button>
              </div>
            </div>
          </div>

          {/* Ticket list */}
          {filteredTickets.length === 0 ? (
            <div className="bg-white rounded-xl shadow-sm p-12 border border-gray-100 text-center">
              <img
                src="/api/placeholder/120/120"
                alt="No tickets"
                className="mx-auto mb-6"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                No {activeTab} trips found
              </h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                {activeTab === "upcoming"
                  ? "You don't have any upcoming trips scheduled. Book a new trip to get started!"
                  : activeTab === "completed"
                  ? "You haven't completed any trips yet. Your journey history will appear here."
                  : "You don't have any cancelled trips. That's great!"}
              </p>
              {activeTab === "upcoming" && (
                <button className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors">
                  Book Your First Trip
                </button>
              )}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredTickets.map((ticket) => (
                <div
                  key={ticket._id}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all hover:shadow-md"
                >
                  {/* Ticket header */}
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex items-center mb-4 lg:mb-0">
                        <div className="bg-indigo-600 text-white p-3 rounded-xl mr-4">
                          <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                        <div>
                          <div className="flex items-center">
                            <h3 className="text-lg font-bold text-gray-900">
                              {ticket.busdetails[0]?.departurecity ||
                                "Departure City"}
                            </h3>
                            <svg
                              className="h-4 w-4 mx-2 text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5l7 7-7 7"
                              ></path>
                            </svg>
                            <h3 className="text-lg font-bold text-gray-900">
                              {ticket.busdetails[0]?.arrivalcity ||
                                "Arrival City"}
                            </h3>
                          </div>
                          <p className="text-sm text-gray-500">
                            {ticket.busdetails[0]?.busname} •{" "}
                            {ticket.busdetails[0]?.bustype}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="hidden md:block">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                            Confirmed
                          </span>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-500">Departure</div>
                          <div className="text-base font-semibold text-gray-900">
                            April 20, 10:30 AM
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Ticket preview */}
                  <div className="p-6 flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex items-center mb-4 md:mb-0">
                      <div className="h-12 w-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                        <span className="font-bold text-gray-700">
                          {ticket.busdetails[0]?.busseatnumber || "A1"}
                        </span>
                      </div>
                      <div>
                        <span className="block text-sm text-gray-500">
                          Primary Passenger
                        </span>
                        <span className="font-medium">
                          {ticket.userDetails?.[0]?.name || "Passenger Name"}
                        </span>
                      </div>
                    </div>
                    <div className="flex space-x-3">
                      <button
                        onClick={() => toggleDetails(ticket._id)}
                        className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors flex items-center"
                      >
                        {showDetailsForTicket === ticket._id ? (
                          <>
                            <svg
                              className="h-4 w-4 mr-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 15l7-7 7 7"
                              ></path>
                            </svg>
                            Hide Details
                          </>
                        ) : (
                          <>
                            <svg
                              className="h-4 w-4 mr-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                              ></path>
                            </svg>
                            View Details
                          </>
                        )}
                      </button>
                      <button
                        onClick={() => handlePrintTicket(ticket)}
                        className="px-4 py-2 bg-indigo-100 rounded-lg text-sm font-medium text-indigo-700 hover:bg-indigo-200 transition-colors flex items-center"
                      >
                        <svg
                          className="h-4 w-4 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {/* <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 */}
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                          ></path>
                        </svg>
                        Print Ticket
                      </button>
                      {activeTab === "upcoming" && (
                        <button
                          onClick={() => handleCancelTicket(ticket._id)}
                          className="px-4 py-2 bg-red-50 rounded-lg text-sm font-medium text-red-600 hover:bg-red-100 transition-colors flex items-center"
                        >
                          <svg
                            className="h-4 w-4 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            ></path>
                          </svg>
                          Cancel
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Expanded details */}
                  {showDetailsForTicket === ticket._id && (
                    <div className="border-t border-gray-100 p-6 bg-gray-50">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <h4 className="text-sm font-medium text-gray-500 mb-3">
                            TRIP DETAILS
                          </h4>
                          <div className="space-y-3">
                            <div>
                              <span className="block text-xs text-gray-500">
                                Departure
                              </span>
                              <span className="font-medium">
                                {ticket.busdetails[0]?.departuredate || "N/A"} •{" "}
                                {ticket.busdetails[0]?.departuretime || "N/A"}
                              </span>
                            </div>
                            <div>
                              <span className="block text-xs text-gray-500">
                                Arrival
                              </span>
                              <span className="font-medium">
                                {ticket.busdetails[0]?.arrivaldate || "N/A"} •{" "}
                                {ticket.busdetails[0]?.arrivaltime || "N/A"}
                              </span>
                            </div>
                            <div>
                              <span className="block text-xs text-gray-500">
                                Duration
                              </span>
                              <span className="font-medium">
                                {ticket.busdetails[0]?.duration || "N/A"}
                              </span>
                            </div>
                            <div>
                              <span className="block text-xs text-gray-500">
                                Distance
                              </span>
                              <span className="font-medium">
                                {ticket.busdetails[0]?.distance || "N/A"} km
                              </span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-500 mb-3">
                            PASSENGER DETAILS
                          </h4>
                          <div className="space-y-3">
                            <div>
                              <span className="block text-xs text-gray-500">
                                Name
                              </span>
                              <span className="font-medium">
                                {ticket.userDetails?.[0]?.name || "N/A"}
                              </span>
                            </div>
                            <div>
                              <span className="block text-xs text-gray-500">
                                Age
                              </span>
                              <span className="font-medium">
                                {ticket.userDetails?.[0]?.age || "N/A"}
                              </span>
                            </div>
                            <div>
                              <span className="block text-xs text-gray-500">
                                Gender
                              </span>
                              <span className="font-medium">
                                {ticket.userDetails?.[0]?.gender || "N/A"}
                              </span>
                            </div>
                            <div>
                              <span className="block text-xs text-gray-500">
                                Seat
                              </span>
                              <span className="font-medium">
                                {ticket.busdetails[0]?.busseatnumber || "N/A"}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-500 mb-3">
                            FARE DETAILS
                          </h4>
                          <div className="space-y-3">
                            <div className="flex justify-between">
                              <span className="text-xs text-gray-500">
                                Base Fare
                              </span>
                              <span className="font-medium">
                                ₹{ticket.busdetails[0]?.price || "0"}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-xs text-gray-500">
                                Taxes & Fees
                              </span>
                              <span className="font-medium">₹50</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-xs text-gray-500">
                                Discount
                              </span>
                              <span className="font-medium text-green-600">
                                -₹0
                              </span>
                            </div>
                            <div className="pt-3 border-t border-gray-200 flex justify-between">
                              <span className="text-sm font-medium text-gray-700">
                                Total
                              </span>
                              <span className="text-lg font-bold">
                                ₹
                                {ticket.busdetails[0]?.price
                                  ? ticket.busdetails[0].price + 50
                                  : "0"}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Print Ticket Modal */}
      {showPrintModal && selectedTicket && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-800">Your Ticket</h3>
                <button
                  onClick={() => setShowPrintModal(false)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>

              {/* Ticket content */}
              <div className="border-2 border-gray-200 rounded-lg p-6 mb-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-indigo-600">
                      TransitHub
                    </h2>
                    <p className="text-gray-500">
                      Booking ID: {selectedTicket._id}
                    </p>
                  </div>
                  <div className="bg-indigo-600 text-white px-3 py-1 rounded-lg">
                    <span className="font-medium">CONFIRMED</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-3">
                      FROM
                    </h4>
                    <p className="text-xl font-bold">
                      {selectedTicket.busdetails[0]?.departurecity ||
                        "Departure City"}
                    </p>
                    <p className="text-gray-500">
                      {selectedTicket.busdetails[0]?.departuredate || "N/A"} •{" "}
                      {selectedTicket.busdetails[0]?.departuretime || "N/A"}
                    </p>
                  </div>

                  <div className="flex justify-center items-center">
                    <div className="relative">
                      <div className="h-1 w-24 bg-gray-300"></div>
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <svg
                          className="h-6 w-6 text-indigo-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-3">
                      TO
                    </h4>
                    <p className="text-xl font-bold">
                      {selectedTicket.busdetails[0]?.arrivalcity ||
                        "Arrival City"}
                    </p>
                    <p className="text-gray-500">
                      {selectedTicket.busdetails[0]?.arrivaldate || "N/A"} •{" "}
                      {selectedTicket.busdetails[0]?.arrivaltime || "N/A"}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-3">
                      BUS DETAILS
                    </h4>
                    <p className="font-medium">
                      {selectedTicket.busdetails[0]?.busname || "N/A"} (
                      {selectedTicket.busdetails[0]?.bustype || "N/A"})
                    </p>
                    <p className="text-gray-500">
                      Duration:{" "}
                      {selectedTicket.busdetails[0]?.duration || "N/A"}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-3">
                      PASSENGER
                    </h4>
                    <p className="font-medium">
                      {selectedTicket.userDetails?.[0]?.name || "N/A"} • Seat{" "}
                      {selectedTicket.busdetails[0]?.busseatnumber || "N/A"}
                    </p>
                    <p className="text-gray-500">
                      {selectedTicket.userDetails?.[0]?.age || "N/A"} yrs •{" "}
                      {selectedTicket.userDetails?.[0]?.gender || "N/A"}
                    </p>
                  </div>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-1">
                        FARE
                      </h4>
                      <p className="text-xl font-bold">
                        ₹
                        {selectedTicket.busdetails[0]?.price
                          ? selectedTicket.busdetails[0].price + 50
                          : "0"}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">
                        Booking Date:{" "}
                        {new Date(
                          selectedTicket.createdAt
                        ).toLocaleDateString()}
                      </p>
                      <p className="text-sm text-gray-500">Status: Confirmed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-4">
                <button
                  onClick={() => setShowPrintModal(false)}
                  className="px-6 py-2 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50"
                >
                  Close
                </button>
                <button
                  onClick={() => window.print()}
                  className="px-6 py-2 bg-indigo-600 rounded-lg font-medium text-white hover:bg-indigo-700"
                >
                  Print Ticket
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BusTrip;
