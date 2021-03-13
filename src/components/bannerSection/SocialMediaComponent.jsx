import Facebook from "../../assets/img/facebook.svg";
import Instagram from "../../assets/img/instagram.svg";
import Twitter from "../../assets/img/twitter.svg";

const SocialMediaComponent = ({ id, title, linkReference }) => {
  var Logo;
  if (id == 1) {
    Logo = Facebook;
  }
  if (id == 2) {
    Logo = Instagram;
  }
  if (id == 3) {
    Logo = Twitter;
  }
  return (
    <div className="mx-2">
      <a href={linkReference} target="_blank">
        <img className="w-8 h-8 shake" src={Logo} alt={title} />
      </a>
    </div>
  );
};

export default SocialMediaComponent;
