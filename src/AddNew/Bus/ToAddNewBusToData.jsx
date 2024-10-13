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
      },
    ],
  });

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

  const IsBusDataFilled = () => {
    const isArrayFilled = (array) => {
      return array.every((item) =>
        Object.values(item).every((field) => field !== "")
      );
    };

    const { busname, busnumber, bustype, stations, seatdetails } = BusData;

    const isBusInfoFilled = !!(busname && busnumber && bustype); // Ensuring boolean values
    const isStationsFilled = isArrayFilled(stations);
    const isSeatDetailsFilled = isArrayFilled(seatdetails);

    return {
      isBusInfoFilled,
      isStationsFilled,
      isSeatDetailsFilled,
    };
  };

  const { isBusInfoFilled, isStationsFilled, isSeatDetailsFilled } =
    IsBusDataFilled();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isBusInfoFilled && isStationsFilled && isSeatDetailsFilled) {
      try {
        const response = await axios.post(
          "http://localhost:4001/bus/create",
          BusData
        );
        console.log(response.data);
        SetMessage("Bus data successfully added!");
        window.location.reload(); // Reload the page after successful submission
      } catch (error) {
        console.log("There was an error posting this data", error);
        SetMessage("Failed to add bus data");
      }
    } else {
      SetMessage("Please fill out all fields before submitting.");
    }
  };

  const [changePage, setChangePage] = useState("firstPage");

  const handlePageChange = (e) => {
    console.log(e);
    e === "firstPage" && isBusInfoFilled && setChangePage("SecondPage");
    e === "SecondPage" && isStationsFilled && setChangePage("thirdPage");
  };
  // console.log(changePage);

  return (
    <div className=" mt-5 flex justify-center ">
      <form action="">
        {/* {changePage === "firstPage" && (
        <BusDetails
          IsBusDataFilled={IsBusDataFilled}
          handlePageChange={handlePageChange}
          BusData={BusData}
          handleBusInfoChange={handleBusInfoChange}
          isBusInfoFilled={isBusInfoFilled}
        />
        )} */}

        {/* {changePage === "SecondPage" && (
          <BusRoutes
            BusData={BusData}
            AddMoreStations={AddMoreStations}
            handleStationChange={handleStationChange}
            handlePageChange={handlePageChange}
            isStationsFilled={isStationsFilled}
          />
        )} */}

        {/* {changePage === "SecondPage" && ( */}
        {/* <BusRoutes
          BusData={BusData}
          AddMoreStations={AddMoreStations}
          handleStationChange={handleStationChange}
          handlePageChange={handlePageChange}
          isStationsFilled={isStationsFilled}
        /> */}
        {/* )} */}
        {/* {changePage === "thirdPage" && ( */}
        <BusSeat BusData={BusData} handleSeatChange={handleSeatChange} />
        {/* )} */}
        {isBusInfoFilled && isStationsFilled && isSeatDetailsFilled && (
          <div className="mt-5">
            <button
              type="button"
              className={"bg-blue-600"}
              onClick={handleSubmit}
            >
              submit
            </button>
          </div>
        )}
      </form>
      {Message && <p>{Message}</p>}
    </div>
  );
};

export default ToAddNewBusToData;
