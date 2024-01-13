import React from "react";


import Container from "../Layouts/Container";
import Flex from "../Layouts/Flex";
import BoxCategory from "../Layouts/BoxCategory";
import Health from "../Assets/Category/Health&Household.png"
import Kids from "../Assets/Category/Kids Fashion.png"
import Toys from "../Assets/Category/Toys.png"
import Groceries from "../Assets/Category/Groceries.png"
import HomeLife from "../Assets/Category/Home & Lifestyle.png"
import MenFashion from "../Assets/Category/Men Fashion.png"
import WomensFashion from "../Assets/Category/Women’s Fashion.png"
import StationaryBooks from "../Assets/Category/Stationary & Books.png"
import LeatherGoods from "../Assets/Category/Leather Goods.png"
import Jewelleries from "../Assets/Category/Jewelleries.png"
import Watches from "../Assets/Category/Watches.png"
import MenRing from "../Assets/Category/Men Ring.png"
import ToolsHardware from "../Assets/Category/Tools & Hardware.png"
import PetSupplies from "../Assets/Category/Pet Supplies.png"
import Seasonal from "../Assets/Category/Seasonal.png"


const Category = () => {
  return (
    <section className="font-poppins mt-[50px] bg-[#FAFAFA]">
      <Container> 
        <h2 className="font-medium text-[26px] text-[#383838] md:pl-4 cd:pl-0">Category</h2>
        <Flex className={"flex-wrap gap-3 mt-8 justify-between md:pl-4 cd:pl-0 md:pr-4 cd:pr-0"}>
              <BoxCategory src={Health} title={"Health & Household"}/>
              <BoxCategory src={Kids} title={"Kids Fashion"}/>
              <BoxCategory src={Toys} title={"Toys"}/>
              <BoxCategory src={Groceries} title={"Groceries"}/>
              <BoxCategory src={HomeLife} title={"Home & Lifestyle"}/>
              <BoxCategory src={MenFashion} title={"Men Fashion"}/>
              <BoxCategory src={WomensFashion} title={"Women’s Fashion"}/>
              <BoxCategory src={StationaryBooks} title={"Stationary & Books"}/>
              <BoxCategory src={LeatherGoods} title={"Leather Goods"}/>
              <BoxCategory src={Jewelleries} title={"Jewelleries"}/>
              <BoxCategory src={Watches} title={"Watches"}/>
              <BoxCategory src={MenRing} title={"Men Fashion"}/>
              <BoxCategory src={ToolsHardware} title={"Tools & Hardware"}/>
              <BoxCategory src={PetSupplies} title={"Pet Supplies"}/>
              <BoxCategory src={Seasonal} title={"Seasonal"}/>
        </Flex>
      </Container>
    </section>
  );
};

export default Category;
