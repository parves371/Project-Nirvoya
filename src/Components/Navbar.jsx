import React from "react";
import { CiSearch, CiHeart, CiShoppingCart } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";

import Container from "../Layouts/Container";
import Flex from "../Layouts/Flex";
import Img from "../Layouts/Img";
import Logo from "../../public/Logo.png";

const NavBar = () => {
  return (
    <nav className="mt-[33px]">
      <Container>
        <Flex className={"justify-between items-center"}>
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
              <CiHeart className="text-[#4D4D4D] text-2xl"/>
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
      </Container>
    </nav>
  );
};

export default NavBar;
