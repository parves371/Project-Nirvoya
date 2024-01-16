import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

import Container from "../Layouts/Container";
import Flex from "../Layouts/Flex";
import NavbarSub from "../Layouts/NavbarSub";

const NavbarHeader = () => {
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
  }, [showWomwnFasion, showmenFashion]);
  // console.log(womenFashion);
  const texts =["hi","gi","hi","gi","hi","gi","gi","hi","gi"]
  return (
    <section className="font-poppins bg-[#FAFAFA] pt-8 before:content-[''] before:absolute relative before:w-full before:H-[1.5px] before:border-solid before:border-[#EFEEEE] cd:before:border before:top-16">
      <Container>
        <Flex className={"justify-around hidden cd:flex "}>
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
        {/* <MultiTextSlider texts={texts}/> */}

        <div className="">
        </div>
      </Container>
    </section>
  );
};

export default NavbarHeader;
