import "./footer.scss";
import Section from "../Section/Section";
import FooterSignUpBtn from "../FooterSignUpBtn/FooterSignUpBtn";
import Wrapper from "../Wrapper/Wrapper";
import Logo from "../Logo/Logo";
import FooterBottomLeftInfo from "../FooterBottomLeftInfo/FooterBottomLeftInfo";
import { Link } from "react-router-dom";
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
        <Wrapper className={"footer-bottom-left"}>
          <Wrapper width={"8.75rem"} className={"footer-bottom-left-logo"}>
            <Logo color={"light"} />
          </Wrapper>
          <div className="footer-bottom-location">
            <FooterBottomLeftInfo />
          </div>
        </Wrapper>
        <Wrapper className={"footer-bottom-right"}>
          <Wrapper className={"footer-bottom-column"}>
            <h3 className="footer-bottom-heading">About</h3>
            <Link className="footer-bottom-link" to={"/"}>
              About us
            </Link>
            <Link className="footer-bottom-link" to={"/"}>
              Contact us
            </Link>
            <Link className="footer-bottom-link" to={"/"}>
              Terms & Conditions
            </Link>
          </Wrapper>
          <Wrapper className={"footer-bottom-column"}>
            <h3 className="footer-bottom-heading footer-bottom-width">
              MORE INFORMATION
            </h3>
            <Link className="footer-bottom-link" to={"/properties"}>
              All properties
            </Link>
            <Link className="footer-bottom-link" to={"/"}>
              Houses for sale
            </Link>
            <Link className="footer-bottom-link" to={"/"}>
              Houses for rent
            </Link>
          </Wrapper>
          <Wrapper className={"footer-bottom-column"}>
            <h3 className="footer-bottom-heading">NEWS</h3>
            <Link className="footer-bottom-link" to={"/"}>
              Latest news
            </Link>
            <Link className="footer-bottom-link" to={"/"}>
              House architecture
            </Link>
            <Link className="footer-bottom-link" to={"/"}>
              House design
            </Link>
            <Link className="footer-bottom-link" to={"/"}>
              Building materials
            </Link>
          </Wrapper>
        </Wrapper>
      </Section>
    </footer>
  );
};
export default Footer;
