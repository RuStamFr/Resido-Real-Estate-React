import "./agent-details-block.scss";
import Image from "../../components/Image/Image";
import Agent from "../../assets/images/agent 3.jpg";
import AgentPhoneIcon from "../../assets/icons/agent-phone-icon.png";
import Wrapper from "../../components/Wrapper/Wrapper";
import {Link} from "react-router-dom";
const AgentDetailsBlock = () => {
  return (
    <>
      <div className="agency agency-list">
        <div className="agency-avatar">
          <Image src={Agent} className="agent-img" />
        </div>
        <div className="agency-content">
          <div className="agency-name-info">
            <h4 className="agency-name">
              <Link to={"/agents"}>America Gottlieb</Link>
            </h4>
            <span className="agency-phone-info">
              <Wrapper className={"agency-phone-icon"} width={"0.9375rem"}>
                <Image src={AgentPhoneIcon} />
              </Wrapper>
              +18386611830
            </span>
          </div>
          <div className="agency-desc">
            <p>Mouse with an important air.</p>
          </div>
          <div className="prt-detail">
            <span>2 Property</span>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
    </>
  );
};

export default AgentDetailsBlock;
