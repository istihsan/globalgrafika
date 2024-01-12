import React from "react";
import DashboardNav from "./components/dashboard/dashboardNav.jsx";
import DashboardMain from "./components/dashboard/dashboardMain.jsx";
import DashboardTable from "./components/dashboard/dashboardTableProduct.jsx";

const Dashboard = () => {
  return (
    <>
      <div style={{ backgroundColor: "#f5f5f5" }}>
        <DashboardNav />
        <DashboardMain />
        <DashboardTable />
      </div>
    </>
  );
};

export default Dashboard;
