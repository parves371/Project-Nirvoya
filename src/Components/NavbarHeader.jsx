import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { IoIosArrowForward } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Container from "../Layouts/Container";
import Flex from "../Layouts/Flex";
import NavbarSub from "../Layouts/NavbarSub";

const NavbarHeader = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={"absolute top-[6px] right-[-7px]"}
        style={{ ...style }}
        onClick={onClick}
      >
        <IoIosArrowForward />{" "}
      </div>
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "green" }}
        onClick={onClick}
      />
    );
  }
  const womenFashion = useRef();
  const menFashion = useRef();
  const [showWomwnFasion, setShowWomwnFasion] = useState(false);
  const [showmenFashion, setShowMenFashion] = useState(false);

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (womenFashion.current && womenFashion.current.contains(e.target)) {
        setShowWomwnFasion(!showWomwnFasion);
      } else {
        setShowWomwnFasion(false);
      }
      if (menFashion.current && menFashion.current.contains(e.target)) {
        setShowMenFashion(!showmenFashion);
      } else {
        setShowMenFashion(false);
      }
    });
  }, [showWomwnFasion,showmenFashion]);
  // console.log(womenFashion);
  return (
    <section className="font-poppins bg-[#FAFAFA] pt-8 before:content-[''] before:absolute relative before:w-full before:H-[1.5px] before:border-solid before:border-[#EFEEEE] cd:before:border before:top-16">
      <Container>
        <Flex className={"justify-around md:hidden cd:flex "}>
          <h2
            className="w-[11%] text-base font-medium text-[#333333] uppercase transition-all cursor-pointer"
            ref={womenFashion}
          >
            Women's Fashion
            {showWomwnFasion && (
              <div className="w-[145px] h-[2px] bg-[#0198E9] absolute bottom-[-5px]"></div>
            )}
          </h2>
          {showWomwnFasion && (
            <div className="absolute w-full top-16 z-10">
              <NavbarSub />
            </div>
          )}

          <h2
            className="w-[11%] text-base font-medium text-[#333333] uppercase cursor-pointer"
            ref={menFashion}
          >
            men's Fashion
            {showmenFashion && (
              <div className="w-[120px] h-[2px] bg-[#0198E9] absolute bottom-[-5px]"></div>
            )}
          </h2>
          {showmenFashion && (
            <div className="absolute w-full top-16 z-10">
              <NavbarSub />
            </div>
          )}
          <h2 className="w-[11%] text-base font-medium text-[#333333] uppercase">
            Kid's Fashion
          </h2>
          <h2 className="w-[11%] text-base font-medium text-[#333333] uppercase">
            Home & Lifestyle
          </h2>
          <h2 className="w-[11%] text-base font-medium text-[#333333] uppercase">
            Arts & Crafts
          </h2>
          <h2 className="w-[16%] text-base font-medium text-[#333333] uppercase">
            Computer & Electronics
          </h2>
          <h2 className="w-[11%] text-base font-medium text-[#333333] uppercase ">
            Food & Grocery
          </h2>
        </Flex>
        <div className="cd:hidden px-4 ">
          <Slider {...settings}>
            <div className="text-sm font-medium">
              <h3>Women's Fashion</h3>
            </div>
            <div className="text-sm font-medium">
              <h3>men's Fashion</h3>
            </div>
            <div className="text-sm font-medium">
              <h3>Kid's Fashion</h3>
            </div>
            <div className="text-sm font-medium">
              <h3>Home & Lifestyle</h3>
            </div>
            <div className="text-sm font-medium">
              <h3>Arts & Crafts</h3>
            </div>
            <div className="text-sm font-medium">
              <h3>Computer & Electronics</h3>
            </div>
            <div className="text-sm font-medium">
              <h3>Food & Grocery</h3>
            </div>
          </Slider>
        </div>
      </Container>
    </section>
  );
};

export default NavbarHeader;
