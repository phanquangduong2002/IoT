import React, { useEffect, useRef, useState } from "react";

import { convertToCustomFormat } from "../../utils/createData";

import ReactPaginate from "react-paginate";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import axios from "axios";

import { DatePicker } from "antd";

const TimeControl = () => {
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isErr, setIsErr] = useState(false);

  const [selectedDate, setSelectedDate] = useState(null);
  const [dateString, setDateString] = useState("");

  const [selectedPage, setSelectedPage] = useState(0);

  const handleDateChange = (date, dateString) => {
    console.log(dateString);
    setDateString(dateString);
    setSelectedDate(date);
  };

  const handlePageClick = async ({ selected = 0 }) => {
    const page = selected + 1;
    setSelectedPage(selected);
    const url =
      dateString !== ""
        ? `http://localhost:8000/api/control?page=${page}&date=${dateString}`
        : `http://localhost:8000/api/control?page=${page}`;
    try {
      setIsLoading(true);
      const res = await axios.post(url);
      console.log(res.data);
      setData(res.data.data);
      setTotalPages(res.data.totalPages);
      setTimeout(() => {
        setIsLoading(false);
      }, 1200);
    } catch (error) {
      console.log(error);
      setIsErr(true);
      setInterval(() => {
        setIsLoading(false);
      }, 1200);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const page = 1;
      try {
        setIsLoading(true);
        const res = await axios.post(
          `http://localhost:8000/api/control?page=${page}`
        );
        console.log(res.data);
        setData(res.data.data);
        setTotalPages(res.data.totalPages);
        setInterval(() => {
          setIsLoading(false);
        }, 1200);
      } catch (error) {
        console.log(error);
        setIsErr(true);
        setInterval(() => {
          setIsLoading(false);
        }, 1200);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="relative w-[90%] flex items-center flex-col justify-center">
      <div className="absolute w-[38.8%] flex gap-4 -top-[54.5px] -right-[116px]">
        <DatePicker
          value={selectedDate}
          format={"DD-MM-YYYY"}
          placeholder="Select a date"
          onChange={handleDateChange}
          className="w-[60%]"
        />
        <button
          onClick={handlePageClick}
          className="bg-purple-btn hover:bg-purple text-sm text-white px-3 rounded-md transition-all duration-150 ease-in-out"
        >
          Tìm kiếm
        </button>
      </div>
      <div className="w-full flex items-start gap-8">
        <div className="w-[12%]">
          <span>ID</span>
        </div>
        <div className="w-[30%]">
          <span>Thời gian</span>
        </div>
        <div className="w-[24%] flex items-center justify-center">
          <span>Thiết bị</span>
        </div>
        <div className="w-[24%] flex items-center justify-center">
          <span>Trạng thái</span>
        </div>
      </div>

      <div className="w-full">
        <div className="w-full min-h-[54vh] flex flex-col items-start justify-start">
          {isErr ? (
            <div className="w-full mt-16 flex items-center justify-center">
              Không tìm thấy dữ liệu
            </div>
          ) : isLoading ? (
            <div className="w-full min-h-[54vh] flex item-center justify-center">
              <span className="loading loading-spinner text-secondary"></span>
            </div>
          ) : data && data.length == 0 ? (
            <div className="w-full mt-16 flex items-center justify-center">
              Không tìm thấy dữ liệu
            </div>
          ) : (
            data &&
            data.length > 0 &&
            data.map((item, index) => (
              <div key={index} className="w-full flex gap-8 items-start">
                <div className="w-[12%]">
                  <span>{item.id}</span>
                </div>
                <div className="w-[30%]">
                  <span>{convertToCustomFormat(item.time)}</span>
                </div>
                <div className="w-[24%] flex items-center justify-center">
                  <span>
                    {item.tb === 1 ? "LED1" : item.tb === 2 ? "LED2" : "LED3"}
                  </span>
                </div>
                <div className="w-[24%] flex items-center justify-center">
                  <span>{item.status === 1 ? "Bật" : "Tắt"}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="mt-2">
        {isLoading ? (
          <></>
        ) : totalPages > 0 ? (
          <ReactPaginate
            breakLabel="..."
            nextLabel={
              <span className="w-8 h-8 text-sm text-white flex items-center justify-center bg-gray rounded-md">
                <BsChevronRight />
              </span>
            }
            previousLabel={
              <span className="w-8 h-8 text-sm text-white flex items-center justify-center bg-gray rounded-md">
                <BsChevronLeft />
              </span>
            }
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            pageCount={totalPages}
            containerClassName="flex items-center justify-center gap-3"
            pageClassName="block hover:bg-purple hover:text-white w-8 h-8 text-sm flex items-center justify-center rounded-md"
            activeClassName="bg-purple text-white"
            forcePage={selectedPage}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default TimeControl;
