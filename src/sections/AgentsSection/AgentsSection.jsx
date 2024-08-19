import "./agents-section.scss";
import Section from "../../components/Section/Section";
import AgentBlock from "../../components/AgentBlock/AgentBlock";
const AgentsSection = () => {
  return (
    <Section className={"agents-section"}>
      <div className="agents-blocks">
        <AgentBlock />
        <AgentBlock />
        <AgentBlock />
        <AgentBlock />
        <AgentBlock />
        <AgentBlock />
        <AgentBlock />
        <AgentBlock />
        <AgentBlock />
        <AgentBlock />
        <AgentBlock />
        <AgentBlock />
      </div>
    </Section>
  );
};

export default AgentsSection;
