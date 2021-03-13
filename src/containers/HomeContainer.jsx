import React from "react";
import BannerContainer from "../components/bannerSection/BannerContainer";
import BestSellerContainer from "../components/bestSellerSection/BestSellerContainer";
import NavigationBar from "../components/navigationComponent/NavigationBar";

const HomeContainer = () => {
  //TODO Testimony Section

  return (
    <React.Fragment>
      <NavigationBar />
      <section className="flex content-center justify-between w-full">
        <BannerContainer />
      </section>
      <section className="flex content-center justify-between w-full">
        <BestSellerContainer />
      </section>
    </React.Fragment>
  );
};
export default HomeContainer;
