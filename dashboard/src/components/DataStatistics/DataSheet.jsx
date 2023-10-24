import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { format } from "date-fns-tz";

import { convertToCustomFormat } from "../../utils/createData";

const DataSheet = () => {
  const { data } = useSelector((state) => state.data);
  console.log(data);
  return (
    <div className="w-[90%] flex items-start flex-col">
      <div className="w-full flex items-start gap-4">
        <div className="w-[36%]">
          <span>Thời gian</span>
        </div>
        <div className="w-[20%] flex items-center justify-center">
          <span>Nhiệt độ</span>
        </div>
        <div className="w-[20%] flex items-center justify-center">
          <span>Độ ẩm</span>
        </div>
        <div className="w-[20%] flex items-center justify-center">
          <span>Ánh sáng</span>
        </div>
        <div className="w-[20%] flex items-center justify-center">
          {/* <span>Khí gas</span> */}
        </div>
      </div>

      <div className="w-full flex flex-col-reverse max-h-[60vh] overflow-y-auto">
        {data &&
          data.length > 0 &&
          data.map((item, index) => (
            <div key={index} className="w-full flex gap-4 items-start">
              <div className="w-[36%]">
                <span>{convertToCustomFormat(item.time)}</span>
              </div>
              <div className="w-[20%] flex items-center justify-center">
                <span>{item.temp}</span>
              </div>
              <div className="w-[20%] flex items-center justify-center">
                <span>{item.humi}</span>
              </div>
              <div className="w-[20%] flex items-center justify-center">
                <span>{item.light}</span>
              </div>
              <div className="w-[20%] flex items-center justify-center">
                {/* <span>{item.gas}</span> */}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DataSheet;
