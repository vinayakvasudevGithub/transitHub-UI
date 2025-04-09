import axios from "axios";
import React, { useEffect, useState } from "react";

const Panel = () => {
  const [busData, setBusData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:2001/auth/profile", {
          withCredentials: true,
        });
        setBusData(response.data.buses);
      } catch (error) {}
    };
    fetchData();
  }, []);
  return (
    <div className="grid grid-cols-4">
      <div className="bg-red-100">
        <h1>name</h1>
      </div>
      <div>
        <h1 className="bg-green-200">user</h1>
      </div>
      <div>
        <h1 className="bg-blue-200">ticket</h1>
      </div>
      <div>qq</div>
    </div>
  );
};

export default Panel;
