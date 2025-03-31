import React from "react";
import { Route, Routes } from "react-router-dom";
// import SignupPage from "../components/UserAuthComponents/SignupPage";
// import LoginPage from "../components/UserAuthComponents/LoginPage";
// import RegisterPage from "../components/UserAuthComponents/RegisterPage";
import Login from "../components/authentication/Login";
// import Login from "../components/UserAuthComponents/Login";

const UserAuth = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/register" element={<RegisterPage />} /> */}
        {/* <Route path="/signup" element={<SignupPage />} /> */}
        {/* <Route path="/login" element={<LoginPage />} /> */}
      </Routes>
    </div>
  );
};

export default UserAuth;
