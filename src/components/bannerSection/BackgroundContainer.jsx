import Logo1 from "../../assets/img/Food-01.svg";
const BackgroundContainer = () => {
  return (
    <div className="absolute flex-wrap content-end justify-center w-full lg:content-center ">
      <div className="flex flex-wrap content-end justify-end flex-grow lg:content-center">
        <img className="h-screen" src={Logo1} alt="Banner" />
      </div>
    </div>
  );
};

export default BackgroundContainer;
