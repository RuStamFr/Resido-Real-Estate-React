import HeroSection from "../../sections/HeroSection/HeroSection";
import ListingSection from "../../sections/ListingSection/ListingSection";
import LocationsSection from "../../sections/LocationsSection/LocationsSection";
import "./home.scss";

const Home = () => {
  return (
    <div className={"home-page"}>
      <HeroSection />
      <ListingSection />
      <LocationsSection />
    </div>
  );
};

export default Home;
