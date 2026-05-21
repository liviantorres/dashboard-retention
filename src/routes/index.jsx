import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import RecoverPassword from "../pages/RecoverPassword";
import Dashboard from "../pages/Dashboard";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("@App:tokes") ? true : false;

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recoverpassword" element={<RecoverPassword />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
}
