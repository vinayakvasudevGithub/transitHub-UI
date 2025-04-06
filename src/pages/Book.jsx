import React from "react";
import { Route, Routes } from "react-router-dom";
import BusBook from "../features/book/BusBook";
import FlyBook from "../features/book/FlyBook";
import RailBook from "../features/book/RailBook";

const Book = () => {
  return (
    <div>
      <Routes>
        <Route path="/bus" element={<BusBook />} />
        <Route path="/flight" element={<FlyBook />} />
        <Route path="/train" element={<RailBook />} />
      </Routes>
    </div>
  );
};

export default Book;
