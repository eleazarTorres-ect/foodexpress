const SocialMediaComponent = ({ id, title, linkReference, image }) => {
  return (
    <div className="mx-2">
      <a href={linkReference} target="_blank">
        <img className="w-8 h-8 shake" src={image} alt={title} />
      </a>
    </div>
  );
};

export default SocialMediaComponent;
