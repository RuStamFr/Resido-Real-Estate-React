import Section from "../../components/Section/Section";
import "./agent-section.scss";
import AgentDetailsBlock from "../../components/AgentDetailsBlock/AgentDetailsBlock";
import AgentInfoSection from "../AgentInfoSection/AgentInfoSection";
const AgentSection = () => {
  return (
    <Section className={"agent-section"}>
      <AgentDetailsBlock />
      <AgentInfoSection />
    </Section>
  );
};
export default AgentSection;
