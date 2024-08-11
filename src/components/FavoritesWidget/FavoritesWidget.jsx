import {Link} from "react-router-dom";
import Image from "../Image/Image";
import Wrapper from "../Wrapper/Wrapper";
import "./favorites-widget.scss";
import HeartIcon from "./img/icons8-heart-60.png";
const Favorites = () => {
  return (
    <Link to={"/favorites"} className="favorites-link">
      <Wrapper width={"0.8rem"}>
        <Image src={HeartIcon} />
      </Wrapper>
      <div className="favorites-text">
        Wishlist(<span>0</span>)
      </div>
    </Link>
  );
};

export default Favorites;
