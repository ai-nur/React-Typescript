import React from "react";
import { Login, Register, DashboardComponent, StockComponent } from "./components";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <Routes >
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/stock" element={<StockComponent />} />
        <Route path="/" element={<DashboardComponent />} />

      </Routes>
    </div>
  );
};
