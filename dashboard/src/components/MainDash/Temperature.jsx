import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { AnimateSharedLayout } from "framer-motion";

import ExpandedCard from "./ExpandedCard";
import CompactCard from "./CompactCard";

import { temp } from "../../assets";

const Temperature = () => {
  const { isDarkMode } = useSelector((state) => state.theme);

  const { temperatureData } = useSelector((state) => state.data);

  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`flex-1 ${isDarkMode ? "text-white" : "text-black"}`}>
      <AnimateSharedLayout>
        {expanded ? (
          <ExpandedCard
            constants={temp}
            data={temperatureData}
            expanded={expanded}
            setExpanded={setExpanded}
          />
        ) : (
          <CompactCard
            constants={temp}
            data={temperatureData}
            expanded={expanded}
            setExpanded={setExpanded}
          />
        )}
      </AnimateSharedLayout>
    </div>
  );
};

export default Temperature;
