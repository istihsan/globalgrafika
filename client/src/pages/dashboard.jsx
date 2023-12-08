import React from 'react';
import DashboardNav from './components/dashboardNav.jsx';
import DashboardMain from './components/dashboardMain.jsx';
import DashboardTable from './components/dashboardTable.jsx';

const Dashboard = () => {
  return (
    <>
        <div style={{ backgroundColor: '#f5f5f5' }}>
          <DashboardNav />
          <DashboardMain />
          <DashboardTable />
        </div>
    </>
  );
};

export default Dashboard;
