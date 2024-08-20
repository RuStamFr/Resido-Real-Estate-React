import Section from "../../components/Section/Section";
import "./favorites-section.scss";
import VerticalProductItem from "../../components/VerticalProductItem/VerticalProductItem";
const FavoritesSection = () => {
  return (
    <Section className={"favorites-section"}>
      <VerticalProductItem />
      <VerticalProductItem />
      <VerticalProductItem />
      <VerticalProductItem />
      <VerticalProductItem />
    </Section>
  );
};
export default FavoritesSection;
