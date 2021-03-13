import React from "react";
import AboutUsContainer from "../components/aboutUsSection/AboutUsContainer";
import AdvertisementContainer from "../components/advertisementSection/AdvertisementContainer";
import BannerContainer from "../components/bannerSection/BannerContainer";
import BestSellerContainer from "../components/bestSellerSection/BestSellerContainer";
import FooterContainer from "../components/footerSection/FooterContainer";
import NavigationBar from "../components/navigationComponent/NavigationBar";
import NewItemsContainer from "../components/newItemsSection/NewItemsContainer";
import ReviewContainer from "../components/reviewsSection/ReviewContainer";

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
      <section className="flex content-center justify-between w-full">
        <NewItemsContainer />
      </section>
      <section className="flex content-center justify-between w-full">
        <AboutUsContainer />
      </section>
      <section className="flex content-center justify-between w-full">
        <AdvertisementContainer />
      </section>
      <section className="flex content-center justify-between w-full">
        <ReviewContainer />
      </section>
      <section className="flex content-center justify-between w-full">
        <FooterContainer />
      </section>
    </React.Fragment>
  );
};
export default HomeContainer;
