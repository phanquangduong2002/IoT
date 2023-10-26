import React from "react";

import { motion } from "framer-motion";

import {
  SunIcon,
  TemperatureIcon,
  HumidityIcon,
  GasIcon,
} from "../../assets/icons";
import { useSelector } from "react-redux";
import { gas } from "../../assets";

const CompactCard = ({ constants, data, expanded, setExpanded }) => {
  const { id, title, color, location } = constants;

  const { gasData } = useSelector((state) => state.data);

  // if (id === 4 && gasData.data[gasData.data.length - 1] >= 60) {
  //   color.backGround = "red";
  // } else if (id === 4 && gasData.data[gasData.data.length - 1] < 70) {
  //   color.backGround = "yellow";
  // }

  const handleModal = () => {
    setExpanded(true);
  };

  return (
    <motion.div
      className="p-6 rounded-xl cursor-pointer"
      onClick={handleModal}
      style={{
        background: color.backGround,
        boxShadow: color.boxShadow,
      }}
      layoutId="expandableCard"
    >
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <strong className="text-[28px] mb-3 text-white">
            {data && data.data.length > 0 ? data.data[data.data.length - 1] : 0}
            {id == 1 ? " °C" : id == 2 ? " %" : id === 3 ? " lux" : " CO2"}
          </strong>
          <span className="text-sm text-white">{location}</span>
        </div>
        <div>
          {id == 1 ? (
            <TemperatureIcon />
          ) : id == 2 ? (
            <HumidityIcon />
          ) : id === 3 ? (
            <SunIcon />
          ) : (
            <GasIcon />
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default CompactCard;
