import React, { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./utils/ErrorPage.jsx";
import Landing from "./components/Landing.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import Wallets from "./components/Wallets.jsx";
import Tabs from "./components/Tabs.jsx";
import Loader from "./utils/Loader.jsx";

import "./index.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
      children: [
        {
          path: "/",
          element: <Landing />,
        },
        {
          path: "/wallet",
          element: <Wallets />,
          children: [
            {
              path: "/wallet/:id",
              element: <Tabs />,
            },
          ]
        },
        {
          path: "/connect",
          element: <Tabs/>
        },
        {
          path: "/error",
          element: <ErrorPage />
        }
      ],
    },
  ]);

  const routerComponent = (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );

  useEffect(() => {
    setTimeout(() => { setIsLoading(true) }, 3000)
  }, []);

  // console.log(isLoading);

  return isLoading ? routerComponent : <Loader />;
};

export default App;
