import {Link} from "react-router-dom";
import "./footer-sign-up-btn.scss";

const FooterSignUpBtn = ({text}) => {
  return (
    <Link className="footer-sign-up-btn-link">
      <div className="footer-sign-up-btn-link-div">{text}</div>
    </Link>
  );
};
export default FooterSignUpBtn;
