import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ResultForTrainBooking = ({ from, to, TrainData }) => {
  const navigate = useNavigate();

  const handleNavigateToBookingPage = (classId, trainId) => {
    navigate("/booking/trainTicket", { state: { classId, trainId } });
  };

  const [popUp, setPopUp] = useState("");
  return (
    <div className=" bg-yellow-500 w-[60rem] p-5 ">
      <p>
        Train From {from} to {to}
      </p>
      {TrainData.map((data) => (
        <div
          onClick={(e) => {
            !popUp ? setPopUp(data._id) : setPopUp(null);
          }}
          key={data._id}
          className={`pb-4 p-2 bg-white mt-3 shadow-[0px_2px_5px_0px_rgba(0,0,0,0.10)] 
          cursor-pointer z-10 transition-all duration-100 ease-in
          ${
            popUp ? "hover:scale-[1.06] " : "hover:scale-[1.01]"
          } hover:shadow-300 hover:duration-100
          hover:ease-out border border-neutral-200  `}
        >
          <div className="grid sm:grid-cols-12  bg-blue-300 gap-1 p-1">
            <div className="bg-green-400 col-span-2 flex justify-between items-center ">
              <p className="flex text-2xl">{data.trainname}</p>
            </div>
            <div className="bg-yellow-300 flex justify-between col-span-6  p-1 gap-1">
              {data.stations
                .filter((station) => station.city === from)
                .map((station) => (
                  <div
                    key={station._id}
                    className="bg-red-300 flex items-center text-3xl"
                  >
                    {station.departureTime}
                  </div>
                ))}

              <div className=" flex items-center">designs</div>

              {data.stations
                .filter((station) => station.city === to)
                .map((station) => (
                  <div
                    key={station._id}
                    className="bg-green-300 flex items-center text-3xl"
                  >
                    {station.arrivalTime}
                  </div>
                ))}
            </div>
            <div className=" flex justify-end bg-yellow-300">
              <button>book</button>
            </div>
          </div>

          <div
            className={`bg-green-300 overflow-hidden transition-all duration-300 ease-in-out ${
              popUp === data._id
                ? "mt-2 p-1 h-[7rem]  opacity-100"
                : "h-0 opacity-0"
            }  overflow-x-auto  flex `}
          >
            <div className="flex w-[20rem] gap-1">
              {data?.classes.map((classes) => (
                <div
                  onClick={(e) =>
                    handleNavigateToBookingPage(classes._id, data._id)
                  }
                  key={classes._id}
                  className="bg-red-300 items-center p-1 min-w-[10rem]" // Ensure consistent width
                >
                  <div className="flex space-x-2">
                    <h2 className="text-ms font-bold">{classes.classType}</h2>
                    <h2>{classes.basicFare}</h2>
                  </div>
                  <div>
                    <h4 className="text-sm">Available: gg</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResultForTrainBooking;
