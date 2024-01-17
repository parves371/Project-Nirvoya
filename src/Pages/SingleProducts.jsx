import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IoIosStarOutline } from "react-icons/io";
import { TiPlus, TiMinus } from "react-icons/ti";
import axios from "axios";

import okImg from "../Assets/ok.png";
import Love from "../Assets/Love.png";
import profile from "../Assets/profile.jpg";

import Breadcrumb from "../Layouts/Breadcrumb";
import Container from "../Layouts/Container";
import Img from "../Layouts/Img";
import Flex from "../Layouts/Flex";
import Reviews from "../Components/Reviews";
import Inpute from "../Layouts/Inpute";

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
                "cd:items-center cd:gap-x-8 md:justify-between  cd:justify-between md:flex-col flex-col cd:flex-row mt-5 cd:mt-6 sm:mt-4 gap-y-3"
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
            <Flex
              className={
                "mt-10 cd:items-center gap-x-9 flex-col sm:flex-row gap-y-5 sm:pr-5 cd:pr-0"
              }
            >
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

        {/* =============  Producr details setion   ================ */}
        <h2 className="text-lg font-medium text-[#0198E9] py-5 bg-[#F1F1F1] px-5 sm:px-12 border border-solid border-[#FCFCFC] mt-20 font-lato text-justify">
          Producr details of LED Monitor With High Quality In The World
        </h2>
        <Flex className={"bg-[#FFFFFF] font-lato flex-col"}>
          <h4 className="px-5 sm:px-12 pt-6 text-xl sm:text-2xl font-bold text-[#333333]">
            See the best picture no matter where you sit
          </h4>
          <Flex
            className={
              "px-12  pb-9 flex-col w-full border-b border-solid border-[#F1F1F1]"
            }
          >
            <Flex className={"mt-4 justify-between flex-col sm:flex-row"}>
              <ul className="flex gap-y-1 flex-col pl-4 sm:w-[46%]">
                <li className="text-lg text-[#333333] font-normal list-disc">
                  Size : M, L, XL
                </li>
                <li className="text-lg text-[#333333] font-normal list-disc">
                  Product Type : Jogger
                </li>
                <li className="text-lg text-[#333333] font-normal list-disc">
                  Main Material : Cotton
                </li>
                <li className="text-lg text-[#333333] font-normal list-disc">
                  Gender : Male
                </li>
                <li className="text-lg text-[#333333] font-normal list-disc">
                  Waist : Mid-rise
                </li>
                <li className="text-lg text-[#333333] font-normal list-disc">
                  Zip : Fly
                </li>
              </ul>
              <ul className="flex gap-y-1 flex-col pl-4 sm:w-[46%]">
                <li className="text-lg text-[#333333] font-normal list-disc">
                  Zipper : Yes
                </li>
                <li className="text-lg text-[#333333] font-normal list-disc">
                  Pocket : Two front and One Back Pockets.
                </li>
                <li className="text-lg text-[#333333] font-normal list-disc">
                  100% Authentic Product
                </li>
                <li className="text-lg text-[#333333] font-normal list-disc">
                  Product color may slightly vary due to our photography and
                  Sometimes it’s vary on our devices
                </li>
              </ul>
            </Flex>
          </Flex>
          <Flex className={"px-5 sm:px-12 flex-col mt-6"}>
            <h2 className="text-xl sm:text-2xl font-bold text-[#333333]">
              Powerful intelligence for perfection
            </h2>
            <p className="text-base leading-7 sm:text-lg text-[#333333] font-normal mt-[18px] text-justify">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur?
            </p>
            <p className="text-base leading-7 sm:text-lg text-[#333333] font-normal mt-7 text-justify">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita{" "}
            </p>
          </Flex>
        </Flex>
        {/* =================   review setion   ================= */}
        <Flex className={"flex-col  bg-[#FFFFFF] mt-[30px] "}>
          <Flex
            className={"justify-between gap-y-6 flex-col sm:flex-row cd:items-center cd:w-[853px] px-10 py-12"}
          >
            <Flex className={"flex-col"}>
              <h2 className="text-xl text-[#3D3D3F] font-medium">
                Customer reviews
              </h2>
              <Flex className={"gap-2 items-center mt-[10px]"}>
                <Flex className={"gap-1"}>
                  <IoIosStarOutline />
                  <IoIosStarOutline />
                  <IoIosStarOutline />
                  <IoIosStarOutline />
                  <IoIosStarOutline />
                </Flex>
                <h2 className="text-[var(--Black-primary,#3D3D3F)] text-base font-normal  md:text-base cd:text-lg ">
                  4.0
                </h2>
                <p className="text-[var(--Black-primary,#3D3D3F)] text-base font-normal]">
                  out of
                </p>
                <h6 className="text-[var(--Black-primary,#3D3D3F)] text-base font-normal">
                  5
                </h6>
              </Flex>
              <Flex></Flex>
            </Flex>
            <Flex className={"flex-col gap-y-[10px]"}>
              <h6 className="text-sm text-[#3D3D3F] font-normal">5 Stars</h6>
              <h6 className="text-sm text-[#3D3D3F] font-normal">4 Stars</h6>
              <h6 className="text-sm text-[#3D3D3F] font-normal">3 Stars</h6>
              <h6 className="text-sm text-[#3D3D3F] font-normal">2 Stars</h6>
              <h6 className="text-sm text-[#3D3D3F] font-normal">1 Stars</h6>
            </Flex>
            <button className="text-sm text-[#FFFFFF] bg-[#0198E9] px-12 py-[10px] h-10">
              Write a Review
            </button>
          </Flex>
          <h5 className="text-2xl text-[#333333] font-medium pb-[10px] border-b border-solid border-[#F1F1F1] px-10 ">
            Reviews (4)
          </h5>
          <Reviews
            name={"Vanille"}
            rating={"5.0"}
            time={"1 Month Ago"}
            message={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
            img={profile}
          />
          <Reviews
            name={"Vanille"}
            rating={"4.0"}
            time={"7 Month Ago"}
            message={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
            img={profile}
          />
          <Reviews
            name={"Vanille"}
            rating={"3.5"}
            time={"8 Month Ago"}
            message={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
            img={profile}
          />
        </Flex>
        <form className={"pl-5 sm:pl-12 pt-[70px] bg-white pb-16"}>
          <h2 className="text-2xl text-[#383838] font-semibold">
            Add Your Review
          </h2>
          <p className="text-lg text-[#A7A7A7] font-normal mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.{" "}
          </p>
          <Inpute type={"text"} label={"Name *"} className={"mt-[30px]"} />
          <Inpute type={"email"} label={"Email *"} className={"mt-[30px]"} />
          <div className="flex flex-col w-full pr-5 cd:w-[745px] mt-[30px]">
            <label htmlFor="">Review *</label>
            <textarea
              name=""
              id=""
              cols=""
              rows="4"
              className="mt-4 bg-[#FAFAFA] rounded-[5px] outline-[#A7A7A7] p-2 placeholder:p-2 border-2 border-solid border-[#A7A7A7]"
            ></textarea>
          </div>
        <Flex className={"mt-[30px] items-center gap-x-[6px]"}>
        <h3 className="text-lg text-[#383838] font-medium ">
            Rating
          </h3>
          <Flex className={"gap-1"}>
            <IoIosStarOutline />
            <IoIosStarOutline />
            <IoIosStarOutline />
            <IoIosStarOutline />
            <IoIosStarOutline />
          </Flex>
        </Flex>
        <button type="submit" className="mt-[30px] px-14 py-4 bg-[#0198E9] text-lg text-[#FAFAFA] font-medium rounded-[5px]">Submit </button>
        </form>
      </Container>
    </section>
  );
};

export default SingleProducts;
