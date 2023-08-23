import React, { useState } from "react";

import { useSelector } from "react-redux";

import { motion } from "framer-motion";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyCustomToastContainer = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={2000}
      newestOnTop={false}
      icon={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      style={{
        fontSize: "15px",
        borderRadius: "16px",
        padding: "16px",
        width: "240px",
      }}
    />
  );
};

const Control = () => {
  const { isDarkMode } = useSelector((state) => state.theme);

  const notify = (notifyMsg, state) =>
    toast(notifyMsg, { type: state, theme: "colored" });
  const turnOnLamp = (e) => {
    const id = e.target.id;
    notify(`Đèn ${id} đã bật`, "success");
  };

  const turnOffLamp = (e) => {
    const id = e.target.id;
    notify(`Đèn ${id} đã tắt`, "warning");
  };

  const handleClickLamp = (e) => {
    const checked = e.target.checked;
    if (checked) turnOnLamp(e);
    else turnOffLamp(e);
  };
  return (
    <div className="h-[10000px] mt-20">
      <div className="grid grid-cols-4 gap-8 items-start justify-between">
        <div className="col-span-3">Chart</div>
        <div className="col-span-1 flex flex-col items-center justify-center gap-10">
          <div className="flex flex-col">
            <span
              className={`mb-2 uppercase text-xl font-semibold tracking-wider ${
                isDarkMode
                  ? "text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.7)]"
                  : "text-black drop-shadow-[0_1.2px_1.2px_rgba(256,256,256,0.7)]`"
              }`}
            >
              Đèn 1
            </span>
            <input
              type="checkbox"
              id="1"
              className="toggle toggle-success toggle-lg"
              onClick={handleClickLamp}
            />
          </div>
          <div className="flex flex-col">
            <span
              className={`mb-2 uppercase text-xl font-semibold tracking-wider ${
                isDarkMode
                  ? "text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.7)]"
                  : "text-black drop-shadow-[0_1.2px_1.2px_rgba(256,256,256,0.7)]`"
              }`}
            >
              Đèn 2
            </span>
            <input
              type="checkbox"
              id="2"
              className="toggle toggle-warning toggle-lg"
              onClick={handleClickLamp}
            />
          </div>
        </div>
      </div>
      <MyCustomToastContainer />
    </div>
  );
};

export default Control;
