import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IoIosStarOutline } from "react-icons/io";
import { TiPlus, TiMinus } from "react-icons/ti";
import axios from "axios";

import okImg from "../Assets/ok.png";
import Love from "../Assets/Love.png";
import LoveRed from "../Assets/LoveRed.png";

import Breadcrumb from "../Layouts/Breadcrumb";
import Container from "../Layouts/Container";
import Img from "../Layouts/Img";
import Flex from "../Layouts/Flex";

const SingleProducts = () => {
  const [value, setValue] = useState(1); // for increase and decrease for quntity

  let { id } = useParams();
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${id}`
        );

        // Assuming a successful response status is in the range 200-299
        if (response.status >= 200 && response.status < 300) {
          setProductData(response.data);
        } else {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []);
  return (
    <section className="pt-4 cd:pt-14 font-poppins bg-[#FAFAFA]">
      <Container>
        <Breadcrumb
          pathName={window.location.pathname.split("/")[1]}
          //   name={window.location.pathname.split("/")[1]}
          path={window.location.pathname}
        />
        <Flex className={"justify-between flex-col cd:flex-row"}>
          <Flex className={"cd:w-[46%] md:w-[46%] w-full"}>
            {productData ? (
              <div className="">
                <Img
                  src={productData.thumbnail}
                  className={"cd:w-[519px] cd:h-[519px] pt-8 px-3"}
                />
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </Flex>
          <Flex className={"cd:w-[43%] flex-col pt-5 ml-5 cd:ml-0"}>
            <h2 className="cd:text-2xl text-base md:text-xl text-[#333333] font-medium">
              {productData && productData.description}
            </h2>
            <Flex
              className={
                "cd:items-center cd:gap-x-8 md:justify-between  cd:justify-between md:flex-col md:flex-row flex-col cd:flex-row mt-5 cd:mt-6 sm:mt-4 gap-y-3"
              }
            >
              <Flex className={"gap-1 items-center"}>
                <h2 className="text-[#333333] font-medium text-sm md:text-base cd:text-lg">
                  4.0
                </h2>

                <IoIosStarOutline />
                <IoIosStarOutline />
                <IoIosStarOutline />
                <IoIosStarOutline />
                <IoIosStarOutline />
                <h6 className="text-[#BABABA]">(223)</h6>
              </Flex>
              <Flex className={"items-center gap-x-2"}>
                <Img src={okImg} className={"w-[21px] h-[21px]"} />
                <h2 className="text-sm md:text-base cd:text-lg font-semibold text-[#333333]">
                  4,320
                </h2>
                <span className="text=[#C7C7C7] text-sm md:text-base cd:text-lg font-medium">
                  Sold
                </span>
              </Flex>
              <Flex className={"gap-x-2"}>
                <Img src={Love} />
                <h4 className="text-sm md:text-base cd:text-lg font-bold text-[#0198E9]">
                  Add to wishlist
                </h4>
              </Flex>
            </Flex>
            <Flex className={"items-center gap-x-4 mt-5 cd:mt-10"}>
              <h2 className="text-xl md:text-2xl cd:text-4xl font-semibold text-[#0198E9]">
                $
                {productData &&
                  Math.ceil(
                    productData.price -
                      (productData.price * productData.discountPercentage) / 100
                  )}
              </h2>
              <strike className=" text-lg cd:text-2xl font-normal text-[#8D8D8D]">
                ${productData && productData.price}
              </strike>
              <h6 className="text-xs cd:text-sm font-semibold bg-CustomLinear px-2 py-[2px] text-white">
                {productData && Math.ceil(productData.discountPercentage)}%
              </h6>
            </Flex>
            <Flex className={"items-center gap-x-8 mt-3"}>
              <h2 className="text-base font-medium text-[#3D3D3F]">
                SKU: <span className="text-[#757575]">12314124124</span>
              </h2>
              <h6 className="text-base text-[#757575] font-normal">
                {productData && productData.stok === 0 ? (
                  <div>out of stok</div>
                ) : (
                  <div> in stok</div>
                )}
              </h6>
            </Flex>
            <p className="text-sm md:text-base sm:text-base  cd:text-lg text-[#333333] font-normal mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <div className="ml-5">
              <ul className="flex gap-1 flex-col mt-2">
                <li className="text-sm md:text-base sm:text-base  cd:text-lg text-[#333333] font-normal list-disc">
                  Direct Full Array
                </li>
                <li className="text-sm md:text-base sm:text-base  cd:text-lg text-[#333333] font-normal list-disc">
                  Quantum Dot Technology
                </li>
                <li className="text-sm md:text-base sm:text-base  cd:text-lg text-[#333333] font-normal list-disc">
                  Ambient Mode
                </li>
                <li className="text-sm md:text-base sm:text-base  cd:text-lg text-[#333333] font-normal list-disc">
                  One Remote Control
                </li>
              </ul>
            </div>
            <Flex className={"items-center gap-x-3 mt-8"}>
              <h2 className="text-lg text-[#333333] font-normal">Size</h2>
              <div className="text-sm text-[#6E6E6F] font-normal px-2 sm:px-4 cd:px-4 py-1 bg-white">
                S
              </div>
              <div className="text-sm text-[#6E6E6F] font-normal px-2 sm:px-4 cd:px-4 py-1 bg-white">
                M
              </div>
              <div className="text-sm text-[#6E6E6F] font-normal px-2 sm:px-4 cd:px-4 py-1 bg-white">
                L
              </div>
              <div className="text-sm text-[#6E6E6F] font-normal px-2 sm:px-4 cd:px-4 py-1 bg-white">
                X
              </div>
              <div className="text-sm text-[#6E6E6F] font-normal px-2 sm:px-4 cd:px-4 py-1 bg-white">
                XL
              </div>
              <div className="text-sm text-[#6E6E6F] font-normal px-2 sm:px-4 cd:px-4 py-1 bg-white">
                XXL
              </div>
            </Flex>
            <Flex className={"mt-10 cd:items-center gap-x-9 flex-col sm:flex-row gap-y-5 sm:pr-5"}>
              <Flex className={"items-center gap-x-4"}>
                <h5 className="text-sm text-[#3D3D3F] font-normal">
                  Quantity:{" "}
                </h5>
                <Flex className={"w-[85px]"}>
                  <button
                    className="w-7 bg-[#EFEFEF] px-2 py-1 flex justify-center items-center"
                    onClick={() =>
                      setValue((prev) => (prev > 1 ? prev - 1 : prev))
                    }
                  >
                    <TiMinus />
                  </button>
                  <input
                    type="tel"
                    name=""
                    id=""
                    className="p-1 bg-white w-[33%] relative outline-none text-center"
                    value={value}
                    readOnly
                  />
                  <button
                    className="w-7 bg-[#EFEFEF] px-2 py-1 flex justify-center items-center"
                    onClick={() =>
                      setValue((prev) => (prev < 9 ? prev + 1 : prev))
                    }
                  >
                    <TiPlus />
                  </button>
                </Flex>
              </Flex>
              <button className="w-[75%]  cd:px-[44px] py-3 bg-[#0198E9] text-white rounded-[3px] text-xl font-normal">
                Add cart
              </button>
              <button className="w-[75%]  cd:px-[44px] py-3 bg-[#EBF4F9] rounded-[3px] text-[#0198E9] text-xl font-normal">
                Buy Now
              </button>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </section>
  );
};

export default SingleProducts;
