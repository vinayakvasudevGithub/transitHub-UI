// import axios from "axios";
// import React, { useState } from "react";
// import BusDetails from "./components/BusDetails";
// import BusRoutes from "./components/BusRoutes";
// import BusSeat from "./components/BusSeat";
// import BusFares from "./components/BusFares";

// const ToAddNewBusToData = () => {
// const [BusData, SetBusData] = useState({
//   busname: "",
//   busnumber: "",
//   bustype: "",
//   AC: "",
//   stations: [
//     {
//       station: "",
//       city: "",
//       district: "",
//       state: "",
//       arrivaltime: "",
//       departureTime: "",
//     },
//   ],
//   seatdetails: [
//     {
//       totalseats: "",
//       seatformation: "",
//       seats: [],
//     },
//   ],
//   ticketprices: [
//     {
//       minimumfare: "",
//       perkilometre: "",
//     },
//   ],
// });

// const [Message, SetMessage] = useState("");

// const handleBusInfoChange = (e) => {
//   const { name, value } = e.target;
//   SetBusData({
//     ...BusData,
//     [name]: value,
//   });
// };

// const handleStationChange = (index, e) => {
//   const { name, value } = e.target;
//   const updatedStations = BusData.stations.map((stations, i) =>
//     i === index ? { ...stations, [name]: value } : stations
//   );
//   SetBusData({ ...BusData, stations: updatedStations });
// };

// const handleSeatChange = (index, e) => {
//   const { name, value } = e.target;
//   const updatedSeats = BusData.seatdetails.map((seatdetails, i) =>
//     i === index ? { ...seatdetails, [name]: value } : seatdetails
//   );
//   SetBusData({ ...BusData, seatdetails: updatedSeats });
// };

// const AddMoreStations = () => {
//   SetBusData({
//     ...BusData,
//     stations: [
//       ...BusData.stations,
//       {
//         station: "",
//         city: "",
//         district: "",
//         state: "",
//         arrivaltime: "",
//         departureTime: "",
//       },
//     ],
//   });
// };

// const handlePriceChange = (index, e) => {
//   const { name, value } = e.target;
//   const updatedPrice = BusData.ticketprices.map((ticketprices, i) =>
//     i === index ? { ...ticketprices, [name]: value } : ticketprices
//   );
//   SetBusData({ ...BusData, ticketprices: updatedPrice });
// };

// const IsBusDataFilled = () => {
//   const isArrayFilled = (array) => {
//     return array.every((item) =>
//       Object.values(item).every((field) => field !== "")
//     );
//   };

//   const { busname, busnumber, bustype, stations, seatdetails, ticketprices } =
//     BusData;

//   const isBusInfoFilled = !!(busname && busnumber && bustype); // Ensuring boolean values
//   const isStationsFilled = isArrayFilled(stations);
//   const isSeatDetailsFilled = isArrayFilled(seatdetails);
//   const isTicketpriceFilled = isArrayFilled(ticketprices);

//   return {
//     isBusInfoFilled,
//     isStationsFilled,
//     isSeatDetailsFilled,
//     isTicketpriceFilled,
//   };
// };

// const {
//   isBusInfoFilled,
//   isStationsFilled,
//   isSeatDetailsFilled,
//   isTicketpriceFilled,
// } = IsBusDataFilled();

// // console.log(isBusInfoFilled);

// const handleSubmit = async (e) => {
//   e.preventDefault();

//   if (isBusInfoFilled && isStationsFilled && isSeatDetailsFilled) {
//     try {
//       const response = await axios.post(
//         "http://localhost:4001/bus/create",
//         BusData
//       );
//       console.log(response.data);
//       SetMessage("Bus data successfully added!");
//       window.location.reload(); // Reload the page after successful submission
//     } catch (error) {
//       console.log("There was an error posting this data", error);
//       SetMessage("Failed to add bushhh data");
//     }
//   } else {
//     SetMessage("Please fill out all fields before submitting.");
//   }
// };

// const [changePage, setChangePage] = useState("firstPage");

