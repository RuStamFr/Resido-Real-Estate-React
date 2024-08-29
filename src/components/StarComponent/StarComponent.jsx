import "./star-component.scss";

const StarComponent = ({rating, totalReviews = null}) => {
  const renderStars = () => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < rating ? "star--filled" : "star--empty"}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="review-stars">
      <div className="stars">{renderStars()}</div>
      {totalReviews && (
        <div className="reviews-label">({totalReviews} reviews)</div>
      )}
    </div>
  );
};

export default StarComponent;
