const MenuComponent = ({ linkReference, id, status, label }) => {
  return (
    <a
      href={linkReference}
      className="w-12 md:w-16 relative mx-1 lg:px-2 py-2 flex justify-center items-center text-pharma-A-400 hover:text-pharma-A-400"
    >
      <div
        id={id}
        className="pb-1 border-b-0  public_semibold border-pharma-A-400"
      >
        {label}
      </div>
    </a>
  );
};

export default MenuComponent;
