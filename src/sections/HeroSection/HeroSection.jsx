import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import Section from "../../components/Section/Section";
import "./hero-section.scss";

const HeroSection = () => {
  const navigate = useNavigate();
  const properties = useSelector((state) => state.propertyPosts.propertyPosts);
  const locations = useSelector((state) => state.locations.locations);
  const categories = useSelector((state) => state.categories.categories);

  const sortedLocations = [...locations].sort((a, b) =>
    a.name.localeCompare(b.name, "az")
  );
  const sortedCategories = [...categories].sort((a, b) =>
    a.name.localeCompare(b.name, "az")
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const location = e.target.location.value;
    const minPrice = e.target.min_price.value;
    const maxPrice = e.target.max_price.value;
    const propertyType = e.target.category.value;
    const bedrooms = e.target.beds.value;

    const queryParams = new URLSearchParams();

    if (location)
      queryParams.append(
        "location",
        locations.find((item) => {
          return +item.id === +location;
        }).name
      );
    if (minPrice) queryParams.append("min_price", minPrice);
    if (maxPrice) queryParams.append("max_price", maxPrice);
    if (propertyType) queryParams.append("category", propertyType);
    if (bedrooms) queryParams.append("bedrooms", bedrooms);

    navigate(`/properties?${queryParams.toString()}`);
  };

  return (
    <Section className={"hero-section"}>
      <div className="hero-search-wrap">
        <div className="hero-search">
          <h1 className="hero-search-title">Find accessible homes to rent</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="hero-search-content">
            <div className="form-group">
              <label htmlFor="location">Property Location</label>
              <select
                id="location"
                className="form-city-select"
                name="location"
              >
                <option value="">All Locations</option>
                {sortedLocations.map((location) => (
                  <option key={location.id} value={location.id}>
                    {location.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-row">
              <div className="form-group form-group-double">
                <label htmlFor="min_price">Min Price</label>
                <input
                  id="min_price"
                  type="text"
                  className="form-price-input"
                  placeholder="No Min"
                  name="min_price"
                />
              </div>
              <div className="form-group form-group-double">
                <label htmlFor="max_price">Max Price</label>
                <input
                  id="max_price"
                  type="text"
                  className="form-price-input"
                  placeholder="No Max"
                  name="max_price"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group ">
                <label htmlFor="category">Property Type</label>
                <select
                  id="category"
                  className="form-category-select"
                  name="category"
                >
                  <option value="">All Categories</option>
                  {sortedCategories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group ">
                <label htmlFor="beds">Bed Rooms</label>
                <select id="beds" className="form-bed-select" name="beds">
                  <option value="">All Bedrooms</option>
                  {Array.from(
                    {
                      length: Math.max(
                        ...properties.map((property) => property.beds)
                      ),
                    },
                    (_, i) => i + 1
                  ).map((bedrooms) => (
                    <option key={bedrooms} value={bedrooms}>
                      {bedrooms} {bedrooms > 1 ? "Bedrooms" : "Bedroom"}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <button className="btn search-btn" type="submit">
            Search Result
          </button>
        </form>
      </div>
    </Section>
  );
};

export default HeroSection;
