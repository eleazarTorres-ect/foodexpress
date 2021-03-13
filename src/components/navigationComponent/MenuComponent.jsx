const MenuComponent = ({ linkReference, id, status, label }) => {
  return (
    <a
      href={linkReference}
      className="relative flex items-center justify-center w-12 py-2 mx-1 md:w-16 lg:px-2 text-pharma-A-400 hover:text-pharma-A-400"
    >
      <div
        id={id}
        className="pb-1 border-b-0 public_semibold border-food-B-400"
      >
        {label}
      </div>
    </a>
  );
};

export default MenuComponent;
