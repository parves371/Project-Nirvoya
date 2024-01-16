import React from "react";
import { Outlet } from "react-router-dom";

import NavBar from "../Components/NavBar";
import NavbarHeader from "../Components/NavbarHeader";
import Footer from "../Components/Footer";

const RootLayout = () => {
  return (
    <>
      <NavBar />
      <NavbarHeader />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
