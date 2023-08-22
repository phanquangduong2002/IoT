import React from "react";

import { UseSelector, useSelector } from "react-redux";

const Profile = () => {
  const { isDarkMode } = useSelector((state) => state.theme);
  return (
    <div className="col-span-10">
      <div className={`${isDarkMode ? "text-white" : "text-black"}`}>
        Profile
      </div>
    </div>
  );
};

export default Profile;
