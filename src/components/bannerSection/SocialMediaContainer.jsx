import SocialMediaComponent from "./SocialMediaComponent";
import Facebook from "../../assets/img/facebook.svg";
import Instagram from "../../assets/img/instagram.svg";
import Twitter from "../../assets/img/twitter.svg";
const SocialMediaContainer = () => {
  return (
    <div className="flex justify-start w-full">
      <SocialMediaComponent
        id="1"
        title="Facebook"
        linkReference="https://facebook.com"
        image={Facebook}
      />
      <SocialMediaComponent
        id="2"
        title="Instagram"
        linkReference="https://instagram.com"
        image={Instagram}
      />
      <SocialMediaComponent
        id="3"
        title="Twitter"
        linkReference="https://twitter.com"
        image={Twitter}
      />
    </div>
  );
};

export default SocialMediaContainer;
