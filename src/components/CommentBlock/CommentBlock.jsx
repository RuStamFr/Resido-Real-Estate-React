import Image from "../Image/Image";
import StarComponent from "../StarComponent/StarComponent";
import "./comment-block.scss";
import CommentImg1 from "./genderless.png";

const CommentBlock = ({comment}) => {
  return (
    <li className="comment-block-list-item">
      <div className="comment-image">
        <img
          className={"comment-image-person"}
          src={comment.photo || CommentImg1}
        />
      </div>
      <div className="comment-body">
        <StarComponent rating={comment.rating} />
        <h4 className="author-name">{comment.name}</h4>
        <div className="comment-date">{comment.date}</div>
        <p className="comment-text">{comment.message}</p>
      </div>
    </li>
  );
};

export default CommentBlock;
