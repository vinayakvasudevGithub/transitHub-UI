// // import React, { useEffect, useState } from "react";

// // const BusLoading = () => {
// //   const [progress, setProgress] = useState(0);

// //   useEffect(() => {
// //     const timer = setInterval(() => {
// //       setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
// //     }, 30);

// //     return () => clearInterval(timer);
// //   }, []);

// //   return (
// //     <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-indigo-900 to-purple-800">
// //       {/* City skyline */}
// //       <div className="relative w-full max-w-lg h-64">
// //         {/* Progress bar */}
// //         <div className="absolute bottom-2 left-0 w-full h-1 bg-gray-700 rounded-full overflow-hidden">
// //           <div
// //             className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-300 ease-in-out"
// //             style={{ width: `${progress}%` }}
// //           ></div>
// //         </div>

// //         {/* Road with lane markings */}
// //         <div className="absolute bottom-6 w-full h-8 bg-gray-800 rounded-lg">
// //           <div className="flex justify-between w-full h-1 mt-4">
// //             {[...Array(12)].map((_, i) => (
// //               <div key={i} className="w-8 h-1 bg-yellow-400"></div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Buildings in background */}
// //         <div className="absolute bottom-14 left-10 w-16 h-32 bg-gray-700 opacity-50"></div>
// //         <div className="absolute bottom-14 left-30 w-12 h-48 bg-gray-600 opacity-50"></div>
// //         <div className="absolute bottom-14 left-48 w-10 h-24 bg-gray-800 opacity-50"></div>
// //         <div className="absolute bottom-14 right-12 w-14 h-40 bg-gray-700 opacity-50"></div>
// //         <div className="absolute bottom-14 right-32 w-12 h-36 bg-gray-600 opacity-50"></div>

// //         {/* Moving clouds */}
// //         <div className="absolute top-8 left-0 animate-cloud-1 opacity-30">
// //           <div className="w-16 h-6 bg-white rounded-full"></div>
// //         </div>
// //         <div className="absolute top-16 left-0 animate-cloud-2 opacity-20">
// //           <div className="w-20 h-8 bg-white rounded-full"></div>
// //         </div>

// //         {/* Bus */}
// //         <div
// //           className="absolute bottom-10 animate-bus-drive"
// //           style={{
// //             left: `${progress}%`,
// //             transform: `translateX(-${progress}%)`,
// //           }}
// //         >
// //           <div className="relative w-48 h-16">
// //             {/* Bus body */}
// //             <div className="absolute w-36 h-12 bg-gradient-to-b from-blue-500 to-blue-600 rounded-lg shadow-lg"></div>

// //             {/* Bus front */}
// //             <div className="absolute right-0 w-12 h-12 bg-gradient-to-b from-blue-500 to-blue-600 rounded-r-lg shadow-lg"></div>

// //             {/* Windows */}
// //             <div className="absolute top-2 left-4 w-4 h-4 bg-gradient-to-br from-cyan-200 to-blue-300 rounded-sm opacity-80"></div>
// //             <div className="absolute top-2 left-12 w-4 h-4 bg-gradient-to-br from-cyan-200 to-blue-300 rounded-sm opacity-80"></div>
// //             <div className="absolute top-2 left-20 w-4 h-4 bg-gradient-to-br from-cyan-200 to-blue-300 rounded-sm opacity-80"></div>
// //             <div className="absolute top-2 left-28 w-4 h-4 bg-gradient-to-br from-cyan-200 to-blue-300 rounded-sm opacity-80"></div>
// //             <div className="absolute top-2 right-2 w-6 h-5 bg-gradient-to-br from-cyan-200 to-blue-300 rounded-sm opacity-80"></div>

// //             {/* Wheels with animation */}
// //             <div className="absolute bottom-0 left-6 w-6 h-6 animate-spin">
// //               <div className="w-6 h-6 bg-gray-800 rounded-full border-2 border-gray-600">
// //                 <div className="w-4 h-1 bg-gray-600 rounded-full absolute top-2 left-1"></div>
// //               </div>
// //             </div>
// //             <div className="absolute bottom-0 right-8 w-6 h-6 animate-spin">
// //               <div className="w-6 h-6 bg-gray-800 rounded-full border-2 border-gray-600">
// //                 <div className="w-4 h-1 bg-gray-600 rounded-full absolute top-2 left-1"></div>
// //               </div>
// //             </div>

