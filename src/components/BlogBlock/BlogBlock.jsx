import "./blog-block.scss";
import Wrapper from "../Wrapper/Wrapper";
import Image from "../Image/Image";
import {Link} from "react-router-dom";
import RightYellowArrow from "../../assets/icons/right-arrow-yelow.png";
import CalendarIcon from "../../assets/icons/icons8-calendar-48.png";
const BlogBlock = ({title, date, desc, src}) => {
  return (
    <div className="blog-block">
      <Wrapper className={"blog-block-image"}>
        <Link>
          <Image className={"blog-block-image-border"} src={src} />
        </Link>
      </Wrapper>
      <div className="blog-info">
        <span className="blog-date">
          <Wrapper width={"1rem"}>
            <Image src={CalendarIcon} />
          </Wrapper>
          {date}
        </span>
      </div>
      <div className="blog-body">
        <h4 className="blog-title">
          <Link to={"/"}>{title}</Link>
        </h4>
        <p className="blog-desc">{desc}</p>
        <Link to={"/"} className="blog-continue">
          Continue
          <Wrapper width={"2rem"}>
            <Image src={RightYellowArrow} className={"blog-continue-arrow"} />
          </Wrapper>
        </Link>
      </div>
    </div>
  );
};
export default BlogBlock;
