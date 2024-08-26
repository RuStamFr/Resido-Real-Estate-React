import "./agents-section.scss";
import Section from "../../components/Section/Section";
import AgentBlock from "../../components/AgentBlock/AgentBlock";
import {useSelector} from "react-redux";

const AgentsSection = () => {
  const agents = useSelector((state) => state.agents.agents);
  const properties = useSelector((state) => state.propertyPosts.propertyPosts);
  return (
    <Section className={"agents-section"}>
      <div className="agents-blocks">
        {agents.map((agent) => {
          const filtered = properties.filter((property) => {
            return property.agents_id === agent.id;
          });
          const agentWithCount = {...agent, count: filtered.length};
          return <AgentBlock key={agent.id} agent={agentWithCount} />;
        })}
      </div>
    </Section>
  );
};

export default AgentsSection;
