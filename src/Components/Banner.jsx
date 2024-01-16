import React from "react";
// import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import BannerLogo from "../Assets/hero.png";
import Img from "../Layouts/Img";

const Banner = () => {
  return (
    <section className="mt-5">
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <Img src={BannerLogo} />
        </SwiperSlide>
        <SwiperSlide>
          <Img src={BannerLogo} />
        </SwiperSlide>
        <SwiperSlide>
          <Img src={BannerLogo} />
        </SwiperSlide>
        <SwiperSlide>
          <Img src={BannerLogo} />
        </SwiperSlide>
        <SwiperSlide>
          <Img src={BannerLogo} />
        </SwiperSlide>
        <SwiperSlide>
          <Img src={BannerLogo} />
        </SwiperSlide>
        <SwiperSlide>
          <Img src={BannerLogo} />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Banner;
