import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { updateDataControl } from "../../redux/controlStore";

import { motion } from "framer-motion";

import { format } from "date-fns-tz";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BulbOnIcon, BulbOffIcon } from "../../assets/icons";

import ChartContainer from "./ChartContainer";

import { temp, humi, light, gas } from "../../assets";

import io from "socket.io-client";
const socket = io("http://localhost:8000");

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
  const { temperatureData, humidityData, lightData, gasData, controlData } =
    useSelector((state) => state.data);

  const { isB1On, isB2On } = useSelector((state) => state.control);

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
    if (id == 1) {
      socket.emit("bulb1", "1");
      dispatch(updateDataControl({ type: "1", data: true }));
    }
    if (id == 2) {
      socket.emit("bulb2", "1");
      dispatch(updateDataControl({ type: "2", data: true }));
    }
    notify(`Đèn ${id} đã bật`, "success");
  };

  const turnOffLamp = (e) => {
    const id = e.target.id;
    const timeVietNam = getTime();
    if (id == 1) {
      socket.emit("bulb1", "0");
      dispatch(updateDataControl({ type: "1", data: false }));
    }
    if (id == 2) {
      socket.emit("bulb2", "0");
      dispatch(updateDataControl({ type: "2", data: false }));
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
      <div className="flex items-center justify-start gap-6 mb-6">
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
        <button
          onClick={() => setId(4)}
          className={`rounded-full border-[2px] border-red-500 px-[14px] py-1 cursor-pointer text-sm
        ${
          id === 4
            ? "bg-red-500 text-white"
            : `${
                !isDarkMode ? "text-black" : ""
              } hover:bg-transparent hover:text-black`
        } transition-all duration-[200ms] ease-in-out`}
        >
          Khí gas
        </button>
      </div>
      <div className="grid grid-cols-4 gap-12 items-start justify-between">
        <div className="col-span-3">
          {id && id === 1 ? (
            <ChartContainer constants={temp} data={temperatureData} />
          ) : id === 2 ? (
            <ChartContainer constants={humi} data={humidityData} />
          ) : id === 3 ? (
            <ChartContainer constants={light} data={lightData} />
          ) : (
            <ChartContainer constants={gas} data={gasData} />
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
                id="1"
                className="toggle toggle-warning toggle-lg"
                onClick={handleClickLamp}
                checked={isB1On}
              />
            </div>

            {isB1On ? <BulbOnIcon /> : <BulbOffIcon />}
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
                className="toggle toggle-warning toggle-lg"
                onClick={handleClickLamp}
                checked={isB2On}
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
