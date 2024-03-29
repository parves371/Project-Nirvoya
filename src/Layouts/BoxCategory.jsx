import React from "react";
import { Link } from "react-router-dom";

import Img from "../Layouts/Img";
import logo from "../Assets/Category/Groceries.png";
import Arrow from "../Assets/Arrow - Right.png";

const BoxCategory = ({ src, title, className }) => {
  return (
    <Link to="/shope"
      className={`flex py-4 items-center bg-white rounded-[6px] shadow-md hover:shadow-lg w-full px-10 md:px-0 cd:w-[270px] md:w-[190px] ${className} cursor-pointer`}
    >
      <Img src={src} className={"md:w-[40px] cd:w-[50px] inline-block pl-4"} />
      <h4 className="cd:text-base md:text-sm text-[#394146] font-poppins font-normal inline-block md:w-[90px] cd:w-[170px] ml-[10px]">
        {title}
      </h4>
      <Img src={Arrow} className={"w-[7%] inline-block ml-[25px]"} />
    </Link>
  );
};

export default BoxCategory;
