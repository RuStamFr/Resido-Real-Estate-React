import Image from "../../components/Image/Image";
import Section from "../../components/Section/Section";
import PersonIcon from "../../assets/icons/register-person-icon.png";
import "./register-section.scss";
import Wrapper from "../../components/Wrapper/Wrapper";
import MailIcon from "../../assets/icons/mail-icon-register.png";
import LockIcon from "../../assets/icons/lock-open-register.png";
import HeadPhone from "../../assets/icons/headphones-icon.png";
import GreenBtn from "../../components/GreenBtn/GreenBtn";
import {Link} from "react-router-dom";
const RegisterSection = () => {
  return (
    <Section className={"register-section"}>
      <form className="register-form">
        <div className="register-block">
          <h2 className="text-center">Register</h2>

          <div className="register-input-blocks">
            <div className="input-block">
              <input
                className="register-input"
                type="text"
                placeholder="First name"
              />
              <Wrapper width={"1.125rem"}>
                <Image className={"register-icon"} src={PersonIcon} />
              </Wrapper>
            </div>
            <div className="input-block">
              <input
                className="register-input"
                type="text"
                placeholder="Last name"
              />
              <Wrapper width={"1.125rem"}>
                <Image className={"register-icon"} src={PersonIcon} />
              </Wrapper>
            </div>
            <div className="input-block">
              <input
                className="register-input"
                type="text"
                placeholder="Email"
              />
              <Wrapper width={"1.125rem"}>
                <Image className={"register-icon"} src={MailIcon} />
              </Wrapper>
            </div>
            <div className="input-block">
              <input
                className="register-input"
                type="text"
                placeholder="Username"
              />
              <Wrapper width={"1.125rem"}>
                <Image className={"register-icon"} src={PersonIcon} />
              </Wrapper>
            </div>
            <div className="input-block">
              <input
                className="register-input"
                type="text"
                placeholder="Password"
              />
              <Wrapper width={"1.125rem"}>
                <Image className={"register-icon"} src={LockIcon} />
              </Wrapper>
            </div>
            <div className="input-block">
              <input
                className="register-input"
                type="text"
                placeholder="Confirm password"
              />
              <Wrapper width={"1.125rem"}>
                <Image className={"register-icon"} src={LockIcon} />
              </Wrapper>
            </div>
            <div className="input-block">
              <input
                className="register-input"
                type="text"
                placeholder="Phone"
              />
              <Wrapper width={"1.125rem"}>
                <Image className={"register-icon"} src={HeadPhone} />
              </Wrapper>
            </div>
          </div>
          <GreenBtn text={"Register"} />
          <div className="form-footer ">
            <p>
              Have an account already?
              <Link to={"/login"} className="form-footer-link">
                Login
              </Link>
            </p>
          </div>
        </div>
      </form>
    </Section>
  );
};

export default RegisterSection;
