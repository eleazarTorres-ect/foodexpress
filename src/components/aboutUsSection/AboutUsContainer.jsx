import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";

const AboutUsContainer = () => {
  return (
    <div
      className="flex flex-col-reverse justify-between w-full h-auto px-2 py-20 lg:screenFromNav sm:flex-row sm:py-20 sm:px-24 md:px-24 lg:px-48"
      id="aboutUs"
    >
      <LeftContainer />
      <RightContainer />
    </div>
  );
};

export default AboutUsContainer;
