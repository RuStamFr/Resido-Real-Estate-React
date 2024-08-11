import "./footer.scss";
import Section from "../Section/Section";
import FooterSignUpBtn from "../FooterSignUpBtn/FooterSignUpBtn";
import Wrapper from "../Wrapper/Wrapper";
import Logo from "../Logo/Logo";
import Image from "../Image/Image";
import FooterBottomLeftInfo from "../FooterBottomLeftInfo/FooterBottomLeftInfo";
import {Link} from "react-router-dom";
const Footer = () => {
  return (
    <footer className={"footer"}>
      <Section className={"footer-top"}>
        <div className="footer-top-left">
          <h3 className="footer-top-margin-bottom">
            Want to Become a Real Estate Agent?
          </h3>
          <div className="footer-top-left-bottom-text">
            We'll help you to grow your career and growth.
          </div>
        </div>
        <FooterSignUpBtn text={"Sign Up Today"} />
      </Section>
      <Section className={"footer-bottom"}>
        <Wrapper className={"footer-column"}>
          <Wrapper width={"8.75rem"} className={"footer-bottom-left-logo"}>
            <Logo color={"light"} />
          </Wrapper>
          <div className="footer-bottom-location">
            <FooterBottomLeftInfo />
          </div>
        </Wrapper>
        <Wrapper className={"footer-column"}></Wrapper>
        <Wrapper className={"footer-column"}>
          <h3 className="footer-bottom-about">About</h3>
          <Link className="footer-bottom-about-link" to={"/"}>
            About us
          </Link>
          <Link className="footer-bottom-about-link" to={"/"}>
            Contact us
          </Link>
          <Link className="footer-bottom-about-link" to={"/"}>
            Terms & Conditions
          </Link>
        </Wrapper>
        <Wrapper className={"footer-column"}>
          <h3 className="footer-bottom-about footer-bottom-width">
            MORE INFORMATION
          </h3>
          <Link className="footer-bottom-about-link" to={"/properties"}>
            All properties
          </Link>
          <Link className="footer-bottom-about-link" to={"/"}>
            Houses for sale
          </Link>
          <Link className="footer-bottom-about-link" to={"/"}>
            Houses for rent
          </Link>
        </Wrapper>
        <Wrapper className={"footer-column"}>
          <h3 className="footer-bottom-about">NEWS</h3>
          <Link className="footer-bottom-about-link" to={"/"}>
            Latest news
          </Link>
          <Link className="footer-bottom-about-link" to={"/"}>
            House architecture
          </Link>
          <Link className="footer-bottom-about-link" to={"/"}>
            House design
          </Link>
          <Link className="footer-bottom-about-link" to={"/"}>
            Building materials
          </Link>
        </Wrapper>
      </Section>
    </footer>
  );
};
export default Footer;
