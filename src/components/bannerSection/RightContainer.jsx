import Logo1 from "../../assets/img/Food-02.svg";
const RightContainer = () => {
  return (
    <div className="flex flex-wrap content-center justify-center w-full  lg:w-1/2">
      <div className="flex flex-wrap content-center justify-center flex-grow">
        <img
          data-aos="fade-left"
          data-aos-duration="2000"
          className="h-48 transition duration-150 ease-in-out transform lg:h-full shake-slow animate-bounce_idle hover:scale-110"
          src={Logo1}
          alt="Banner"
        />
      </div>
    </div>
  );
};

export default RightContainer;
