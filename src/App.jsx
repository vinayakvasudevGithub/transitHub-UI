import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import SearchResults from "./pages/SearchResults";
import PaymentPage from "./pages/PaymentPage";
import { Toaster } from "react-hot-toast";
import UserAuth from "./pages/UserAuth";
import axios from "axios";
import { UserContextProvider } from "../context/UserContext";
import Admin from "./pages/Admin";
import Book from "./pages/Book";
import MyTrip from "./pages/MyTrip";
import Upload from "./pages/Upload";

// axios.defaults.baseURL = "http://localhost:3001";
// axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <UserContextProvider>
        <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
        <Routes>
          <Route path="/*" element={<UserAuth />} />
          <Route path="/home/*" element={<HomePage />} />
          <Route path="/result/*" element={<SearchResults />} />
          <Route path="/book/*" element={<Book />} />
          <Route path="/payment/*" element={<PaymentPage />} />
          <Route path="/admin/*" element={<Admin />} />
          <Route path="/upload/*" element={<Upload />} />
          <Route path="/mytrip/*" element={<MyTrip />} />
        </Routes>
      </UserContextProvider>
    </div>
  );
}

export default App;
