import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {addFavorite, removeFavorite} from "../../store/slices/favouritesSlice";
import "./heart.scss";

const Heart = ({property}) => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites || []);

  const isFavorite = favourites?.some((fav) => fav?.id === property?.id);

  const handleDivClick = (e) => {
    e.stopPropagation();
  };

  const handleToggleFavorite = (e) => {
    e.stopPropagation();
    if (isFavorite) {
      dispatch(removeFavorite(property));
    } else {
      dispatch(addFavorite(property));
    }
  };

  return (
    <div onClick={handleDivClick} className="heart-holder">
      <button
        className={`heart ${isFavorite ? "filled" : ""}`}
        onClick={handleToggleFavorite}
      >
        {isFavorite ? "❤️" : "🤍"}
      </button>
    </div>
  );
};

export default Heart;
