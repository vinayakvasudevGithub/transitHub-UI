// import { useContext, useEffect, useState } from "react";
// import { UserContext } from "../../context/UserContext";
// import axios from "axios";

// const BookedPage = () => {
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
//             withCredentials: true, // Important for sending cookies
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
//     return <div>Loading user data...</div>;
//   }

//   if (!user) {
//     return <div>Please log in to view this page</div>;
//   }

//   if (loading) {
//     return <div>Loading your booked tickets...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   console.log(bookedTickets);

//   return (
//     <div>
//       <h1>Welcome! {user.user?.name}</h1>
//       <h2>Your Booked Tickets</h2>

//       {bookedTickets.length === 0 ? (
//         <p>You haven't booked any tickets yet</p>
//       ) : (
//         <div className="tickets-container">
//           {bookedTickets.map((ticket) => (
//             <div key={ticket._id} className="ticket-card">
//               {ticket.busdetails.map((busdetails) => (
//                 <div key={busdetails._id}>
//                   bus seat:{busdetails.busseatnumber}
//                 </div>
//               ))}
//               <h3>Ticket ID: {ticket._id}</h3>
//               {ticket.userDetails?.map((passenger, index) => (
//                 <div key={passenger._id}>
//                   <p>
//                     Passenger {index + 1}: {passenger.name}
//                   </p>
//                 </div>
//               ))}
//               {/* Add more ticket details as needed */}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default BookedPage;

import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import axios from "axios";

const BookedPage = () => {
  const { user, loading: userLoading } = useContext(UserContext);
  const [bookedTickets, setBookedTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (userLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Access Denied
          </h2>
          <p className="text-gray-600">
            Please log in to view your booked tickets
          </p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-700">Loading your booked tickets...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 max-w-md">
          <p className="font-bold">Error</p>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Welcome, {user.user?.name}!
          </h1>
          <h2 className="mt-2 text-xl font-semibold text-gray-600">
            Your Booked Tickets
          </h2>
        </div>

        {bookedTickets.length === 0 ? (
          <div className="bg-white shadow rounded-lg p-6 text-center">
            <p className="text-gray-600 text-lg">
              You haven't booked any tickets yet
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {bookedTickets.map((ticket) => (
              <div
                key={ticket._id}
                className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-[1.01]"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        Ticket ID: {ticket._id}
                      </h3>
                      <p className="text-sm text-gray-500">
                        Booked by: {ticket.user.transithubUser}
                      </p>
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      Confirmed
                    </span>
                  </div>

                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Bus Details */}
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-3 pb-2 border-b">
                        Bus Information
                      </h4>
                      {ticket.busdetails.map((bus) => (
                        <div key={bus._id} className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Bus Name:</span>
                            <span className="font-medium">{bus.busname}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Bus Type:</span>
                            <span className="font-medium">{bus.bustype}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Seat Number:</span>
                            <span className="font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded">
                              {bus.busseatnumber}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Route:</span>
                            <span className="font-medium">
                              {bus.departurecity} → {bus.arrivalcity}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Arrival Time:</span>
                            <span className="font-medium">
                              {bus.arrivaltime}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Passenger Details */}
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-3 pb-2 border-b">
                        Passenger Information
                      </h4>
                      {ticket.userDetails?.map((passenger, index) => (
                        <div
                          key={passenger._id}
                          className="space-y-2 mb-4 last:mb-0"
                        >
                          <div className="flex justify-between">
                            <span className="text-gray-600">
                              Passenger {index + 1}:
                            </span>
                            <span className="font-medium">
                              {passenger.name}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Age:</span>
                            <span className="font-medium">{passenger.age}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Gender:</span>
                            <span className="font-medium capitalize">
                              {passenger.gender}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Email:</span>
                            <span className="font-medium">
                              {passenger.email}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Mobile:</span>
                            <span className="font-medium">
                              {passenger.mobile}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex justify-end space-x-3">
                    <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                      Print Ticket
                    </button>
                    <button className="px-4 py-2 bg-red-600 rounded-md text-sm font-medium text-white hover:bg-red-700">
                      Cancel Ticket
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookedPage;
