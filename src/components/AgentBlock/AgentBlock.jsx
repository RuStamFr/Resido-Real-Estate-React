import Image from "../Image/Image";
import "./agent-block.scss";
import {Link} from "react-router-dom";
import Wrapper from "../../components/Wrapper/Wrapper";
import HomeIcon from "../../assets/icons/home-icon.png";

const AgentBlock = ({agent}) => {
  return (
    <div className={"agent-block"}>
      <Link to={`/agent-details/${agent.id}`}>
        <Image
          className={"agent-image"}
          src={`/public/agents/${agent.id}.jpg`}
        />
      </Link>
      <div className="agent-block-detail-wrapper">
        <h5>
          <Link to={`/agent-details/${agent.id}`} className="agent-block-name">
            {agent.name}
          </Link>
        </h5>
        <Link to={`mailto: ${agent.email}`} className="agent-block-mail-icon">
          <svg
            width="800px"
            height="800px"
            viewBox="0 0 1920 1920"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 1694.235h1920V226H0v1468.235ZM112.941 376.664V338.94H1807.06v37.723L960 1111.233l-847.059-734.57ZM1807.06 526.198v950.513l-351.134-438.89-88.32 70.475 378.353 472.998H174.042l378.353-472.998-88.32-70.475-351.134 438.89V526.198L960 1260.768l847.059-734.57Z"
              fillRule="evenodd"
            />
          </svg>
        </Link>
      </div>
      <div className="agent-block-info">
        <ul className="agent-block-info-ul">
          <li>
            <strong>Phone:</strong> {agent.phone}
          </li>
          <li>
            <strong>Email:</strong> {agent.email}
          </li>
        </ul>
      </div>
      <div className="agent-block-footer">
        <div className="agent-block-footer-properties">
          <Wrapper
            className={"agent-block-footer-properties-image"}
            width={"1.0625rem"}
          >
            <Image src={HomeIcon} />
          </Wrapper>
          {`${agent.count} properties`}
        </div>
        <div className="agent-block-footer-link">
          <Link to={`/agent-details/${agent.id}`} className="prt-view">
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AgentBlock;
