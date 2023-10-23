import React from "react";

import { motion } from "framer-motion";

import { SunIcon, TemperatureIcon, HumidityIcon } from "../../assets/icons";

const CompactCard = ({ constants, data, expanded, setExpanded }) => {
  const { id, title, color, location } = constants;

  const handleModal = () => {
    setExpanded(true);
  };

  return (
    <motion.div
      className="p-8 rounded-xl cursor-pointer"
      onClick={handleModal}
      style={{
        background: color.backGround,
        boxShadow: color.boxShadow,
      }}
      layoutId="expandableCard"
    >
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <strong className="text-[40px] mb-3 text-white">
            {data && data.data.length > 0 ? data.data[data.data.length - 1] : 0}
            {id == 1 ? " °C" : id == 2 ? " %" : " lux"}
          </strong>
          <span className="text-sm text-white">{location}</span>
        </div>
        <div>
          {id == 1 ? (
            <TemperatureIcon />
          ) : id == 2 ? (
            <HumidityIcon />
          ) : (
            <SunIcon />
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default CompactCard;
