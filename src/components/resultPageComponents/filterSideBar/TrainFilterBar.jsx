// import React from "react";

// const TrainFilterBar = () => {
//   return <div>TrainFilterBar</div>;
// };

// export default TrainFilterBar;

import React, { useEffect, useMemo, useState } from "react";

const TrainFilterBar = ({
  TrainData,
  setTrainData,
  originalTrains,
  from,
  to,
}) => {
  const [filters, setFilters] = useState({
    SL: false,
    AC1: false,
    AC2: false,
    AC3: false,
    CC: false,
    before6am: false,
    between6amTo12pm: false,
    between12pmTo6pm: false,
    after6pm: false,
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
  }, [filters, originalTrains, setTrainData, from]);

  const handleFilterChange = (filterKey) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterKey]: !prevFilters[filterKey],
    }));
  };

  return (
    <div className="p-4 bg-white  shadow-lg space-y-4">
      {/* Train Class Section */}
      <h1 className="text-lg font-bold text-gray-800">JOURNEY CLASS</h1>
      <div className="space-y-2">
        {["SL", "AC1", "AC2", "AC3", "CC"].map((classType) => (
          <div
            key={classType}
            className="p-2 flex justify-between items-center border border-gray-200 rounded-lg hover:bg-gray-50"
          >
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters[classType]}
                onChange={() => handleFilterChange(classType)}
                className="accent-blue-500 w-4 h-4"
              />
              <h2 className="text-gray-700">{classType}</h2>
            </label>
            <span className="text-sm text-gray-500">
              ({countByCriteria[classType] || 0})
            </span>
          </div>
        ))}
      </div>

      {/* Departure Time Section */}
      <h1 className="text-lg font-bold text-gray-800">
        DEPARTURE IN {from.toUpperCase()}
      </h1>
      <div className="space-y-2">
        {[
          { label: "Before 6 am", key: "before6am" },
          { label: "6 am to 12 pm", key: "between6amTo12pm" },
          { label: "12 pm to 6 pm", key: "between12pmTo6pm" },
          { label: "After 6 pm", key: "after6pm" },
        ].map(({ label, key }) => (
          <div
            key={key}
            className="p-2 flex justify-between items-center border border-gray-200 rounded-lg hover:bg-gray-50"
          >
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters[key]}
                onChange={() => handleFilterChange(key)}
                className="accent-blue-500 w-4 h-4"
              />
              <h2 className="text-gray-700">{label}</h2>
            </label>
            <span className="text-sm text-gray-500">
              ({countByCriteria[key] || 0})
            </span>
          </div>
        ))}
      </div>

      {/* Arrival Time Section */}
      <h1 className="text-lg font-bold text-gray-800">
        ARRIVAL IN {to.toUpperCase()}
      </h1>
      <div className="space-y-2">
        {[
          { label: "Before 6 am", key: "arrivalBefore6am" },
          { label: "6 am to 12 pm", key: "arrival6amTo12pm" },
          { label: "12 pm to 6 pm", key: "arrival12pmTo6pm" },
          { label: "After 6 pm", key: "arrivalAfter6pm" },
        ].map(({ label, key }) => (
          <div
            key={key}
            className="p-2 flex justify-between items-center border border-gray-200 rounded-lg hover:bg-gray-50"
          >
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters[key]}
                onChange={() => handleFilterChange(key)}
                className="accent-blue-500 w-4 h-4"
              />
              <h2 className="text-gray-700">{label}</h2>
            </label>
            <span className="text-sm text-gray-500">
              ({countByCriteria[key] || 0})
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainFilterBar;
