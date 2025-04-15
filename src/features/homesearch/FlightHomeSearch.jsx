import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { tripInfo } from "../../store/slices/userTransport/flightUserSlice";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getAllFlights } from "../../api/services/transport/flightApi";
import {
  FiSearch,
  FiCalendar,
  FiMapPin,
  FiChevronDown,
  FiArrowRight,
} from "react-icons/fi";

const FlightHomeSearch = () => {
  const [departureCity, setDepartureCity] = useState("Mumbai");
  const [destinationCity, setDestinationCity] = useState("Chennai");
  const [travelDate, setTravelDate] = useState(new Date());
  const [flightClass, setFlightClass] = useState("Economy");
  const [inpSearch, setInpSearch] = useState([]);
  const [activeInput, setActiveInput] = useState(null);
  const [departureAirport, setDepartureAirport] = useState(
    "Kannur International Airport"
  );
  const [arrivalAirport, setArrivalAirport] = useState(
    "Kochi International Airport"
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), delay);
    };
  };

  const handleFromChange = debounce((value) => setDepartureCity(value), 100);
  const handleToChange = debounce((value) => setDestinationCity(value), 100);

  useEffect(() => {
    const fetchAllFlights = async () => {
      try {
        const data = await getAllFlights();
        setInpSearch(data);
      } catch (error) {
        console.error("Error fetching flights");
      }
    };
    fetchAllFlights();
  }, []);

  const filteredAirports = [
    ...new Map(
      inpSearch
        .flatMap((flight) =>
          flight.airport.filter((airport) =>
            airport.city.toLowerCase().includes(departureCity.toLowerCase())
          )
        )
        .map((airport) => [airport.city, airport])
    ).values(),
  ];

  const filteredDestinations = [
    ...new Map(
      inpSearch
        .flatMap((flight) =>
          flight.destination.filter((destination) =>
            destination.city
              .toLowerCase()
              .includes(destinationCity.toLowerCase())
          )
        )
        .map((destination) => [destination.city, destination])
    ).values(),
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      tripInfo({
        departureCity,
        destinationCity,
        travelDate: travelDate.toISOString().split("T")[0],
        flightClass,
      })
    );
    navigate("/result/FlightResult");
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Find Your Perfect Flight
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* Departure City */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              From
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiMapPin className="text-gray-400" />
              </div>
              <input
                type="text"
                value={departureCity}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onChange={(e) => handleFromChange(e.target.value)}
                onClick={() => setActiveInput("departure")}
                placeholder="City or airport"
              />
            </div>
            <div className="text-xs text-gray-500 mt-1 truncate flex items-center">
              <FiMapPin className="mr-1 text-blue-500" size={12} />
              {departureAirport}
            </div>
            {activeInput === "departure" && filteredAirports.length > 0 && (
              <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-lg max-h-60 overflow-auto border border-gray-200">
                {filteredAirports.map((airport, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setDepartureCity(airport.city);
                      setDepartureAirport(airport.name);
                      setActiveInput(null);
                    }}
                    className="px-4 py-3 hover:bg-blue-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{airport.city}</span>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {airport.code}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500">{airport.name}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Swap Button */}
          <div className="flex items-end justify-center">
            <button
              type="button"
              onClick={() => {
                const tempCity = departureCity;
                const tempAirport = departureAirport;
                setDepartureCity(destinationCity);
                setDepartureAirport(arrivalAirport);
                setDestinationCity(tempCity);
                setArrivalAirport(tempAirport);
              }}
              className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full text-gray-600 transition-colors duration-200"
              aria-label="Swap departure and destination"
            >
              <FiArrowRight className="transform rotate-90" />
            </button>
          </div>

          {/* Arrival City */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              To
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiMapPin className="text-gray-400" />
              </div>
              <input
                type="text"
                value={destinationCity}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onChange={(e) => handleToChange(e.target.value)}
                onClick={() => setActiveInput("destination")}
                placeholder="City or airport"
              />
            </div>
            <div className="text-xs text-gray-500 mt-1 truncate flex items-center">
              <FiMapPin className="mr-1 text-blue-500" size={12} />
              {arrivalAirport}
            </div>
            {activeInput === "destination" &&
              filteredDestinations.length > 0 && (
                <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-lg max-h-60 overflow-auto border border-gray-200">
                  {filteredDestinations.map((destination, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        setDestinationCity(destination.city);
                        setArrivalAirport(destination.name);
                        setActiveInput(null);
                      }}
                      className="px-4 py-3 hover:bg-blue-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{destination.city}</span>
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          {destination.code}
                        </span>
                      </div>
                      <div className="text-xs text-gray-500">
                        {destination.name}
                      </div>
                    </div>
                  ))}
                </div>
              )}
          </div>

          {/* Date Picker */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Departure
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiCalendar className="text-gray-400" />
              </div>
              <DatePicker
                selected={travelDate}
                onChange={(date) => setTravelDate(date)}
                minDate={new Date()}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                dateFormat="EEE, dd MMM yyyy"
                placeholderText="Select date"
              />
            </div>
          </div>

          {/* Flight Class */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Class
            </label>
            <div className="relative">
              <select
                value={flightClass}
                onChange={(e) => setFlightClass(e.target.value)}
                className="block appearance-none w-full pl-3 pr-8 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="Economy">Economy</option>
                <option value="Premium Economy">Premium Economy</option>
                <option value="Business">Business</option>
                <option value="First">First Class</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <FiChevronDown className="text-gray-400" />
              </div>
            </div>
          </div>

          {/* Search Button */}
          <div className="md:col-span-5 flex justify-center mt-2">
            <button
              type="submit"
              className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-[1.02] flex items-center justify-center"
            >
              <FiSearch className="mr-2" />
              Search Flights
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FlightHomeSearch;