// const handlePageChange = (e) => {
//   console.log(e);
//   e === "firstPage" &&
//     isBusInfoFilled &&
//     isTicketpriceFilled &&
//     setChangePage("SecondPage");
//   e === "SecondPage" && isStationsFilled && setChangePage("thirdPage");
// };

//   return (
//     <div className=" mt-5 flex justify-center ">
//       <form action="">
//         {/* {changePage === "firstPage" && ( */}
//         <>
//           <BusDetails
//             // IsBusDataFilled={IsBusDataFilled}
//             handlePageChange={handlePageChange}
//             BusData={BusData}
//             handleBusInfoChange={handleBusInfoChange}
//             //ticket fare
//             handlePriceChange={handlePriceChange}
//             isBusInfoFilled={isBusInfoFilled}
//             isTicketpriceFilled={isTicketpriceFilled}
//           />
//         </>
//         {/* )} */}

//         {/* {changePage === "SecondPage" && ( */}
//         <BusRoutes
//           BusData={BusData}
//           AddMoreStations={AddMoreStations}
//           handleStationChange={handleStationChange}
//           handlePageChange={handlePageChange}
//           isStationsFilled={isStationsFilled}
//         />
//         {/* )} */}
//         {/* {changePage === "thirdPage" && ( */}
//         <BusSeat
//           BusData={BusData}
//           SetBusData={SetBusData}
//           handleSeatChange={handleSeatChange}
//         />
//         {/* )} */}
//         {/* {isBusInfoFilled && isStationsFilled && isSeatDetailsFilled && ( */}
//         <div className="mt-5">
//           <button
//             type="button"
//             className={"bg-blue-600"}
//             onClick={handleSubmit}
//           >
//             submit
//           </button>
//         </div>
//         {/* )} */}
//       </form>
//       {Message && <p>{Message}</p>}
//     </div>
//   );
// };

// export default ToAddNewBusToData;

import axios from "axios";
import React, { useState } from "react";
import BusDetails from "./components/BusDetails";
import BusRoutes from "./components/BusRoutes";
import BusSeat from "./components/BusSeat";

