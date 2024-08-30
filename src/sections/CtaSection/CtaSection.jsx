import "./cta-section.scss";
import Section from "../../components/Section/Section";
import {Link} from "react-router-dom";
const CtaSection = () => {
  return (
    <Section className={"cta-section"}>
      <div className="cta">
        <h2 className="cta-title">Search Perfect Place In Your City</h2>
        <p className="cta-desc">
          We post regulary most powerful articles for help and support.
        </p>
        <Link to={"/properties"} className="cta-section-view-link">
          Explore More Property
        </Link>
      </div>
    </Section>
  );
};

export default CtaSection;
