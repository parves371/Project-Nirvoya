import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoArrowForwardSharp, IoArrowDown } from "react-icons/io5";

import Container from "../Layouts/Container";
import Cards from "../Layouts/Cards";
import Flex from "../Layouts/Flex";
import CardImg from "../Assets/image.png";

const FlashDeals = () => {
  const [visibleProducts, setVisibleProducts] = useState(4); // Initial number of visible products
  const loadMoreProducts = () => {
    // Increase the number of visible products
    setVisibleProducts(visibleProducts + 4); // You can adjust the number based on your preference
  };
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setProducts(response.data.products);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
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
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Flex className={"pt-10 justify-evenly flex-wrap gap-y-4"}>
            {products &&
              products
                .slice(0, visibleProducts)
                .map((product, index) => (
                  <Cards
                    id={product.id}
                    key={index}
                    showSaleBage={true}
                    sale={`${Math.ceil(product.discountPercentage)}% OFF`}
                    title={product.brand}
                    CardImg={product.thumbnail}
                    price={`৳${product.price}`}
                  />
                ))}
          </Flex>
        )}
        <div
          className={
            "flex cd:w-[175px] md:w-[152px] bg-[#34ADED] rounded-[81px] py-4 px-7 items-center gap-3 cs:mt-10 md:mt-5 cd:ml-[616px] md:ml-[115px] cursor-pointer"
          }
          onClick={loadMoreProducts}
        >
          <button className=" cd:text-base md:text-xs font-semibold text-[#FFFFFF]">
            Show more
          </button>
          <IoArrowDown className="text-white" />
        </div>
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
