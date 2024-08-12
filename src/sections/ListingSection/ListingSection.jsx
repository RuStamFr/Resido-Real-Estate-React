import Section from "../../components/Section/Section";
import "./listing-section.scss";
import ProductItem from "./ProductItem/ProductItem";

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
      <ProductItem />
    </Section>
  );
};
export default ListingSection;
