import Section from "../../components/Section/Section";
import "./listing-section.scss";
import ProductItem from "./ProductItem/ProductItem";
import GreenBtn from "../../components/GreenBtn/GreenBtn";
const ListingSection = () => {
  return (
    <Section className={"listing-section"}>
      <div className="listing-section-wrapper">
        <div className="listing-section-title-block">
          <h2>Explore Good Places</h2>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores
          </p>
        </div>
      </div>
      <div className="product-blocks">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />

        <ProductItem />
      </div>

      <div className="green-btn-wrapper">
        <GreenBtn text={"Browse More Properties"} />
      </div>
    </Section>
  );
};
export default ListingSection;
