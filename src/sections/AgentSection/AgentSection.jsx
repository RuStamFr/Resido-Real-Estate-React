import Section from "../../components/Section/Section";
import "./agent-section.scss";
import AgentDetailsBlock from "../../components/AgentDetailsBlock/AgentDetailsBlock";
import AgentInfoSection from "../AgentInfoSection/AgentInfoSection";

const AgentSection = ({agent, properties}) => {
  return (
    <Section className={"agent-section"}>
      <AgentDetailsBlock agent={agent} properties={properties} />
      <AgentInfoSection agent={agent} properties={properties} />
    </Section>
  );
};
export default AgentSection;
