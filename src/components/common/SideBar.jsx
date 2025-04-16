// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";

// // const SideBar = () => {
// //   const navigate = useNavigate();
// //   const [sidebarOpen, setSidebarOpen] = useState(false);

// //   return (
// //     <div>
// //       <header className=" relative ">
// //         <button
// //           onClick={() => setSidebarOpen(!sidebarOpen)}
// //           className=" p-2 bg-red-300 rounded-md text-gray-500 hover:text-gray-600 focus:outline-none"
// //         >
// //           <svg
// //             className="h-6 w-6"
// //             fill="none"
// //             viewBox="0 0 24 24"
// //             stroke="currentColor"
// //           >
// //             <path
// //               strokeLinecap="round"
// //               strokeLinejoin="round"
// //               strokeWidth={2}
// //               d="M4 6h16M4 12h16M4 18h16"
// //             />
// //           </svg>
// //         </button>

// //         <div className="flex">
// //           <div
// //             className={`fixed inset-y-0 right-0 transform ${
// //               sidebarOpen ? "translate-x-0" : "translate-x-full"
// //             } transition-transform duration-200 ease-in-out z-50 w-64 bg-blue-700 text-white h-screen p-4`}
// //           >
// //             <div className="flex justify-between items-center mb-6">
// //               <h1 className="text-2xl font-bold">TravelEase</h1>
// //               <button
// //                 onClick={() => setSidebarOpen(false)}
// //                 className=" p-1 rounded-md text-blue-200 hover:text-white"
// //                 // className="md:hidden p-1 rounded-md text-blue-200 hover:text-white"
// //               >
// //                 <svg
// //                   className="h-6 w-6"
// //                   fill="none"
// //                   viewBox="0 0 24 24"
// //                   stroke="currentColor"
// //                 >
// //                   <path
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                     strokeWidth={2}
// //                     d="M6 18L18 6M6 6l12 12"
// //                   />
// //                 </svg>
// //               </button>
// //             </div>
// //             <p className="text-blue-100 text-sm mb-8">
// //               Book your journey in one click
// //             </p>
// //             <div className="space-y-2">
// //               <h2 className="font-medium text-blue-200 uppercase text-xs tracking-wider px-3 py-2">
// //                 Add New Transport
// //               </h2>
// //               <button
// //                 onClick={(e) => navigate("/dashboard")}
// //                 className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-600 transition-colors"
// //               >
// //                 Admin panel
// //               </button>
// //               <button
// //                 onClick={() => {
// //                   navigate("/upload/uploadbus");
// //                   setSidebarOpen(false);
// //                 }}
// //                 className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-600 transition-colors"
// //               >
// //                 <svg
// //                   xmlns="http://www.w3.org/2000/svg"
// //                   className="h-5 w-5"
// //                   fill="none"
// //                   viewBox="0 0 24 24"
// //                   stroke="currentColor"
// //                 >
// //                   <path
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                     strokeWidth={2}
// //                     d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
// //                   />
// //                 </svg>
// //                 <span>Bus</span>
// //               </button>
// //               <button
// //                 onClick={() => {
// //                   navigate("/upload/uploadflight");
// //                   setSidebarOpen(false);
// //                 }}
// //                 className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-600 transition-colors"
// //               >
// //                 <svg
// //                   xmlns="http://www.w3.org/2000/svg"
// //                   className="h-5 w-5"
// //                   fill="none"
// //                   viewBox="0 0 24 24"
// //                   stroke="currentColor"
// //                 >
// //                   <path
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                     strokeWidth={2}
// //                     d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
// //                   />
// //                 </svg>
// //                 <span>Flight</span>
// //               </button>
// //               <button
// //                 onClick={() => {
// //                   navigate("/upload/uploadtrain");
// //                   setSidebarOpen(false);
// //                 }}
// //                 className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-600 transition-colors"
// //               >
// //                 <svg
// //                   xmlns="http://www.w3.org/2000/svg"
// //                   className="h-5 w-5"
// //                   fill="none"
// //                   viewBox="0 0 24 24"
// //                   stroke="currentColor"
// //                 >
// //                   <path
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                     strokeWidth={2}
// //                     d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
// //                   />
// //                 </svg>
// //                 <span>Train</span>
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </header>
// //     </div>
// //   );
// // };