// //             {/* Lights */}
// //             <div className="absolute bottom-3 right-0 w-2 h-2 bg-yellow-300 rounded-full shadow-lg shadow-yellow-200"></div>
// //             <div className="absolute bottom-8 right-0 w-2 h-2 bg-red-500 rounded-full shadow-sm shadow-red-400"></div>

// //             {/* Light beam effect */}
// //             <div className="absolute bottom-3 right-0 w-8 h-2 bg-gradient-to-r from-yellow-200 to-transparent"></div>
// //           </div>
// //         </div>

// //         {/* Loading text with pulse effect */}
// //         {/* <div className="absolute bottom-24 left-0 right-0 text-center text-xl font-bold text-white">
// //           <span className="inline-block animate-pulse">Loading</span>
// //           <span className="inline-block animate-bounce-slow">.</span>
// //           <span className="inline-block animate-bounce-slow delay-100">.</span>
// //           <span className="inline-block animate-bounce-slow delay-200">.</span>
// //         </div> */}
// //       </div>

// //       {/* Progress percentage */}
// //       <div className="mt-4 text-sm text-cyan-300 font-mono">{progress}%</div>
// //     </div>
// //   );
// // };

// // // Add custom animations and styles
// // const style = document.createElement("style");
// // style.innerHTML = `
// //   @keyframes bus-drive {
// //     0% {
// //       transform: translateY(0px);
// //     }
// //     50% {
// //       transform: translateY(-2px);
// //     }
// //     100% {
// //       transform: translateY(0px);
// //     }
// //   }
// //   .animate-bus-drive {
// //     animation: bus-drive 0.5s ease-in-out infinite;
// //   }

// //   @keyframes cloud-1 {
// //     0% {
// //       transform: translateX(-30px);
// //     }
// //     100% {
// //       transform: translateX(400px);
// //     }
// //   }
// //   .animate-cloud-1 {
// //     animation: cloud-1 15s linear infinite;
// //   }

// //   @keyframes cloud-2 {
// //     0% {
// //       transform: translateX(-50px);
// //     }
// //     100% {
// //       transform: translateX(400px);
// //     }
// //   }
// //   .animate-cloud-2 {
// //     animation: cloud-2 20s linear infinite;
// //   }

// //   .animate-bounce-slow {
// //     animation: bounce 1s infinite;
// //   }

// //   .delay-100 {
// //     animation-delay: 0.2s;
// //   }

// //   .delay-200 {
// //     animation-delay: 0.4s;
// //   }
// // `;
// // document.head.appendChild(style);

// // export default BusLoading;

// import React, { useState, useEffect } from "react";

// const BusLoading = () => {
//   const [busPosition, setBusPosition] = useState(0);
//   const [passengers, setPassengers] = useState([]);
//   const [loadingProgress, setLoadingProgress] = useState(0);

