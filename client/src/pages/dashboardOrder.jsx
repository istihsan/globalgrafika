import React from "react";
import DashboardNav from "./components/dashboard/dashboardNav.jsx";
import DashboardStats from "./components/dashboard/dashboardStats.jsx";
import DashboardTableOrder from "./components/dashboard/dashboardTableOrder.jsx";

const DashboardOrder = () => {
  return (
    <>
      <div style={{ backgroundColor: "#f5f5f5" }}>
        <DashboardNav />
        <DashboardStats />
        <DashboardTableOrder />
      </div>
    </>
  );
};

export default DashboardOrder;
