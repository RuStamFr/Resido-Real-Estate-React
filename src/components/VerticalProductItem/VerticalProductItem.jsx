import "./vertical-product-item.scss";
import ProductImage from "../../assets/images/shutterstock_12934753-min.jpg";
import StarIcon from "../../assets/icons/icons8-star-filled-48.png";
import BedIcon from "../../assets/icons/bed.svg";
import BathIcon from "../../assets/icons/bathtub.svg";
import MoveIcon from "../../assets/icons/move.svg";
import PinIcon from "../../assets/icons/pin.svg";
import {Link} from "react-router-dom";
import Wrapper from "../Wrapper/Wrapper";
import Image from "../Image/Image";

const VerticalProductItem = () => {
  return (
    <div className="vertical-product-block">
      <div className="vertical-product-image-block">
        <Link>
          <Image className={"vertical-product-image"} src={ProductImage} />
        </Link>
      </div>
      <div className="vertical-product-block-info">
        <div className="vertical-product-status-block">
          <span>
            <span className="rent">Rent</span>
          </span>
          <h6 className="vertical-product-info-price"> $423,759 / monthly </h6>
        </div>
        <h4 className="vertical-product-name">
          <Link className="vertical-product-name-link">4113 Holiday Drive</Link>
        </h4>
        <div className="rating-wrap">
          <div className="rating">
            <div className="product-rate">
              <Wrapper width={"1.1875rem"}>
                <Image src={StarIcon} />
              </Wrapper>
            </div>
          </div>
          <span className="reviews-text">(3 Reviews)</span>
        </div>
      </div>
      <div className="vertical-block-params-wrapper">
        <div className="vertical-block-param beds">
          <Wrapper className={"vertical-block-bed-param"} width={"1.5625rem"}>
            <Image className={"vertical-block-bed-param-image"} src={BedIcon} />
          </Wrapper>
          2 Beds
        </div>
        <div className="vertical-block-param beds">
          <Wrapper className={"vertical-block-bed-param"} width={"1.5625rem"}>
            <Image
              className={"vertical-block-bed-param-image"}
              src={BathIcon}
            />
          </Wrapper>
          5 Bath
        </div>
        <div className="vertical-block-param beds">
          <Wrapper className={"vertical-block-bed-param"} width={"1.5625rem"}>
            <Image
              className={"vertical-block-bed-param-image"}
              src={MoveIcon}
            />
          </Wrapper>
          449 m²
        </div>
      </div>
      <div className="vertical-product-footer">
        <div className="vertical-product-footer-first">
          <Wrapper
            className={"vertical-product-location-icon"}
            width={"1.125rem"}
          >
            <Image src={PinIcon} />
          </Wrapper>
          Lakewood
        </div>
        <div className="vertical-product-footer-flex">
          <Link className="vertical-product-btn">View</Link>
        </div>
      </div>
    </div>
  );
};

export default VerticalProductItem;
