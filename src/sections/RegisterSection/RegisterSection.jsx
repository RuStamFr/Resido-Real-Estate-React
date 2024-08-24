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
import {useState} from "react";
import {useDispatch} from "react-redux";
import {registerUser} from "../../store/slices/authSlice";

const RegisterSection = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const handleInputChange = (e) => {
    const {id, value} = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
      setError("");
      dispatch(registerUser(formData));
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      });
    } else {
      setError("Passwords don't match");
    }
  };

  return (
    <Section className={"register-section"}>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="register-block">
          <h2 className="text-center">Register</h2>

          <div className="register-input-blocks">
            <div className="input-block">
              <input
                className="register-input"
                type="text"
                placeholder="First name"
                id="firstName"
                onChange={handleInputChange}
                required
                value={formData.firstName}
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
                id="lastName"
                onChange={handleInputChange}
                required
                value={formData.lastName}
              />
              <Wrapper width={"1.125rem"}>
                <Image className={"register-icon"} src={PersonIcon} />
              </Wrapper>
            </div>
            <div className="input-block">
              <input
                className="register-input"
                type="email"
                placeholder="Email"
                id="email"
                onChange={handleInputChange}
                required
                value={formData.email}
              />
              <Wrapper width={"1.125rem"}>
                <Image className={"register-icon"} src={MailIcon} />
              </Wrapper>
            </div>
            <div className="input-block">
              <input
                className="register-input"
                type="text"
                placeholder="Phone"
                id="phone"
                onChange={handleInputChange}
                required
                value={formData.phone}
              />
              <Wrapper width={"1.125rem"}>
                <Image className={"register-icon"} src={HeadPhone} />
              </Wrapper>
            </div>
            <div className="input-block">
              <input
                className="register-input"
                type="password"
                placeholder="Password"
                id="password"
                onChange={handleInputChange}
                required
                value={formData.password}
              />
              <Wrapper width={"1.125rem"}>
                <Image className={"register-icon"} src={LockIcon} />
              </Wrapper>
            </div>
            <div className="input-block">
              <input
                className="register-input"
                type="password"
                placeholder="Confirm password"
                id="confirmPassword"
                onChange={handleInputChange}
                required
                value={formData.confirmPassword}
              />
              <Wrapper width={"1.125rem"}>
                <Image className={"register-icon"} src={LockIcon} />
              </Wrapper>
            </div>
          </div>
          {error && <p className="error-msg">{error}</p>}
          <input type="submit" className="green-button" value={"Register"} />
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
