import "./agent-details-block.scss";
import Image from "../../components/Image/Image";
import AgentPhoneIcon from "../../assets/icons/agent-phone-icon.png";
import Wrapper from "../../components/Wrapper/Wrapper";

const AgentDetailsBlock = ({agent, properties}) => {
  return (
    <>
      <div className="agency agency-list">
        <div className="agency-avatar">
          <Image src={agent?.photo} className="agent-img" />
        </div>
        <div className="agency-content">
          <div className="agency-name-info">
            <h2 className="agency-name">{agent?.name}</h2>
            <span className="agency-phone-info">
              <Wrapper className={"agency-phone-icon"} width={"0.9375rem"}>
                <Image src={AgentPhoneIcon} />
              </Wrapper>
              {agent?.phone}
            </span>
          </div>
          <div className="agency-desc">
            <p>{agent?.description}</p>
          </div>
          <div className="prt-detail">
            <span>{`${properties?.length} Property`}</span>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
    </>
  );
};

export default AgentDetailsBlock;
