import Section from "../../components/Section/Section";
import "./properties-section.scss";
import PinIcon from "../../assets/icons/pin.svg";
import Wrapper from "../../components/Wrapper/Wrapper";
import Image from "../../components/Image/Image";
import GreenBtn from "../../components/GreenBtn/GreenBtn";
import VerticalProductItem from "../../components/VerticalProductItem/VerticalProductItem";
import ProductItem from "../../sections/ListingSection/ProductItem/ProductItem.jsx";
import GridIcon from "../../assets/images/GridIcon.jsx";
import GridList from "../../assets/images/GridList.jsx";
import {useSelector} from "react-redux";
import {useState} from "react";

const PropertiesSection = () => {
  const properties = useSelector((state) => state.propertyPosts.propertyPosts);
  const locations = useSelector((state) => state.locations.locations);
  const categories = useSelector((state) => state.categories.categories);

  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [grid, setGrid] = useState(1);
  const [visibleProperties, setVisibleProperties] = useState(20);
  const [sortCriteria, setSortCriteria] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [bedroomFilter, setBedroomFilter] = useState("");
  const [bathroomFilter, setBathroomFilter] = useState("");
  const [minArea, setMinArea] = useState("");
  const [maxArea, setMaxArea] = useState("");

  const handleLoadMore = () => {
    setVisibleProperties((prevVisible) => prevVisible + 20);
  };

  const handleSortChange = (event) => {
    const value = event.target.value;
    setSortCriteria(value);
  };

  const handleCategoryChange = (event) => {
    const value = event.target.value;
    setCategoryFilter(value);
  };

  const handleTypeChange = (event) => {
    const value = event.target.value;
    setTypeFilter(value);
  };

  const handleMinPriceChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) || value === "") {
      setMinPrice(value);
    }
  };

  const handleMaxPriceChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) || value === "") {
      setMaxPrice(value);
    }
  };

  const handleBedroomChange = (event) => {
    const value = event.target.value;
    setBedroomFilter(value);
  };

  const handleBathroomChange = (event) => {
    const value = event.target.value;
    setBathroomFilter(value);
  };

  const handleMinAreaChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) || value === "") {
      setMinArea(value);
    }
  };

  const handleMaxAreaChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) || value === "") {
      setMaxArea(value);
    }
  };

  const handleResetFilters = (e) => {
    e.preventDefault();
    setSearchQuery("");
    setCategoryFilter("");
    setSortCriteria("");
    setTypeFilter("");
    setMinPrice("");
    setMaxPrice("");
    setBedroomFilter("");
    setBathroomFilter("");
    setMinArea("");
    setMaxArea("");
    setVisibleProperties(20);
    setGrid(1);
  };

  const filteredProperties = properties
    .filter((property) => {
      const location = locations?.find((item) => {
        return item?.id === property?.locations_id;
      })?.name;
      return location?.toLowerCase().includes(searchQuery.toLowerCase());
    })
    .filter((property) => {
      return categoryFilter
        ? property.categories_id === parseInt(categoryFilter)
        : true;
    })
    .filter((property) => {
      return typeFilter ? property.type_id === parseInt(typeFilter) : true;
    })
    .filter((property) => {
      return minPrice ? property.price >= parseFloat(minPrice) : true;
    })
    .filter((property) => {
      return maxPrice ? property.price <= parseFloat(maxPrice) : true;
    })
    .filter((property) => {
      return bedroomFilter ? property.beds === parseInt(bedroomFilter) : true;
    })
    .filter((property) => {
      return bathroomFilter
        ? property.baths === parseInt(bathroomFilter)
        : true;
    })
    .filter((property) => {
      return minArea ? property.area >= parseFloat(minArea) : true;
    })
    .filter((property) => {
      return maxArea ? property.area <= parseFloat(maxArea) : true;
    });

  const sortedProperties = [...filteredProperties].sort((a, b) => {
    switch (sortCriteria) {
      case "price-low-high":
        return a.price - b.price;
      case "price-high-low":
        return b.price - a.price;
      case "name-a-z":
        return a.title?.localeCompare(b.title);
      case "name-z-a":
        return b.title?.localeCompare(a.title);
      default:
        return 0;
    }
  });

  return (
    <Section className={"properties-section"}>
      <div className="filter-block">
        <form className="properties-filter-form">
          <div className="properties-input-with-icon">
            <input
              type="text"
              className="properties-form-location-input"
              placeholder="Search for a location"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            <Wrapper
              width={"1.125rem"}
              className="properties-form-location-icon"
            >
              <Image src={PinIcon} />
            </Wrapper>
          </div>
          <div className="properties-select-div">
            <select
              className="properties-select"
              value={categoryFilter}
              onChange={handleCategoryChange}
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div className="properties-select-div">
            <select
              className="properties-select"
              value={typeFilter}
              onChange={handleTypeChange}
            >
              <option value="">All Types</option>
              <option value="1">Rent</option>
              <option value="2">Sale</option>
            </select>
          </div>
          <div className="form-row">
            <div className="form-group form-group-double">
              <input
                type="text"
                className="form-price-input"
                placeholder="No Min"
                value={minPrice}
                onChange={handleMinPriceChange}
              />
            </div>
            <div className="form-group form-group-double">
              <input
                type="text"
                className="form-price-input"
                placeholder="No Max"
                value={maxPrice}
                onChange={handleMaxPriceChange}
              />
            </div>
          </div>
          <div className="properties-select-div">
            <select
              className="properties-select"
              value={bedroomFilter}
              onChange={handleBedroomChange}
            >
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

          <div className="properties-select-div">
            <select
              className="properties-select"
              value={bathroomFilter}
              onChange={handleBathroomChange}
            >
              <option value="">All Bathrooms</option>
              {Array.from(
                {
                  length: Math.max(
                    ...properties.map((property) => property.baths)
                  ),
                },
                (_, i) => i + 1
              ).map((bathrooms) => (
                <option key={bathrooms} value={bathrooms}>
                  {bathrooms} {bathrooms > 1 ? "Bathrooms" : "Bathroom"}
                </option>
              ))}
            </select>
          </div>

          <div className="form-row">
            <div className="form-group form-group-double">
              <input
                type="text"
                className="form-area-input"
                placeholder="Min Area"
                value={minArea}
                onChange={handleMinAreaChange}
              />
            </div>
            <div className="form-group form-group-double">
              <input
                type="text"
                className="form-area-input"
                placeholder="Max Area"
                value={maxArea}
                onChange={handleMaxAreaChange}
              />
            </div>
          </div>
          <GreenBtn text={"Reset Filters"} onClick={handleResetFilters} />
        </form>
      </div>
      <div className="content-block">
        <div className="sorting-block">
          <div className="sorting-title">
            <h2>{`Found 1 - ${
              visibleProperties > filteredProperties.length
                ? filteredProperties.length
                : visibleProperties
            } Of ${filteredProperties.length} Results`}</h2>
          </div>
          <div className="sorting-right-block">
            <div className="sorting-select-div">
              <select className="sorting-select" onChange={handleSortChange}>
                <option value="">Sort by</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
                <option value="name-a-z">Name: A-Z</option>
                <option value="name-z-a">Name: Z-A</option>
              </select>
            </div>
            <ul className="sorting-list">
              <li>
                <div
                  className={`sorting-type-link ${grid === 1 ? "active" : ""}`}
                  onClick={() => setGrid(1)}
                >
                  <Wrapper>
                    <GridIcon className={"grid-icon"} />
                  </Wrapper>
                </div>
              </li>
              <li>
                <div
                  className={`sorting-type-link ${grid === 2 ? "active" : ""}`}
                  onClick={() => setGrid(2)}
                >
                  <Wrapper>
                    <GridList className={"grid-icon"} />
                  </Wrapper>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className={`product-blocks ${grid === 2 ? "horizontal" : ""}`}>
          {sortedProperties.slice(0, visibleProperties).map((property) => {
            return grid === 1 ? (
              <VerticalProductItem
                key={property?.id}
                className={"properties-product"}
                property={property}
              />
            ) : (
              <ProductItem
                key={property?.id}
                className={"properties-product"}
                property={property}
              />
            );
          })}
          {visibleProperties < properties.length && (
            <GreenBtn text={"Load More"} onClick={handleLoadMore} />
          )}
        </div>
      </div>
    </Section>
  );
};

export default PropertiesSection;
