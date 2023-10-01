import React, { useState } from "react";
import DashboardNav from "./components/dashboardNav.tsx";

const Dashboard = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <>
    <DashboardNav />
    </>
  );
};

export default Dashboard;