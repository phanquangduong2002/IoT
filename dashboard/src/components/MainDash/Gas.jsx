import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { AnimateSharedLayout } from "framer-motion";

import ExpandedCard from "./ExpandedCard";
import CompactCard from "./CompactCard";

import { gas } from "../../assets";

const Gas = () => {
  const { isDarkMode } = useSelector((state) => state.theme);

  const { gasData } = useSelector((state) => state.data);

  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`flex-1 ${isDarkMode ? "text-white" : "text-black"}`}>
      <AnimateSharedLayout>
        {expanded ? (
          <ExpandedCard
            constants={gas}
            data={gasData}
            expanded={expanded}
            setExpanded={setExpanded}
          />
        ) : (
          <CompactCard
            constants={gas}
            data={gasData}
            expanded={expanded}
            setExpanded={setExpanded}
          />
        )}
      </AnimateSharedLayout>
    </div>
  );
};

export default Gas;
