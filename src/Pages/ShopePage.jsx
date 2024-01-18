import React, { useEffect, useState } from "react";
import axios from "axios";

import ShopeSidebar from "../Components/ShopeSidebar";
import Container from "../Layouts/Container";
import Flex from "../Layouts/Flex";
import Pagination from "../Layouts/Pagination";

const ShopePage = () => {
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
    <section className="pt-8 bg-[#F1F1F1]">
      <Container>
        <Flex className={" justify-between flex-col cd:flex-row w-full rounded-lg"}>
          <ShopeSidebar className={"cd:w-[22%] cd:flex"}/>
          <Flex className={"flex-col cd:w-[75%]"}>
            <Pagination data={products} itemsPerPage={10} />
          </Flex>
        </Flex>
      </Container>
    </section>
  );
};

export default ShopePage;
