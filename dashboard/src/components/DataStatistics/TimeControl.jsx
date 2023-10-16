import React from "react";
import { useSelector } from "react-redux";

import { formatDate } from "../../utils/createData";

const TimeControl = () => {
  const { controlData } = useSelector((state) => state.data);

  return (
    <div className="w-[80%] flex items-center gap-4">
      <div className="flex-1">
        <span>Thời gian</span>
        <div className="flex flex-col-reverse">
          {controlData &&
            controlData?.categories.length > 0 &&
            controlData?.categories.map((item, index) => (
              <div key={index}>{formatDate(item)}</div>
            ))}
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center">
        <span>Đèn 1</span>
        <div className="flex flex-col-reverse">
          {controlData &&
            controlData?.lightOne.length > 0 &&
            controlData?.lightOne.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center">
        <span>Đèn 2</span>
        <div className="flex flex-col-reverse">
          {controlData &&
            controlData?.lightTwo.length > 0 &&
            controlData?.lightTwo.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TimeControl;
