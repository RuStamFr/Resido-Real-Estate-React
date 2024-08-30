import "./vertical-product-item.scss";
import BedIcon from "../../assets/icons/bed.svg";
import BathIcon from "../../assets/icons/bathtub.svg";
import MoveIcon from "../../assets/icons/move.svg";
import PinIcon from "../../assets/icons/pin.svg";
import {Link} from "react-router-dom";
import Wrapper from "../Wrapper/Wrapper";
import Image from "../Image/Image";
import {useSelector} from "react-redux";
import StarComponent from "../StarComponent/StarComponent";
import Heart from "../Heart/Heart";

const VerticalProductItem = ({className, property}) => {
  const locations = useSelector((state) => state.locations.locations);

  const prop_id = (property?.id % 17) + 1;

  const location = locations?.find((item) => {
    return item?.id === property?.locations_id;
  })?.name;

  return (
    <div className={`vertical-product-block ${className}`}>
      <div className="vertical-product-image-block">
        <Link to={`/single-property/${property?.id}`}>
          <Image
            className={"vertical-product-image"}
            src={`/public/properties/${prop_id}-1.jpg`}
          />
        </Link>
        <Heart property={property} />
      </div>
      <div className="vertical-product-block-info">
        <div className="vertical-product-status-block">
          <span>
            <span
              className={`vertical-block-status ${
                property?.type_id === 2 ? "red" : ""
              }`}
            >{`${property?.type_id === 1 ? "Rent" : "Sale"}`}</span>
          </span>
          <h6 className="vertical-product-info-price">
            {`$${property?.price
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              ${property?.type_id === 1 ? " / monthly" : ""}`}
          </h6>
        </div>
        <h4 className="vertical-product-name">
          <Link
            to={`/single-property/${property?.id}`}
            className="vertical-product-name-link"
          >
            {property?.title}
          </Link>
        </h4>
        <div className="rating-wrap">
          <div className="rating">
            <div className="product-rate">
              <StarComponent
                rating={property?.stars}
                totalReviews={property?.reviews}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="vertical-block-params-wrapper">
        <div className="vertical-block-param beds">
          <Wrapper className={"vertical-block-bed-param"} width={"1.5625rem"}>
            <Image className={"vertical-block-bed-param-image"} src={BedIcon} />
          </Wrapper>
          {property?.beds} Beds
        </div>
        <div className="vertical-block-param beds">
          <Wrapper className={"vertical-block-bed-param"} width={"1.5625rem"}>
            <Image
              className={"vertical-block-bed-param-image"}
              src={BathIcon}
            />
          </Wrapper>
          {property?.baths} Bath
        </div>
        <div className="vertical-block-param beds">
          <Wrapper className={"vertical-block-bed-param"} width={"1.5625rem"}>
            <Image
              className={"vertical-block-bed-param-image"}
              src={MoveIcon}
            />
          </Wrapper>
          {property?.area} m²
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
          {location}
        </div>
        <div className="vertical-product-footer-flex">
          <Link
            className="vertical-product-btn"
            to={`/single-property/${property?.id}`}
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VerticalProductItem;
