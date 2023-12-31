import React, { useState } from "react";

import { useSelector } from "react-redux";

import { motion } from "framer-motion";

import Chart from "react-apexcharts";

import { CloseIcon } from "../../assets/icons";

const ExpandedCard = ({ constants, data, expanded, setExpanded }) => {
  const { isDarkMode } = useSelector((state) => state.theme);

  const { id, title, color, location } = constants;

  const chartData = {
    options: {
      chart: {
        type: "area",
      },

      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },

      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["white"],
      },
      tooltip: {
        x: {
          format: "dd-MM-yyyy HH:mm:ss",
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: "datetime",
        categories: data.time.slice(-20),
      },
    },
    series: [
      {
        name: title,
        data: data.data.slice(-20),
        categories: data.time.slice(-20),
      },
    ],
  };

  const handleModal = (e) => {
    if (e.target.classList.contains("container")) {
      setExpanded(false);
    }
  };

  return (
    <div
      className="container fixed w-[100vw] h-[100vh] top-0 left-0 right-0 bottom-0 z-[9999]"
      onClick={handleModal}
    >
      <motion.div
        className="absolute w-[60vw] h-[70vh] p-8 top-[16%] left-[20%] rounded-xl cursor-pointer text-black"
        style={{
          background: color.backGround,
          boxShadow: color.boxShadow,
        }}
        layoutId="expandableCard"
      >
        <span
          className="absolute top-4 right-4"
          onClick={() => setExpanded(false)}
        >
          <CloseIcon isDarkMode={true} />
        </span>
        <span className="uppercase text-white text-xl font-semibold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          {title}
        </span>
        <div>
          <Chart
            options={chartData.options}
            series={chartData.series}
            type="area"
            height={340}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default ExpandedCard;
