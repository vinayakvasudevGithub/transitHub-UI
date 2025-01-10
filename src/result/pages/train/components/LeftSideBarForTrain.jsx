import React, { useEffect, useMemo, useState } from "react";

const LeftSideBarForTrain = ({
  TrainData,
  setTrainData,
  originalTrains,
  from,
  to,
}) => {
  const [filters, setFilters] = useState({
    showAC: false,
    AC1: false,
    AC2: false,
    AC3: false,
    CC: false,
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

  const countByCriteria = useMemo(() => {
    const classCount = {
      SL: originalTrains.filter((train) =>
        train.classes.some((classes) => classes.classType === "SL")
      ).length,

      AC1: originalTrains.filter((train) =>
        train.classes.some((classes) => classes.classType === "AC1")
      ).length,
      AC2: originalTrains.filter((train) =>
        train.classes.some((classes) => classes.classType === "AC2")
      ).length,
      AC3: originalTrains.filter((train) =>
        train.classes.some((classes) => classes.classType === "AC3")
      ).length,
      CC: originalTrains.filter((train) =>
        train.classes.some((classes) => classes.classType === "CC")
      ).length,
    };

    const timeCounts = {
      before6am: originalTrains.filter((train) =>
        train.stations.some(
          (stations) => parseTime(stations.departureTime) < 360
        )
      ).length,
      between6amTo12pm: originalTrains.filter((train) =>
        train.stations.some(
          (stations) =>
            stations.city.toLowerCase() === from.toLowerCase() &&
            parseTime(stations.departureTime) >= 360 &&
            parseTime(stations.departureTime) < 720
        )
      ).length,
      between12pmTo6pm: originalTrains.filter((train) =>
        train.stations.some(
          (stations) =>
            stations.city.toLowerCase() === from.toLowerCase() &&
            parseTime(stations.departureTime) >= 720 &&
            parseTime(stations.departureTime) < 1080
        )
      ).length,
      after6pm: originalTrains.filter((train) =>
        train.stations.some(
          (stations) =>
            stations.city.toLowerCase() === from.toLowerCase() &&
            parseTime(stations.departureTime) > 1080
        )
      ).length,
    };

    return { ...classCount, ...timeCounts };
  }, [from, to, originalTrains]);

  useEffect(() => {
    let filteredTrains = originalTrains;

    if (filters.SL) {
      filteredTrains = filteredTrains.filter((train) =>
        train.classes.some((classes) => classes.classType === "SL")
      );
    }

    if (filters.AC1) {
      filteredTrains = filteredTrains.filter((train) =>
        train.classes.some((classes) => classes.classType === "AC1")
      );
    }

    if (filters.AC2) {
      filteredTrains = filteredTrains.filter((train) =>
        train.classes.some((classes) => classes.classType === "AC2")
      );
    }

    if (filters.AC3) {
      filteredTrains = filteredTrains.filter((train) =>
        train.classes.some((classes) => classes.classType === "AC3")
      );
    }

    if (filters.CC) {
      filteredTrains = filteredTrains.filter((train) =>
        train.classes.some((classes) => classes.classType === "CC")
      );
    }

    if (filters.before6am) {
      filteredTrains = filteredTrains.filter((train) =>
        train.stations.some(
          (stations) =>
            stations.city.toLowerCase() === from.toLowerCase() &&
            parseTime(stations.departureTime) < 360
        )
      );
    }

    if (filters.between6amTo12pm) {
      filteredTrains = filteredTrains.filter((train) =>
        train.stations.some(
          (stations) =>
            stations.city.toLowerCase() === from.toLowerCase() &&
            parseTime(stations.departureTime) >= 360 &&
            parseTime(stations.departureTime) < 720
        )
      );
    }
    if (filters.between12pmTo6pm) {
      filteredTrains = filteredTrains.filter((train) =>
        train.stations.some(
          (stations) =>
            stations.city.toLowerCase() === from.toLowerCase() &&
            parseTime(stations.departureTime) >= 720 &&
            parseTime(stations.departureTime) < 1080
        )
      );
    }
    if (filters.after6pm) {
      filteredTrains = filteredTrains.filter((train) =>
        train.stations.some(
          (stations) =>
            stations.city.toLowerCase() === from.toLowerCase() &&
            parseTime(stations.departureTime) > 1080
        )
      );
    }

    setTrainData(filteredTrains);
  }, [filters, originalTrains, setTrainData]);

  const handleFilterChange = (filterKey) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterKey]: !prevFilters[filterKey],
    }));
  };

  return (
    <div className="grid gap-2 bg-yellow-200 p-2">
      <h1>{TrainData.length}</h1>
      <div>
        <div className="bg-red-50">
          <input type="checkbox" />
          <h2>Show SL({countByCriteria.SL})</h2>
        </div>
        <div className="bg-red-50">
          <input
            type="checkbox"
            onChange={() => {
              handleFilterChange("AC1");
            }}
          />
          <h2>Show AC1({countByCriteria.AC1})</h2>
        </div>
        <div className="bg-red-50">
          <input
            type="checkbox"
            onChange={() => {
              handleFilterChange("AC2");
            }}
          />
          <h2>Show AC2({countByCriteria.AC2})</h2>
        </div>
        <div className="bg-red-50">
          <input
            type="checkbox"
            onChange={() => {
              handleFilterChange("AC3");
            }}
          />
          <h2>Show AC3({countByCriteria.AC3})</h2>
        </div>
        <div className="bg-red-50">
          <input type="checkbox" onChange={() => handleFilterChange("CC")} />
          <h2>Show CC({countByCriteria.CC})</h2>
        </div>
      </div>
      -----------------------------------
      <div className="grid gap-2 bg-green-300 p-1">
        <div className="bg-blue-200 p-1">
          <input
            type="checkbox"
            onChange={() => {
              handleFilterChange("before6am");
            }}
          />
          <h2>Before 6am ({countByCriteria.before6am})</h2>
        </div>
        <div className="bg-blue-200 p-1">
          <input
            type="checkbox"
            onChange={() => {
              handleFilterChange("between6amTo12pm");
            }}
          />
          <h2>between6amTo12pm({countByCriteria.between6amTo12pm})</h2>
        </div>
        <div className="bg-blue-200 p-1">
          <input
            type="checkbox"
            onChange={() => {
              handleFilterChange("between12pmTo6pm");
            }}
          />
          <h2>between12pmTo6pm({countByCriteria.between12pmTo6pm})</h2>
        </div>
        <div className="bg-blue-200 p-1">
          <input
            type="checkbox"
            onChange={() => {
              handleFilterChange("after6pm");
            }}
          />
          <h2>after6pm({countByCriteria.after6pm})</h2>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBarForTrain;
