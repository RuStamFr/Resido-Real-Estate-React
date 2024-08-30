import {Link} from "react-router-dom";
import Image from "../Image/Image";
import Wrapper from "../Wrapper/Wrapper";
import "./favorites-widget.scss";
import HeartIcon from "./img/icons8-heart-60.png";
import {useSelector} from "react-redux";

const Favorites = () => {
  const favourites = useSelector((state) => state.favourites || []);
  return (
    <Link to={"/favorites"} className="favorites-link">
      <Wrapper width={"0.8rem"}>
        <Image src={HeartIcon} />
      </Wrapper>
      <div className="favorites-text">
        Wishlist(<span>{favourites.length}</span>)
      </div>
    </Link>
  );
};

export default Favorites;
