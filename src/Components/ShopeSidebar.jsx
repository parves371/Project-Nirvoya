import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";

import Flex from "../Layouts/Flex";

const ShopeSidebar = ({className}) => {
  const [price, setPrice] = useState(true);
  const [ratings, setRatings] = useState(true);
  return (
    <div className={`${className}`}>
      <Flex className={`font-poppins bg-white py-6 pl-[19px] flex-col w-full `}>
        <Flex className={"flex-col gap-y-1 "}>
          <h2 className="text-lg text-[#3D3D3F] font-medium">
            Related Categories
          </h2>
          <li className="text-base font-normal text-[#757575] list-disc">
            Men’s fashion
          </li>
          <Flex className={"flex-col gap-y-[5px]"}>
            <h6 className="text-base font-normal text-[#757575] hover:text-[#0198E9] transition-all cursor-pointer pl-8">
              Men’s Jacket
            </h6>
            <h6 className="text-base font-normal text-[#757575] hover:text-[#0198E9] transition-all cursor-pointer pl-8">
              Men's T-Shirts
            </h6>
            <h6 className="text-base font-normal text-[#757575] hover:text-[#0198E9] transition-all cursor-pointer pl-8">
              Casual Shirts
            </h6>
            <h6 className="text-base font-normal text-[#757575] hover:text-[#0198E9] transition-all cursor-pointer pl-8">
              Summer T-Shirts
            </h6>
          </Flex>
        </Flex>
        <Flex
          className={
            "mt-[18px] py-4 px-6 border-b-2 border-t-2 border-[#F4F4F4] border-solid flex-col gap-8"
          }
        >
          <Flex className={"justify-between items-center w-full"}>
            <h3 className="text-lg text-[3383838] font-normal">
              Filter by Price
            </h3>
            <IoIosArrowDown
              onClick={() => setPrice(!price)}
              className="cursor-pointer"
            />
          </Flex>
          {price && (
            <>
              <input type="range" />
              <Flex className={"items-center"}>
                <h2 className="text-lg text-[#A7A7A7] font-normal">Price:</h2>
                <p className="text-lg text-[383838] font-medium ml-1">
                  ৳1000 - ৳2500
                </p>
              </Flex>
            </>
          )}
        </Flex>
        <Flex className={"mt-[18px] py-4 px-6  flex-col gap-8"}>
          <Flex className={"justify-between items-center w-full"}>
            <h3 className="text-lg text-[3383838] font-normal">
              Filter by Price
            </h3>
            <IoIosArrowDown
              onClick={() => setRatings(!ratings)}
              className="cursor-pointer"
            />
          </Flex>
          {ratings && (
            <Flex className={"flex-col gap-y-4"}>
              <Flex className={"gap-x-4"}>
                <input
                  type="checkbox"
                  name="rat"
                  id="rat"
                  className="text-[#D0D0D2] w-4 h-4 border-3 border-solid border-[#D0D0D2]"
                />
                <FaRegStar className="text-[#FFB340]" />
              </Flex>
              <Flex className={"gap-x-4"}>
                <input
                  type="checkbox"
                  name="rat"
                  id="rat"
                  className="text-[#D0D0D2] w-4 h-4"
                />
                <Flex className={"gap-x-[8px]"}>
                  <FaRegStar className="text-[#FFB340]" />
                  <FaRegStar className="text-[#FFB340]" />
                </Flex>
              </Flex>
              <Flex className={"gap-x-4"}>
                <input
                  type="checkbox"
                  name="rat"
                  id="rat"
                  className="text-[#D0D0D2] w-4 h-4"
                />
                <Flex className={"gap-x-[8px]"}>
                  <FaRegStar className="text-[#FFB340]" />
                  <FaRegStar className="text-[#FFB340]" />
                  <FaRegStar className="text-[#FFB340]" />
                </Flex>
              </Flex>
              <Flex className={"gap-x-4"}>
                <input
                  type="checkbox"
                  name="rat"
                  id="rat"
                  className="text-[#D0D0D2] w-4 h-4"
                />
                <Flex className={"gap-x-[8px]"}>
                  <FaRegStar className="text-[#FFB340]" />
                  <FaRegStar className="text-[#FFB340]" />
                  <FaRegStar className="text-[#FFB340]" />
                  <FaRegStar className="text-[#FFB340]" />
                </Flex>
              </Flex>
              <Flex className={"gap-x-4"}>
                <input
                  type="checkbox"
                  name="rat"
                  id="rat"
                  className="text-[#D0D0D2] w-4 h-4"
                />
                <Flex className={"gap-x-[8px]"}>
                  <FaRegStar className="text-[#FFB340]" />
                  <FaRegStar className="text-[#FFB340]" />
                  <FaRegStar className="text-[#FFB340]" />
                  <FaRegStar className="text-[#FFB340]" />
                  <FaRegStar className="text-[#FFB340]" />
                </Flex>
              </Flex>
            </Flex>
          )}
        </Flex>
      </Flex>
    </div>
  );
};

export default ShopeSidebar;
