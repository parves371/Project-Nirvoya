import React from "react";
import Navbar from "../Components/NavBar";
import NavbarHeader from "../Components/NavbarHeader";
import Banner from "../Components/Banner";
import Category from "../Components/Category";
import FlashDeals from "../Components/FlashDeals";
import FeaturedProduct from "../Components/FeaturedProduct";

const Homepage = () => {
  return (
    <>
      {/* <Navbar /> */}
      {/* <NavbarHeader /> */}
      {/* <Banner/> */}
      <Category/>
      <FlashDeals/>
      <FeaturedProduct/>

    </>
  );
};

export default Homepage;
