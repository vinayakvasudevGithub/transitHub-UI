// import { NavLink } from "react-router-dom";
// import {
//   HomeIcon,
//   UsersIcon,
//   ShoppingBagIcon,
//   CogIcon,
//   XMarkIcon,
//   ArrowRightOnRectangleIcon,
// } from "@heroicons/react/24/outline";

// const SidebarDashBoard = ({ sidebarOpen, setSidebarOpen }) => {
//   const navigation = [
//     { name: "Dashboard", href: "/dashboard/", icon: HomeIcon },
//     { name: "Users", href: "/dashboard/users", icon: UsersIcon },
//     { name: "Products", href: "/dashboard/products", icon: ShoppingBagIcon },
//     { name: "Settings", href: "/dashboard/settings", icon: CogIcon },
//   ];

//   return (
//     <>
//       {/* Mobile sidebar backdrop */}
//       {sidebarOpen && (
//         <div
//           className="fixed inset-0 bg-gray-900 bg-opacity-50 z-20 "
//           onClick={() => setSidebarOpen(false)}
//         ></div>
//       )}

//       {/* Sidebar */}
//       <div
//         className={`  fixed inset-y-0 left-0  z-30 w-64 bg-white dark:bg-dark-800 transform ${
//           sidebarOpen ? "translate-x-0" : "-translate-x-full"
//         }  transition-transform duration-200 ease-in-out shadow-lg`}
//       >
//         {/* <div
//         className={`  fixed inset-y-0 left-0 z-30 w-64 bg-white dark:bg-dark-800 transform ${
//           sidebarOpen ? "translate-x-0" : "-translate-x-full"
//         } lg:translate-x-0 transition-transform duration-200 ease-in-out shadow-lg`}
//       > */}
//         <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 dark:border-gray-700">
//           <span className="text-xl font-semibold text-gray-800 dark:text-white">
//             Admin Panel
//           </span>
//           <button
//             className=" text-gray-500 hover:text-gray-600"
//             onClick={() => setSidebarOpen(false)}
//           >
//             <XMarkIcon className="h-6 w-6" />
//           </button>
//         </div>

//         <nav className="flex-1 overflow-y-auto py-4">
//           <div className="space-y-1 px-2">
//             {navigation.map((item) => (
//               <NavLink
//                 key={item.name}
//                 to={item.href}
//                 className={({ isActive }) =>
//                   `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
//                     isActive
//                       ? "bg-primary-100 text-primary-700"
//                       : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
//                   }`
//                 }
//                 onClick={() => setSidebarOpen(false)}
//               >
//                 <item.icon className="mr-3 h-5 w-5" />
//                 {item.name}
//               </NavLink>
//             ))}
//           </div>
//         </nav>

//         <div className="p-4 border-t border-gray-200 dark:border-gray-700">
//           <button className="group flex items-center w-full px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900">
//             <ArrowRightOnRectangleIcon className="mr-3 h-5 w-5" />
//             Sign out
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SidebarDashBoard;

import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  UsersIcon,
  ShoppingBagIcon,
  CogIcon,
  XMarkIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";

const SidebarDashBoard = ({ sidebarOpen, setSidebarOpen }) => {
  const navigation = [
    { name: "Dashboard", href: "/dashboard/", icon: HomeIcon },
    { name: "Users", href: "/dashboard/users", icon: UsersIcon },
    { name: "Products", href: "/dashboard/products", icon: ShoppingBagIcon },
    { name: "Settings", href: "/dashboard/settings", icon: CogIcon },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 z-40 bg-gradient-to-r from-teal-500 to-cyan-500 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out shadow-lg lg:translate-x-0`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/20">
          <h1 className="text-white text-2xl font-bold tracking-wide">Admin</h1>
          <button
            className="text-white lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="px-4 py-6 space-y-2">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `flex items-center px-4 py-3 rounded-lg font-medium text-sm transition-all ${
                  isActive
                    ? "bg-white text-teal-600 shadow"
                    : "text-white hover:bg-white/20 hover:backdrop-blur-sm"
                }`
              }
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Footer Sign Out */}
        <div className="absolute bottom-0 w-full px-4 py-5 border-t border-white/20">
          <button className="flex items-center w-full text-white hover:bg-white/20 px-4 py-3 rounded-lg text-sm font-medium transition-all">
            <ArrowRightOnRectangleIcon className="w-5 h-5 mr-3" />
            Sign Out
          </button>
        </div>
      </div>
    </>
  );
};

export default SidebarDashBoard;
