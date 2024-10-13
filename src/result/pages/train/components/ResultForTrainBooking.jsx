import React from "react";

const ResultForTrainBooking = ({ from, to, TrainData }) => {
  return (
    <div className=" bg-yellow-500 w-[60rem] ">
      <p>
        Train From {from} to {to}
      </p>
      {TrainData.map((data) => (
        <div
          key={data._id}
          className=" pb-4 p-2 bg-white mt-3 shadow-[0px_2px_5px_0px_rgba(0,0,0,0.10)] 
          cursor-pointer z-10 transition-all duration-100 ease-in
          hover:scale-[1.01] hover:shadow-300 hover:duration-100
          hover:ease-out border border-neutral-200 "
        >
          <div className="grid sm:grid-cols-12  bg-blue-300 gap-1 p-1">
            <div className="bg-green-400 col-span-2 flex justify-between items-center ">
              <p className="flex text-2xl">{data.trainname}</p>
            </div>

            <div className="bg-yellow-300 flex justify-between col-span-6  p-1 gap-1">
              <div className="tabular-nums flex items-center text-3xl">
                {/* {data.departureDateTime} */}
                departuretime
              </div>

              <div className=" flex items-center">designs</div>

              <div className="flex items-center text-3xl">
                {/* {data.arrivalDateTime} */}
                arrival time
              </div>
            </div>

            {/* {data.prices.map((price) => (
          <div
            className="col-span-2 flex  justify-between bg-red-500"
            key={price._id}
          >
            {price.ecconomy}
          </div>
        ))} */}

            <div className=" flex justify-end bg-yellow-300">
              <button>book</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResultForTrainBooking;
