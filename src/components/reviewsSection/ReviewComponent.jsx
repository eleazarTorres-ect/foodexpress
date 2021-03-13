import Star from "../../assets/img/star.svg";
import StarLight from "../../assets/img/starlight.svg";

const ReviewComponent = ({ key, name, stars, message, image }) => {
  var starColors = [];
  var x, y;
  for (x = 0; x < stars; x++) {
    starColors.push(Star);
  }
  for (y = starColors.length - 1; y < 4; y++) {
    starColors.push(StarLight);
  }
  return (
    <div className="flex-wrap content-between w-4/5 max-w-sm py-2 m-5 overflow-hidden transition duration-150 ease-in-out transform rounded shadow-lg h-96 md:py-5 xl:py-10 hover:shadow-xl hover:scale-110">
      <div className="flex flex-wrap justify-center h-32">
        <img className="h-16 lg:h-full" src={image} alt={name} />
      </div>

      <div className="px-4 pt-2 text-sm text-left public_thin">{message}</div>
      <div className="px-4 pt-4 text-left public_semibold"> - {name}</div>

      <div className="flex content-center w-full px-4 pt-3">
        {starColors.map((listitem) => (
          <img className="w-4 h-4" src={listitem} alt={listitem}></img>
        ))}
        <div className="px-4 text-sm text-left public_thin">{stars} / 5</div>
      </div>
    </div>
  );
};

export default ReviewComponent;
