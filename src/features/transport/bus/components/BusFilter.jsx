// import React, { useState, useEffect, useMemo } from "react";

// const BusFilter = ({ from, to, originalBuses, setBuses }) => {
//   const [filters, setFilters] = useState({
//     showAC: false,
//     showNonAC: false,
//     showBefore6am: false,
//     show6amTo12pm: false,
//     show12pmTo6pm: false,
//     showAfter6pm: false,
//     arrivalBefore6am: false,
//     arrival6amTo12pm: false,
//     arrival12pmTo6pm: false,
//     arrivalAfter6pm: false,
//   });

//   const parseTime = (timeString) => {
//     const [hours, minutes] = timeString.split(":").map(Number);
//     return hours * 60 + minutes;
//   };

//   const countBusesByCriteria = useMemo(() => {
//     const acCount = originalBuses.filter(
//       (bus) => bus.AC.toUpperCase() === "YES"
//     ).length;
//     const nonAcCount = originalBuses.filter(
//       (bus) => bus.AC.toUpperCase() === "NO"
//     ).length;

//     const timeCounts = {
//       before6am: originalBuses.filter((bus) =>
//         bus.stations.some(
//           (station) =>
//             station.city.toLowerCase() === from.toLowerCase() &&
//             parseTime(station.departureTime) < 360
//         )
//       ).length,
//       between6amTo12pm: originalBuses.filter((bus) =>
//         bus.stations.some(
//           (station) =>
//             station.city.toLowerCase() === from.toLowerCase() &&
//             parseTime(station.departureTime) >= 360 &&
//             parseTime(station.departureTime) < 720
//         )
//       ).length,
//       between12pmTo6pm: originalBuses.filter((bus) =>
//         bus.stations.some(
//           (station) =>
//             station.city.toLowerCase() === from.toLowerCase() &&
//             parseTime(station.departureTime) >= 720 &&
//             parseTime(station.departureTime) < 1080
//         )
//       ).length,
//       after6pm: originalBuses.filter((bus) =>
//         bus.stations.some(
//           (station) =>
//             station.city.toLowerCase() === from.toLowerCase() &&
//             parseTime(station.departureTime) >= 1080
//         )
//       ).length,
//       arrivalBefore6am: originalBuses.filter((bus) =>
//         bus.stations.some(
//           (station) =>
//             station.city.toLowerCase() === to.toLowerCase() &&
//             parseTime(station.arrivaltime) < 360
//         )
//       ).length,
//       arrivalBetween6amTo12pm: originalBuses.filter((bus) =>
//         bus.stations.some(
//           (station) =>
//             station.city.toLowerCase() === to.toLowerCase() &&
//             parseTime(station.arrivaltime) >= 360 &&
//             parseTime(station.arrivaltime) < 720
//         )
//       ).length,
//       arrivalBetween12pmTo6pm: originalBuses.filter((bus) =>
//         bus.stations.some(
//           (station) =>
//             station.city.toLowerCase() === to.toLowerCase() &&
//             parseTime(station.arrivaltime) >= 720 &&
//             parseTime(station.arrivaltime) < 1080
//         )
//       ).length,
//       arrivalAfter6pm: originalBuses.filter((bus) =>
//         bus.stations.some(
//           (station) =>
//             station.city.toLowerCase() === to.toLowerCase() &&
//             parseTime(station.arrivaltime) >= 1080
//         )
//       ).length,
//     };

//     return { acCount, nonAcCount, ...timeCounts };
//   }, [originalBuses, from, to]);

//   useEffect(() => {
//     let filteredBuses = originalBuses;

//     if (filters.showAC) {
//       filteredBuses = filteredBuses.filter(
//         (bus) => bus.AC.toUpperCase() === "YES"
//       );
//     }
//     if (filters.showNonAC) {
//       filteredBuses = filteredBuses.filter(
//         (bus) => bus.AC.toUpperCase() === "NO"
//       );
//     }
//     if (filters.showBefore6am) {
//       filteredBuses = filteredBuses.filter((bus) =>
//         bus.stations.some(
//           (station) =>
//             station.city.toLowerCase() === from.toLowerCase() &&
//             parseTime(station.departureTime) < 360
//         )
//       );
//     }
//     if (filters.show6amTo12pm) {
//       filteredBuses = filteredBuses.filter((bus) =>
//         bus.stations.some(
//           (station) =>
//             station.city.toLowerCase() === from.toLowerCase() &&
//             parseTime(station.departureTime) >= 360 &&
//             parseTime(station.departureTime) < 720
//         )
//       );
//     }
//     if (filters.show12pmTo6pm) {
//       filteredBuses = filteredBuses.filter((bus) =>
//         bus.stations.some(
//           (station) =>
//             station.city.toLowerCase() === from.toLowerCase() &&
//             parseTime(station.departureTime) >= 720 &&
//             parseTime(station.departureTime) < 1080
//         )
//       );
//     }
//     if (filters.showAfter6pm) {
//       filteredBuses = filteredBuses.filter((bus) =>
//         bus.stations.some(
//           (station) =>
//             station.city.toLowerCase() === from.toLowerCase() &&
//             parseTime(station.departureTime) >= 1080
//         )
//       );
//     }

