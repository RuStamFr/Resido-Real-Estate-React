import Section from "../../components/Section/Section";
import "./login-section.scss";
import PersonIcon from "../../assets/icons/register-person-icon.png";
import Wrapper from "../../components/Wrapper/Wrapper";
import Image from "../../components/Image/Image";
import LockIcon from "../../assets/icons/lock-open-register.png";
import {Link} from "react-router-dom";
import GreenBtn from "../../components/GreenBtn/GreenBtn";

const LoginSection = () => {
  return (
    <Section className={"login-section"}>
      <form className="login-form">
        <div className="login-block">
          <h2 className="text-center">Login</h2>
          <div className="login-input-blocks">
            <div className="login-input-block">
              <label htmlFor={"input-mail"}>Email/Username</label>
              <input
                id={"input-mail"}
                className={"login-input"}
                placeholder="Email/Username"
              />
              <Wrapper width={"1.125rem"}>
                <Image className={"login-icon"} src={PersonIcon} />
              </Wrapper>
            </div>
            <div className="login-input-block">
              <label htmlFor={"input-password"}>Password</label>
              <input
                id={"input-password"}
                className={"login-input"}
                placeholder="Password"
              />
              <Wrapper width={"1.125rem"}>
                <Image className={"login-icon"} src={LockIcon} />
              </Wrapper>
            </div>
          </div>
          <div className="remember-block">
            <div className="remember-input">
              <input type="checkbox" id="remember" name="scales" />
              <label htmlFor="remember">Remember Me</label>
            </div>
            <Link className="hover-text">Forgot Your Password?</Link>
          </div>
          <GreenBtn text={"Login"} />
          <div className="login-footer">
            <p>
              Don't have an account?
              <Link to={"/register"} className="hover-text">
                Register a new account
              </Link>
            </p>
          </div>
        </div>
      </form>
    </Section>
  );
};

export default LoginSection;
