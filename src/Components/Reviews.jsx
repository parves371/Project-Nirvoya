import React from "react";
import { IoIosStarOutline } from "react-icons/io";

import Flex from "../Layouts/Flex";
import Img from "../Layouts/Img";


const Reviews = ({ name, rating, time, message,img }) => {
  return (
    <Flex className={"px-5  sm:px-[47px] pt-5 font-poppins"}>
      <Flex className={"flex-col"}>
        <Flex className={"gap-x-4"}>
          <Img src={img} className={"w-14 h-14"} />
          <Flex className={"flex-col"}>
            <h2 className="text-lg text-[#383838] font-medium">{name}</h2>
            <Flex className={"gap-2 items-center mt-[10px"}>
              <h2 className="text-[var(--Black-primary,#3D3D3F)] text-base font-normal  md:text-base cd:text-lg ">
                {rating}
              </h2>
              <Flex className={"gap-1"}>
                <IoIosStarOutline />
                <IoIosStarOutline />
                <IoIosStarOutline />
                <IoIosStarOutline />
                <IoIosStarOutline />
              </Flex>
              <p className="text-[#A7A7A7] text-lg font-normal">{time}</p>
            </Flex>
          </Flex>
        </Flex>
        <p className="text-[#383838] text-base sm:text-lg font-normal mt-6 w-full text-justify ">
          {message}{" "}
        </p>
      </Flex>
    </Flex>
  );
};

export default Reviews;
