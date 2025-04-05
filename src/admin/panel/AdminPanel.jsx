import React, { useEffect } from "react";
import axios from "axios";

const AdminPanel = () => {
  useEffect(() => {
    axios.get("http://localhost:2001/auth/profile").then((res) => {
      console.log(res.data);
    });
  }, []);

  return <div>AdminPanel</div>;
};

export default AdminPanel;
