import SeeProductButton from "./SeeProductsButton";
import SocialMediaContainer from "./SocialMediaContainer";
import StatisticsContainer from "./StatisticsContainer";

const LeftContainer = () => {
  return (
    <div
      className="flex flex-wrap content-center w-full lg:w-1/2"
      data-aos="fade-right"
      data-aos-duration="2000"
    >
      <div>
        <div className="text-3xl text-center public_semibold md:text-left">
          <span className="text-food-A-400">Japan </span>
          <span className="text-food-B-400">Xpress</span>
        </div>
        <div className="text-6xl text-center public_extrabold md:text-left">
          Japan Delicacies
        </div>
        <div className="mt-4 text-lg text-center public_regular lg:text-xl md:text-left">
          <p>Your Fave Japanese Food Delivered</p>
          <p>
            <span className="hover:underline hover:text-food-A-400">Hot </span>
            <span>and </span>
            <span className="hover:underline hover:text-food-A-400">Fresh</span>
          </p>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start">
          <SeeProductButton></SeeProductButton>
        </div>
        <div className="flex flex-wrap justify-center md:justify-start">
          <SocialMediaContainer />
        </div>
        <div className="flex-wrap self-end justify-center hidden mt-12 md:justify-start">
          <StatisticsContainer />
        </div>
      </div>
    </div>
  );
};

export default LeftContainer;
