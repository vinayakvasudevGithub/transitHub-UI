import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const FlightBookingPage = () => {
  const [flightData, setFlightData] = useState([]);
  const location = useLocation();
  const id = location.state?.id;

  useEffect(() => {
    axios
      .get(`http://localhost:4001/flight/${id}`)
      .then((Response) => {
        setFlightData([Response.data]);
      })
      .catch((error) => console.log("flight", error));
  }, []);

  const [formData, setFormData] = useState({
    airlineTicketId: id,
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:4001/flightticket/booking",
      formData
    );
    console.log(response.data);
  };

  return (
    <div className="p-1">
      <p>flight booking page</p>
      {flightData.map((data) => (
        <div key={data._id} className="mt-5 bg-red-300 p-1 flex gap-7 mx-3">
          <div className="bg-green-200 hidden md:block p-1 w-[35rem] ">
            {data.prices.map((prices) => {
              // Calculate Tax and Fees
              const Tax = (prices.ecconomy / 100) * 8; // Example: 8% tax
              const Fees = (prices.ecconomy / 100) * 3; // Example: 3% fees
              const TotalAmount = prices.ecconomy + Tax + Fees;
              return (
                <div key={prices._id} className="bg-blue-300 p-4 space-y-1 ">
                  <span className="">Fare Summary</span>
                  <div className="flex justify-between">
                    <span>Fare type</span>
                    <span>Partially refundable</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Base Price</span>
                    <span>{prices.ecconomy.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Taxes</span>
                    <span>{Tax.toFixed(2)}</span>{" "}
                  </div>
                  <div className="flex justify-between">
                    <span>Fees</span>
                    <span>{Fees.toFixed(2)}</span>{" "}
                  </div>
                  <div className="flex justify-between text-xl font-semibold">
                    <span>Total Amount</span>
                    <span>{TotalAmount.toFixed(2)}</span>{" "}
                  </div>
                </div>
              );
            })}
          </div>
          <div className=" bg-green-300 w-full p-1 space-y-3">
            right bar
            <div className="bg-yellow-200 p-1 ">
              info about tickets
              {data.airport.map((airport) => (
                <div key={airport._id} className="bg-red-400 p-1">
                  <div className=" text-xl font-bold flex bg-green-400 gap-2 ">
                    <h1>{airport.city}</h1>
                    {data.destination.map((destination) => (
                      <div key={destination._id}>{destination.city}</div>
                    ))}
                  </div>
                  <div className="text-sm">
                    {new Date(data.departureDate)
                      .toDateString()
                      .split(" ")
                      .slice(0, 3)
                      .join(" ")}
                  </div>
                </div>
              ))}
              <div className="bg-blue-300 mt-2 flex ">
                <img
                  className="h-7"
                  src={`https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/${data.airlineimagecode}.png?v=19&quot`}
                  alt=""
                />
                <div className="flex items-center ml-2 ">
                  <h2>{data.airline}</h2>
                </div>
                <div className="bg-black w-[3px] ml-1 h-5 mt-[4px] "></div>
                <div className=" ml-1 flex items-center">
                  <h2>{data.flightNumber}</h2>
                </div>
              </div>
              <div className="bg-red-300 mt-2 grid sm:grid-cols-2 p-1">
                <div className="bg-blue-500 p-1 flex">
                  {data.airport.map((airport) => (
                    <div key={airport._id} className="bg-green-300 w-full ">
                      <div>{data.departureDate}</div>
                      <div className="text-2xl font-semibold">
                        {data.departureDateTime}
                      </div>
                      <div>{airport.city}</div>
                      <div className="text-sm ">{airport.name}</div>
                    </div>
                  ))}
                  {data.destination.map((destination) => (
                    <div key={destination._id} className="bg-red-200 w-full ">
                      <div>{data.arrivalDate}</div>
                      <div className="text-2xl font-semibold">
                        {data.arrivalDateTime}
                      </div>
                      <div>{destination.city}</div>
                      <div className="text-sm">{destination.name}</div>
                    </div>
                  ))}
                </div>
                <div className="bg-blue-300 flex justify-between">
                  <div>
                    <div className="">Baggagge</div>
                    <span>per person</span>
                  </div>
                  <div>
                    <div>Cabin</div>
                    <span>7 Kg</span>
                  </div>
                  <div>
                    <div>Check-in</div>
                    <span>15 Kg</span>
                  </div>
                </div>
              </div>
              <div className="gap-2 flex text-sm">
                <div>{data.aircraft}</div>
                <div>Standard</div>
              </div>
            </div>
            {/* ----------- user details --------- */}
            <div className="bg-red-50 p-1">
              <span>Traveller Details</span>
              <div className="bg-blue-300 p-1 grid sm:grid-cols-4 gap-1  ">
                <label>gender</label>
                <input
                  type="text"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                />
                <label htmlFor="">Name</label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <label htmlFor="">age</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="bg-blue-300 p-1 ">
              <span>Contact Details</span>
              <div className="bg-red-200 grid sm:grid-cols-3 space-y-1 p-1 ">
                <label htmlFor="">email</label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <label htmlFor="">mobile</label>
                <input
                  type="number"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="flex justify-end">
              <button onClick={handleSubmit} className="bg-blue-400 p-2">
                continue
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlightBookingPage;
