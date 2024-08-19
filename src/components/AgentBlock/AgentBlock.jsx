import Image from "../Image/Image";
import "./agent-block.scss";
import Agent3 from "../../assets/images/agent 3.jpg";
import {Link} from "react-router-dom";
import Wrapper from "../../components/Wrapper/Wrapper";
import HomeIcon from "../../assets/icons/home-icon.png";
const AgentBlock = () => {
  return (
    <div className={"agent-block"}>
      <Image className={"agent-image"} src={Agent3} />
      <div className="agent-block-detail-wrapper">
        <h5>
          <Link className="agent-block-name">America Gottlieb</Link>
        </h5>
        <Link className="agent-block-mail-icon">
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
            <strong>Phone:</strong> +18386611830
          </li>
          <li>
            <strong>Email:</strong> fern17@rohan.info
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
          2 properties
        </div>
        <div className="agent-block-footer-link">
          <Link className="prt-view" tabindex="0">
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AgentBlock;
