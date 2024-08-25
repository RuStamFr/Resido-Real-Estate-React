import Section from "../../components/Section/Section";
import "./login-section.scss";
import PersonIcon from "../../assets/icons/register-person-icon.png";
import Wrapper from "../../components/Wrapper/Wrapper";
import Image from "../../components/Image/Image";
import LockIcon from "../../assets/icons/lock-open-register.png";
import {Link, Navigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {logInUser} from "../../store/slices/authSlice";

const LoginSection = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    inputMail: "",
    inputPassword: "",
  });

  const handleInputChange = (e) => {
    const {id, value} = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logInUser(formData));
    setFormData({
      inputMail: "",
      inputPassword: "",
    });
  };

  return auth.auth ? (
    <Navigate to={"/"} />
  ) : (
    <Section className={"login-section"}>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="login-block">
          <h2 className="text-center">Login</h2>
          <div className="login-input-blocks">
            <div className="login-input-block">
              <label htmlFor={"inputMail"}>Email</label>
              <input
                id={"inputMail"}
                className={"login-input"}
                type="email"
                placeholder="Email"
                required
                onChange={handleInputChange}
                value={formData.inputMail}
              />
              <Wrapper width={"1.125rem"}>
                <Image className={"login-icon"} src={PersonIcon} />
              </Wrapper>
            </div>
            <div className="login-input-block">
              <label htmlFor={"inputPassword"}>Password</label>
              <input
                id={"inputPassword"}
                className={"login-input"}
                placeholder="Password"
                type="password"
                required
                onChange={handleInputChange}
                value={formData.inputPassword}
              />
              <Wrapper width={"1.125rem"}>
                <Image className={"login-icon"} src={LockIcon} />
              </Wrapper>
            </div>
          </div>
          <input type="submit" className="green-button" value={"Login"} />

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
