import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { motion } from "framer-motion";

import { format } from "date-fns-tz";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BulbOnIcon, BulbOffIcon } from "../../assets/icons";

import ChartContainer from "./ChartContainer";

import { updateDataControl } from "../../redux/dataStore";

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
  const { temperatureData, humidityData, lightData, controlData } = useSelector(
    (state) => state.data
  );

  const [isB1On, setIsB1On] = useState(false);
  const [isB2On, setIsB2On] = useState(false);

  const [id, setId] = useState(1);

  const dispatch = useDispatch();

  const getTime = () => {
    const currentDateTime = new Date();
    const vietnamTime = format(
      currentDateTime,
      "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
      {
        timeZone: "Asia/Ho_Chi_Minh",
      }
    );
    return vietnamTime;
  };

  const notify = (notifyMsg, state) =>
    toast(notifyMsg, { type: state, theme: "colored" });
  const turnOnLamp = (e) => {
    const id = e.target.id;
    const timeVietNam = getTime();
    if (id == 1) {
      dispatch(
        updateDataControl({
          vietNamTime: timeVietNam,
          lightOne: "ON",
          lightTwo:
            controlData?.lightTwo[controlData?.lightTwo.length - 1] || "OFF",
        })
      );
      setIsB1On(true);
    }
    if (id == 2) {
      dispatch(
        updateDataControl({
          vietNamTime: timeVietNam,
          lightOne:
            controlData?.lightOne[controlData?.lightOne.length - 1] || "OFF",
          lightTwo: "ON",
        })
      );
      setIsB2On(true);
    }
    notify(`Đèn ${id} đã bật`, "success");
  };

  const turnOffLamp = (e) => {
    const id = e.target.id;
    const timeVietNam = getTime();
    if (id == 1) {
      dispatch(
        updateDataControl({
          vietNamTime: timeVietNam,
          lightOne: "OFF",
          lightTwo:
            controlData?.lightTwo[controlData?.lightTwo.length - 1] || "OFF",
        })
      );
      setIsB1On(false);
    }
    if (id == 2) {
      dispatch(
        updateDataControl({
          vietNamTime: timeVietNam,
          lightOne:
            controlData?.lightOne[controlData?.lightOne.length - 1] || "OFF",
          lightTwo: "OFF",
        })
      );
      setIsB2On(false);
    }
    notify(`Đèn ${id} đã tắt`, "warning");
  };

  const handleClickLamp = (e) => {
    const checked = e.target.checked;
    if (checked) turnOnLamp(e);
    else turnOffLamp(e);
  };
  return (
    <div className="my-8">
      <div className="flex items-center justify-start gap-8 mb-6">
        <button
          onClick={() => setId(1)}
          className={`rounded-full border-[2px] border-red-500 px-[14px] py-1 cursor-pointer text-sm
        ${
          id === 1
            ? "bg-red-500 text-white"
            : `${
                !isDarkMode ? "text-black" : ""
              } hover:bg-transparent hover:text-black`
        } transition-all duration-[200ms] ease-in-out`}
        >
          Nhiệt độ
        </button>
        <button
          onClick={() => setId(2)}
          className={`rounded-full border-[2px] border-red-500 px-[14px] py-1 cursor-pointer text-sm
          ${
            id === 2
              ? "bg-red-500 text-white"
              : `${
                  !isDarkMode ? "text-black" : ""
                } hover:bg-transparent hover:text-black`
          }  transition-all duration-[200ms] ease-in-out`}
        >
          Độ ẩm
        </button>
        <button
          onClick={() => setId(3)}
          className={`rounded-full border-[2px] border-red-500 px-[14px] py-1 cursor-pointer text-sm
        ${
          id === 3
            ? "bg-red-500 text-white"
            : `${
                !isDarkMode ? "text-black" : ""
              } hover:bg-transparent hover:text-black`
        } transition-all duration-[200ms] ease-in-out`}
        >
          Ánh sáng
        </button>
      </div>
      <div className="grid grid-cols-4 gap-12 items-start justify-between">
        <div className="col-span-3">
          {id && id === 1 ? (
            <ChartContainer data={temperatureData} />
          ) : id === 2 ? (
            <ChartContainer data={humidityData} />
          ) : (
            <ChartContainer data={lightData} />
          )}
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
                checked={
                  controlData?.lightOne[controlData?.lightOne.length - 1] ===
                  "ON"
                }
                id="1"
                className="toggle toggle-warning toggle-lg"
                onClick={handleClickLamp}
              />
            </div>
            {controlData?.lightOne[controlData?.lightOne.length - 1] ===
            "ON" ? (
              <BulbOnIcon />
            ) : (
              <BulbOffIcon />
            )}
          </div>
          <div className="flex items-end">
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
                checked={
                  controlData?.lightTwo[controlData?.lightTwo.length - 1] ===
                  "ON"
                }
                className="toggle toggle-warning toggle-lg"
                onClick={handleClickLamp}
              />
            </div>
            {controlData?.lightTwo[controlData?.lightTwo.length - 1] ===
            "ON" ? (
              <BulbOnIcon />
            ) : (
              <BulbOffIcon />
            )}
          </div>
        </div>
      </div>
      <MyCustomToastContainer />
    </div>
  );
};

export default Control;
