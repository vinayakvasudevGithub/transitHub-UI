import { Routes, Route, Link } from "react-router-dom";
import PageCombine from "./booking/PageCombine";
import ResultCombine from "./result/ResultCombine";
// import Menu from "./AddNew/AddNewApiFromClients";
import ClientsToUpload from "./AddNew/ClientsToUpload";
import OptionsToUpload from "./AddNew/OptionsToUpload";
import "./App.css";
import { useState } from "react";

function App() {
  const [ShowAddNew, SetShowAddNew] = useState(false);

  const ShowAndHide = () => {
    console.log("car");
  };

  return (
    <div>
      <div className="flex gap-2 sticky justify-center top-0 bg-yellow-300 p-1">
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
      </div>

      {ShowAddNew && <OptionsToUpload />}
      <Routes>
        <Route path="/*" element={<PageCombine />} />
        <Route path="/result/*" element={<ResultCombine />} />
        <Route path="/upload/*" element={<ClientsToUpload />} />
      </Routes>
    </div>
  );
}

export default App;
