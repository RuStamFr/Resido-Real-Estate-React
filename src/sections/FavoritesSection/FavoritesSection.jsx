import Section from "../../components/Section/Section";
import "./favorites-section.scss";
import VerticalProductItem from "../../components/VerticalProductItem/VerticalProductItem";
import {useSelector} from "react-redux";
const FavoritesSection = () => {
  const properties = useSelector((state) => state.favourites);

  return (
    <Section className={"favorites-section"}>
      {properties?.map((property) => {
        return (
          <VerticalProductItem
            key={property?.id}
            className={"properties-product"}
            property={property}
          />
        );
      })}
    </Section>
  );
};
export default FavoritesSection;
