import React, {useState} from "react";
import "./set-star-rating.scss";

const SetStarRating = ({onRatingChange}) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (value) => {
    setRating(value);
    if (onRatingChange) {
      onRatingChange(value);
    }
  };

  const handleMouseEnter = (value) => {
    setHover(value);
  };

  const handleMouseLeave = () => {
    setHover(0);
  };

  return (
    <>
      <div>Rating:</div>
      <div className="star-rating">
        {[1, 2, 3, 4, 5].map((value) => (
          <span
            key={value}
            className={`star ${value <= (hover || rating) ? "orange" : "gray"}`}
            onClick={() => handleClick(value)}
            onMouseEnter={() => handleMouseEnter(value)}
            onMouseLeave={handleMouseLeave}
          >
            ★
          </span>
        ))}
      </div>
    </>
  );
};

export default SetStarRating;
