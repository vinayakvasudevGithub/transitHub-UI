import React, { useEffect, useState, useMemo } from "react";

const FlightFilterBar = ({ from, to, originalFlights, setFlight }) => {
  const [filters, setFilters] = useState({
    showBefore6am: false,
    show6amTo12pm: false,
    show12pmTo6pm: false,
    showAfter6pm: false,
    arrivalBefore6am: false,
    arrival6amTo12pm: false,
    arrival12pmTo6pm: false,
    arrivalAfter6pm: false,
  });

  // Helper function to parse time (e.g., "05:30" => total minutes)
  const parseTime = (timeString) => {
    if (!timeString || typeof timeString !== "string") {
      return NaN;
    }
    const [hours, minutes] = timeString.split(":").map(Number);
    return hours * 60 + minutes; // Convert to total minutes
  };

  // Count flights by filter criteria
  const countFlightsByCriteria = useMemo(() => {
    return {
      before6am: originalFlights.filter((flight) =>
        flight.airport?.some(
          (airport) =>
            airport?.departureTime && parseTime(airport.departureTime) < 360
        )
      ).length,

      between6amTo12pm: originalFlights.filter((flight) =>
        flight.airport?.some(
          (airport) =>
            airport.departureTime &&
            parseTime(airport.departureTime) >= 360 &&
            parseTime(airport.departureTime) < 720
        )
      ).length,

      between12pmTo6pm: originalFlights.filter((flight) =>
        flight.airport.some(
          (airport) =>
            airport.departureTime &&
            parseTime(airport.departureTime) >= 720 &&
            parseTime(airport.departureTime) < 1080
        )
      ).length,

      after6pm: originalFlights.filter((flight) =>
        flight.airport.some(
          (airport) =>
            airport.departureTime && parseTime(airport.departureTime) >= 1080
        )
      ).length,

      arrivalBefore6am: originalFlights.filter((flight) =>
        flight.destination?.some(
          (destination) =>
            destination?.arrivalTime && parseTime(destination.arrivalTime) < 360
        )
      ).length,

      arrival6amTo12pm: originalFlights.filter((flight) =>
        flight.destination.some(
          (destination) =>
            destination?.arrivalTime &&
            parseTime(destination.arrivalTime) >= 360 &&
            parseTime(destination.arrivalTime) < 720
        )
      ).length,

      arrival12pmTo6pm: originalFlights.filter((flight) =>
        flight.destination.some(
          (destination) =>
            destination?.arrivalTime &&
            parseTime(destination.arrivalTime) >= 720 &&
            parseTime(destination.arrivalTime) < 1080
        )
      ).length,

      arrivalAfter6pm: originalFlights.filter((flight) =>
        flight.destination.some(
          (destination) =>
            destination?.arrivalTime &&
            parseTime(destination.arrivalTime) >= 1080
        )
      ).length,
    };
  }, [originalFlights]);

  // Filter change handler
  const handleFilterChange = (filterKey) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterKey]: !prevFilters[filterKey],
    }));
  };

  // Apply filters dynamically based on selected criteria
  useEffect(() => {
    let filteredFlights = originalFlights;

    if (filters.showBefore6am) {
      filteredFlights = filteredFlights.filter((flight) =>
        flight.airport.some((airport) => parseTime(airport.departureTime) < 360)
      );
    }

    if (filters.show6amTo12pm) {
      filteredFlights = filteredFlights.filter((flight) =>
        flight.airport.some(
          (airport) =>
            parseTime(airport.departureTime) >= 360 &&
            parseTime(airport.departureTime) < 720
        )
      );
    }

    if (filters.show12pmTo6pm) {
      filteredFlights = filteredFlights.filter((flight) =>
        flight.airport.some(
          (airport) =>
            parseTime(airport.departureTime) >= 720 &&
            parseTime(airport.departureTime) < 1080
        )
      );
    }

    if (filters.showAfter6pm) {
      filteredFlights = filteredFlights.filter((flight) =>
        flight.airport.some(
          (airport) => parseTime(airport.departureTime) >= 1080
        )
      );
    }

    if (filters.arrivalBefore6am) {
      filteredFlights = filteredFlights.filter((flight) =>
        flight.destination.some(
          (destination) => parseTime(destination.arrivalTime) < 360
        )
      );
    }

    if (filters.arrival6amTo12pm) {
      filteredFlights = filteredFlights.filter((flight) =>
        flight.destination.some(
          (destination) =>
            parseTime(destination.arrivalTime) >= 360 &&
            parseTime(destination.arrivalTime) < 720
        )
      );
    }

    if (filters.arrival12pmTo6pm) {
      filteredFlights = filteredFlights.filter((flight) =>
        flight.destination.some(
          (destination) =>
            parseTime(destination.arrivalTime) >= 720 &&
            parseTime(destination.arrivalTime) < 1080
        )
      );
    }

    if (filters.arrivalAfter6pm) {
      filteredFlights = filteredFlights.filter((flight) =>
        flight.destination.some(
          (destination) => parseTime(destination.arrivalTime) >= 1080
        )
      );
    }

    setFlight(filteredFlights);
  }, [filters, originalFlights, setFlight]);

  return (
    <div className="p-2 bg-white shadow-lg space-y-4">
      {/* Departure Time Section */}
      <h1 className="text-lg font-bold text-gray-800">DEPARTURE TIME</h1>
      <div className="p-2 flex justify-between items-center border rounded-lg hover:bg-gray-50">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={filters.showBefore6am}
            onChange={() => handleFilterChange("showBefore6am")}
            className="accent-blue-500 w-4 h-4"
          />
          <h2 className="text-gray-700">Before 6 am</h2>
        </label>
        <span className="text-sm text-gray-500">
          ({countFlightsByCriteria.before6am})
        </span>
      </div>
      <div className="p-2 flex justify-between items-center border rounded-lg hover:bg-gray-50">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={filters.show6amTo12pm}
            onChange={() => handleFilterChange("show6amTo12pm")}
            className="accent-blue-500 w-4 h-4"
          />
          <h2 className="text-gray-700">6 am to 12 pm</h2>
        </label>
        <span className="text-sm text-gray-500">
          ({countFlightsByCriteria.between6amTo12pm})
        </span>
      </div>
      <div className="p-2 flex justify-between items-center border rounded-lg hover:bg-gray-50">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={filters.show12pmTo6pm}
            onChange={() => handleFilterChange("show12pmTo6pm")}
            className="accent-blue-500 w-4 h-4"
          />
          <h2 className="text-gray-700">12 pm to 6 pm</h2>
        </label>
        <span className="text-sm text-gray-500">
          ({countFlightsByCriteria.between12pmTo6pm})
        </span>
      </div>
      <div className="p-2 flex justify-between items-center border rounded-lg hover:bg-gray-50">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={filters.showAfter6pm}
            onChange={() => handleFilterChange("showAfter6pm")}
            className="accent-blue-500 w-4 h-4"
          />
          <h2 className="text-gray-700">After 6 pm</h2>
        </label>
        <span className="text-sm text-gray-500">
          ({countFlightsByCriteria.after6pm})
        </span>
      </div>

      {/* Arrival Time Section */}
      <h1 className="text-lg font-bold text-gray-800">ARRIVAL TIME</h1>
      <div className="p-2 flex justify-between items-center border rounded-lg hover:bg-gray-50">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={filters.arrivalBefore6am}
            onChange={() => handleFilterChange("arrivalBefore6am")}
            className="accent-blue-500 w-4 h-4"
          />
          <h2 className="text-gray-700">Before 6 am</h2>
        </label>
        <span className="text-sm text-gray-500">
          ({countFlightsByCriteria.arrivalBefore6am})
        </span>
      </div>
      <div className="p-2 flex justify-between items-center border rounded-lg hover:bg-gray-50">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={filters.arrival6amTo12pm}
            onChange={() => handleFilterChange("arrival6amTo12pm")}
            className="accent-blue-500 w-4 h-4"
          />
          <h2 className="text-gray-700">6 am to 12 pm</h2>
        </label>
        <span className="text-sm text-gray-500">
          ({countFlightsByCriteria.arrival6amTo12pm})
        </span>
      </div>
      <div className="p-2 flex justify-between items-center border rounded-lg hover:bg-gray-50">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={filters.arrival12pmTo6pm}
            onChange={() => handleFilterChange("arrival12pmTo6pm")}
            className="accent-blue-500 w-4 h-4"
          />
          <h2 className="text-gray-700">12 pm to 6 pm</h2>
        </label>
        <span className="text-sm text-gray-500">
          ({countFlightsByCriteria.arrival12pmTo6pm})
        </span>
      </div>
      <div className="p-2 flex justify-between items-center border rounded-lg hover:bg-gray-50">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={filters.arrivalAfter6pm}
            onChange={() => handleFilterChange("arrivalAfter6pm")}
            className="accent-blue-500 w-4 h-4"
          />
          <h2 className="text-gray-700">After 6 pm</h2>
        </label>
        <span className="text-sm text-gray-500">
          ({countFlightsByCriteria.arrivalAfter6pm})
        </span>
      </div>
    </div>
  );
};

export default FlightFilterBar;
