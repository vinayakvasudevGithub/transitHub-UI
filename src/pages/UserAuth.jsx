import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../features/auth/Login";

const UserAuth = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default UserAuth;
