import React from "react";

import Container from "../Layouts/Container";
import Flex from "../Layouts/Flex";
import Img from "../Layouts/Img";

import FREESHIPPING from "../Assets/ImgFooter/FREE SHIPPING.png";
import BestPrice from "../Assets/ImgFooter/Best Price.png";
import FreeRetern from "../Assets/ImgFooter/Free Retern.png";
import SecurePayment from "../Assets/ImgFooter/Secure Payment.png";

import Facebook from "../Assets/Icons Media/Facebook.png";
import Tw from "../Assets/Icons Media/Tw.png";
import Ld from "../Assets/Icons Media/Ld.png";
import instagram from "../Assets/Icons Media/instagram.png";
import Phone from "../Assets/Icons Media/Phone.png";

import Logo from "../../public/Logo.png";
import Pay from "../../public/Pay.png";

const Footer = () => {
  return (
    <footer className="bg-white font-poppins pb-20">
      <Container>
        <Flex
          className={
            "cd:justify-around flex-col md:flex-col cd:flex-row cd:pt-[93px] md:pt-14 gap-y-6 pb-12 ml-5 cd:ml-0 "
          }
        >
          <Flex className={"items-center gap-x-4"}>
            <Img src={FREESHIPPING} />
            <Flex className={"flex-col"}>
              <h2 className="text-xl font-medium text-[#333333] ">
                FREE SHIPPING
              </h2>
              <p className="text-base font-normal text-[#757575]">
                Order via Campaign
              </p>
            </Flex>
          </Flex>
          <Flex className={"items-center gap-x-4"}>
            <Img src={BestPrice} />
            <Flex className={"flex-col"}>
              <h2 className="text-xl font-medium text-[#333333] ">
                Best Price
              </h2>
              <p className="text-base font-normal text-[#757575]">
                Quality products
              </p>
            </Flex>
          </Flex>
          <Flex className={"items-center gap-x-4"}>
            <Img src={FreeRetern} />
            <Flex className={"flex-col"}>
              <h2 className="text-xl font-medium text-[#333333] ">
                Free Retern
              </h2>
              <p className="text-base font-normal text-[#757575]">
                Within 7 days returns
              </p>
            </Flex>
          </Flex>
          <Flex className={"items-center gap-x-4"}>
            <Img src={SecurePayment} />
            <Flex className={"flex-col"}>
              <h2 className="text-xl font-medium text-[#333333] ">
                Secure Payment
              </h2>
              <p className="text-base font-normal text-[#757575]">
                100% secure payment
              </p>
            </Flex>
          </Flex>
        </Flex>
      </Container>
      <div className="before:content-[''] before:absolute relative before:w-full before:H-[1.5px] before:border-solid before:border-[#EFEEEE] before:border before:top-[-60px]">
        <Container>
          <Flex className={"cd:justify-around flex-col-reverse gap-y-8 cd:flex-row cd:mt-[60px] mt-6 ml-5 cd:ml-0"}>
            <Flex className={"flex-col gap-y-9 "}>
              <Img src={Logo} className={"w-[153px] h-[55px] cd:flex md:hidden"} />
              <p className="text-lg font-normal text-[#333333] w-full pr-5 text-justify cd:w-[390px] cd:flex md:hidden">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Flex className={"gap-x-5"}>
                <a href="">
                  <Img src={Facebook} />
                </a>
                <a href="">
                  <Img src={Tw} />
                </a>
                <a href="">
                  <Img src={Ld} />
                </a>
                <a href="">
                  <Img src={instagram} />
                </a>
              </Flex>
            </Flex>
            <Flex className={"flex-col"}>
              <h2 className="text-xl font-medium text-[#333333]">
                QUICK LINKS
              </h2>
              <ul className="mt-6 flex flex-col gap-3 cd:gap-y-6">
                <li className="text-lg font-normal text-[rgba(51,51,5,0.8)]">
                  <a href="#">About us</a>
                </li>
                <li className="text-lg font-normal text-[rgba(51,51,5,0.8)]">
                  <a href="#">Contact us</a>
                </li>
                <li className="text-lg font-normal text-[rgba(51,51,5,0.8)]">
                  <a href="#">Products</a>
                </li>
                <li className="text-lg font-normal text-[rgba(51,51,5,0.8)]">
                  <a href="#">Sign Up</a>
                </li>
              </ul>
            </Flex>
            <Flex className={"flex-col"}>
              <h2 className="text-xl font-medium text-[#333333]">
                CUSTOMER AREA
              </h2>
              <ul className="mt-6 flex flex-col gap-3 cd:gap-y-6">
                <li className="text-lg font-normal text-[rgba(51,51,5,0.8)]">
                  <a href="#">My Account</a>
                </li>
                <li className="text-lg font-normal text-[rgba(51,51,5,0.8)]">
                  <a href="#">Orders</a>
                </li>
                <li className="text-lg font-normal text-[rgba(51,51,5,0.8)]">
                  <a href="#">Terms</a>
                </li>
                <li className="text-lg font-normal text-[rgba(51,51,5,0.8)]">
                  <a href="#">Privacy Policy</a>
                </li>
                <li className="text-lg font-normal text-[rgba(51,51,5,0.8)]">
                  <a href="#">Shipping Information</a>
                </li>
              </ul>
            </Flex>
            <Flex className={"flex-col gap-y-6"}>
              <h2 className="text-xl font-medium text-[#333333]">CONTACT</h2>
              <p className="text-lg font-normal text-[#333333] w-full pr-5 cd:w-[390px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor .
              </p>
              <Flex className={"gap-x-6"}>
                <Img src={Phone} />
                <Flex className={"flex-col"}>
                  <h6 className="text-base font-normal text-[#333333]">
                    Have any question?
                  </h6>
                  <a
                    href="#"
                    className="text-[28px] font-semibold text-[#0198E9]"
                  >
                    099 456 789
                  </a>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Container>
        <div className="before:content-[''] before:absolute relative before:w-full before:H-[1.5px] before:border-solid before:border-[#EFEEEE] before:border before:top-14 "></div>
        <Container>
          <Flex className={"mt-28 cd:justify-between md:justify-center"}>
            <h4 className="text-base ml-5 font-normal text-[#757575]">
              Projectnirvoya - © 2021 All Rights Reserved
            </h4>
            <Flex className={"items-center cd:flex  hidden"}>
                <h6 className="text-lg font-medium text-[#0198E9]">Pay With</h6>
                <Img src={Pay}/>
            </Flex>
          </Flex>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
