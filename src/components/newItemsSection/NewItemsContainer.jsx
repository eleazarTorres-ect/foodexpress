import React from "react";
import Carousel from "react-elastic-carousel";
import ProductComponent from "./ProductComponent";
import New1 from "../../assets/img/Food-03.svg";
import New2 from "../../assets/img/Food-14.svg";
import New3 from "../../assets/img/Food-12.svg";
import New4 from "../../assets/img/Food-08.svg";
import New5 from "../../assets/img/Food-06.svg";
import New6 from "../../assets/img/Food-04.svg";
import New7 from "../../assets/img/Food-02.svg";

const NewItemsContainer = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <div
      className="justify-center w-full h-auto px-2 py-20 xl:h-screen lg:screenFromNav sm:flex-row sm:py-20 sm:px-24 md:px-24 lg:px-48"
      id="newitems"
    >
      <div className="flex flex-wrap justify-center w-full h-12 py-2 text-2xl text-center md:justify-start md:text-left text-food-A-400 poppins_bold">
        New Products
      </div>
      <Carousel breakPoints={breakPoints} disableArrowsOnEnd={false}>
        <ProductComponent
          key="1"
          title="Ramen"
          stars="5"
          price="Php 35.00"
          image={New1}
        />
        <ProductComponent
          key="2"
          title="Cake"
          stars="4"
          price="Php 35.00"
          image={New2}
        />
        <ProductComponent
          key="3"
          title="Ramen"
          stars="4"
          price="Php 35.00"
          image={New3}
        />
        <ProductComponent
          key="4"
          title="Ramen"
          stars="3"
          price="Php 35.00"
          image={New4}
        />
        <ProductComponent
          key="5"
          title="Ramen"
          stars="5"
          price="Php 35.00"
          image={New5}
        />
        <ProductComponent
          key="6"
          title="Ramen"
          stars="4"
          price="Php 35.00"
          image={New6}
        />
        <ProductComponent
          key="7"
          title="Ramen"
          stars="5"
          price="Php 35.00"
          image={New7}
        />
      </Carousel>
    </div>
  );
};

export default NewItemsContainer;
