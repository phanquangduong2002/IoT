import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { useEffect } from "react";
import io from "socket.io-client";

import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/Profile/Profile";
import Analytics from "./pages/Analytics/Analytics";
import Error from "./pages/Error/Error";

import Sidebar from "./components/Sidebar/Sidebar";

import { updateData } from "./redux/dataStore";

import { updateDataControl } from "./redux/controlStore";
import { da } from "date-fns/locale";

const Layout = () => {
  return (
    <>
      <Sidebar />
      <Outlet></Outlet>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/analytics",
        element: <Analytics />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

function App() {
  const { isDarkMode } = useSelector((state) => state.theme);

  const dispatch = useDispatch();

  useEffect(() => {
    const socket = io("http://localhost:8000");

    socket.on("connect", () => {
      console.log("Connected to the server.");
    });

    socket.on("control", (data) => {
      if (data.length === 0) {
        return;
      } else {
        if (data[0].B1 === 1)
          dispatch(updateDataControl({ type: "1", data: true }));
        if (data[0].B2 === 1)
          dispatch(updateDataControl({ type: "2", data: true }));
      }
    });

    socket.on("full-data", (data) => {
      const temperatureData = { time: [], data: [] };
      const humidityData = { time: [], data: [] };
      const lightData = { time: [], data: [] };
      const gasData = { time: [], data: [] };

      const reversedData = data.reverse();

      reversedData.forEach((item) => {
        const time = item.time;
        const temperature = item.temp;
        const humidity = item.humi;
        const light = item.light;
        const gas = item.gas;

        temperatureData.time.push(time);
        temperatureData.data.push(temperature);

        humidityData.time.push(time);
        humidityData.data.push(humidity);

        lightData.time.push(time);
        lightData.data.push(light);

        gasData.time.push(time);
        gasData.data.push(gas);
      });

      dispatch(updateData({ type: "light", data: lightData }));
      dispatch(updateData({ type: "humi", data: humidityData }));
      dispatch(updateData({ type: "temp", data: temperatureData }));
      dispatch(updateData({ type: "gas", data: gasData }));
    });

    socket.on("data", (data) => {
      const convertData = [data];
      const temperatureData = { time: [], data: [] };
      const humidityData = { time: [], data: [] };
      const lightData = { time: [], data: [] };
      const gasData = { time: [], data: [] };

      convertData.forEach((item) => {
        const time = item.time;
        const temperature = item.temp;
        const humidity = item.humi;
        const light = item.light;
        const gas = item.gas;

        temperatureData.time.push(time);
        temperatureData.data.push(temperature);

        humidityData.time.push(time);
        humidityData.data.push(humidity);

        lightData.time.push(time);
        lightData.data.push(light);

        gasData.time.push(time);
        gasData.data.push(gas);
      });

      dispatch(updateData({ type: "light", data: lightData }));
      dispatch(updateData({ type: "humi", data: humidityData }));
      dispatch(updateData({ type: "temp", data: temperatureData }));
      dispatch(updateData({ type: "gas", data: gasData }));
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div
      className={`w-[100vw] h-[100vh] flex items-center justify-center ${
        !isDarkMode ? "bg-light-mode" : "bg-dark-mode"
      } relative`}
    >
      <div className="w-[96%] h-[96%] bg-glass rounded-2xl overflow-auto grid grid-cols-12 gap-8">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  );
}

export default App;
