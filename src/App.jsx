import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import Homepage from "./Pages/Homepage ";
import RootLayout from "./Layouts/RootLayout";
import SingleProduct from "./Pages/SingleProducts";
import ShopePage from "./Pages/ShopePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/product/:id",
          element: <SingleProduct />,
        },
        {
          path: "/shope",
          element: <ShopePage/>,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
