import {Link} from "react-router-dom";
import "./log-out-btn.scss";
import Image from "../Image/Image";
import UserSvg from "./img/user-light.svg";
import Wrapper from "../Wrapper/Wrapper";

const LogOutBtn = ({text, onClick}) => {
  return (
    <button onClick={onClick} className="log-out-btn">
      <Wrapper width={"0.8rem"}>
        <Image src={UserSvg} />
      </Wrapper>
      <span className="header-bottom-log-out-span">{text}</span>
    </button>
  );
};

export default LogOutBtn;
