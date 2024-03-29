import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { IoIosStarOutline } from "react-icons/io";
import { Link } from "react-router-dom";

import Flex from "../Layouts/Flex";
import Img from "../Layouts/Img";
import Basket from "../Assets/basket.png";
import LoveRed from "../Assets/LoveRed.png";
import Love from "../Assets/Love.png";

const Cards = ({ showSaleBage, sale, price, title, CardImg, id }) => {
  const [loveShow, setLoveShow] = useState(" ");
  return (
    <Flex className=" bg-[#FFF] rounded-[10px] flex-col font-poppins relative">
      <Img
        src={CardImg}
        className={
          "cd:w-[314px] md:w-[175px] cd:h-[314px] md:h-[175px] p-2 rounded-[10px] "
        }
      />
      {showSaleBage && (
        <h3 className="cd:text-sm md:text-[8px] cd:w-[91px] md:w-[65px] font-semibold text-[#FAFAFA] px-3 py-1 bg-CustomLinear w-[91px] rounded-tl-[10px] rounded-tr-[2px] rounded-bl-[2px] rounded-br-[2px] absolute top-2 left-2 z-10">
          {sale}
        </h3>
      )}
      {
        <p
          onClick={() => setLoveShow(!loveShow)}
          className="cursor-pointer absolute cd:top-5 md:top-4 right-4 top-4 cd:right-8 cd:w-6 md:w-4"
        >
          {loveShow ? <Img src={Love} /> : <Img src={LoveRed} />}
        </p>
      }
      <Flex className={"p-2 gap-[2px] items-center"}>
        <IoIosStarOutline />
        <IoIosStarOutline />
        <IoIosStarOutline />
        <IoIosStarOutline />
        <IoIosStarOutline />
        <h6>(0)</h6>
      </Flex>
      <h2 className="cd:text-lg md:text-sm font-normal text-[#383838] cd:w-[294px] md:w-[165px] p-2">
        {title}
      </h2>
      <Flex className={"mx-3 md:mx-2 justify-between items-center pb-4"}>
        <p className="cd:text-[22px] md:text-base text-[#0970CD] font-medium cd:w-[116px] md:w-[65px] ">
          {price}
        </p>
        <Link to={`/product/${id}`}>
          <Img src={Basket} className={"cd:ml-[145px] md:ml-[75px]"} />
        </Link>
      </Flex>
    </Flex>
  );
};

export default Cards;