//   // Progress simulation
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setLoadingProgress((prev) => {
//         const newValue = prev + 1;
//         if (newValue >= 100) {
//           clearInterval(timer);
//           return 100;
//         }
//         return newValue;
//       });
//     }, 120);

//     return () => clearInterval(timer);
//   }, []);

//   // Update bus position based on progress
//   useEffect(() => {
//     setBusPosition(loadingProgress);

//     // Add passengers at specific progress points
//     if (loadingProgress === 10) addPassenger(30);
//     if (loadingProgress === 25) addPassenger(45);
//     if (loadingProgress === 40) addPassenger(60);
//     if (loadingProgress === 55) addPassenger(75);
//     if (loadingProgress === 70) addPassenger(90);
//   }, [loadingProgress]);

//   const addPassenger = (position) => {
//     setPassengers((prev) => [
//       ...prev,
//       {
//         id: Date.now(),
//         position,
//         waiting: true,
//       },
//     ]);

//     // After 1 second, passenger boards the bus
//     setTimeout(() => {
//       setPassengers((prev) =>
//         prev.map((p) =>
//           p.position === position ? { ...p, waiting: false } : p
//         )
//       );
//     }, 1000);
//   };

//   return (
//     <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-sky-100 to-indigo-100">
//       <div className="relative w-full max-w-lg h-64 overflow-hidden">
//         {/* Progress text */}
//         <div className="absolute top-0 right-4 text-lg font-bold text-indigo-600">
//           {loadingProgress}%
//         </div>

//         {/* Scene background */}
//         <div className="absolute top-16 w-full">
//           {/* Bus stop sign */}
//           <div className="absolute left-1/4 bottom-0 w-2 h-16 bg-gray-700">
//             <div className="absolute -left-3 top-0 w-8 h-6 bg-blue-600 flex items-center justify-center">
//               <div className="text-white text-xs font-bold">BUS</div>
//             </div>
//           </div>

//           {/* Bus shelter */}
//           {/* <div className="absolute left-1/4 -left-2 bottom-0">
//             <div className="w-24 h-12 border-2 border-gray-400 bg-gray-100 bg-opacity-50 rounded-md"></div>
//             <div className="absolute top-0 w-28 h-1 bg-gray-400"></div>
//           </div> */}

//           {/* Small city elements */}
//           <div className="absolute right-12 bottom-0 w-16 h-32 bg-gray-200 rounded-t-lg"></div>
//           <div className="absolute right-4 bottom-0 w-8 h-24 bg-gray-300 rounded-t-lg"></div>
//           <div className="absolute right-28 bottom-0 w-12 h-20 bg-gray-400 rounded-t-lg"></div>
//         </div>

//         {/* Road */}
//         <div className="absolute bottom-6 w-full h-8 bg-gray-600">
//           {/* Road markings */}
//           <div className="absolute top-1/2 w-full h-1 flex justify-between items-center">
//             {[...Array(12)].map((_, i) => (
//               <div key={i} className="w-8 h-1 bg-yellow-400"></div>
//             ))}
//           </div>
//         </div>

//         {/* Bus path progress bar */}
//         <div className="absolute bottom-2 w-full h-2 bg-gray-300 rounded-full overflow-hidden">
//           <div
//             className="h-full bg-indigo-500 rounded-full transition-all duration-300 ease-out"
//             style={{ width: `${loadingProgress}%` }}
//           ></div>
//         </div>

//         {/* Passengers */}
//         {passengers.map((passenger) =>
//           passenger.waiting ? (
//             <div
//               key={passenger.id}
//               className="absolute bottom-14 animate-waiting"
//               style={{ left: `${passenger.position}%` }}
//             >
//               <div className="flex flex-col items-center">
//                 {/* Head */}
//                 <div className="w-4 h-4 bg-orange-300 rounded-full"></div>
//                 {/* Body */}
//                 <div className="w-4 h-6 bg-blue-500 rounded-md"></div>
//                 {/* Legs */}
//                 <div className="flex">
//                   <div className="w-1 h-3 bg-gray-700"></div>
//                   <div className="w-1 h-3 bg-gray-700 ml-1"></div>
//                 </div>
//               </div>
//             </div>
//           ) : null
//         )}

//         {/* Bus */}
//         <div
//           className="absolute bottom-14"
//           style={{
//             left: `${busPosition}%`,
//             transform: `translateX(-50%) ${
//               busPosition > 95 ? "rotate(5deg)" : ""
//             }`,
//             transition: "all 0.5s ease-out",
//           }}
//         >
//           <div className="relative w-40 h-20">
//             {/* Bus body */}
//             <div className="w-40 h-14 bg-yellow-400 rounded-lg shadow-lg border-b-4 border-yellow-500">
//               {/* Door - open when stopped */}
//               <div
//                 className={`absolute top-4 left-4 h-10 w-6 transition-all duration-300 ${
//                   [10, 25, 40, 55, 70].includes(loadingProgress)
//                     ? "bg-sky-200"
//                     : "bg-gray-800"
//                 }`}
//               ></div>

//               {/* Windows */}
//               <div className="absolute top-2 left-14 right-4 h-6 flex space-x-3">
//                 <div className="w-5 h-5 bg-sky-200 rounded-sm"></div>
//                 <div className="w-5 h-5 bg-sky-200 rounded-sm"></div>
//                 <div className="w-5 h-5 bg-sky-200 rounded-sm"></div>
//                 <div className="w-5 h-5 bg-sky-200 rounded-sm"></div>
//               </div>

//               {/* Front window */}
//               <div className="absolute top-2 right-2 w-6 h-6 bg-sky-200 rounded-tr-lg"></div>
//             </div>

//             {/* Wheels with animation */}
//             <div className="absolute bottom-0 left-6 w-6 h-6 animate-spin">
//               <div className="w-6 h-6 bg-gray-800 rounded-full border border-gray-900"></div>
//               <div className="absolute top-3 left-1 w-4 h-px bg-gray-500"></div>
//             </div>
//             <div className="absolute bottom-0 right-10 w-6 h-6 animate-spin">
//               <div className="w-6 h-6 bg-gray-800 rounded-full border border-gray-900"></div>
//               <div className="absolute top-3 left-1 w-4 h-px bg-gray-500"></div>
//             </div>

//             {/* Headlights - glow when in motion */}
//             <div
//               className={`absolute top-8 right-0 w-2 h-2 bg-yellow-300 rounded-full ${
//                 ![10, 25, 40, 55, 70].includes(loadingProgress)
//                   ? "animate-pulse shadow-lg shadow-yellow-200"
//                   : ""
//               }`}
//             ></div>
//           </div>

//           {/* Passenger counter */}
//           <div className="absolute -top-6 right-0 bg-indigo-600 text-white text-xs px-2 py-1 rounded-full">
//             {passengers.filter((p) => !p.waiting).length} / 5
//           </div>
//         </div>

//         {/* Loading text */}
//         <div className="absolute bottom-24 left-0 right-0 text-center">
//           <div className="inline-flex items-center bg-white bg-opacity-70 px-4 py-2 rounded-full shadow-md">
//             <span className="text-lg font-medium text-indigo-700">
//               {loadingProgress < 20
//                 ? "Starting route..."
//                 : loadingProgress < 40
//                 ? "Picking up passengers..."
//                 : loadingProgress < 70
//                 ? "On the way..."
//                 : loadingProgress < 95
//                 ? "Almost there..."
//                 : "Arrived!"}
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Add custom animations
// const style = document.createElement("style");
// style.innerHTML = `
//   @keyframes waiting {
//     0%, 100% {
//       transform: translateY(0);
//     }
//     50% {
//       transform: translateY(-2px);
//     }
//   }
//   .animate-waiting {
//     animation: waiting 1s ease-in-out infinite;
//   }
// `;
// document.head.appendChild(style);

// export default BusLoading;

import React, { useState, useEffect } from "react";

const BusLoading = () => {
  const [busPosition, setBusPosition] = useState(0);
  const [passengers, setPassengers] = useState([]);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [dayNightCycle, setDayNightCycle] = useState(0);
  const [isRaining, setIsRaining] = useState(false);

  // Progress simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingProgress((prev) => {
        const newValue = prev + 1;
        if (newValue >= 100) {
          clearInterval(timer);
          return 100;
        }
        return newValue;
      });
    }, 120);

    return () => clearInterval(timer);
  }, []);

  // Update bus position and day/night cycle based on progress
  useEffect(() => {
    setBusPosition(loadingProgress);
    setDayNightCycle(loadingProgress);

    // Add passengers at specific progress points
    if (loadingProgress === 10) addPassenger(30, "blue");
    if (loadingProgress === 25) addPassenger(45, "green");
    if (loadingProgress === 40) addPassenger(60, "red");
    if (loadingProgress === 55) addPassenger(75, "purple");
    if (loadingProgress === 70) addPassenger(90, "orange");

    // Begin rain at certain point
    if (loadingProgress === 50) setIsRaining(true);
    if (loadingProgress === 85) setIsRaining(false);
  }, [loadingProgress]);

  const addPassenger = (position, color) => {
    setPassengers((prev) => [
      ...prev,
      {
        id: Date.now(),
        position,
        color,
        waiting: true,
        hasUmbrella: isRaining,
      },
    ]);

    // After 1 second, passenger boards the bus
    setTimeout(() => {
      setPassengers((prev) =>
        prev.map((p) =>
          p.position === position ? { ...p, waiting: false } : p
        )
      );
    }, 1000);
  };

  // Background style based on time of day
  const getBgStyle = () => {
    if (dayNightCycle < 20) return "from-sky-200 to-blue-300"; // Early morning
    if (dayNightCycle < 40) return "from-sky-100 to-blue-200"; // Morning
    if (dayNightCycle < 60) return "from-blue-100 to-indigo-100"; // Midday
    if (dayNightCycle < 80) return "from-orange-200 to-purple-300"; // Sunset
    return "from-indigo-900 to-blue-900"; // Night
  };

  return (
    <div
      className={`flex flex-col justify-center items-center h-screen bg-gradient-to-br ${getBgStyle()} transition-all duration-1000`}
    >
      <div className="relative w-full max-w-lg h-64 overflow-hidden">
        {/* Weather effects */}
        {isRaining && (
          <div className="absolute inset-0 rain-container overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="rain-drop bg-blue-400"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDuration: `${0.5 + Math.random() * 0.3}s`,
                  animationDelay: `${Math.random() * 0.5}s`,
                }}
              ></div>
            ))}
          </div>
        )}

        {/* Sun/Moon */}
        <div
          className={`absolute w-12 h-12 rounded-full ${
            dayNightCycle < 80 ? "bg-yellow-300" : "bg-gray-200"
          } transition-all duration-1000`}
          style={{
            top: `${Math.sin((dayNightCycle / 100) * Math.PI) * -30 + 35}%`,
            right: `${dayNightCycle}%`,
            opacity: dayNightCycle > 80 ? 0.8 : 1,
            boxShadow:
              dayNightCycle < 80
                ? "0 0 40px rgba(250, 204, 21, 0.4)"
                : "0 0 20px rgba(229, 231, 235, 0.2)",
          }}
        ></div>

        {/* Progress text */}
        <div
          className={`absolute top-2 right-4 text-lg font-bold ${
            dayNightCycle > 80 ? "text-white" : "text-indigo-700"
          } transition-colors duration-1000`}
        >
          {loadingProgress}%
        </div>

        {/* Scene background */}
        <div className="absolute top-16 w-full">
          {/* Bus stop sign */}
          <div className="absolute left-1/4 bottom-0 w-2 h-16 bg-gray-700">
            <div className="absolute -left-3 top-0 w-8 h-6 bg-blue-600 flex items-center justify-center">
              <div className="text-white text-xs font-bold">BUS</div>
            </div>
          </div>

          {/* Bus shelter */}
          {/* <div className="absolute left-1/4 -left-6 bottom-0">
            <div className="w-28 h-14 border-2 border-gray-400 bg-gray-100 bg-opacity-50 rounded-md relative">
              <div className="absolute bottom-2 left-2 right-2 h-2 bg-gray-600"></div>
              <div className="absolute -top-1 -left-2 -right-2 h-1 bg-gray-500"></div>
            </div>
          </div> */}

          {/* Small city elements with lights at night */}
          <div className="absolute right-12 bottom-0 w-16 h-32 bg-gray-200 rounded-t-lg">
            {dayNightCycle > 80 && (
              <div className="grid grid-cols-2 gap-1 p-1">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="w-full h-3 bg-yellow-300 opacity-80"
                  ></div>
                ))}
              </div>
            )}
          </div>
          <div className="absolute right-4 bottom-0 w-8 h-24 bg-gray-300 rounded-t-lg">
            {dayNightCycle > 80 && (
              <div className="grid grid-cols-1 gap-1 p-1">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-full h-3 bg-yellow-300 opacity-80"
                  ></div>
                ))}
              </div>
            )}
          </div>
          <div className="absolute right-28 bottom-0 w-12 h-20 bg-gray-400 rounded-t-lg">
            {dayNightCycle > 80 && (
              <div className="grid grid-cols-1 gap-1 p-1">
                {[...Array(2)].map((_, i) => (
                  <div
                    key={i}
                    className="w-full h-3 bg-yellow-300 opacity-80"
                  ></div>
                ))}
              </div>
            )}
          </div>

          {/* Street lamp */}
          <div className="absolute right-36 bottom-0">
            <div className="w-2 h-24 bg-gray-700"></div>
            <div className="absolute top-0 -left-3 w-8 h-4 bg-gray-800 rounded-t-lg flex justify-center">
              {dayNightCycle > 80 && (
                <div className="w-4 h-1 bg-yellow-300 shadow-lg shadow-yellow-200 animate-pulse"></div>
              )}
            </div>
          </div>
        </div>

        {/* Road with lighting effect */}
        <div
          className={`absolute bottom-6 w-full h-8 bg-gray-700 transition-all duration-1000 ${
            dayNightCycle > 80 ? "shadow-inner" : ""
          }`}
        >
          {/* Road markings */}
          <div className="absolute top-1/2 w-full h-1 flex justify-between items-center">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="w-8 h-1 bg-yellow-400"></div>
            ))}
          </div>
        </div>

        {/* Bus path progress bar */}
        <div className="absolute bottom-2 w-full h-2 bg-gray-300 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${loadingProgress}%` }}
          ></div>
        </div>

        {/* Passengers */}
        {passengers.map((passenger) =>
          passenger.waiting ? (
            <div
              key={passenger.id}
              className="absolute bottom-14 animate-waiting"
              style={{ left: `${passenger.position}%` }}
            >
              <div className="flex flex-col items-center">
                {/* Umbrella if raining */}
                {passenger.hasUmbrella && (
                  <div className="w-8 h-2 bg-gray-800 rounded-t-full -mb-1"></div>
                )}
                {/* Head */}
                <div className="w-4 h-4 bg-orange-300 rounded-full"></div>
                {/* Body */}
                <div
                  className={`w-4 h-6 bg-${passenger.color}-500 rounded-md`}
                ></div>
                {/* Legs */}
                <div className="flex">
                  <div className="w-1 h-3 bg-gray-800"></div>
                  <div className="w-1 h-3 bg-gray-800 ml-1"></div>
                </div>
              </div>
            </div>
          ) : null
        )}

        {/* Bus */}
        <div
          className="absolute bottom-14"
          style={{
            left: `${busPosition}%`,
            transform: `translateX(-50%) ${
              busPosition > 95 ? "rotate(5deg)" : ""
            }`,
            transition: "all 0.5s ease-out",
          }}
        >
          <div className="relative w-40 h-20">
            {/* Bus body */}
            <div className="w-40 h-14 bg-yellow-400 rounded-lg shadow-lg border-b-4 border-yellow-500">
              {/* Door - open when stopped */}
              <div
                className={`absolute top-4 left-4 h-10 w-6 transition-all duration-300 ${
                  [10, 25, 40, 55, 70].includes(loadingProgress)
                    ? "bg-sky-200"
                    : "bg-gray-800"
                }`}
              ></div>

              {/* Windows */}
              <div className="absolute top-2 left-14 right-4 h-6 flex space-x-3">
                <div
                  className={`w-5 h-5 rounded-sm ${
                    dayNightCycle > 80 ? "bg-yellow-100" : "bg-sky-200"
                  }`}
                ></div>
                <div
                  className={`w-5 h-5 rounded-sm ${
                    dayNightCycle > 80 ? "bg-yellow-100" : "bg-sky-200"
                  }`}
                ></div>
                <div
                  className={`w-5 h-5 rounded-sm ${
                    dayNightCycle > 80 ? "bg-yellow-100" : "bg-sky-200"
                  }`}
                ></div>
                <div
                  className={`w-5 h-5 rounded-sm ${
                    dayNightCycle > 80 ? "bg-yellow-100" : "bg-sky-200"
                  }`}
                ></div>
              </div>

              {/* Front window */}
              <div
                className={`absolute top-2 right-2 w-6 h-6 rounded-tr-lg ${
                  dayNightCycle > 80 ? "bg-yellow-100" : "bg-sky-200"
                }`}
              ></div>

              {/* Windshield wipers - active when raining */}
              {isRaining && (
                <div className="absolute top-5 right-4 w-6 h-px bg-gray-800 origin-left animate-wiper"></div>
              )}
            </div>

            {/* Wheels with animation */}
            <div className="absolute bottom-0 left-6 w-6 h-6 animate-spin">
              <div className="w-6 h-6 bg-gray-800 rounded-full border border-gray-900">
                <div className="absolute top-3 left-1 w-4 h-px bg-gray-500"></div>
              </div>
            </div>
            <div className="absolute bottom-0 right-10 w-6 h-6 animate-spin">
              <div className="w-6 h-6 bg-gray-800 rounded-full border border-gray-900">
                <div className="absolute top-3 left-1 w-4 h-px bg-gray-500"></div>
              </div>
            </div>

            {/* Headlights - glow when in motion and especially at night */}
            <div
              className={`absolute top-8 right-0 w-2 h-2 bg-yellow-300 rounded-full ${
                ![10, 25, 40, 55, 70].includes(loadingProgress)
                  ? "animate-pulse"
                  : ""
              }`}
            >
              {dayNightCycle > 80 &&
                ![10, 25, 40, 55, 70].includes(loadingProgress) && (
                  <div className="absolute top-0 right-0 w-10 h-4 bg-gradient-to-l from-yellow-100 to-transparent opacity-60"></div>
                )}
            </div>

            {/* Taillights */}
            <div
              className={`absolute top-8 left-2 w-2 h-2 bg-red-500 rounded-full ${
                ![10, 25, 40, 55, 70].includes(loadingProgress)
                  ? "animate-pulse"
                  : ""
              }`}
            ></div>
          </div>

          {/* Passenger counter with improved UI */}
          <div className="absolute -top-6 right-0 bg-indigo-600 text-white text-xs px-2 py-1 rounded-full flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zm-4 7a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span>{passengers.filter((p) => !p.waiting).length} / 5</span>
          </div>
        </div>

        {/* Loading text with dynamic content */}
        <div className="absolute bottom-24 left-0 right-0 text-center">
          <div
            className={`inline-flex items-center px-4 py-2 rounded-full shadow-md ${
              dayNightCycle > 80
                ? "bg-indigo-900 bg-opacity-70 text-white"
                : "bg-white bg-opacity-70 text-indigo-700"
            }`}
          >
            <span className="text-lg font-medium">
              {loadingProgress < 15
                ? "Starting route..."
                : loadingProgress < 30
                ? "Picking up first passenger..."
                : loadingProgress < 45
                ? "En route to next stop..."
                : loadingProgress < 50
                ? "Weather changing ahead..."
                : loadingProgress < 60
                ? "Driving through rain..."
                : loadingProgress < 75
                ? "Getting darker outside..."
                : loadingProgress < 90
                ? "Nearly at our destination..."
                : loadingProgress < 100
                ? "Final approach..."
                : "We've arrived!"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add custom animations and weather effects
const style = document.createElement("style");
style.innerHTML = `
  @keyframes waiting {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-2px);
    }
  }
  .animate-waiting {
    animation: waiting 1s ease-in-out infinite;
  }
  
  @keyframes wiper {
    0%, 100% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(60deg);
    }
  }
  .animate-wiper {
    animation: wiper 1.2s ease-in-out infinite;
  }
  
  @keyframes rain {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(100vh);
    }
  }
  .rain-container {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .rain-drop {
    position: absolute;
    width: 1px;
    height: 15px;
    pointer-events: none;
    animation: rain linear infinite;
  }
`;
document.head.appendChild(style);

export default BusLoading;
