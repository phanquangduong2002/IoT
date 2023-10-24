import React, { useEffect, useRef, useState } from "react";

import { convertToCustomFormat } from "../../utils/createData";

import ReactPaginate from "react-paginate";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import axios from "axios";

const DataSheet = () => {
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isErr, setIsErr] = useState(false);

  const scrollRef = useRef(null);

  const handlePageClick = async ({ selected }) => {
    const page = selected + 1;
    try {
      setIsLoading(true);
      const res = await axios.post(
        `http://localhost:8000/api/data?page=${page}`
      );
      setData(res.data.data);
      setTotalPages(res.data.totalPages);
      setInterval(() => {
        setIsLoading(false);
      }, 1500);
    } catch (error) {
      console.log(error);
      setIsErr(true);
      setInterval(() => {
        setIsLoading(false);
      }, 1500);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const page = 1;
      try {
        setIsLoading(true);
        const res = await axios.post(
          `http://localhost:8000/api/data?page=${page}`
        );
        console.log(res.data);
        setData(res.data.data);
        setTotalPages(res.data.totalPages);
        setInterval(() => {
          setIsLoading(false);
        }, 1500);
      } catch (error) {
        console.log(error);
        setIsErr(true);
        setInterval(() => {
          setIsLoading(false);
        }, 1500);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-[90%] flex items-center flex-col justify-center">
      <div className="w-full flex items-start gap-4">
        <div className="w-[8%]">
          <span>ID</span>
        </div>
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
          <span>Khí gas</span>
        </div>
      </div>

      <div className="w-full max-h-[60vh] overflow-y-auto">
        <div className="w-full min-h-[50vh] flex flex-col items-start justify-start">
          {isErr ? (
            <div className="w-full mt-6 flex items-center justify-center">
              Không tìm thấy dữ liệu
            </div>
          ) : isLoading ? (
            <div className="w-full min-h-[50vh] flex item-center justify-center">
              <span className="loading loading-spinner text-secondary"></span>
            </div>
          ) : data && data.length == 0 ? (
            <div className="w-full mt-6 flex items-center justify-center">
              Không tìm thấy dữ liệu
            </div>
          ) : (
            data &&
            data.length > 0 &&
            data.map((item, index) => (
              <div key={index} className="w-full flex gap-4 items-start">
                <div className="w-[8%]">
                  <span>{item.ID}</span>
                </div>
                <div className="w-[36%]">
                  <span>{convertToCustomFormat(item.Time)}</span>
                </div>
                <div className="w-[20%] flex items-center justify-center">
                  <span>{item.Temperature}</span>
                </div>
                <div className="w-[20%] flex items-center justify-center">
                  <span>{item.Humidity}</span>
                </div>
                <div className="w-[20%] flex items-center justify-center">
                  <span>{item.Light}</span>
                </div>
                <div className="w-[20%] flex items-center justify-center">
                  <span>{item.Gas}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="mt-10">
        {totalPages > 0 && (
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
          />
        )}
      </div>
    </div>
  );
};

export default DataSheet;
