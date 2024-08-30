import "./agent-details.scss";
import BlueBanner from "../../components/BlueBanner/BlueBanner";
import AgentSection from "../../sections/AgentSection/AgentSection";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

const AgentDetails = () => {
  const {agentId} = useParams();
  const agents = useSelector((state) => state.agents.agents);

  const properties = useSelector((state) => state.propertyPosts.propertyPosts);

  const agent = agents.find((agent) => {
    return +agent.id === +agentId;
  });
  const agentProperties = properties.filter((property) => {
    return +property.agents_id === +agentId;
  });

  return (
    <>
      <BlueBanner title={"Agent Detail"} subTitle={agent?.name} />
      <AgentSection agent={agent} properties={agentProperties} />
    </>
  );
};
export default AgentDetails;
