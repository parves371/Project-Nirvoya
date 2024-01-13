import React from "react";
import { IoArrowForwardSharp } from "react-icons/io5";

import Container from "../Layouts/Container";
import Cards from "../Layouts/Cards";
import Flex from "../Layouts/Flex";
import CardImg from "../Assets/image.png";
import Img1 from "../Assets/Featured-Product/image1.png";
import Img2 from "../Assets/Featured-Product/image2.png";
import Img3 from "../Assets/Featured-Product/image3.png";
import Img4 from "../Assets/Featured-Product/image4.png";
import Img5 from "../Assets/Featured-Product/image5.png";
import Img6 from "../Assets/Featured-Product/image6.png";
import Img7 from "../Assets/Featured-Product/image7.png";
import Img8 from "../Assets/Featured-Product/image8.png";

const FeaturedProduct = () => {
  return (
    <section className="bg-[#FAFAFA] p-7 font-poppins ">
      <Container>
        <Flex className={"justify-between"}>
          <h2 className="md:text-base cd:text-[26px] font-medium text-[#2E2E2E] ">
            Featured Product
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
            CardImg={Img1}
            price={"৳10500"}
          />
          <Cards
            showSaleBage={true}
            sale={"-25% OFF"}
            title={"Headrest Executive Mesh Office Chairset"}
            CardImg={Img2}
            price={"৳10500"}
          />
          <Cards
            showSaleBage={true}
            sale={"-25% OFF"}
            title={"Headrest Executive Mesh Office Chairset"}
            CardImg={Img3}
            price={"৳10500"}
          />
          <Cards
            showSaleBage={true}
            sale={"-25% OFF"}
            title={"Headrest Executive Mesh Office Chairset"}
            CardImg={Img4}
            price={"৳10500"}
          />
          <Cards
            showSaleBage={true}
            sale={"-25% OFF"}
            title={"Headrest Executive Mesh Office Chairset"}
            CardImg={Img5}
            price={"৳10500"}
          />
          <Cards
            showSaleBage={true}
            sale={"-25% OFF"}
            title={"Headrest Executive Mesh Office Chairset"}
            CardImg={Img6}
            price={"৳10500"}
          />
          <Cards
            showSaleBage={true}
            sale={"-25% OFF"}
            title={"Headrest Executive Mesh Office Chairset"}
            CardImg={Img7}
            price={"৳10500"}
          />
          <Cards
            showSaleBage={true}
            sale={"-25% OFF"}
            title={"Headrest Executive Mesh Office Chairset"}
            CardImg={Img8}
            price={"৳10500"}
          />
        </Flex>
      </Container>
    </section>
  );
};

export default FeaturedProduct;
