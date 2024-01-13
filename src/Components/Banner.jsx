import React from "react";
// import Slider from "react-slick";
import Slider from "react-slick";
import BannerLogo from "../Assets/hero.png";

import Container from "../Layouts/Container";
import Img from "../Layouts/Img";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="mt-5">
      <Slider {...settings}>
        <div to={"/shope"}>
          <div>
            <Img src={BannerLogo} imgClassName={"w-full"} />
          </div>
        </div>
        <div to={"/shope"}>
          <div>
            <Img src={BannerLogo} imgClassName={"w-full"} />
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default Banner;
