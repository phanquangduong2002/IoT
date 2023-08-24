import React, { useState } from "react";

import { useSelector } from "react-redux";

import { motion } from "framer-motion";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BulbOnIcon, BulbOffIcon } from "../../assets/icons";

import ChartContainer from "./ChartContainer";

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

  const [isB1On, setIsB1On] = useState(false);
  const [isB2On, setIsB2On] = useState(false);

  const notify = (notifyMsg, state) =>
    toast(notifyMsg, { type: state, theme: "colored" });
  const turnOnLamp = (e) => {
    const id = e.target.id;
    if (id == 1) setIsB1On(true);
    if (id == 2) setIsB2On(true);
    notify(`Đèn ${id} đã bật`, "success");
  };

  const turnOffLamp = (e) => {
    const id = e.target.id;
    if (id == 1) setIsB1On(false);
    if (id == 2) setIsB2On(false);
    notify(`Đèn ${id} đã tắt`, "warning");
  };

  const handleClickLamp = (e) => {
    const checked = e.target.checked;
    if (checked) turnOnLamp(e);
    else turnOffLamp(e);
  };
  return (
    <div className="my-20">
      <div className="grid grid-cols-4 gap-12 items-start justify-between">
        <div className="col-span-3">
          <ChartContainer />
        </div>
        <div className="pt-5 col-span-1 flex flex-col items-center justify-center gap-14">
          <div className="flex items-center">
            <div className="flex flex-col items-center justify-center mr-8">
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
            {isB1On ? <BulbOnIcon /> : <BulbOffIcon />}
          </div>
          <div className="flex items-center">
            <div className="flex flex-col items-center justify-center mr-8">
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
                className="toggle toggle-success toggle-lg"
                onClick={handleClickLamp}
              />
            </div>
            {isB2On ? <BulbOnIcon /> : <BulbOffIcon />}
          </div>
        </div>
      </div>
      <MyCustomToastContainer />
    </div>
  );
};

export default Control;
