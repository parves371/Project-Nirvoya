import React, { useState } from "react";
import ReactPaginate from "react-paginate";

import Product from "../Layouts/Cards";
import Flex from "./Flex";

const Paigination = ({ itemsPerPage, data }) => {
  const items = data;

  function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((product, index) => (
            <Product
              id={product.id}
              key={index}
              showSaleBage={true}
              sale={`${Math.ceil(product.discountPercentage)}% OFF`}
              title={product.brand}
              CardImg={product.thumbnail}
              price={`৳${product.price}`}
            />
          ))}
      </>
    );
  }
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const [lastPage, setLastPage] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
    setLastPage(event.selected);
    // console.log(itemOffset);
  };
  console.log();

  return (
    <>
      <Flex
        className={"gap-x-10 justify-center flex-wrap gap-y-[50px] mt-[60px] px-6 md:px-0"}
      >
        <Items currentItems={currentItems} />
      </Flex>
      <ReactPaginate
        className="flex mt-10 gap-x-4 items-center justify-center cd:justify-end pb-12"
        pageLinkClassName="text-[#0198E9] text-lg font-semibold py-3 px-6 rounded-md bg-white "
        activeLinkClassName ="text-white text-lg font-semibold py-3 px-6 rounded-md bg-[rgba(1,152,233,1)]"
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        previousClassName="hidden cd:flex text-[#0198E9] text-lg font-semibold py-2 px-5 bg-white rounded-md border border-solid border-[#E9E9E9]"
        nextClassName="hidden cd:flex text-[#0198E9] text-lg font-semibold py-2 px-5 bg-white rounded-md border border-solid border-[#E9E9E9]"
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Paigination;
