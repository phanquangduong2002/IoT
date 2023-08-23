import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { changeDarkMode } from "../../redux/themeStore";

import { SearchIcon } from "../../assets/icons";

const Header = ({ location = "/" }) => {
  const { isDarkMode } = useSelector((state) => state.theme);

  const dispatch = useDispatch();

  const toggleDarkMode = () => {
    dispatch(changeDarkMode());
  };
  return (
    <div
      className={`flex items-center mb-4 pl-2 ${
        location.includes("profile") ? "justify-end" : "justify-between"
      }`}
    >
      <div
        className={`form-control relative ${
          location.includes("profile") ? "hidden" : "block"
        }`}
      >
        <input
          type="text"
          placeholder="Nhập từ khóa tìm kiếm..."
          className="input input-bordered h-auto w-24 md:w-auto py-[6px] pl-10 pr-12 rounded-2xl text-sm placeholder:text-sm text-black"
        />
        <span className="absolute top-1/2 -translate-y-1/2 left-3">
          <SearchIcon />
        </span>
      </div>
      <div>
        <label
          className={`swap swap-rotate ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          <input
            type="checkbox"
            onChange={toggleDarkMode}
            checked={isDarkMode}
          />
          <svg
            className={`fill-current w-7 h-7 ${!isDarkMode ? "swap-on" : ""}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 72 72"
            className={`fill-current w-7 h-7 ${isDarkMode ? "swap-off" : ""}`}
          >
            <g>
              <g>
                <path d="M39.203,68.65c-18.089,0-32.805-14.566-32.805-32.655c0-17.854,14.525-32.645,32.379-32.645c0.009,0,0.017,0,0.025,0    c0.757,0,1.45,0.278,1.789,0.957c0.343,0.686,0.263,1.434-0.205,2.041c-3.918,5.078-5.988,11.117-5.988,17.534    c0,15.883,12.922,28.785,28.805,28.785l0.369-0.018c0.726-0.01,1.475,0.412,1.817,1.1c0.344,0.686,0.265,1.506-0.205,2.113    C58.915,63.99,49.444,68.65,39.203,68.65z M34.824,7.384C21.037,9.512,10.398,21.527,10.398,35.846    c0,15.882,12.922,28.804,28.805,28.804c7.642,0,14.794-2.957,20.15-8.225c-16.282-1.912-28.955-15.794-28.955-32.58    C30.398,17.979,31.918,12.363,34.824,7.384z" />
              </g>
              <g>
                <path d="M40.699,61.814c-13.139,0-24.313-9.381-26.567-22.308c-0.095-0.543,0.27-1.063,0.813-1.156    c0.552-0.094,1.063,0.27,1.157,0.813c2.087,11.966,12.432,20.651,24.597,20.651c0.553,0,1,0.447,1,1S41.252,61.814,40.699,61.814z    " />
              </g>
              <g>
                <path d="M14.765,37.35c-0.53,0-0.973-0.492-0.998-1.027c-0.022-0.463-0.034-0.97-0.034-1.439c0-0.553,0.447-1.019,1-1.019    s1,0.438,1,0.991c0,0.438,0.012,0.944,0.032,1.377c0.026,0.552-0.399,1.117-0.951,1.117C14.797,37.35,14.781,37.35,14.765,37.35z" />
              </g>
              <circle cx="43.759" cy="21.792" r="1.782" />
              <circle cx="55.341" cy="13.238" r="1.782" />
              <circle cx="51.466" cy="29.201" r="1.782" />
            </g>
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Header;