//     if (filters.arrivalBefore6am) {
//       filteredBuses = filteredBuses.filter((bus) =>
//         bus.stations.some(
//           (station) =>
//             station.city.toLowerCase() === to.toLowerCase() &&
//             parseTime(station.arrivaltime) < 360
//         )
//       );
//     }

//     if (filters.arrival6amTo12pm) {
//       filteredBuses = filteredBuses.filter((bus) =>
//         bus.stations.some(
//           (station) =>
//             station.city.toLowerCase() === to.toLowerCase() &&
//             parseTime(station.arrivaltime) >= 360 &&
//             parseTime(station.arrivaltime) < 720
//         )
//       );
//     }

//     if (filters.arrival12pmTo6pm) {
//       filteredBuses = filteredBuses.filter((bus) =>
//         bus.stations.some(
//           (station) =>
//             station.city.toLowerCase() === to.toLowerCase() &&
//             parseTime(station.arrivaltime) >= 720 &&
//             parseTime(station.arrivaltime) < 1080
//         )
//       );
//     }

//     if (filters.arrivalAfter6pm) {
//       filteredBuses = filteredBuses.filter((bus) =>
//         bus.stations.some(
//           (station) =>
//             station.city.toLowerCase() === to.toLowerCase() &&
//             parseTime(station.arrivaltime) >= 1080
//         )
//       );
//     }

//     setBuses(filteredBuses);
//   }, [filters, originalBuses, setBuses, from, to]);

//   const handleFilterChange = (filterKey) => {
//     setFilters((prevFilters) => ({
//       ...prevFilters,
//       [filterKey]: !prevFilters[filterKey],
//     }));
//   };

//   return (
//     <div className="p-2 bg-white  shadow-lg space-y-4">
//       {/* Bus Type Section */}
//       <h1 className="text-lg font-bold text-gray-800">BUS TYPE</h1>
//       <div className="p-2 flex justify-between items-center border rounded-lg hover:bg-gray-50">
//         <label className="flex items-center gap-2 cursor-pointer">
//           <input
//             type="checkbox"
//             checked={filters.showAC}
//             onChange={() => handleFilterChange("showAC")}
//             className="accent-blue-500 w-4 h-4"
//           />
//           <h2 className="text-gray-700">AC</h2>
//         </label>
//         <span className="text-sm text-gray-500">
//           ({countBusesByCriteria.acCount})
//         </span>
//       </div>
//       <div className="p-2 flex justify-between items-center border rounded-lg hover:bg-gray-50">
//         <label className="flex items-center gap-2 cursor-pointer">
//           <input
//             type="checkbox"
//             checked={filters.showNonAC}
//             onChange={() => handleFilterChange("showNonAC")}
//             className="accent-blue-500 w-4 h-4"
//           />
//           <h2 className="text-gray-700">Non AC</h2>
//         </label>
//         <span className="text-sm text-gray-500">
//           ({countBusesByCriteria.nonAcCount})
//         </span>
//       </div>

//       {/* Departure Time Section */}
//       <h1 className="text-lg font-bold text-gray-800">DEPARTURE TIME</h1>
//       <div className="p-2 flex justify-between items-center border rounded-lg hover:bg-gray-50">
//         <label className="flex items-center gap-2 cursor-pointer">
//           <input
//             type="checkbox"
//             checked={filters.showBefore6am}
//             onChange={() => handleFilterChange("showBefore6am")}
//             className="accent-blue-500 w-4 h-4"
//           />
//           <h2 className="text-gray-700">Before 6 am</h2>
//         </label>
//         <span className="text-sm text-gray-500">
//           ({countBusesByCriteria.before6am})
//         </span>
//       </div>
//       <div className="p-2 flex justify-between items-center border rounded-lg hover:bg-gray-50">
//         <label className="flex items-center gap-2 cursor-pointer">
//           <input
//             type="checkbox"
//             checked={filters.show6amTo12pm}
//             onChange={() => handleFilterChange("show6amTo12pm")}
//             className="accent-blue-500 w-4 h-4"
//           />
//           <h2 className="text-gray-700">6 am to 12 pm</h2>
//         </label>
//         <span className="text-sm text-gray-500">
//           ({countBusesByCriteria.between6amTo12pm})
//         </span>
//       </div>
//       <div className="p-2 flex justify-between items-center border rounded-lg hover:bg-gray-50">
//         <label className="flex items-center gap-2 cursor-pointer">
//           <input
//             type="checkbox"
//             checked={filters.show12pmTo6pm}
//             onChange={() => handleFilterChange("show12pmTo6pm")}
//             className="accent-blue-500 w-4 h-4"
//           />
//           <h2 className="text-gray-700">12 pm to 6 pm</h2>
//         </label>
//         <span className="text-sm text-gray-500">
//           ({countBusesByCriteria.between12pmTo6pm})
//         </span>
//       </div>
//       <div className="p-2 flex justify-between items-center border rounded-lg hover:bg-gray-50">
//         <label className="flex items-center gap-2 cursor-pointer">
//           <input
//             type="checkbox"
//             checked={filters.showAfter6pm}
//             onChange={() => handleFilterChange("showAfter6pm")}
//             className="accent-blue-500 w-4 h-4"
//           />
//           <h2 className="text-gray-700">After 6 pm</h2>
//         </label>
//         <span className="text-sm text-gray-500">
//           ({countBusesByCriteria.after6pm})
//         </span>
//       </div>

