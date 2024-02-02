import React from "react";
import DashboardNav from "./components/dashboard/dashboardNav.jsx";
import DashboardStats from "./components/dashboard/dashboardStats.jsx";
import DashboardTableProduct from "./components/dashboard/dashboardTableProduct.jsx";

const DashboardProduct = () => {
  return (
    <>
      <div style={{ backgroundColor: "#f5f5f5" }}>
        <DashboardNav />
        <DashboardStats />
        <DashboardTableProduct />
      </div>
    </>
  );
};

export default DashboardProduct;
