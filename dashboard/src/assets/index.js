import {
  HomeIcon,
  UserIcon,
  AnalyticsIcon,
  SunIcon,
  TemperatureIcon,
  HumidityIcon,
} from "./icons";

export const Menu = [
  {
    isActive: true,
    href: "/",
    icon: <HomeIcon />,
    heading: "Dashboard",
  },
  {
    isActive: false,
    href: "/analytics",
    icon: <AnalyticsIcon />,
    heading: "Analytics",
  },
  {
    isActive: false,
    href: "/profile",
    icon: <UserIcon />,
    heading: "Profile",
  },
];

export const temperatureData = {
  id: 1,
  title: "Nhiệt độ",
  color: {
    backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
    boxShadow: "0px 4px 8px 0px #FDC0C7",
  },
  value: "0°C",
  location: "Hà Nội, Việt Nam",
  series: [
    {
      name: "Nhiệt độ",
      data: [],
      categories: [],
    },
  ],
};

export const humidityData = {
  id: 2,
  title: "Độ ẩm",
  color: {
    backGround: "linear-gradient(180deg, #58c9cf 0%, #5fcbd1 100%)",
    boxShadow: "0px 4px 8px 0px #a0f0f6",
  },
  value: "0%",
  location: "Hà Nội, Việt Nam",
  series: [
    {
      name: "Độ ẩm",
      data: [],
      categories: [],
    },
  ],
};

export const lightData = {
  id: 3,
  title: "Ánh sáng",
  color: {
    backGround:
      "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
    boxShadow: "0px 4px 8px 0px #F9D59B",
  },
  value: "0 lux",
  location: "Hà Nội, Việt Nam",
  series: [
    {
      name: "Ánh sáng",
      data: [],
      categories: [],
    },
  ],
};

export const controlData = {
  categories: [],
  lightOne: [],
  lightTwo: [],
};
