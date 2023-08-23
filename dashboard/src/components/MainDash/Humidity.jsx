import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";

import { AnimateSharedLayout } from "framer-motion";

import { humidityData } from "../../assets";

import ExpandedCard from "./ExpandedCard";
import CompactCard from "./CompactCard";

import { format } from "date-fns-tz";

const Humidity = () => {
  const { isDarkMode } = useSelector((state) => state.theme);

  const [expanded, setExpanded] = useState(false);
  const [data, setData] = useState(humidityData);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomValue = Math.floor(Math.random() * 100);
      const currentDateTime = new Date();
      const vietnamTime = format(
        currentDateTime,
        "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
        {
          timeZone: "Asia/Ho_Chi_Minh",
        }
      );

      setData((prevData) => ({
        ...prevData,
        value: randomValue + "°C",
        series: [
          {
            name: prevData.series[0].name,
            data: [...prevData.series[0].data, randomValue],
            categories: [...prevData.series[0].categories, vietnamTime],
          },
        ],
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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

export default Humidity;
