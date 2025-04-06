import React, { useContext } from "react";
import BusTrip from "../features/MyTrips/BusTrip";
import { UserContext } from "../../context/UserContext";
import FlyTrip from "../features/MyTrips/FlyTrip";

const MyTrip = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <div className="text-center mb-10">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Welcome, {user?.user?.name}!
        </h1>
        <h2 className="mt-2 text-xl font-semibold text-gray-600">
          Your Bookings
        </h2>
      </div>
      <BusTrip />
      <FlyTrip />
    </div>
  );
};

export default MyTrip;
