import Section from "../../components/Section/Section";
import "./agent-info-section.scss";
import VerticalProductItem from "../../components/VerticalProductItem/VerticalProductItem";
import {useState} from "react";

const AgentInfoSection = ({agent, properties}) => {
  const [tab, setTab] = useState(1);
  const filtered = properties.filter((property) => {
    return +property?.agents_id === +agent?.id && +property?.type_id === tab;
  });

  return (
    <>
      <Section className={"agent-info-section"}>
        <h2 className="agent-info-section-title">Agent info</h2>
        <ul className="agent-info-section-info">
          <li className="agent-info-section-info-li">
            <strong>Ceo</strong>
            {agent?.name}
          </li>
          <li className="agent-info-section-info-li">
            <strong>Email</strong>
            {agent?.email}
          </li>
          <li className="agent-info-section-info-li">
            <strong>Phone</strong>
            {agent?.phone}
          </li>
          <li className="agent-info-section-info-li">
            <strong>Joined on</strong>
            {agent?.date}
          </li>
        </ul>
      </Section>
      <Section className={"agent-properties-section"}>
        <div className="agent-properties-section-nav">
          <div
            onClick={() => setTab(1)}
            className={`agent-properties-section-nav-tab ${
              tab === 1 ? "active" : ""
            }`}
          >
            Rent
          </div>
          <div
            onClick={() => setTab(2)}
            className={`agent-properties-section-nav-tab ${
              tab === 2 ? "active" : ""
            }`}
          >
            Sale
          </div>
        </div>
        <div className="agent-properties-section-list">
          {filtered.map((property) => {
            return (
              <VerticalProductItem
                key={property?.id}
                className={"agent-properties-section-list-item"}
                property={property}
              />
            );
          })}
        </div>
      </Section>
    </>
  );
};

export default AgentInfoSection;
