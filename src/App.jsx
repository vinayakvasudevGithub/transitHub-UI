import { Routes, Route, Link } from "react-router-dom";
// import ResultCombine from "./result/ResultCombine";
// import Menu from "./AddNew/AddNewApiFromClients";
import ClientsToUpload from "./AddNew/ClientsToUpload";
import OptionsToUpload from "./AddNew/OptionsToUpload";
// import BookingPagesCompined from "./toBook/BookingPagesCompined";
import "./App.css";
import { useState } from "react";
import PayMentPageCombined from "./payment/PayMentPageCombined";
import HomePage from "./pages/HomePage";
import SearchResults from "./pages/SearchResults";
import BookingPage from "./pages/BookingPage";
import PaymentPage from "./pages/PaymentPage";
import BookedPage from "./pages/BookedPage";
import { Toaster } from "react-hot-toast";
// import UserAuth from "./pages/UserAuth";
import axios from "axios";
// import { UserContextProvider } from "../context/UserContext";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* <UserContextProvider> */}
      <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
      <Routes>
        {/* <Route path="/*" element={<UserAuth />} /> */}
        <Route path="/home/*" element={<HomePage />} />
        <Route path="/result/*" element={<SearchResults />} />
        <Route path="/upload/*" element={<ClientsToUpload />} />
        <Route path="/booking/*" element={<BookingPage />} />
        <Route path="/payment/*" element={<PaymentPage />} />
        <Route path="/booked/*" element={<BookedPage />} />
      </Routes>
      {/* </UserContextProvider> */}
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div className=" bg-gray-50 h-screen">
//       <UserContextProvider>
//         <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
// <Routes>
//   <Route path="/*" element={<UserAuth />} />
//   <Route path="/home/*" element={<HomePage />} />
//   <Route path="/result/*" element={<SearchResults />} />
//   <Route path="/upload/*" element={<ClientsToUpload />} />
//   <Route path="/booking/*" element={<BookingPage />} />
//   <Route path="/payment/*" element={<PaymentPage />} />
//   <Route path="/booked/*" element={<BookedPage />} />
// </Routes>
//       </UserContextProvider>
//     </div>
//   );
// }
