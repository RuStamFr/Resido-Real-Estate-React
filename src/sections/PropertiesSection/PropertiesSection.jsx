import Section from "../../components/Section/Section";
import "./properties-section.scss";
import PinIcon from "../../assets/icons/pin.svg";
import Wrapper from "../../components/Wrapper/Wrapper";
import Image from "../../components/Image/Image";
import GreenBtn from "../../components/GreenBtn/GreenBtn";
import {Link} from "react-router-dom";
import VerticalProductItem from "../../components/VerticalProductItem/VerticalProductItem";
const PropertiesSection = () => {
  return (
    <Section className={"properties-section"}>
      <div className="filter-block">
        <form className="properties-filter-form">
          <div className="properties-input-with-icon">
            <input
              type="text"
              className="properties-form-location-input"
              name="k"
              placeholder="Search for a location"
            />
            <Wrapper
              width={"1.125rem"}
              className="properties-form-location-icon"
            >
              <Image src={PinIcon} />
            </Wrapper>
          </div>
          <div className="properties-select-div">
            <select className="properties-select">
              <option>City</option>
            </select>
          </div>
          <div className="properties-select-div">
            <select className="properties-select">
              <option>Category</option>
            </select>
          </div>
          <div className="properties-select-div">
            <select className="properties-select">
              <option>Type</option>
            </select>
          </div>
          <div className="form-row">
            <div className="form-group form-group-double">
              <select className="form-price-select">
                <option value="">No Min</option>
                <option value="500">500</option>
              </select>
            </div>
            <div className="form-group form-group-double">
              <select className="form-price-select">
                <option value="">No Max</option>
                <option value="50000">50000</option>
              </select>
            </div>
          </div>
          <div className="properties-select-div">
            <select className="properties-select">
              <option>Bedroom</option>
            </select>
          </div>
          <div className="properties-select-div">
            <select className="properties-select">
              <option>Bathroom</option>
            </select>
          </div>
          <div className="form-row">
            <div className="form-group form-group-double">
              <select className="form-price-select">
                <option value="">Min Area</option>
                <option value="500">500</option>
              </select>
            </div>
            <div className="form-group form-group-double">
              <select className="form-price-select">
                <option value="">Max Area</option>
                <option value="50000">50000</option>
              </select>
            </div>
          </div>
          <div className="properties-select-div">
            <select className="properties-select">
              <option>Project</option>
            </select>
          </div>
          <GreenBtn text={"Find New Home"} />
        </form>
      </div>
      <div className="content-block">
        <div className="sorting-block">
          <div className="sorting-title">
            <h4> Found 1 - 15 Of 17 Results </h4>
          </div>
          <div className="sorting-right-block">
            <div className="sorting-select-div">
              <select className="sorting-select">
                <option>Sort by</option>
              </select>
            </div>
            <ul className="sorting-list">
              <li>
                <Link className="sorting-type-link active">
                  <Wrapper>X</Wrapper>
                </Link>
              </li>
              <li>
                <Link className="sorting-type-link">
                  <Wrapper>X</Wrapper>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="product-blocks">
          <VerticalProductItem className={"properties-product"} />
          <VerticalProductItem className={"properties-product"} />
          <VerticalProductItem className={"properties-product"} />
          <VerticalProductItem className={"properties-product"} />
          <VerticalProductItem className={"properties-product"} />
          <VerticalProductItem className={"properties-product"} />
          <VerticalProductItem className={"properties-product"} />
          <VerticalProductItem className={"properties-product"} />
          <VerticalProductItem className={"properties-product"} />
          <VerticalProductItem className={"properties-product"} />
          <VerticalProductItem className={"properties-product"} />
          <VerticalProductItem className={"properties-product"} />
          <VerticalProductItem className={"properties-product"} />
          <VerticalProductItem className={"properties-product"} />
          <VerticalProductItem className={"properties-product"} />
          <VerticalProductItem className={"properties-product"} />
          <VerticalProductItem className={"properties-product"} />
          <VerticalProductItem className={"properties-product"} />
          <VerticalProductItem className={"properties-product"} />
          <VerticalProductItem className={"properties-product"} />
          <VerticalProductItem className={"properties-product"} />
          <VerticalProductItem className={"properties-product"} />
          <VerticalProductItem className={"properties-product"} />
          <VerticalProductItem className={"properties-product"} />
          <VerticalProductItem className={"properties-product"} />
          <VerticalProductItem className={"properties-product"} />
          <VerticalProductItem className={"properties-product"} />
          <VerticalProductItem className={"properties-product"} />
          <VerticalProductItem className={"properties-product"} />
          <VerticalProductItem className={"properties-product"} />
          <VerticalProductItem className={"properties-product"} />
          <VerticalProductItem className={"properties-product"} />
          <VerticalProductItem className={"properties-product"} />
          <VerticalProductItem className={"properties-product"} />
          <VerticalProductItem className={"properties-product"} />
          <VerticalProductItem className={"properties-product"} />
          <VerticalProductItem className={"properties-product"} />
          <VerticalProductItem className={"properties-product"} />
          <VerticalProductItem className={"properties-product"} />
          <VerticalProductItem className={"properties-product"} />
          <VerticalProductItem className={"properties-product"} />
          <VerticalProductItem className={"properties-product"} />
          <VerticalProductItem className={"properties-product"} />
          <VerticalProductItem className={"properties-product"} />
          <VerticalProductItem className={"properties-product"} />
          <VerticalProductItem className={"properties-product"} />

          <VerticalProductItem className={"properties-product"} />
          <VerticalProductItem className={"properties-product"} />
          <GreenBtn text={"Load More"} />
        </div>
      </div>
    </Section>
  );
};

export default PropertiesSection;
