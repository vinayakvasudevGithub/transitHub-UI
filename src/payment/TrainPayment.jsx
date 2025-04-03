import React from "react";
import { useLocation } from "react-router-dom";
import { bookTrainTicket } from "../api/services/transport/trainApi";

const TrainPayment = () => {
  const location = useLocation();
  const bookingDetails = location?.state?.formData;
  const trainData = location?.state?.trainData;
  const departureStationDetails = location?.state?.departureStationDetails;
  const arrivalStationDetails = location?.state?.arrivalStationDetails;

  const [day, month, year] = departureStationDetails.departureDate.split("-");
  const formattedDepartureDate = new Date(
    `${year}-${month}-${day}`
  ).toLocaleDateString("en-us", { month: "short", day: "numeric" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const trainBooking = await bookTrainTicket(bookingDetails);
      console.log("train Ticket booked successfully ", trainBooking);
    } catch (error) {
      console.error("Booking failed", error);
    }
  };

  const TicketHeader = ({ trainName, trainNumber }) => (
    <div className="bg-red-700 text-white p-4 rounded-t-lg flex justify-between items-center">
      <h1 className="text-xl font-bold">{trainName}</h1>
      <h2 className="text-lg">{trainNumber}</h2>
    </div>
  );

  const PassengerDetails = ({ user, departure, arrival }) => (
    <div className="p-4 border-b border-red-500">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xs font-semibold">Name of Passenger</h2>
          <h1 className="text-xl text-red-900">{user.name}</h1>
        </div>
        <div>
          <h2 className="text-xs">Travel Class</h2>
          <h1>Economy</h1>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <h2 className="text-xs">From</h2>
          <h1>{departure.city}</h1>
        </div>
        <div>
          <h2 className="text-xs">To</h2>
          <h1>{arrival.city}</h1>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-xs">Date</h2>
          <h1>{formattedDepartureDate}</h1>
        </div>
        <div>
          <h2 className="text-xs">Departure</h2>
          <h1>{departure.departureTime}</h1>
        </div>
        <div>
          <h2 className="text-xs">Arrival</h2>
          <h1>{arrival.arrivalTime}</h1>
        </div>
      </div>
    </div>
  );

  const TicketFooter = ({ trainName }) => (
    <div className="bg-red-400 p-4 rounded-b-lg flex justify-between items-center">
      <h1 className="text-xl font-bold">{trainName}</h1>
    </div>
  );

  return (
    <div className="p-4 bg-red-200 grid sm:grid-cols-2 ">
      <button onClick={handleSubmit}>click</button>
      <div className=" p-2 bg-blue-50">
        {trainData.map((data) => (
          <div key={data._id} className="bg-green-300 rounded-lg shadow-lg">
            <TicketHeader
              trainName={data.trainName}
              trainNumber={data.trainNumber}
            />
            {bookingDetails.userDetails.map((user, index) => (
              <PassengerDetails
                key={index}
                user={user}
                departure={departureStationDetails}
                arrival={arrivalStationDetails}
              />
            ))}
            <TicketFooter trainName={data.trainName} />
          </div>
        ))}
      </div>
      <div className="bg-green-200">bg</div>
    </div>
  );
};

export default TrainPayment;
