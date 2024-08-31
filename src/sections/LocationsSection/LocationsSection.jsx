import "./locations-section.scss";
import Section from "../../components/Section/Section";
import Image from "../../components/Image/Image";
import rightArrow from "../../assets/icons/right-arrow.png";
import GreenBtn from "../../components/GreenBtn/GreenBtn";
import {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

const LocationsSection = () => {
  const navigate = useNavigate();
  const locations = useSelector((state) => state.locations.locations);
  const posts = useSelector((state) => state.propertyPosts.propertyPosts);

  const [visibleLocations, setVisibleLocations] = useState(6);
  const handleLoadMore = () => {
    setVisibleLocations((prevVisible) => prevVisible + 6);
  };

  return (
    <Section className={"locations-section"}>
      <h2 className={"locations-section-title"}>Find By Locations</h2>
      <p className={"locations-section-desc"}>
        Search properties by your preferred location. Easily navigate through
        different areas to find the perfect spot that suits your lifestyle and
        preferences.
      </p>
      <div className={"locations-section-list"}>
        {locations.slice(0, visibleLocations).map((item) => {
          const localPosts = posts.filter((post) => {
            return +post.locations_id === +item.id;
          });
          const postCount = localPosts.length;
          const handleClick = () => {
            navigate(`/properties?location=${item.name}`);
          };
          return (
            <div key={item.id} className={"locations-section-card"}>
              <div
                onClick={handleClick}
                className={"locations-section-card-image-link"}
              >
                <Image
                  src={item.src}
                  className={"locations-section-card-image"}
                />
              </div>
              <div className={"locations-section-card-content"}>
                <div className={"locations-section-card-content-left"}>
                  <h3>{item.name}</h3>
                  <p>{postCount} properties</p>
                </div>
                <div
                  onClick={handleClick}
                  className={"locations-section-card-button-link"}
                >
                  <Image
                    src={rightArrow}
                    className={"locations-section-card-button-icon"}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {visibleLocations < locations.length && (
        <GreenBtn text={"Browse More Locations"} onClick={handleLoadMore} />
      )}
    </Section>
  );
};

export default LocationsSection;
