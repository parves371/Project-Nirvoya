import React, { useEffect, useState } from "react";
import { CiSearch, CiHeart, CiShoppingCart } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";

import Container from "../Layouts/Container";
import Flex from "../Layouts/Flex";
import Img from "../Layouts/Img";
import Logo from "../../public/Logo.png";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(true);
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  useEffect(() => {
    const resize = () => {
      if (window.innerWidth < 429) {
        setShowMenu(false);
      }
    };
    window.addEventListener("resize", resize);
    resize();
  }, []);
  return (
    <nav className="pt-[33px] bg-[#FAFAFA]">
      <Container>
        <Flex className={"justify-between items-center md:hidden cd:flex"}>
          <Img src={Logo} className={"w-[9%]"} />
          <div className="w-[56%] flex">
            <input
              type="text"
              className="w-[778px] bg-[#F6F6F6] border border-[#F1F1F1] border-solid rounded-[5px] py-3 px-5"
              placeholder="I'm looking for..."
            ></input>
            <CiSearch className="w-16 h-[50px] inline-block ml-[-40px] py-3 px-4 bg-[#0198E9] text-white rounded-r cursor-pointer" />
          </div>
          <Flex className={"W-[28%] gap-x-10"}>
            <Flex className={"items-center gap-x-[6px] cursor-pointer"}>
              <FaRegUser className="text-[#4D4D4D]" />

              <h2 className="font-poppins text-base text-[#29292E] font-normal capitalize">
                Login
              </h2>
            </Flex>
            <Flex className={"items-center gap-x-[6px] cursor-pointer"}>
              <CiHeart className="text-[#4D4D4D] text-2xl" />
              <h2 className="font-poppins text-base text-[#29292E] font-normal capitalize">
                Wishlist
              </h2>
            </Flex>
            <Flex className={"items-center gap-x-[6px] cursor-pointer"}>
              <CiShoppingCart className="text-[#4D4D4D] text-2xl" />
              <h2 className="font-poppins text-base text-[#29292E] font-normal">
                My cart
              </h2>
            </Flex>
          </Flex>
        </Flex>
        {/* ============    for mobile view   =============*/}
        <Flex className={"cd:hidden flex-col"}>
          <Flex className={"justify-between w-full items-center px-4"}>
            <Img src={Logo} className={""} />
            <Flex className={"gap-x-3 items-center"}>
              <FaRegUser className="text-[#4D4D4D] w-6 h-6 cursor-pointer" />
              <CiHeart className="text-[#4D4D4D] text-2xl w-8 h-8 cursor-pointer" />
              <CiShoppingCart className="text-[#4D4D4D] text-2xl w-8 h-8 cursor-pointer" />
            </Flex>
          </Flex>
          <Flex className={"items-center px-4 pt-3"}>
            <input
              type="text"
              className="w-[388px] bg-[#F6F6F6] border border-[#F1F1F1] border-solid rounded-[5px] py-3 px-5"
              placeholder="I'm looking for..."
            ></input>
            <CiSearch className="w-16 h-[50px] inline-block ml-[-40px] py-3 px-4 bg-[#0198E9] text-white rounded-r cursor-pointer" />
          </Flex>
        </Flex>
      </Container>
    </nav>
  );
};

export default NavBar;
