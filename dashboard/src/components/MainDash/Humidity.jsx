import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { AnimateSharedLayout } from "framer-motion";

import ExpandedCard from "./ExpandedCard";
import CompactCard from "./CompactCard";

import { format } from "date-fns-tz";

import { randomValue } from "../../utils/createData";
import { updateData } from "../../redux/dataStore";

const Humidity = () => {
  const { isDarkMode } = useSelector((state) => state.theme);

  const { humidityData } = useSelector((state) => state.data);

  const [expanded, setExpanded] = useState(false);
  return (
    <div className={`col-span-1 ${isDarkMode ? "text-white" : "text-black"}`}>
      <AnimateSharedLayout>
        {expanded ? (
          <ExpandedCard
            data={humidityData}
            expanded={expanded}
            setExpanded={setExpanded}
          />
        ) : (
          <CompactCard
            data={humidityData}
            expanded={expanded}
            setExpanded={setExpanded}
          />
        )}
      </AnimateSharedLayout>
    </div>
  );
};

export default Humidity;
