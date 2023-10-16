import React from "react";
import { UseSelector, useSelector } from "react-redux";

import { useLocation } from "react-router-dom";

import Header from "../../components/Header/Header";
import DataStatistics from "../../components/DataStatistics/DataStatistics";

const Analytics = () => {
  const { isDarkMode } = useSelector((state) => state.theme);
  return (
    <div className="col-span-10 my-6 pr-9">
      <div className={`${isDarkMode ? "text-white" : "text-black"}`}>
        <Header />
        <DataStatistics />
      </div>
    </div>
  );
};

export default Analytics;
