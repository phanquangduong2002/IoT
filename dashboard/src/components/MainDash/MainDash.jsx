import React from "react";

import Temperature from "./Temperature";
import Humidity from "./Humidity";
import Light from "./Light";
import Control from "./Control";

const MainDash = () => {
  return (
    <div className="pl-2 pt-2">
      <div className="grid items-center justify-between grid-cols-3 gap-16">
        <Temperature />
        <Humidity />
        <Light />
      </div>
      <Control />
    </div>
  );
};

export default MainDash;
