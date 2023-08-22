import React from "react";
import { UseSelector, useSelector } from "react-redux";

const Error = () => {
  const { isDarkMode } = useSelector((state) => state.theme);
  return (
    <div className="col-span-10">
      <div className={`${isDarkMode ? "text-white" : "text-black"}`}>Error</div>
    </div>
  );
};

export default Error;
