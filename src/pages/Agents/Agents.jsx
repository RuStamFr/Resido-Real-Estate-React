import "./agents.scss";
import BlueBanner from "../../components/BlueBanner/BlueBanner";
import AgentsSection from "../../sections/AgentsSection/AgentsSection";
const Agents = () => {
  return (
    <>
      <BlueBanner
        title={"All Agents"}
        subTitle={"Lists of our all expert agents"}
      />
      <AgentsSection />
    </>
  );
};
export default Agents;
