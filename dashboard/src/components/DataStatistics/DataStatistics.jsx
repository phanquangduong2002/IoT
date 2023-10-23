import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import DataSheet from "./DataSheet";
import TimeControl from "./TimeControl";

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
        width: "260px",
      }}
    />
  );
};

const DataStatistics = () => {
  const { isDarkMode } = useSelector((state) => state.theme);

  const [id, setId] = useState(1);

  const dispatch = useDispatch();

  const notify = (notifyMsg, state) =>
    toast(notifyMsg, { type: state, theme: "colored" });

  const clear = () => {
    notify(`Xóa dữ liệu thành công`, "success");
  };

  return (
    <div className="my-6 ml-8">
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
          Thống kê
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
          Điều khiển
        </button>
        <button
          className={`ml-auto rounded-full border-[2px] border-red-500 bg-red-500 text-white px-3 py-1 cursor-pointer text-lg hover:bg-transparent hover:text-black
        } transition-all duration-[200ms] ease-in-out`}
          onClick={clear}
        >
          Clear data
        </button>
      </div>
      <div className="flex items-start justify-start gap-6">
        {id === 1 ? <DataSheet /> : <TimeControl />}
      </div>

      <MyCustomToastContainer />
    </div>
  );
};

export default DataStatistics;
