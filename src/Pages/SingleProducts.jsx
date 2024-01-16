import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IoIosStarOutline } from "react-icons/io";
import axios from "axios";

import okImg from "../Assets/ok.png";
import Love from "../Assets/Love.png";
import LoveRed from "../Assets/LoveRed.png";

import Breadcrumb from "../Layouts/Breadcrumb";
import Container from "../Layouts/Container";
import Img from "../Layouts/Img";
import Flex from "../Layouts/Flex";

const SingleProducts = () => {
  let { id } = useParams();
  console.log(useParams());
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
    <section className="pt-14 font-poppins bg-[#FAFAFA]">
      <Container>
        <Breadcrumb
          pathName={window.location.pathname.split("/")[1]}
          //   name={window.location.pathname.split("/")[1]}
          path={window.location.pathname}
        />
        <Flex className={"justify-between"}>
          <Flex className={"w-[46%]"}>
            {productData ? (
              <div className="bg-CustomLinearSingle">
                <Img
                  src={productData.thumbnail}
                  className={"w-[519px] h-[519px] pt-8 px-3"}
                />
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </Flex>
          <Flex className={"w-[43%] flex-col"}>
            <h2 className="text-2xl text-[#333333] font-medium">
              {productData && productData.description}
            </h2>
            <Flex className={"items-center gap-x-8 justify-between mt-6"}>
              <Flex className={"p-2 gap-[2px] items-center"}>
                <h2 className="text-[#333333] font-medium text-lg">4.0</h2>

                <IoIosStarOutline />
                <IoIosStarOutline />
                <IoIosStarOutline />
                <IoIosStarOutline />
                <IoIosStarOutline />
                <h6 className="text-[#BABABA]">(223)</h6>
              </Flex>
              <Flex className={"items-center gap-x-2"}>
                <Img src={okImg} className={"w-[21px] h-[21px]"} />
                <h2 className="text-lg font-semibold text-[#333333]">4,320</h2>
                <span className="text=[#C7C7C7] text-lg font-medium">Sold</span>
              </Flex>
              <Flex className={"gap-x-2"}>
                <Img src={Love} />
                <h4 className="text-lg font-bold text-[#0198E9]">
                  Add to wishlist
                </h4>
              </Flex>
            </Flex>
            <Flex className={"items-center gap-x-4 mt-10"}>
              <h2 className="text-4xl font-semibold text-[#0198E9]">
                $
                {productData &&
                  Math.ceil(
                    productData.price -
                      (productData.price * productData.discountPercentage) / 100
                  )}
              </h2>
              <strike className="text-2xl font-normal text-[#8D8D8D]">
                ${productData && productData.price}
              </strike>
              <h6 className="text-sm font-semibold bg-CustomLinear px-2 py-[2px] text-white">
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
            <p className="text-lg text-[#333333] font-normal mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <div className="ml-5">
              <ul className="flex gap-1 flex-col mt-2">
                <li className="text-lg text-[#333333] font-normal list-disc">
                  {" "}
                  Direct Full Array
                </li>
                <li className="text-lg text-[#333333] font-normal list-disc">
                  {" "}
                  Quantum Dot Technology
                </li>
                <li className="text-lg text-[#333333] font-normal list-disc">
                  {" "}
                  Ambient Mode
                </li>
                <li className="text-lg text-[#333333] font-normal list-disc">
                  {" "}
                  One Remote Control
                </li>
              </ul>
            </div>
            <Flex className={"items-center gap-x-3 mt-8"}>
                <h2 className="text-lg text-[#333333] font-normal">Size</h2>
                <div className="text-sm text-[#6E6E6F] font-normal px-4 py-1 bg-white">S</div>
                <div className="text-sm text-[#6E6E6F] font-normal px-4 py-1 bg-white">M</div>
                <div className="text-sm text-[#6E6E6F] font-normal px-4 py-1 bg-white">L</div>
                <div className="text-sm text-[#6E6E6F] font-normal px-4 py-1 bg-white">X</div>
                <div className="text-sm text-[#6E6E6F] font-normal px-4 py-1 bg-white">XL</div>
                <div className="text-sm text-[#6E6E6F] font-normal px-4 py-1 bg-white">XXL</div>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </section>
  );
};

export default SingleProducts;
