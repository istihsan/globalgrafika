import React from "react";
import DashboardNav from "./components/dashboard/dashboardNav.jsx";
import DashboardStats from "./components/dashboard/dashboardStats.jsx";
import DashboardMainCard from "./components/dashboard/dashboardMainCard.jsx";

const Dashboard = () => {
  return (
    <>
      <div style={{ backgroundColor: "#f5f5f5" }}>
        <DashboardNav />
        <DashboardStats />
        <DashboardMainCard />
      </div>
    </>
  );
};

export default Dashboard;
