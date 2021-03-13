import React from "react";
import Carousel from "react-elastic-carousel";
import ReviewComponent from "./ReviewComponent";
import Review1 from "../../assets/img/Food-20.svg";
import Review2 from "../../assets/img/Food-18.svg";
import Review3 from "../../assets/img/Food-21.svg";
import Review4 from "../../assets/img/Food-22.svg";
import Review5 from "../../assets/img/Food-19.svg";

const ReviewContainer = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1, itemsToScroll: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 2 },
  ];
  return (
    <div
      className="justify-between w-full h-screen px-2 py-20 lg:screenFromNav sm:flex-row sm:py-20 sm:px-24 md:px-24 lg:px-48"
      id="reviews"
    >
      <div className="w-32 h-12 py-2 text-2xl border-b-2 border-red-500 text-food-A-400 poppins_bold">
        Testimonies
      </div>
      <Carousel breakPoints={breakPoints} disableArrowsOnEnd={false}>
        <ReviewComponent
          key="1"
          name="John Doe"
          stars="5"
          message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          image={Review1}
        />
        <ReviewComponent
          key="2"
          name="Ann Doe"
          stars="5"
          message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          image={Review2}
        />
        <ReviewComponent
          key="3"
          name="Yukihira Yagami"
          stars="5"
          message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          image={Review3}
        />
        <ReviewComponent
          key="4"
          name="Mark Santos"
          stars="5"
          message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          image={Review4}
        />
        <ReviewComponent
          key="5"
          name="Lucy Doe"
          stars="5"
          message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          image={Review5}
        />
      </Carousel>
    </div>
  );
};

export default ReviewContainer;
