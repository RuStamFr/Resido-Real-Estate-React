import "./logo.scss";
import LogoBlack from "./img/logo-black.png";
import LogoLight from "./img/logo-light.png";
import Image from "../Image/Image";
import {Link} from "react-router-dom";
const Logo = ({color = "black"}) => {
  const currentImage = color === "light" ? LogoLight : LogoBlack;

  return (
    <Link to={"/"}>
      <Image
        className={`logo ${color}-logo`}
        src={currentImage}
        alt={"Resido logo black"}
      />
    </Link>
  );
};
export default Logo;
