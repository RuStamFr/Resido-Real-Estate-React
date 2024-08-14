import "./cta-section.scss";
import Section from "../../components/Section/Section";
import {Link} from "react-router-dom";
const CtaSection = () => {
  return (
    <Section className={"cta-section"}>
      <div className="cta">
        <h2 className="cta-title">Search Perfect Place In Your City</h2>
        <p className="mb-5">
          We post regulary most powerful articles for help and support.
        </p>
        <Link to={"/"} className="cta-section-view-btn">
          Explore More Property
        </Link>
      </div>
    </Section>
  );
};

export default CtaSection;
