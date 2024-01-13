import React from "react";
import { IoArrowForwardSharp } from "react-icons/io5";

import Container from "../Layouts/Container";
import Cards from "../Layouts/Cards";
import Flex from "../Layouts/Flex";
import CardImg from "../Assets/image.png";

const FlashDeals = () => {
  return (
    <section className="bg-[#FAFAFA] p-7 font-poppins ">
      <Container>
        <Flex className={"justify-between"}>
          <h2 className="md:text-base cd:text-[26px] font-medium text-[#2E2E2E] ">
            Flash Deals
          </h2>
          <Flex className={"items-center gap-4 cursor-pointer"}>
            <h6 className="text-base font-medium text-[#757575] ">View more</h6>
            <IoArrowForwardSharp />
          </Flex>
        </Flex>
        <Flex className={"pt-10 justify-between flex-wrap gap-y-4"}>
          <Cards
            showSaleBage={true}
            sale={"-25% OFF"}
            title={"Headrest Executive Mesh Office Chairset"}
            CardImg={CardImg}
            price={"৳10500"}
          />
          <Cards
            showSaleBage={true}
            sale={"-25% OFF"}
            title={"Headrest Executive Mesh Office Chairset"}
            CardImg={CardImg}
            price={"৳10500"}
          />
          <Cards
            showSaleBage={true}
            sale={"-25% OFF"}
            title={"Headrest Executive Mesh Office Chairset"}
            CardImg={CardImg}
            price={"৳10500"}
          />
          <Cards
            showSaleBage={true}
            sale={"-25% OFF"}
            title={"Headrest Executive Mesh Office Chairset"}
            CardImg={CardImg}
            price={"৳10500"}
          />
        </Flex>
      </Container>
    </section>
  );
};

export default FlashDeals;
