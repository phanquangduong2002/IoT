import React from "react";

import { motion } from "framer-motion";

import {
  SunIcon,
  TemperatureIcon,
  HumidityIcon,
  GasIcon,
} from "../../assets/icons";

const CompactCard = ({ constants, data, expanded, setExpanded }) => {
  const { id, title, color, location } = constants;

  const handleModal = () => {
    setExpanded(true);
  };

  return (
    <motion.div
      className="p-6 rounded-xl cursor-pointer" // p-6 text-[28px] p-8 text-[40px]
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
