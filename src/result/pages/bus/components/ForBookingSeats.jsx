import React, { useState, useEffect } from "react";

const ForBookingSeats = ({ busData }) => {
  const [Seats, setSeats] = useState([]);

  useEffect(() => {
    let allSeats = [];
    busData.map((data) => {
      data.seatdetails.map((seatDetails) => {
        for (let i = 1; i <= seatDetails.totalseats; i++) {
          allSeats.push(i);
        }
      });
    });

    setSeats(allSeats);
  }, [busData]);

  return (
    <div className="bg-red-300">
      {busData.map((data) => (
        <div key={data._id}>
          <p> Bus name : {data.busname}</p>
          <p> Total Seats : {data.seats}</p>
          {Seats.map((seatDetails, index) => (
            <div key={index}>{seatDetails}</div>
          ))}
        </div>
      ))}
    </div>
  );
};

// const ForBookingSeats = ({ busData }) => {
//   const [seats, setSeats] = useState([]);

//   useEffect(() => {
//     // Collect all seats from the busData and set it in state
//     const allSeats = busData.flatMap((data) =>
//       Array.from({ length: data.seats }, (_, i) => i + 1)
//     );
//     setSeats(allSeats);
//   }, [busData]);

//   return (
//     <div className="bg-red-300">
//       {/* Render seats from the state */}
//       {seats.map((seat, index) => (
//         <p key={index}>Seat {seat}</p>
//       ))}
//     </div>
//   );
// };

export default ForBookingSeats;
