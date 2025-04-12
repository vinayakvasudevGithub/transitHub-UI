import { Bars3Icon, BellIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

const NavbarDashBoard = ({ user, sidebarOpen, setSidebarOpen }) => {
  return (
    <header className="bg-white shadow-sm z-10">
      <div className="flex items-center justify-between h-16 px-4 sm:px-6">
        {/* Left section */}
        <div className="flex items-center">
          <button
            type="button"
            // className="text-gray-500 hover:text-gray-600 lg:hidden"
            className="text-gray-500 hover:text-gray-600 "
            onClick={() => setSidebarOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" />
          </button>

          {/* Search */}
          <div className="ml-4 lg:ml-0 relative max-w-xs w-full">
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="search"
                name="search"
                className="block w-full bg-white py-2 pl-10 pr-3 border border-gray-300 rounded-md leading-5 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                placeholder="Search"
                type="search"
              />
            </div>
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center space-x-4">
          <button
            type="button"
            className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            <span className="sr-only">View notifications</span>
            <BellIcon className="h-6 w-6" />
          </button>

          {/* Profile dropdown */}
          <div className="relative">
            <div className="flex items-center">
              <button
                type="button"
                className="flex items-center focus:outline-none"
                id="user-menu"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span className="sr-only">Open user menu</span>
                {/* <div className="h-8 w-8 rounded-full bg-primary-500 flex items-center justify-center text-white font-medium">
                  JD
                </div> */}
                <span className="ml-2 text-sm font-medium text-gray-700  md:block">
                  {/* <span className="ml-2 text-sm font-medium text-gray-700 hidden md:block"> */}
                  {user?.name}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavbarDashBoard;
