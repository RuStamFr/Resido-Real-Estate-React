import CtaSection from "../../sections/CtaSection/CtaSection";
import HeroSection from "../../sections/HeroSection/HeroSection";
import HiwSection from "../../sections/HiwSection/HiwSection";
import ListingSection from "../../sections/ListingSection/ListingSection";
import LocationsSection from "../../sections/LocationsSection/LocationsSection";
import "./home.scss";

const Home = () => {
  return (
    <div className={"home-page"}>
      <HeroSection />
      <ListingSection />
      <LocationsSection />
      <HiwSection />
      <CtaSection />
    </div>
  );
};

export default Home;
