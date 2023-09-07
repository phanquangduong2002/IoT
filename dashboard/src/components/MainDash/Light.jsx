import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { AnimateSharedLayout } from "framer-motion";

import ExpandedCard from "./ExpandedCard";
import CompactCard from "./CompactCard";

import { format } from "date-fns-tz";

import { randomValue } from "../../utils/createData";
import { updateData } from "../../redux/dataStore";

const Light = () => {
  const { isDarkMode } = useSelector((state) => state.theme);

  const { lightData } = useSelector((state) => state.data);

  const [expanded, setExpanded] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      const { value, vietnamTime } = randomValue();
      dispatch(updateData({ type: "light", randomValue: value, vietnamTime }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`col-span-1 ${isDarkMode ? "text-white" : "text-black"}`}>
      <AnimateSharedLayout>
        {expanded ? (
          <ExpandedCard
            data={lightData}
            expanded={expanded}
            setExpanded={setExpanded}
          />
        ) : (
          <CompactCard
            data={lightData}
            expanded={expanded}
            setExpanded={setExpanded}
          />
        )}
      </AnimateSharedLayout>
    </div>
  );
};

export default Light;
