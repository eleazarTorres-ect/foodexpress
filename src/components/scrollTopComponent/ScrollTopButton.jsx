import Up from "../../assets/img/up-arrow.svg";

const ScrollTopButton = () => {
  return (
    <div className="fixed bottom-0 right-0 flex justify-center w-16 h-16 rounded-full animate-bounce bg-food-B-400">
      <button className="flex items-center justify-center text-center text-white p-auto show-modal">
        <a href="#home">
          <img className="h-16 p-4 lg:h-full" src={Up} alt="Up" />
        </a>
      </button>
    </div>
  );
};

export default ScrollTopButton;
