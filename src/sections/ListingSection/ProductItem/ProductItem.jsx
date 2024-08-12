import "./product-item.scss";
import Image from "../../../components/Image/Image";
import Wrapper from "../../../components/Wrapper/Wrapper";
import ProductImage from "../image/shutterstock_12934753-min.jpg";
import {Link} from "react-router-dom";
import StarIcon from "../image/icons8-star-filled-48.png";
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
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
