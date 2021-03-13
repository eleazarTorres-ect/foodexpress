import Logo1 from "../../assets/img/Food-16.svg";
const LeftContainer = () => {
  return (
    <div className="flex flex-wrap content-center justify-center w-full lg:w-1/2">
      <div className="flex flex-wrap content-center justify-center flex-grow">
        <img
          className="h-48 lg:h-full shake-little animate-bounce_idle "
          src={Logo1}
          alt="About Us"
          data-aos="fade-right"
          data-aos-offset="200"
        />
      </div>
    </div>
  );
};

export default LeftContainer;
