import Logo1 from "../../assets/img/Food-01.svg";
const BackgroundContainer = () => {
  return (
    <div className="absolute flex-wrap content-center justify-center w-full ">
      <div className="flex flex-wrap content-center justify-end flex-grow">
        <img className="h-screen" src={Logo1} alt="Banner" />
      </div>
    </div>
  );
};

export default BackgroundContainer;
