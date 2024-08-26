import Image from "../Image/Image";
import Wrapper from "../Wrapper/Wrapper";
import "./comment-block.scss";
import CommentImg1 from "../../assets/images/comment-1.jpg";
import StarIcon from "../../assets/icons/star-svgrepo-com.svg";
const CommentBlock = () => {
  return (
    <li className="comment-block-list-item">
      <div className="comment-image">
        <Image className={"comment-image-person"} src={CommentImg1} />
      </div>
      <div className="comment-body">
        <div className="star-wrap">
          <Wrapper width={"0.75rem"}>
            <Image src={StarIcon} />
          </Wrapper>
        </div>
        <h4 className="author-name">Jonathan Koss</h4>
        <div className="comment-date">1 year ago</div>
        <p className="comment-text">
          Voluptatem nihil labore sunt sunt necessitatibus. Rem delectus
          deleniti eligendi provident. Et non voluptas voluptas labore id
          repudiandae.
        </p>
      </div>
    </li>
  );
};

export default CommentBlock;
