import {Link} from "react-router-dom";
import "./sign-btn.scss";
import Image from "../Image/Image";
import UserSvg from "./img/user-light.svg";
import Wrapper from "../Wrapper/Wrapper";

const SignBtn = ({text}) => {
  return (
    <Link to={"/login"} className="sign-in-link">
      <Wrapper width={"0.8rem"}>
        <Image src={UserSvg} />
      </Wrapper>
      <span className="header-bottom-sign-in-span">{text}</span>
    </Link>
  );
};

export default SignBtn;
