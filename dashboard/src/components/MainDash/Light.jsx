import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { AnimateSharedLayout } from "framer-motion";

import ExpandedCard from "./ExpandedCard";
import CompactCard from "./CompactCard";

import { light } from "../../assets";

const Light = () => {
  const { isDarkMode } = useSelector((state) => state.theme);

  const { lightData } = useSelector((state) => state.data);

  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`col-span-1 ${isDarkMode ? "text-white" : "text-black"}`}>
      <AnimateSharedLayout>
        {expanded ? (
          <ExpandedCard
            constants={light}
            data={lightData}
            expanded={expanded}
            setExpanded={setExpanded}
          />
        ) : (
          <CompactCard
            constants={light}
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
