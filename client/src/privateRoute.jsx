import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Dashboard from "./pages/dashboard";

const PrivateRoute = () => {
  const isAuthenticated = !!localStorage.getItem("token");

  return isAuthenticated ? (
    <Dashboard />
  ) : (
    <Navigate to="/login" replace={true} />
  );
};

export default PrivateRoute;
