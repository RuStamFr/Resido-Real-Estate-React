import BlueBanner from "../../components/BlueBanner/BlueBanner";
import FavoritesSection from "../../sections/FavoritesSection/FavoritesSection";
import "./favorites.scss";

const Favorites = () => {
  return (
    <>
      <BlueBanner title={"Wishlist"} />
      <FavoritesSection />
    </>
  );
};

export default Favorites;
