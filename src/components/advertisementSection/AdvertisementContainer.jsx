import Logo1 from "../../assets/img/Food-17.svg";

const AdvertisementContainer = () => {
  return (
    <div
      className="flex flex-wrap justify-center w-full h-auto px-2 py-5 lg:screenFromNav sm:flex-row sm:py-5 sm:px-24 md:px-24 lg:px-48"
      id="advertisement"
    >
      <img
        className="h-full transform scale-75 shadow-md md:h-48 lg:h-full"
        src={Logo1}
        alt="Ads"
      />
    </div>
  );
};

export default AdvertisementContainer;
