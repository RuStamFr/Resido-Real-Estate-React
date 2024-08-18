import "./news-block.scss";
import Wrapper from "../Wrapper/Wrapper";
import Image from "../Image/Image";
import {Link} from "react-router-dom";
import RightYellowArrow from "../../assets/icons/right-arrow-yelow.png";
import NewsCalendarIcon from "../../assets/icons/news-calendar-icon-grey.png";
import NewsEyeIcon from "../../assets/icons/new-eye-icon-grey.png";
const NewsBlock = ({title, watched, desc, src}) => {
  return (
    <div className="news-block">
      <Wrapper className={"news-block-image"}>
        <Link>
          <Image className={"news-block-image-border"} src={src} />
        </Link>
      </Wrapper>
      <div className="news-info">
        <p className="news-date">
          <div className="news-date-info">
            <Wrapper width={"1rem"}>
              <Image src={NewsCalendarIcon} />
            </Wrapper>
            2022/10/03
            <Link to={"/"}> in Latest news </Link>,
            <Link to={"/"}>House architecture </Link>,
            <Link to={"/"}>House design </Link>,
            <Link to={"/"}>Building materials </Link>-
            <Wrapper width={"1rem"}>
              <Image src={NewsEyeIcon} />
            </Wrapper>
            {watched}
          </div>
        </p>
      </div>
      <div className="news-body">
        <h4 className="news-title">
          <Link to={"/"}>{title}</Link>
        </h4>
        <p className="news-desc">{desc}</p>
        <Link to={"/"} className="news-continue">
          Continue
          <Wrapper width={"2rem"}>
            <Image src={RightYellowArrow} className={"news-continue-arrow"} />
          </Wrapper>
        </Link>
      </div>
    </div>
  );
};
export default NewsBlock;
