import React from "react";

import Temperature from "./Temperature";
import Humidity from "./Humidity";
import Light from "./Light";
import Control from "./Control";
import Gas from "./Gas";

const MainDash = () => {
  return (
    <div className="pl-2 pt-2">
      <div className="flex items-center justify-between gap-8">
        <Temperature />
        <Humidity />
        <Light />
        <Gas />
      </div>
      <Control />
    </div>
  );
};

export default MainDash;
