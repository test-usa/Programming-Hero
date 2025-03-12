import React from "react";
import ChartPi from "../section/student-analytics/components/ChartPi";
import SuccessNav from "../section/helpDesk/components/SuccessNav";
import SuccessFooter from "../section/helpDesk/components/SuccessFooter";
import DashboardCards from "../section/student-analytics/components/Dashboard";

const Analytics = () => {
  return (
    <div>
      <SuccessNav />
      <ChartPi />
      <DashboardCards />
      <SuccessFooter />
    </div>
  );
};

export default Analytics;
