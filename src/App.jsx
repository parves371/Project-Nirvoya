import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import Homepage from "./Pages/Homepage ";
import RootLayout from "./Layouts/RootLayout";
import SingleProduct from "./Pages/SingleProducts";

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
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
