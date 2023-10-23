import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { format } from "date-fns-tz";

import { formatDate } from "../../utils/createData";

const DataSheet = () => {
  const { temperatureData, humidityData, lightData } = useSelector(
    (state) => state.data
  );

  return (
    <div className="w-[80%] flex items-start gap-4 max-h-[60vh] overflow-y-auto">
      <div className="w-[40%]">
        <span>Thời gian</span>
        <div className="flex flex-col-reverse">
          {/* {temperatureData &&
            temperatureData?.series[0]?.categories.length > 0 &&
            temperatureData?.series[0]?.categories.map((item, index) => (
              <div key={index}>{formatDate(item)}</div>
            ))} */}
        </div>
      </div>
      <div className="w-[20%] flex flex-col items-center justify-center">
        <span>Nhiệt độ</span>
        <div className="flex flex-col-reverse">
          {/* {temperatureData &&
            temperatureData?.series[0]?.data.length > 0 &&
            temperatureData?.series[0]?.data.map((item, index) => (
              <div key={index}>{item}</div>
            ))} */}
        </div>
      </div>
      <div className="w-[20%] flex flex-col items-center justify-center">
        <span>Độ ẩm</span>
        <div className="flex flex-col-reverse">
          {/* {humidityData &&
            humidityData?.series[0]?.data.length > 0 &&
            humidityData?.series[0]?.data.map((item, index) => (
              <div key={index}>{item}</div>
            ))} */}
        </div>
      </div>
      <div className="w-[20%] flex flex-col items-center justify-center">
        <span>Ánh sáng</span>
        <div className="flex flex-col-reverse">
          {/* {lightData &&
            lightData?.series[0]?.data.length > 0 &&
            lightData?.series[0]?.data.map((item, index) => (
              <div key={index}>{item}</div>
            ))} */}
        </div>
      </div>
    </div>
  );
};

export default DataSheet;
