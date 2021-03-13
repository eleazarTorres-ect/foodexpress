import Logo1 from "../../assets/img/Food-17.svg";

const AdvertisementContainer = () => {
  return (
    <div
      className="flex flex-col-reverse justify-between w-full h-auto px-2 py-20 lg:screenFromNav sm:flex-row sm:py-20 sm:px-24 md:px-24 lg:px-48"
      id="advertisement"
    >
      <img
        className="h-48 transform scale-75 shadow-md lg:h-full"
        src={Logo1}
        alt="Ads"
      />
    </div>
  );
};

export default AdvertisementContainer;
