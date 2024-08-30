import {useDispatch} from "react-redux";
import {resetFavorites} from "../../store/slices/favouritesSlice";
import "./reset-favourites-button.scss";

const ResetFavoritesButton = () => {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetFavorites());
  };

  return (
    <button onClick={handleReset} aria-label="Reset Favorites">
      Reset
    </button>
  );
};

export default ResetFavoritesButton;
