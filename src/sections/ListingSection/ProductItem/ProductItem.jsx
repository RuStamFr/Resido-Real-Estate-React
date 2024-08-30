import "./product-item.scss";
import Image from "../../../components/Image/Image";
import Wrapper from "../../../components/Wrapper/Wrapper";
import {Link} from "react-router-dom";
import StarIcon from "../../../assets/icons/star-svgrepo-com.svg";
import BedIcon from "../image/bed.svg";
import BathIcon from "../image/bathtub.svg";
import MoveIcon from "../image/move.svg";
import PinIcon from "../../../assets/icons/pin.svg";
import {useSelector} from "react-redux";
import StarComponent from "../../../components/StarComponent/StarComponent";
import Heart from "../../../components/Heart/Heart";

const ProductItem = ({className, property}) => {
  const locations = useSelector((state) => state.locations.locations);

  const prop_id = (property?.id % 17) + 1;

  const location = locations?.find((item) => {
    return item?.id === property?.locations_id;
  })?.name;

  const backgroundStyle = {
    width: "13.5rem",
    backgroundImage: `url("/public/properties/${prop_id}-1.jpg")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "100%",
  };

  return (
    <div className="product-block">
      <div className="product-left-block">
        <Link
          to={`/single-property/${property?.id}`}
          style={backgroundStyle}
        ></Link>
        <Heart property={property} />
      </div>
      <div className="product-right-block">
        <div className="product-right-block-top">
          <Link
            to={`/single-property/${property?.id}`}
            className="product-address"
          >
            <h4>{property?.title}</h4>
          </Link>
          <div className="product-price-blocks">
            <div className="product-price-left">
              <div className="rating-wrap">
                <StarComponent
                  rating={property?.stars}
                  totalReviews={property?.reviews}
                />
              </div>
              <p
                className={`product-status ${
                  property?.type_id === 2 ? "red" : ""
                }`}
              >{`${property?.type_id === 1 ? "Rent" : "Sale"}`}</p>
            </div>
            <h6 className="product-price">
              {`$${property?.price
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              ${property?.type_id === 1 ? " / monthly" : ""}`}{" "}
            </h6>
          </div>
        </div>
        <div className="price-features-wrapper">
          <div className="list-fx-features">
            <div className="listing-card-info-icon">
              <div className="inc-fleat-icon">
                <Wrapper width={"0.8125rem"}>
                  <Image src={BedIcon} />
                </Wrapper>
              </div>
              {property?.beds} Beds
            </div>
            <div className="listing-card-info-icon">
              <div className="inc-fleat-icon">
                <Wrapper width={"0.8125rem"}>
                  <Image src={BathIcon} />
                </Wrapper>
              </div>
              {property?.baths} Bath
            </div>
            <div className="listing-card-info-icon">
              <div className="inc-fleat-icon">
                <Wrapper width={"0.8125rem"}>
                  <Image src={MoveIcon} />
                </Wrapper>
              </div>
              {property?.area} m²
            </div>
          </div>
        </div>
        <div className="listing-footer-wrapper">
          <div className="listing-locate">
            <div className="listing-location">
              <Wrapper className="ti-location-pin" width={"0.94rem"}>
                <Image src={PinIcon} />
              </Wrapper>
              {location}
            </div>
          </div>
          <div className="listing-detail-btn">
            <Link to={`/single-property/${property?.id}`} className="more-btn">
              View
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
