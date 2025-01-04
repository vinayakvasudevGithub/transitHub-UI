import React, { useState, useEffect, useMemo } from "react";

const LeftSideBarForBus = ({ from, to, originalBuses, setBuses }) => {
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
    <div className="p-1 grid gap-1 bg-red-300">
      <h1>BUS TYPE</h1>
      <div className="bg-yellow-200 p-1 flex justify-between">
        <input
          type="checkbox"
          checked={filters.showAC}
          onChange={() => handleFilterChange("showAC")}
        />
        <h2>AC ({countBusesByCriteria.acCount})</h2>
      </div>
      <div className="bg-yellow-200 p-1 flex justify-between">
        <input
          type="checkbox"
          checked={filters.showNonAC}
          onChange={() => handleFilterChange("showNonAC")}
        />
        <h2>Non AC ({countBusesByCriteria.nonAcCount})</h2>
      </div>

      <h1>DEPARTURE TIME</h1>
      <div className="flex justify-between p-1 bg-yellow-300">
        <input
          type="checkbox"
          checked={filters.showBefore6am}
          onChange={() => handleFilterChange("showBefore6am")}
        />
        <h2>Before 6 am ({countBusesByCriteria.before6am})</h2>
      </div>
      <div className="flex justify-between p-1 bg-yellow-300">
        <input
          type="checkbox"
          checked={filters.show6amTo12pm}
          onChange={() => handleFilterChange("show6amTo12pm")}
        />
        <h2>6 am to 12 pm ({countBusesByCriteria.between6amTo12pm})</h2>
      </div>
      <div className="flex justify-between p-1 bg-yellow-300">
        <input
          type="checkbox"
          checked={filters.show12pmTo6pm}
          onChange={() => handleFilterChange("show12pmTo6pm")}
        />
        <h2>12 pm to 6 pm ({countBusesByCriteria.between12pmTo6pm})</h2>
      </div>
      <div
        className="flex justify-between p-1 bg-yellow-300"
        onClick={() => handleFilterChange("showAfter6pm")}
      >
        <input
          type="checkbox"
          // checked={filters.showAfter6pm}
          // onChange={() => handleFilterChange("showAfter6pm")}
        />
        <h2>After 6 pm ({countBusesByCriteria.after6pm})</h2>
      </div>

      <h1>ARRIVAL TIME</h1>
      <div
        className="flex justify-between p-1 bg-blue-400"
        onClick={() => handleFilterChange("arrivalBefore6am")}
      >
        <input type="checkbox" />
        <h2>Before 6 am({countBusesByCriteria.arrivalBefore6am})</h2>
      </div>

      <div
        className="flex justify-between p-1 bg-blue-400"
        onClick={() => handleFilterChange("arrival6amTo12pm")}
      >
        <input type="checkbox" />
        <h2>6 am to 12 pm ({countBusesByCriteria.arrivalBetween6amTo12pm})</h2>
      </div>

      <div
        className="flex justify-between p-1 bg-blue-400"
        onClick={() => handleFilterChange("arrival12pmTo6pm")}
      >
        <input type="checkbox" />
        <h2>12 pm to 6 pm({countBusesByCriteria.arrivalBetween12pmTo6pm})</h2>
      </div>

      <div
        className="flex justify-between p-1 bg-blue-400"
        onClick={() => handleFilterChange("arrivalAfter6pm")}
      >
        <input type="checkbox" />
        <h2>After 6 pm({countBusesByCriteria.arrivalAfter6pm})</h2>
      </div>
    </div>
  );
};

export default LeftSideBarForBus;
