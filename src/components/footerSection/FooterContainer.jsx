import EndNoteComponent from "./EndNoteComponent";
import FooterComponent from "./FooterComponent";
const FooterContainer = () => {
  return (
    <div
      className="justify-between w-full h-auto px-2 py-5 bg-food-B-400 sm:px-24 md:px-24 lg:px-48"
      id="footer"
    >
      <div className="flex flex-wrap max-w-6xl m-auto text-red-500 justify-left">
        <FooterComponent
          columnTitle="Community"
          data={["Facebook", "Twitter", "Instagram", "Youtube"]}
        />
        <FooterComponent
          columnTitle="About Us"
          data={["History", "Blog", "Location"]}
        />
        <FooterComponent
          columnTitle="Bestseller"
          data={["Ramen", "Sushi", "Chicken Teriyaki", "Tempura"]}
        />
        <FooterComponent
          columnTitle="New Products"
          data={["Sushi Hokkaido", "Strawberry Pancake"]}
        />
      </div>
      <EndNoteComponent />
    </div>
  );
};

export default FooterContainer;