//       {/* Arrival Time Section */}
//       <h1 className="text-lg font-bold text-gray-800">ARRIVAL TIME</h1>
//       <div className="p-2 flex justify-between items-center border rounded-lg hover:bg-gray-50">
//         <label className="flex items-center gap-2 cursor-pointer">
//           <input
//             type="checkbox"
//             checked={filters.arrivalBefore6am}
//             onChange={() => handleFilterChange("arrivalBefore6am")}
//             className="accent-blue-500 w-4 h-4"
//           />
//           <h2 className="text-gray-700">Before 6 am</h2>
//         </label>
//         <span className="text-sm text-gray-500">
//           ({countBusesByCriteria.arrivalBefore6am})
//         </span>
//       </div>
//       <div className="p-2 flex justify-between items-center border rounded-lg hover:bg-gray-50">
//         <label className="flex items-center gap-2 cursor-pointer">
//           <input
//             type="checkbox"
//             checked={filters.arrival6amTo12pm}
//             onChange={() => handleFilterChange("arrival6amTo12pm")}
//             className="accent-blue-500 w-4 h-4"
//           />
//           <h2 className="text-gray-700">6 am to 12 pm</h2>
//         </label>
//         <span className="text-sm text-gray-500">
//           ({countBusesByCriteria.arrivalBetween6amTo12pm})
//         </span>
//       </div>
//       <div className="p-2 flex justify-between items-center border rounded-lg hover:bg-gray-50">
//         <label className="flex items-center gap-2 cursor-pointer">
//           <input
//             type="checkbox"
//             checked={filters.arrival12pmTo6pm}
//             onChange={() => handleFilterChange("arrival12pmTo6pm")}
//             className="accent-blue-500 w-4 h-4"
//           />
//           <h2 className="text-gray-700">12 pm to 6 pm</h2>
//         </label>
//         <span className="text-sm text-gray-500">
//           ({countBusesByCriteria.arrivalBetween12pmTo6pm})
//         </span>
//       </div>
//       <div className="p-2 flex justify-between items-center border rounded-lg hover:bg-gray-50">
//         <label className="flex items-center gap-2 cursor-pointer">
//           <input
//             type="checkbox"
//             checked={filters.arrivalAfter6pm}
//             onChange={() => handleFilterChange("arrivalAfter6pm")}
//             className="accent-blue-500 w-4 h-4"
//           />
//           <h2 className="text-gray-700">After 6 pm</h2>
//         </label>
//         <span className="text-sm text-gray-500">
//           ({countBusesByCriteria.arrivalAfter6pm})
//         </span>
//       </div>
//     </div>
//   );
// };

// export default BusFilter;

