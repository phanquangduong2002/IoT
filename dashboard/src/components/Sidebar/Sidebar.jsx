import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { changeDarkMode } from "../../redux/themeStore";

import { Menu } from "../../assets/index";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { isDarkMode } = useSelector((state) => state.theme);

  const [menu, setMenu] = useState(Menu);

  const handleSidebar = (index) => {
    const newMenu = [...menu];
    newMenu.forEach((e) => {
      e.isActive = false;
    });
    newMenu[index].isActive = true;
    setMenu(newMenu);
  };

  return (
    <div className="col-span-2">
      <ul className="py-20 flex flex-col gap-6">
        {menu.map((item, index) => (
          <Link
            key={index}
            to={item.href}
            className={`pl-6 py-1 flex items-center justify-start rounded-[10px] cursor-pointer relative ${
              item.isActive
                ? "bg-activeItem ml-0 before:absolute before:content before:w-[6px] before:h-full before:top-0 before:left-0 before:bg-pink"
                : "ml-4"
            } transition-all duration-[250ms] ease`}
            onClick={() => handleSidebar(index)}
          >
            {React.cloneElement(item.icon, {
              isDarkMode,
            })}
            <span
              className={`pl-4 text-[15px] ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              {item.heading}
            </span>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
