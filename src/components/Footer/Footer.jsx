import "./footer.scss";
import Section from "../Section/Section";
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
      </Section>
      <Section className={"footer-bottom"}> </Section>
      <Section> </Section>
    </footer>
  );
};
export default Footer;