import React, { useState, useEffect, useMemo } from "react";
import { FiClock, FiSunrise, FiSun, FiSunset, FiMoon } from "react-icons/fi";
import { IoIosSnow } from "react-icons/io";
import { GiHeatHaze } from "react-icons/gi";

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

  const [activeTab, setActiveTab] = useState("departure");

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

  const FilterOption = ({ icon, label, count, checked, onChange }) => (
    <div
      className={`p-3 rounded-lg flex items-center justify-between cursor-pointer transition-all ${
        checked
          ? "bg-teal-50 border border-teal-200"
          : "bg-white border border-gray-200 hover:bg-gray-50"
      }`}
      onClick={onChange}
    >
      <div className="flex items-center gap-3">
        <div
          className={`p-2 rounded-full ${
            checked ? "bg-teal-100 text-teal-600" : "bg-gray-100 text-gray-500"
          }`}
        >
          {icon}
        </div>
        <span
          className={`font-medium ${
            checked ? "text-teal-700" : "text-gray-700"
          }`}
        >
          {label}
        </span>
      </div>
      <span
        className={`text-sm px-2 py-1 rounded-full ${
          checked ? "bg-teal-100 text-teal-700" : "bg-gray-100 text-gray-600"
        }`}
      >
        {count}
      </span>
    </div>
  );

  return (
    // <div className="bg-white rounded-xl shadow-md overflow-hidden">
    <div className="bg-white rounded-xl  overflow-hidden">
      {/* Bus Type Section */}
      {/* <div className="p-5 border-b border-gray-100"> */}
      {/* <div className="  border-gray-100"> */}
      <div className="  ">
        <h2 className="text-lg font-semibold text-gray-800 mb-3">Bus Type</h2>
        <div className="grid grid-cols-2 gap-3">
          <FilterOption
            icon={<IoIosSnow className="text-lg" />}
            label="AC"
            count={countBusesByCriteria.acCount}
            checked={filters.showAC}
            onChange={() => handleFilterChange("showAC")}
          />
          <FilterOption
            icon={<GiHeatHaze className="text-lg" />}
            label="Non-AC"
            count={countBusesByCriteria.nonAcCount}
            checked={filters.showNonAC}
            onChange={() => handleFilterChange("showNonAC")}
          />
        </div>
      </div>

      {/* Time Filter Section */}
      <div className="p-5">
        <div className="flex border-b border-gray-200 mb-4">
          <button
            className={`pb-2 px-4 font-medium text-sm ${
              activeTab === "departure"
                ? "text-teal-600 border-b-2 border-teal-500"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("departure")}
          >
            Departure Time
          </button>
          <button
            className={`pb-2 px-4 font-medium text-sm ${
              activeTab === "arrival"
                ? "text-teal-600 border-b-2 border-teal-500"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("arrival")}
          >
            Arrival Time
          </button>
        </div>

        {activeTab === "departure" ? (
          <div className="space-y-3">
            <FilterOption
              icon={<FiMoon className="text-lg" />}
              label="Before 6 am"
              count={countBusesByCriteria.before6am}
              checked={filters.showBefore6am}
              onChange={() => handleFilterChange("showBefore6am")}
            />
            <FilterOption
              icon={<FiSunrise className="text-lg" />}
              label="6 am to 12 pm"
              count={countBusesByCriteria.between6amTo12pm}
              checked={filters.show6amTo12pm}
              onChange={() => handleFilterChange("show6amTo12pm")}
            />
            <FilterOption
              icon={<FiSun className="text-lg" />}
              label="12 pm to 6 pm"
              count={countBusesByCriteria.between12pmTo6pm}
              checked={filters.show12pmTo6pm}
              onChange={() => handleFilterChange("show12pmTo6pm")}
            />
            <FilterOption
              icon={<FiSunset className="text-lg" />}
              label="After 6 pm"
              count={countBusesByCriteria.after6pm}
              checked={filters.showAfter6pm}
              onChange={() => handleFilterChange("showAfter6pm")}
            />
          </div>
        ) : (
          <div className="space-y-3">
            <FilterOption
              icon={<FiMoon className="text-lg" />}
              label="Before 6 am"
              count={countBusesByCriteria.arrivalBefore6am}
              checked={filters.arrivalBefore6am}
              onChange={() => handleFilterChange("arrivalBefore6am")}
            />
            <FilterOption
              icon={<FiSunrise className="text-lg" />}
              label="6 am to 12 pm"
              count={countBusesByCriteria.arrivalBetween6amTo12pm}
              checked={filters.arrival6amTo12pm}
              onChange={() => handleFilterChange("arrival6amTo12pm")}
            />
            <FilterOption
              icon={<FiSun className="text-lg" />}
              label="12 pm to 6 pm"
              count={countBusesByCriteria.arrivalBetween12pmTo6pm}
              checked={filters.arrival12pmTo6pm}
              onChange={() => handleFilterChange("arrival12pmTo6pm")}
            />
            <FilterOption
              icon={<FiSunset className="text-lg" />}
              label="After 6 pm"
              count={countBusesByCriteria.arrivalAfter6pm}
              checked={filters.arrivalAfter6pm}
              onChange={() => handleFilterChange("arrivalAfter6pm")}
            />
          </div>
        )}
      </div>

      {/* Reset Button */}
      <div className="p-4 border-t border-gray-100 bg-gray-50">
        <button
          className="w-full py-2 text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors"
          onClick={() =>
            setFilters({
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
            })
          }
        >
          Reset All Filters
        </button>
      </div>
    </div>
  );
};

export default BusFilter;
