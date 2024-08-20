import "./agent-details.scss";
import BlueBanner from "../../components/BlueBanner/BlueBanner";
import AgentSection from "../../sections/AgentSection/AgentSection";
const AgentDetails = () => {
  return (
    <>
      <BlueBanner title={"Agent Detail"} subTitle={"America Gottlieb"} />
      <AgentSection />
    </>
  );
};
export default AgentDetails;
