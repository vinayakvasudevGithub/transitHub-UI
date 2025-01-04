import React, { useState } from "react";
import ForBookingSeats from "./SelectSeat/ForBookingSeats";
import { BusBookingDetails } from "../../../../store/BookingSlice/BusBookingSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const ResultForBusBokking = ({
  from,
  to,
  distance,
  combinedTicketFare,
  totalTicketFare,
  busData,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [activeBusId, setActiveBusId] = useState(null);
  const [BookingDeatailsTrue, setBookingDeatailsTrue] = useState(false);

  const handleSelectBus = (
    busseatnumber,
    busname,
    bustype,
    arrivaltime,
    departureTime
  ) => {
    busseatnumber &&
      busname &&
      bustype &&
      arrivaltime &&
      departureTime &&
      setBookingDeatailsTrue(true);

    dispatch(
      BusBookingDetails({
        busseatnumber,
        busname,
        bustype,
        arrivaltime,
        departureTime,
      })
    );
  };

  const handleNavigateToconfirmBookingPage = () => {
    navigate("/booking/busTicket");
  };

  return (
    <div className="bg-yellow-500 col-span-7 ">
      <h1>
        Bus From {from} to {to}
      </h1>
      <h2>{distance}</h2>

      {busData.map((data) => {
        return (
          <div
            key={data._id}
            className="pb-4 p-2 bg-white mt-3 shadow-md border border-neutral-200"
          >
            <div className="grid sm:grid-cols-12 bg-blue-300 gap-1 p-1">
              <div className="bg-green-400 col-span-3">
                <p className="text-xl font-bold">{data.busname}</p>
                <p>{data.bustype}</p>
              </div>
              <div className="bg-yellow-300 flex justify-between col-span-6 p-1 gap-1">
                <div className="bg-green-300">
                  {data.stations
                    .filter(
                      (station) =>
                        station.city.toLowerCase() === from.toLowerCase()
                    )
                    .map((station) => (
                      <p key={station._id}>{station.departureTime}</p>
                    ))}
                </div>
                <div className="bg-blue-200">
                  {data.stations
                    .filter(
                      (station) =>
                        station.city.toLowerCase() === to.toLowerCase()
                    )
                    .map((station) => (
                      <p key={station._id}>{station.arrivaltime}</p>
                    ))}
                </div>
              </div>
              <>
                {data.ticketprices.map((ticketprices) => {
                  const TicketFare =
                    ticketprices.minimumfare +
                    distance * ticketprices.perkilometre;

                  return (
                    <div
                      key={ticketprices._id}
                      className="col-span-3 bg-yellow-300 flex justify-end items-center"
                    >
                      {TicketFare.toString()}
                    </div>
                  );
                })}
              </>
            </div>

            <div className="flex justify-end items-center mt-1">
              <button
                onClick={() =>
                  setActiveBusId((prevId) =>
                    prevId === data._id ? null : data._id
                  )
                }
                className="bg-blue-500 w-[5rem] h-[2rem]"
              >
                Select Seat
              </button>
            </div>

            {activeBusId === data._id && (
              <div className="mt-1 bg-red-300 p-1">
                <ForBookingSeats
                  busData={[data]}
                  // setAddSeatNumber={setAddSeatNumber}
                  handleSelectBus={(busseatnumber) =>
                    handleSelectBus(
                      busseatnumber,
                      data.busname,
                      data.bustype,
                      data.stations.find((station) => station.city === to)
                        ?.arrivaltime || "N/A",
                      data.stations.find((station) => station.city === from)
                        ?.departureTime || "N/A"
                    )
                  }
                />
                <div className="flex justify-end bg-blue-600 p-2">
                  <button
                    onClick={(e) => {
                      BookingDeatailsTrue &&
                        handleNavigateToconfirmBookingPage();
                    }}
                    className={`${
                      BookingDeatailsTrue ? "bg-blue-400" : "bg-blue-200"
                    } p-4 mr-3`}
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ResultForBusBokking;
