import React from "react";
// import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import BannerLogo from "../Assets/hero.png";
import Img from "../Layouts/Img";
import Container from "../Layouts/Container";

const Banner = () => {
  return (
    <section className="mt-5">
      <Container>
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
      </Container>
    </section>
  );
};

export default Banner;
