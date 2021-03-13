import BackgroundContainer from "./BackgroundContainer";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";

const BannerContainer = () => {
  return (
    <div className="w-full" id="home">
      <BackgroundContainer />
      <div className="flex flex-col-reverse justify-between w-full h-auto px-2 py-20 lg:h-screen sm:flex-row sm:py-20 sm:px-24 md:px-24 lg:px-48">
        <LeftContainer />
        <RightContainer />
      </div>
    </div>
  );
};

export default BannerContainer;
