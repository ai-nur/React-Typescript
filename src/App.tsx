import React from "react";
import { Login, Register } from "./components";
import {
  DashboardPage,
  ProductsPage,
  CreateProductPage,
  EditProductPage,
  UsersPage,
  CreateUserPage,
  EditUserPage,
} from "./pages";
import { Navigate, Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/create" element={<CreateProductPage />} />
          <Route path="/products/edit/:id" element={<EditProductPage />} />
        <Route path="/users" element={<UsersPage />} />
          <Route path="/users/create" element={<CreateUserPage />} />
          <Route path="/users/edit/:id" element={<EditUserPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};
