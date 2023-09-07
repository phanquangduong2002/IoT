import React from "react";

import { motion } from "framer-motion";

import { SunIcon, TemperatureIcon, HumidityIcon } from "../../assets/icons";

const CompactCard = ({ data, expanded, setExpanded }) => {
  const { title, icon, color, value, location, series } = data;

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
          <strong className="text-[40px] mb-3 text-white">{value}</strong>
          <span className="text-sm text-white">{location}</span>
        </div>
        <div>
          {data?.id == 1 ? (
            <TemperatureIcon />
          ) : data?.id == 2 ? (
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
