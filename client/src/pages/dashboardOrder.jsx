import React from "react";
import DashboardNav from "./components/dashboard/dashboardNav.jsx";
import DashboardStats from "./components/dashboard/dashboardStats.jsx";
import DashboardTableOrder from "./components/dashboard/dashboardTableOrder.jsx";

const DashboardOrder = () => {
  return (
    <>
      <DashboardNav />
      <DashboardStats />
      <DashboardTableOrder />
    </>
  );
};

export default DashboardOrder;
