import Logo1 from "../../assets/img/Food-02.svg";
import Star from "../../assets/img/star.svg";
import Cart from "../../assets/img/carts.svg";

const ProductComponent = ({ key, title, stars, price, image }) => {
  return (
    <div className="flex-wrap content-between w-64 max-w-sm py-2 m-5 overflow-hidden transition duration-150 ease-in-out transform rounded shadow-lg h-80 md:w-56 lg:w-64 2xl:w-96 md:py-5 xl:py-10 hover:shadow-xl hover:scale-110">
      <div className="flex flex-wrap justify-center h-48">
        <img
          className="h-48 transition duration-150 ease-in-out transform lg:h-full shake-slow animate-bounce_idle hover:scale-110"
          src={image}
          alt={title}
        />
      </div>
      <div className="flex w-full px-2">
        <img className="w-4 h-4" src={Star} alt="Star" />
        <img className="w-4 h-4" src={Star} alt="Star" />
        <img className="w-4 h-4" src={Star} alt="Star" />
        <img className="w-4 h-4" src={Star} alt="Star" />
        <img className="w-4 h-4" src={Star} alt="Star" />
      </div>
      <div className="px-2 pt-2 text-left public_semibold">{title}</div>
      <div className="flex flex-wrap content-center justify-between px-2">
        <div className="text-left public_thin">{price}</div>
        <div className="flex flex-wrap content-center">
          <img className="w-4 h-4" src={Cart} alt="Star" />
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
