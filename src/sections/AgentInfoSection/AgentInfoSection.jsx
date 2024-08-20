import {Link} from "react-router-dom";
import Section from "../../components/Section/Section";
import "./agent-info-section.scss";
import VerticalProductItem from "../../components/VerticalProductItem/VerticalProductItem";
const AgentInfoSection = () => {
  return (
    <Section className={"agent-info-section"}>
      <div className="agent-info-blocks">
        <div className="block-wrap">
          <div className="block-header">
            <h4 className="block-title">Agent info</h4>
          </div>
          <div className="block-body">
            <ul className="proprty-info">
              <li className="property-info-li">
                <strong>Ceo</strong>America Gottlieb
              </li>
              <li className="property-info-li">
                <strong>Email</strong>fern17@rohan.info
              </li>
              <li className="property-info-li">
                <strong>Phone</strong>+18386611830
              </li>
              <li className="property-info-li">
                <strong>Joined on</strong> 2022-10-30
              </li>
            </ul>
          </div>
        </div>
        <div className="block-result">
          <div className="block-result-header">
            <ul className="nav">
              <li className="nav-item">
                <Link className="nav-link active">Sale</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">Rent</Link>
              </li>
            </ul>
          </div>
          <div className="block-body">
            <div className="block-content">
              <VerticalProductItem />
              <VerticalProductItem />
              <VerticalProductItem />
              <VerticalProductItem />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AgentInfoSection;
