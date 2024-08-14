import "./product-item.scss";
import Image from "../../../components/Image/Image";
import Wrapper from "../../../components/Wrapper/Wrapper";
import ProductImage from "../image/shutterstock_12934753-min.jpg";
import {Link} from "react-router-dom";
import StarIcon from "../image/icons8-star-filled-48.png";
import BedIcon from "../image/bed.svg";
import BathIcon from "../image/bathtub.svg";
import MoveIcon from "../image/move.svg";
import PinIcon from "../../../assets/icons/pin.svg";
const ProductItem = () => {
  const products = [
    {
      image: "",
      address: "",
      stars: 3,
      price: "284,473",
      beds: 3,
      bath: 2,
      area: 192,
      city: "Hampton",
      status: "sale",
    },
  ];
  return (
    <div className="product-blocks">
      <div className="product-block">
        <div className="product-left-block">
          <Link>
            <Wrapper width={"13.5rem"}>
              <Image src={ProductImage} />
            </Wrapper>
          </Link>
        </div>
        <div className="product-right-block">
          <div className="product-right-block-top">
            <Link className="product-address">
              <h4>6007 Applegate Lane</h4>
            </Link>
            <div className="product-price-blocks">
              <div className="product-price-left">
                <div className="rating-wrap">
                  <Wrapper width={"1rem"}>
                    <Image src={StarIcon} className="product-rating" />
                  </Wrapper>
                  <div className="raiting-star">( 3 Reviews)</div>
                </div>
                <p className="product-status">Sale</p>
              </div>
              <h6 className="product-price"> $284,473 </h6>
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
                3 Beds
              </div>
              <div className="listing-card-info-icon">
                <div className="inc-fleat-icon">
                  <Wrapper width={"0.8125rem"}>
                    <Image src={BathIcon} />
                  </Wrapper>
                </div>
                1 Bath
              </div>
              <div className="listing-card-info-icon">
                <div className="inc-fleat-icon">
                  <Wrapper width={"0.8125rem"}>
                    <Image src={MoveIcon} />
                  </Wrapper>
                </div>
                290 m²
              </div>
            </div>
          </div>
          <div className="listing-footer-wrapper">
            <div className="listing-locate">
              <div className="listing-location">
                <Wrapper className="ti-location-pin" width={"0.94rem"}>
                  <Image src={PinIcon} />
                </Wrapper>
                Hampton
              </div>
            </div>
            <div className="listing-detail-btn">
              <a href="#" className="more-btn">
                View
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
