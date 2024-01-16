import React from "react";

import Banner from "../Components/Banner";
import Category from "../Components/Category";
import FlashDeals from "../Components/FlashDeals";
import FeaturedProduct from "../Components/FeaturedProduct";

const Homepage = () => {
  return (
    <>
      <Banner />
      <Category />
      <FlashDeals />
      <FeaturedProduct />
    </>
  );
};

export default Homepage;
