import React from "react";
import DashboardNav from "./components/dashboard/dashboardNav.jsx";
import DashboardStats from "./components/dashboard/dashboardStats.jsx";
import DashboardMainCard from "./components/dashboard/dashboardMainCard.jsx";
import DashboardReport from "./components/dashboard/dashboardReport.jsx";

const Dashboard = () => {
  return (
    <>
      <div style={{ backgroundColor: "#f5f5f5" }}>
        <DashboardNav />
        <DashboardStats />
        <DashboardMainCard />
        <DashboardReport />
      </div>
    </>
  );
};

export default Dashboard;
