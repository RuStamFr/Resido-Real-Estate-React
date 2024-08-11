import Section from "../../components/Section/Section";
import "./hero-section.scss";

const HeroSection = () => {
  return (
    <Section className={"hero-section"}>
      <div className="hero-search-wrap">
        <div className="hero-search">
          <h1 className="hero-search-title">Find accessible homes to rent</h1>
        </div>
        <form>
          <div className="hero-search-content">
            <div className="form-group">
              <div className="input-with-icon">
                <input
                  type="text"
                  className="form-location-input"
                  name="k"
                  placeholder="Search for a location"
                />
                <img
                  src="https://resido.thesky9.com/themes/resido/img/pin.svg"
                  width="18"
                  alt=""
                  className="form-location-icon"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group form-group-double">
                <label htmlFor="minprice">Min Price</label>
                <select
                  id="minprice"
                  name="min_price"
                  className="form-price-select"
                >
                  <option value="">No Min</option>
                  <option value="500">500</option>
                </select>
              </div>
              <div className="form-group form-group-double">
                <label htmlFor="maxprice">Max Price</label>
                <select
                  id="maxprice"
                  name="max_price"
                  className="form-price-select"
                >
                  <option value="">No Max</option>
                  <option value="50000">50000</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group ">
                <label htmlFor="ptypes">Property Type</label>
                <select
                  id="ptypes"
                  name="category_id"
                  className="form-category-select"
                >
                  <option value="">Category</option>
                  <option value="1">Apartment</option>
                </select>
              </div>
              <div className="form-group ">
                <label htmlFor="select-bedroom">Bed Rooms</label>
                <select
                  id="select-bedroom"
                  name="bedroom"
                  className="form-bed-select"
                >
                  <option value="">Bedroom</option>
                  <option value="1">1</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="city_id">Property Location</label>
              <select id="city_id" name="city_id" className="form-city-select">
                <option value="">City</option>
              </select>
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
