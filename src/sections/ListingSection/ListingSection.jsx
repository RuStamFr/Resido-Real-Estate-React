import Section from "../../components/Section/Section";
import "./listing-section.scss";
import ProductItem from "./ProductItem/ProductItem";

import GreenBtn from "../../components/GreenBtn/GreenBtn";
import {useSelector} from "react-redux";
import {useState, useEffect} from "react";
import VerticalProductItem from "../../components/VerticalProductItem/VerticalProductItem";
import Wrapper from "../../components/Wrapper/Wrapper";

const ListingSection = () => {
  const properties = useSelector((state) => state.propertyPosts.propertyPosts);
  const [visibleProperties, setVisibleProperties] = useState(12);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1300);

  const handleLoadMore = () => {
    setVisibleProperties((prevVisible) => prevVisible + 12);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1300);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Section className={"listing-section"}>
      <div className="listing-section-wrapper">
        <div className="listing-section-title-block">
          <h2>Explore Good Places</h2>
          <p>
            Discover your dream home in the perfect location. Explore a wide
            range of properties in vibrant neighborhoods, tailored to your
            lifestyle and needs.
          </p>
        </div>
      </div>
      <div className={`product-blocks ${isMobile ? "vertical" : "horizontal"}`}>
        {properties.slice(0, visibleProperties).map((property) => {
          return isMobile ? (
            <VerticalProductItem
              key={property?.id}
              className={"properties-product"}
              property={property}
            />
          ) : (
            <ProductItem
              key={property?.id}
              className={"properties-product"}
              property={property}
            />
          );
        })}
        {visibleProperties < properties.length && (
          <Wrapper width={"100%"} justify={"center"}>
            <GreenBtn
              text={"Browse More Properties"}
              onClick={handleLoadMore}
            />
          </Wrapper>
        )}
      </div>
    </Section>
  );
};

export default ListingSection;
