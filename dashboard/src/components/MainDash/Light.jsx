import React, { useState } from "react";

import { useSelector } from "react-redux";

import { AnimateSharedLayout } from "framer-motion";

import { lightData } from "../../assets";

import ExpandedCard from "./ExpandedCard";
import CompactCard from "./CompactCard";

const Light = () => {
  const { isDarkMode } = useSelector((state) => state.theme);

  const [expanded, setExpanded] = useState(false);
  const [data, setData] = useState(lightData);

  return (
    <div className={`col-span-1 ${isDarkMode ? "text-white" : "text-black"}`}>
      <AnimateSharedLayout>
        {expanded ? (
          <ExpandedCard
            data={data}
            setData={setData}
            expanded={expanded}
            setExpanded={setExpanded}
          />
        ) : (
          <CompactCard
            data={data}
            setData={setData}
            expanded={expanded}
            setExpanded={setExpanded}
          />
        )}
      </AnimateSharedLayout>
    </div>
  );
};

export default Light;
