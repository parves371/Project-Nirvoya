import React from "react";
import { Outlet } from "react-router-dom";


import NavbarHeader from "../Components/NavbarHeader";
import Footer from "../Components/Footer";
import NavBar from "./NavBar";

const RootLayout = () => {
  return (
    <>
      <NavBar/>
      <NavbarHeader />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
