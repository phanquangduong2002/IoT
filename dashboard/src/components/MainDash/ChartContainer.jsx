import React, { useState } from "react";

import { useSelector } from "react-redux";

import { motion } from "framer-motion";

import Chart from "react-apexcharts";

const ChartContainer = ({ constants, data }) => {
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
          format: "dd/MM/yyyy HH:mm:ss",
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: "datetime",
        categories: [],
      },
    },
    series: [{}],
  };

  return (
    <div className="container">
      <motion.div
        className="rounded-xl cursor-pointer text-black p-6"
        style={{
          background: color.backGround,
          boxShadow: color.boxShadow,
        }}
      >
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

export default ChartContainer;
