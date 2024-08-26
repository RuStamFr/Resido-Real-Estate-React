import {useDispatch, useSelector} from "react-redux";
import {
  setFilteredPropertyPosts,
  setFilters,
} from "../store/slices/filteredPropertyPostsSlice";

export const useFilter = (propertyPosts) => {
  const dispatch = useDispatch();

  const {FilteredPropertyPosts, selectedFilters} = useSelector(
    (state) => state.FilteredPropertyPosts
  );

  const filterProperties = () => {
    const filtered = propertyPosts
      .filter((property) => {
        const {agent, location, category} = selectedFilters;
        const matchesAgent = agent === -1 || property.agents_id === agent;
        const matchesLocation =
          location === -1 || property.locations_id === location;
        const matchesCategory =
          category === -1 || property.categories_id === category;

        return matchesAgent && matchesLocation && matchesCategory;
      })
      .sort((a, b) => {
        const dateA = new Date(a.date.split(".").reverse().join("-"));
        const dateB = new Date(b.date.split(".").reverse().join("-"));
        return dateB - dateA;
      });

    dispatch(setFilteredPropertyPosts(filtered));
  };

  const handleFilterChange = () => {
    filterProperties();
  };

  const handleSelectChange = (newSelectedFilters) => {
    dispatch(setFilters(newSelectedFilters));
  };

  return {
    selectedFilters,
    FilteredPropertyPosts,
    handleSelectChange,
    handleFilterChange,
  };
};
