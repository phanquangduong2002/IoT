import React from "react";

import { useSelector } from "react-redux";

import Header from "../../components/Header/Header";
import MainDash from "../../components/MainDash/MainDash";

const Dashboard = () => {
  const { isDarkMode } = useSelector((state) => state.theme);

  return (
    <div className="col-span-10 my-6 pr-9">
      <div className={`${isDarkMode ? "text-white" : "text-black"}`}>
        <Header />
        <MainDash />
      </div>
    </div>
  );
};

export default Dashboard;
