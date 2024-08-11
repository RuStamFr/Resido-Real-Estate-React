import Image from "../Image/Image";
import Wrapper from "../Wrapper/Wrapper";
import LocationIcon from "./img/location-icon.png";
import PhoneIcon from "./img/phone-icon.png";
import EmailIcon from "./img/email-icon.png";
import "./footer-bottom-left-info.scss";
const FooterBottomLeftInfo = () => {
  return (
    <div className="footer-bottom-left-info-block">
      <div className={"footer-bottom-left-location footer-bottom-margin"}>
        <Image
          className={"footer-bottom-left-location-icon"}
          src={LocationIcon}
        />
        <span className="footer-bottom-left-icon-text">
          Collins Street West, Victoria 8007, Australia.
        </span>
      </div>

      <Wrapper className={"footer-bottom-left-phone  footer-bottom-margin"}>
        <Image src={PhoneIcon} />
        <span className="footer-bottom-left-icon-text">+994 55-209-56-55</span>
      </Wrapper>
      <Wrapper className={"footer-bottom-left-email  footer-bottom-margin"}>
        <Image src={EmailIcon} />
        <span className="footer-bottom-left-icon-text"> info@example.com</span>
      </Wrapper>
    </div>
  );
};
export default FooterBottomLeftInfo;
