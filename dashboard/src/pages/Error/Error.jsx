import React from "react";
import { UseSelector, useSelector } from "react-redux";

import { useLocation } from "react-router-dom";

import Header from "../../components/Header/Header";

const Error = () => {
  const { isDarkMode } = useSelector((state) => state.theme);

  const location = useLocation().pathname;

  return (
    <div className="col-span-10 my-6 pr-9">
      <div className={`${isDarkMode ? "text-white" : "text-black"}`}>Error</div>
    </div>
  );
};

export default Error;
