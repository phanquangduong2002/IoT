import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { useSelector } from "react-redux";

import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/Profile/Profile";
import Analytics from "./pages/Analytics/Analytics";
import Error from "./pages/Error/Error";

import Sidebar from "./components/Sidebar/Sidebar";

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