const ToAddNewBusToData = () => {
  const [BusData, SetBusData] = useState({
    busname: "",
    busnumber: "",
    bustype: "",
    AC: "",
    stations: [
      {
        station: "",
        city: "",
        district: "",
        state: "",
        arrivaltime: "",
        departureTime: "",
      },
    ],
    seatdetails: [
      {
        totalseats: "",
        seatformation: "",
        seats: [],
      },
    ],
    ticketprices: [
      {
        minimumfare: "",
        perkilometre: "",
      },
    ],
  });

  console.log(BusData);

  const [Message, SetMessage] = useState("");

  const handleBusInfoChange = (e) => {
    const { name, value } = e.target;
    SetBusData({
      ...BusData,
      [name]: value,
    });
  };

  const handleStationChange = (index, e) => {
    const { name, value } = e.target;
    const updatedStations = BusData.stations.map((stations, i) =>
      i === index ? { ...stations, [name]: value } : stations
    );
    SetBusData({ ...BusData, stations: updatedStations });
  };

  const handleSeatChange = (index, e) => {
    const { name, value } = e.target;
    const updatedSeats = BusData.seatdetails.map((seatdetails, i) =>
      i === index ? { ...seatdetails, [name]: value } : seatdetails
    );
    SetBusData({ ...BusData, seatdetails: updatedSeats });
  };

  const AddMoreStations = () => {
    SetBusData({
      ...BusData,
      stations: [
        ...BusData.stations,
        {
          station: "",
          city: "",
          district: "",
          state: "",
          arrivaltime: "",
          departureTime: "",
        },
      ],
    });
  };

  const handlePriceChange = (index, e) => {
    const { name, value } = e.target;
    const updatedPrice = BusData.ticketprices.map((ticketprices, i) =>
      i === index ? { ...ticketprices, [name]: value } : ticketprices
    );
    SetBusData({ ...BusData, ticketprices: updatedPrice });
  };

  const IsBusDataFilled = () => {
    const isArrayFilled = (array) => {
      return array.every((item) =>
        Object.values(item).every((field) => field !== "")
      );
    };

    const { busname, busnumber, bustype, stations, seatdetails, ticketprices } =
      BusData;

    const isBusInfoFilled = !!(busname && busnumber && bustype); // Ensuring boolean values
    const isStationsFilled = isArrayFilled(stations);
    const isSeatDetailsFilled = isArrayFilled(seatdetails);
    const isTicketpriceFilled = isArrayFilled(ticketprices);

    return {
      isBusInfoFilled,
      isStationsFilled,
      isSeatDetailsFilled,
      isTicketpriceFilled,
    };
  };

  const {
    isBusInfoFilled,
    isStationsFilled,
    isSeatDetailsFilled,
    isTicketpriceFilled,
  } = IsBusDataFilled();

  // console.log(isBusInfoFilled);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isBusInfoFilled && isStationsFilled && isSeatDetailsFilled) {
      try {
        const response = await axios.post(
          "http://localhost:2001/bus/create",
          BusData
        );
        console.log(response.data);
        SetMessage("Bus data successfully added!");
        window.location.reload(); // Reload the page after successful submission
      } catch (error) {
        console.log("There was an error posting this data", error);
        SetMessage("Failed to add bushhh data");
      }
    } else {
      SetMessage("Please fill out all fields before submitting.");
    }
  };

  const [changePage, setChangePage] = useState("firstPage");

  const handlePageChange = (e) => {
    console.log(e);
    e === "firstPage" &&
      isBusInfoFilled &&
      isTicketpriceFilled &&
      setChangePage("SecondPage");
    e === "SecondPage" && isStationsFilled && setChangePage("thirdPage");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          {/* Form Header */}
          <div className="bg-blue-600 px-6 py-4">
            <h1 className="text-2xl font-bold text-white">Add New Bus</h1>
          </div>

          {/* Progress Indicators */}
          <div className="flex border-b border-gray-200">
            <div
              className={`flex-1 py-4 text-center font-medium ${
                changePage === "firstPage"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500"
              }`}
            >
              Basic Details
            </div>
            <div
              className={`flex-1 py-4 text-center font-medium ${
                changePage === "SecondPage"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500"
              }`}
            >
              Routes
            </div>
            <div
              className={`flex-1 py-4 text-center font-medium ${
                changePage === "thirdPage"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500"
              }`}
            >
              Seats
            </div>
          </div>

          {/* Form Content */}
          <form className="p-6 space-y-8">
            {/* Message Alert */}
            {Message && (
              <div
                className={`p-4 rounded-md ${
                  Message.includes("success")
                    ? "bg-green-50 text-green-800"
                    : "bg-red-50 text-red-800"
                }`}
              >
                {Message}
              </div>
            )}

            {/* Form Sections - Keep all existing components exactly as called */}
            <div className={`${changePage !== "firstPage" ? "hidden" : ""}`}>
              <BusDetails
                handlePageChange={handlePageChange}
                BusData={BusData}
                handleBusInfoChange={handleBusInfoChange}
                handlePriceChange={handlePriceChange}
                isBusInfoFilled={isBusInfoFilled}
                isTicketpriceFilled={isTicketpriceFilled}
              />
            </div>

            <div className={`${changePage !== "SecondPage" ? "hidden" : ""}`}>
              <BusRoutes
                BusData={BusData}
                AddMoreStations={AddMoreStations}
                handleStationChange={handleStationChange}
                handlePageChange={handlePageChange}
                isStationsFilled={isStationsFilled}
              />
            </div>

            <div className={`${changePage !== "thirdPage" ? "hidden" : ""}`}>
              <BusSeat
                BusData={BusData}
                SetBusData={SetBusData}
                handleSeatChange={handleSeatChange}
              />
            </div>

            {/* Submit Button */}
            {changePage === "thirdPage" && (
              <div className="flex justify-end pt-4">
                <button
                  type="button"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow-sm transition duration-150 ease-in-out disabled:opacity-50"
                  onClick={handleSubmit}
                  disabled={
                    !(
                      isBusInfoFilled &&
                      isStationsFilled &&
                      isSeatDetailsFilled
                    )
                  }
                >
                  Submit Bus Details
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ToAddNewBusToData;
