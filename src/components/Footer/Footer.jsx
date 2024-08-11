import "./footer.scss";
import Section from "../Section/Section";
import FooterSignUpBtn from "../FooterSignUpBtn/FooterSignUpBtn";
import Wrapper from "../Wrapper/Wrapper";
import Logo from "../Logo/Logo";
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
        <div className="footer-bottom-left">
          <Wrapper width={"8.75rem"} className={"footer-bottom-left-logo"}>
            <Logo color={"light"} />
          </Wrapper>
        </div>
      </Section>
      <Section> </Section>
    </footer>
  );
};
export default Footer;
