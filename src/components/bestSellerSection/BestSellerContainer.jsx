import React from "react";
import Carousel from "react-elastic-carousel";
import ProductComponent from "./ProductComponent";
import Best1 from "../../assets/img/Food-13.svg";
import Best2 from "../../assets/img/Food-11.svg";
import Best3 from "../../assets/img/Food-09.svg";
import Best4 from "../../assets/img/Food-07.svg";
import Best5 from "../../assets/img/Food-05.svg";
import Best6 from "../../assets/img/Food-03.svg";
import Best7 from "../../assets/img/Food-15.svg";

const BestSellerContainer = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <div
      className="justify-between w-full h-screen px-2 py-20 lg:screenFromNav sm:flex-row sm:py-20 sm:px-24 md:px-24 lg:px-48"
      id="bestSeller"
    >
      <div className="w-32 h-12 py-2 text-2xl border-b-2 border-red-500 text-food-A-400 poppins_bold">
        Best Seller
      </div>
      <Carousel breakPoints={breakPoints} disableArrowsOnEnd={false}>
        <ProductComponent
          key="1"
          title="Ramen"
          stars="5"
          price="Php 35.00"
          image={Best1}
        />
        <ProductComponent
          key="2"
          title="Cake"
          stars="4"
          price="Php 35.00"
          image={Best2}
        />
        <ProductComponent
          key="3"
          title="Ramen"
          stars="5"
          price="Php 35.00"
          image={Best3}
        />
        <ProductComponent
          key="4"
          title="Ramen"
          stars="4"
          price="Php 35.00"
          image={Best4}
        />
        <ProductComponent
          key="5"
          title="Ramen"
          stars="5"
          price="Php 35.00"
          image={Best5}
        />
        <ProductComponent
          key="6"
          title="Ramen"
          stars="3"
          price="Php 35.00"
          image={Best6}
        />
        <ProductComponent
          key="7"
          title="Ramen"
          stars="4"
          price="Php 35.00"
          image={Best7}
        />
      </Carousel>
    </div>
  );
};

export default BestSellerContainer;
