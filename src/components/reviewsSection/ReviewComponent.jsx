import Star from "../../assets/img/star.svg";
import Cart from "../../assets/img/carts.svg";

const ReviewComponent = ({ key, name, stars, message, image }) => {
  return (
    <div className="flex-wrap content-between w-4/5 max-w-sm py-2 m-5 overflow-hidden transition duration-150 ease-in-out transform rounded shadow-lg h-96 md:py-5 xl:py-10 hover:shadow-xl hover:scale-110">
      <div className="flex flex-wrap justify-center h-32">
        <img
          data-aos="fade-left"
          data-aos-duration="2000"
          className="h-16 transition duration-150 ease-in-out transform lg:h-full shake-slow animate-bounce_idle hover:scale-110"
          src={image}
          alt="Banner"
        />
      </div>

      <div className="px-4 pt-2 text-sm text-left public_thin">{message}</div>
      <div className="px-4 pt-4 text-left public_semibold"> - {name}</div>

      <div className="flex content-center w-full px-4 pt-3">
        <img className="w-4 h-4" src={Star} alt="Star" />
        <img className="w-4 h-4" src={Star} alt="Star" />
        <img className="w-4 h-4" src={Star} alt="Star" />
        <img className="w-4 h-4" src={Star} alt="Star" />
        <img className="w-4 h-4" src={Star} alt="Star" />
        <div className="px-4 text-sm text-left public_thin">{stars} / 5</div>
      </div>
    </div>
  );
};

export default ReviewComponent;