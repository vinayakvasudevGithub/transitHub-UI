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

function App() {
  const [ShowAddNew, SetShowAddNew] = useState(false);

  const ShowAndHide = () => {
    console.log("car");
  };

  return (
    // <div className=" bg-gradient-to-r from-blue-100 to-blue-500 h-screen">
    // <div className=" bg-gradient-to-b from-sky-400 to-sky-200 h-screen">
    <div className=" bg-gray-50 h-screen">
      {/* <div className="flex gap-2 sticky justify-center top-0 bg-yellow-300 p-1">
        <Link to={"/"} className="bg-blue-600">
          home page
        </Link>
        <button
          onClick={(e) => {
            !ShowAddNew ? SetShowAddNew(true) : SetShowAddNew(false);
          }}
          className="bg-green-500"
        >
          upload
        </button>
      </div> */}

      {/* {ShowAddNew && <OptionsToUpload />} */}
      {/* <OptionsToUpload /> */}

      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="/result/*" element={<SearchResults />} />
        <Route path="/upload/*" element={<ClientsToUpload />} />
        <Route path="/booking/*" element={<BookingPage />} />
        <Route path="/payment/*" element={<PaymentPage />} />
      </Routes>
    </div>
  );
}

export default App;
