import React from "react";
import { useLocation } from "react-router-dom";

const TrainPayment = () => {
  const location = useLocation();
  const userData = location?.state?.formData;
  //   console.log(userData.userDetails);
  return (
    <div className="bg-red-200 ">
      <div className=" bg-blue-200 grid sm:grid-cols-2 p-1   ">
        <div className="bg-gray-200 p-2 col-span-1 flex justify-center items-center">
          <div className="bg-yellow-200 h-[10rem] w-[20rem] ">
            <div className="bg-red-300">kk</div>
          </div>
        </div>
        <div className="bg-yellow-200 p-2 col-span-1">mm</div>
      </div>
    </div>
  );
};

export default TrainPayment;
