import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const TrainBookingPage = () => {
  const searchKey = useSelector((state) => state.train.trains) || [];
  const location = useLocation();
  const trainId = location?.state?.trainId;

  const [trainData, setTrainData] = useState([]);

  useEffect(() => {
    const fetchTrainData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4001/train/${trainId}`
        );
        setTrainData([response.data]);
      } catch (error) {
        console.error("Error fetching train data:", error.message);
      }
    };
    location.state?.trainId && fetchTrainData();
  }, [location.state?.trainId]);

  const [formData, setFormData] = useState({
    trainId: trainId,
    userDetails: [
      {
        name: "",
        age: "",
        gender: "",
        email: "",
        mobile: "",
      },
    ],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      userDetails: [
        {
          ...prev.userDetails[0],
          [name]: value,
        },
      ],
    }));
  };

  const isFormDataFilled = () => {
    const isArrayFilled = (array) => {
      return array.every((item) =>
        Object.values(item).every((field) => field !== "")
      );
    };

    const { userDetails } = formData;
    const isUserDetailsFilled = isArrayFilled(userDetails);

    return {
      isUserDetailsFilled,
    };
  };

  const { isUserDetailsFilled } = isFormDataFilled();

  const navigate = useNavigate();

  const handleSubmit = ({ departureStationDetails, arrivalStationDetails }) => {
    isUserDetailsFilled &&
      navigate("/payment/trainPayment", {
        state: {
          formData,
          trainData,
          departureStationDetails,
          arrivalStationDetails,
        },
      });
  };

  return (
    <div>
      <div className="bg-blue-600">details</div>

      {trainData.map((data) => {
        const fromCity = searchKey.at(-1)?.from?.toLowerCase();
        const toCity = searchKey.at(-1)?.to?.toLowerCase();

        const departureStationDetails = data.stations?.find(
          (stations) => stations.city.toLowerCase() === fromCity
        );

        const arrivalStationDetails = data.stations?.find(
          (stations) => stations.city.toLowerCase() === toCity
        );

        return (
          <div
            key={data._id}
            className="grid grid-cols-1 md:grid-cols-7 gap-1 bg-green-500 p-1 space-y-2"
          >
            <div className="bg-blue-300 mt-2 order-1 md:order-3  sm:col-span-2 p-2">
              <div className="bg-red-200 p-1 space-x-2">
                <div className="bg-blue-200">
                  <label>{departureStationDetails.departureTime}</label>
                  <span>---</span>
                  <label>{arrivalStationDetails.departureTime}</label>
                </div>
                <div className="flex text-xs">
                  <label className="bg-green-200 ">
                    {departureStationDetails.station}
                  </label>
                  <span>---</span>
                  <label htmlFor="">{arrivalStationDetails.station}</label>
                </div>
              </div>
            </div>

            {/* Left Spacer Div */}
            <div className="bg-blue-300 order-2 sm:order-1 sm:col-span-1 "></div>

            {/* Main Content */}
            <div className="bg-red-500 order-3 sm:order-2 sm:col-span-4 p-2 space-y-1">
              <div className="bg-yellow-200 p-5">IRCTC ID :</div>
              <div className="bg-yellow-200 p-5">
                <label htmlFor="">BOARDING POINT :</label>
                <h2>
                  {departureStationDetails.city}{" "}
                  {departureStationDetails.departureTime}
                </h2>
              </div>
              <div className="bg-blue-200 p-5">
                <label htmlFor=""> PASSENGER DETAILS</label>

                <div className="bg-red-300 p-1   grid sm:grid-cols-2 ">
                  <div className="bg-green-200">
                    <label htmlFor="">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="bg-green-200">
                    <label htmlFor="">gender</label>
                    <input
                      type="text"
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="bg-blue-300 ">
                    <label htmlFor="">Age</label>
                    <input
                      className=""
                      type="text"
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="bg-yellow-100 ">
                    <label htmlFor="">Berth Preference</label>
                    <input type="text" />
                  </div>
                </div>
              </div>
              <div className="bg-yellow-200 p-5">
                <label htmlFor="">CONTACT DETAILS</label>
                <h3>Your tickets will be sent to the below details</h3>
                <div className="bg-blue-200 p-1">
                  <div>
                    <label htmlFor="">mobile</label>
                    <input
                      type="text"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="">email</label>
                    <input
                      type="text"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className={` bg-yellow-100 flex justify-end p-1`}>
                <button
                  onClick={(e) =>
                    handleSubmit({
                      departureStationDetails,
                      arrivalStationDetails,
                    })
                  }
                  className={`p-1 ${
                    isUserDetailsFilled ? "bg-blue-400" : "bg-red-400"
                  }`}
                >
                  submit
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TrainBookingPage;
