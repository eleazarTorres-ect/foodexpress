import SocialMediaComponent from "./SocialMediaComponent";
const SocialMediaContainer = () => {
  return (
    <div className="flex justify-start w-full">
      <SocialMediaComponent id="1" title="Facebook" linkReference="" />
      <SocialMediaComponent id="2" title="Facebook" linkReference="" />
      <SocialMediaComponent id="3" title="Facebook" linkReference="" />
    </div>
  );
};

export default SocialMediaContainer;
