import React from "react";

import { motion } from "framer-motion";

const CompactCard = ({ data, setData, expanded, setExpanded }) => {
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
        <div>{icon}</div>
      </div>
    </motion.div>
  );
};

export default CompactCard;
