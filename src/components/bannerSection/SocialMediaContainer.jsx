import SocialMediaComponent from "./SocialMediaComponent";
const SocialMediaContainer = () => {
  return (
    <div className="flex justify-start w-full">
      <SocialMediaComponent
        id="1"
        title="Facebook"
        linkReference="https://facebook.com"
      />
      <SocialMediaComponent
        id="2"
        title="Instagram"
        linkReference="https://instagram.com"
      />
      <SocialMediaComponent
        id="3"
        title="Twitter"
        linkReference="https://twitter.com"
      />
    </div>
  );
};

export default SocialMediaContainer;