// // export default SideBar;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const SideBar = () => {
//   const navigate = useNavigate();
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <div>
//       <header className="relative">
//         {/* Toggle button */}
//         <button
//           onClick={() => setSidebarOpen(!sidebarOpen)}
//           className="p-2 bg-teal-600 hover:bg-teal-700 text-white rounded-md focus:outline-none"
//         >
//           <svg
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M4 6h16M4 12h16M4 18h16"
//             />
//           </svg>
//         </button>

//         {/* Sidebar */}
//         <div className="flex">
//           <div
//             className={`fixed inset-y-0 right-0 transform ${
//               sidebarOpen ? "translate-x-0" : "translate-x-full"
//             } transition-transform duration-300 ease-in-out z-50 w-64 bg-gradient-to-r from-teal-500 to-cyan-500 text-white h-screen p-5 rounded-l-xl shadow-lg`}
//           >
//             {/* Header */}
//             <div className="flex justify-between items-center mb-6">
//               <h1 className="text-2xl font-extrabold tracking-wide">
//                 transitHub
//               </h1>
//               <button
//                 onClick={() => setSidebarOpen(false)}
//                 className="p-1 text-white hover:text-gray-200"
//               >
//                 <svg
//                   className="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               </button>
//             </div>

//             <p className="text-sm text-white/80 mb-6">
//               Book your journey in one click
//             </p>

//             {/* Links */}
//             <div className="space-y-3">
//               <h2 className="text-xs uppercase tracking-wider text-white/80 font-semibold">
//                 Add New Transport
//               </h2>

//               <button
//                 onClick={() => {
//                   navigate("/dashboard");
//                   setSidebarOpen(false);
//                 }}
//                 className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-all"
//               >
//                 <span className="material-icons">dashboard</span>
//                 <span>Admin Panel</span>
//               </button>

//               <button
//                 onClick={() => {
//                   navigate("/upload/uploadbus");
//                   setSidebarOpen(false);
//                 }}
//                 className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-all"
//               >
//                 🚌 <span>Bus</span>
//               </button>

//               <button
//                 onClick={() => {
//                   navigate("/upload/uploadflight");
//                   setSidebarOpen(false);
//                 }}
//                 className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-all"
//               >
//                 ✈️ <span>Flight</span>
//               </button>

//               <button
//                 onClick={() => {
//                   navigate("/upload/uploadtrain");
//                   setSidebarOpen(false);
//                 }}
//                 className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-all"
//               >
//                 🚆 <span>Train</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>
//     </div>
//   );
// };

// export default SideBar;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <header className="relative">
        {/* Toggle Button */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-md hover:opacity-90"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Sidebar */}
        <div className="flex">
          <div
            className={`fixed inset-y-0 right-0 transform ${
              sidebarOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out z-50 w-64 bg-gradient-to-r from-teal-500 to-cyan-500 text-white h-screen p-5 rounded-l-xl shadow-xl`}
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">TravelEase</h1>
              <button
                onClick={() => setSidebarOpen(false)}
                className="p-1 text-white hover:text-gray-100"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <p className="text-white/80 text-sm mb-8">
              Book your journey in one click
            </p>

            {/* Navigation */}
            <div className="space-y-3">
              <h2 className="uppercase text-xs text-white/80 tracking-wide font-semibold">
                Add New Transport
              </h2>

              <button
                onClick={() => {
                  navigate("/dashboard");
                  setSidebarOpen(false);
                }}
                className="w-full flex items-center gap-3 p-3 rounded-md hover:bg-white/10 transition-all"
              >
                🛠️ <span>Admin Panel</span>
              </button>

              <button
                onClick={() => {
                  navigate("/upload/uploadbus");
                  setSidebarOpen(false);
                }}
                className="w-full flex items-center gap-3 p-3 rounded-md hover:bg-white/10 transition-all"
              >
                🚌 <span>Bus</span>
              </button>

              <button
                onClick={() => {
                  navigate("/upload/uploadflight");
                  setSidebarOpen(false);
                }}
                className="w-full flex items-center gap-3 p-3 rounded-md hover:bg-white/10 transition-all"
              >
                ✈️ <span>Flight</span>
              </button>

              <button
                onClick={() => {
                  navigate("/upload/uploadtrain");
                  setSidebarOpen(false);
                }}
                className="w-full flex items-center gap-3 p-3 rounded-md hover:bg-white/10 transition-all"
              >
                🚆 <span>Train</span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default SideBar;
