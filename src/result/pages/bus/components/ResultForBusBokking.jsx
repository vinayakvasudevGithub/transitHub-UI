import React, { useEffect, useState } from "react";
// import ForBookingSeats from "./ForBookingSeats";
import ForBookingSeats from "./SelectSeat/ForBookingSeats";

const ResultForBusBokking = ({ from, to, busData }) => {
  const [SeatDetails, SetSeatDetails] = useState(false);

  // const [busName, setBusName] = useState();

  const detailsToBook = (e) => {
    console.log(e);
  };

  const [busName, setBusName] = useState("");

  // Set bus name whenever `data.stations` or `to` changes
  // useEffect(() => {
  //   const matchedStation = data.stations.find((station) => station.city === to);
  //   if (matchedStation) {
  //     setBusName(matchedStation.arrivaltime);
  //   }
  // }, [data.stations, to]);

  return (
    <div className=" bg-yellow-500 w-[60rem] ">
      <p>
        Bus From {from} to {to}
      </p>
      {busData.map((data) => (
        <div
          key={data._id}
          onClick={(e) => {
            !SeatDetails ? SetSeatDetails(data._id) : SetSeatDetails(false);
          }}
          className=" pb-4 p-2 bg-white mt-3 shadow-[0px_2px_5px_0px_rgba(0,0,0,0.10)] 
          cursor-pointer z-10 transition-all duration-100 ease-in
          hover:scale-[1.01] hover:shadow-300 hover:duration-100
          hover:ease-out border border-neutral-200 "
        >
          <div className="grid sm:grid-cols-12  bg-blue-300 gap-1 p-1">
            <div className="bg-green-400 col-span-3  ">
              <p className="flex text-xl font-bold">{data.busname}</p>
              <p className="">{data.bustype}</p>
            </div>

            <div className="bg-yellow-300 flex justify-between col-span-6  p-1 gap-1">
              <div className="tabular-nums flex items-center text-3xl">
                {data.stations.map((stations) => (
                  <div key={stations._id}>
                    {stations.city === from && (
                      <p onChange={(e) => detailsToBook("car")}>
                        {stations.departureTime}
                      </p>
                    )}
                  </div>
                ))}
              </div>
              <div className=" flex items-center">designs</div>
              <div className="flex items-center text-3xl">
                {data.stations.map((stations) => (
                  <div key={stations._id}>
                    {stations.city === to && <p>{stations.arrivaltime}</p>}
                  </div>
                ))}
              </div>
            </div>

            <div className=" col-span-3  bg-yellow-300 flex justify-end items-center">
              900
            </div>
          </div>
          <div className="flex justify-end items-center mt-1">
            <button key={data._id} className=" bg-blue-500 w-[5rem] h-[2rem]">
              select seat
            </button>
          </div>
          <div className="mt-1">
            {/* {SeatDetails === data._id && <ForBookingSeats busData={[data]} />} */}
            <ForBookingSeats detailsToBook={detailsToBook} busData={[data]} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResultForBusBokking;
