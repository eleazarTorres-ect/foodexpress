import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";

const AboutUsContainer = () => {
  return (
    <div
      className="h-auto lg:screenFromNav  w-full flex flex-col-reverse sm:flex-row justify-between
                py-20 sm:py-20 
                px-2 sm:px-24 md:px-24 lg:px-48"
      id="aboutUs"
    >
      <LeftContainer />
      <RightContainer />
    </div>
  );
};

export default AboutUsContainer;
