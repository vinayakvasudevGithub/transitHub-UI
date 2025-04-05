import React, { useState, useEffect, useMemo } from "react";

const BusFilter = ({ from, to, originalBuses, setBuses }) => {
  const [filters, setFilters] = useState({
    showAC: false,
    showNonAC: false,
    showBefore6am: false,
    show6amTo12pm: false,
    show12pmTo6pm: false,
    showAfter6pm: false,
    arrivalBefore6am: false,
    arrival6amTo12pm: false,
    arrival12pmTo6pm: false,
    arrivalAfter6pm: false,
  });

  const parseTime = (timeString) => {
    const [hours, minutes] = timeString.split(":").map(Number);
    return hours * 60 + minutes;
  };

  const countBusesByCriteria = useMemo(() => {
    const acCount = originalBuses.filter(
      (bus) => bus.AC.toUpperCase() === "YES"
    ).length;
    const nonAcCount = originalBuses.filter(
      (bus) => bus.AC.toUpperCase() === "NO"
    ).length;

    const timeCounts = {
      before6am: originalBuses.filter((bus) =>
        bus.stations.some(
          (station) =>
            station.city.toLowerCase() === from.toLowerCase() &&
            parseTime(station.departureTime) < 360
        )
      ).length,
      between6amTo12pm: originalBuses.filter((bus) =>
        bus.stations.some(
          (station) =>
            station.city.toLowerCase() === from.toLowerCase() &&
            parseTime(station.departureTime) >= 360 &&
            parseTime(station.departureTime) < 720
        )
      ).length,
      between12pmTo6pm: originalBuses.filter((bus) =>
        bus.stations.some(
          (station) =>
            station.city.toLowerCase() === from.toLowerCase() &&
            parseTime(station.departureTime) >= 720 &&
            parseTime(station.departureTime) < 1080
        )
      ).length,
      after6pm: originalBuses.filter((bus) =>
        bus.stations.some(
          (station) =>
            station.city.toLowerCase() === from.toLowerCase() &&
            parseTime(station.departureTime) >= 1080
        )
      ).length,
      arrivalBefore6am: originalBuses.filter((bus) =>
        bus.stations.some(
          (station) =>
            station.city.toLowerCase() === to.toLowerCase() &&
            parseTime(station.arrivaltime) < 360
        )
      ).length,
      arrivalBetween6amTo12pm: originalBuses.filter((bus) =>
        bus.stations.some(
          (station) =>
            station.city.toLowerCase() === to.toLowerCase() &&
            parseTime(station.arrivaltime) >= 360 &&
            parseTime(station.arrivaltime) < 720
        )
      ).length,
      arrivalBetween12pmTo6pm: originalBuses.filter((bus) =>
        bus.stations.some(
          (station) =>
            station.city.toLowerCase() === to.toLowerCase() &&
            parseTime(station.arrivaltime) >= 720 &&
            parseTime(station.arrivaltime) < 1080
        )
      ).length,
      arrivalAfter6pm: originalBuses.filter((bus) =>
        bus.stations.some(
          (station) =>
            station.city.toLowerCase() === to.toLowerCase() &&
            parseTime(station.arrivaltime) >= 1080
        )
      ).length,
    };

    return { acCount, nonAcCount, ...timeCounts };
  }, [originalBuses, from, to]);

  useEffect(() => {
    let filteredBuses = originalBuses;

    if (filters.showAC) {
      filteredBuses = filteredBuses.filter(
        (bus) => bus.AC.toUpperCase() === "YES"
      );
    }
    if (filters.showNonAC) {
      filteredBuses = filteredBuses.filter(
        (bus) => bus.AC.toUpperCase() === "NO"
      );
    }
    if (filters.showBefore6am) {
      filteredBuses = filteredBuses.filter((bus) =>
        bus.stations.some(
          (station) =>
            station.city.toLowerCase() === from.toLowerCase() &&
            parseTime(station.departureTime) < 360
        )
      );
    }
    if (filters.show6amTo12pm) {
      filteredBuses = filteredBuses.filter((bus) =>
        bus.stations.some(
          (station) =>
            station.city.toLowerCase() === from.toLowerCase() &&
            parseTime(station.departureTime) >= 360 &&
            parseTime(station.departureTime) < 720
        )
      );
    }
    if (filters.show12pmTo6pm) {
      filteredBuses = filteredBuses.filter((bus) =>
        bus.stations.some(
          (station) =>
            station.city.toLowerCase() === from.toLowerCase() &&
            parseTime(station.departureTime) >= 720 &&
            parseTime(station.departureTime) < 1080
        )
      );
    }
    if (filters.showAfter6pm) {
      filteredBuses = filteredBuses.filter((bus) =>
        bus.stations.some(
          (station) =>
            station.city.toLowerCase() === from.toLowerCase() &&
            parseTime(station.departureTime) >= 1080
        )
      );
    }

    if (filters.arrivalBefore6am) {
      filteredBuses = filteredBuses.filter((bus) =>
        bus.stations.some(
          (station) =>
            station.city.toLowerCase() === to.toLowerCase() &&
            parseTime(station.arrivaltime) < 360
        )
      );
    }

    if (filters.arrival6amTo12pm) {
      filteredBuses = filteredBuses.filter((bus) =>
        bus.stations.some(
          (station) =>
            station.city.toLowerCase() === to.toLowerCase() &&
            parseTime(station.arrivaltime) >= 360 &&
            parseTime(station.arrivaltime) < 720
        )
      );
    }

    if (filters.arrival12pmTo6pm) {
      filteredBuses = filteredBuses.filter((bus) =>
        bus.stations.some(
          (station) =>
            station.city.toLowerCase() === to.toLowerCase() &&
            parseTime(station.arrivaltime) >= 720 &&
            parseTime(station.arrivaltime) < 1080
        )
      );
    }

    if (filters.arrivalAfter6pm) {
      filteredBuses = filteredBuses.filter((bus) =>
        bus.stations.some(
          (station) =>
            station.city.toLowerCase() === to.toLowerCase() &&
            parseTime(station.arrivaltime) >= 1080
        )
      );
    }

    setBuses(filteredBuses);
  }, [filters, originalBuses, setBuses, from, to]);

  const handleFilterChange = (filterKey) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterKey]: !prevFilters[filterKey],
    }));
  };

  return (
    <div className="p-2 bg-white  shadow-lg space-y-4">
      {/* Bus Type Section */}
      <h1 className="text-lg font-bold text-gray-800">BUS TYPE</h1>
      <div className="p-2 flex justify-between items-center border rounded-lg hover:bg-gray-50">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={filters.showAC}
            onChange={() => handleFilterChange("showAC")}
            className="accent-blue-500 w-4 h-4"
          />
          <h2 className="text-gray-700">AC</h2>
        </label>
        <span className="text-sm text-gray-500">
          ({countBusesByCriteria.acCount})
        </span>
      </div>
      <div className="p-2 flex justify-between items-center border rounded-lg hover:bg-gray-50">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={filters.showNonAC}
            onChange={() => handleFilterChange("showNonAC")}
            className="accent-blue-500 w-4 h-4"
          />
          <h2 className="text-gray-700">Non AC</h2>
        </label>
        <span className="text-sm text-gray-500">
          ({countBusesByCriteria.nonAcCount})
        </span>
      </div>

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
          ({countBusesByCriteria.before6am})
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
          ({countBusesByCriteria.between6amTo12pm})
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
          ({countBusesByCriteria.between12pmTo6pm})
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
          ({countBusesByCriteria.after6pm})
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
          ({countBusesByCriteria.arrivalBefore6am})
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
          ({countBusesByCriteria.arrivalBetween6amTo12pm})
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
          ({countBusesByCriteria.arrivalBetween12pmTo6pm})
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
          ({countBusesByCriteria.arrivalAfter6pm})
        </span>
      </div>
    </div>
  );
};

export default BusFilter;
