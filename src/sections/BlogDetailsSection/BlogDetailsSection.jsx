import "./blog-details-section.scss";
import Section from "../../components/Section/Section";
import {Link} from "react-router-dom";
import Image from "../../components/Image/Image";
import DetailsImg from "../../assets/images/details-image.jpg";
import Wrapper from "../../components/Wrapper/Wrapper";
import NewsCalendarIcon from "../../assets/icons/news-calendar-icon-grey.png";
import NewsEyeIcon from "../../assets/icons/new-eye-icon-grey.png";
import BlogBlock from "../../components/BlogBlock/BlogBlock";
const BlogDetailsSection = ({watched}) => {
  return (
    <Section className={"blog-details-section"}>
      <div className="breadcrumb-wrapper">
        <ul className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to={"/"}>Home </Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={"/blogs"}>Building materials </Link>
          </li>
          <li className="breadcrumb-item active">
            Average U.S. Rental Price Hits a Two-Year High
          </li>
        </ul>
      </div>
      <div className="details-wrapper">
        <div className="details-left">
          <div className="details-left-img-div">
            <Image className={"details-image"} src={DetailsImg} />
          </div>
          <div className="details-info">
            <div className="details-date">
              <div className="details-date-info">
                <Wrapper width={"1.2rem"} className={"display-inline-flex"}>
                  <Image src={NewsCalendarIcon} />
                </Wrapper>
                2022/10/03 in
                <Link to={"/"} className="details-date-hover">
                  Latest news
                </Link>
                ,
                <Link to={"/"} className="details-date-hover">
                  House architecture{" "}
                </Link>
                ,
                <Link to={"/"} className="details-date-hover">
                  House design{" "}
                </Link>
                ,
                <Link to={"/"} className="details-date-hover">
                  Building materials{" "}
                </Link>
                -
                <Wrapper width={"1.2rem"} className={"display-inline-flex"}>
                  <Image src={NewsEyeIcon} />
                </Wrapper>
                {watched}
              </div>
            </div>
          </div>
          <h2 className="details-title">
            Average U.S. Rental Price Hits a Two-Year High
          </h2>
          <div className="blog-details-text">
            Alice looked at each other for some while in silence. At last the
            Mock Turtle, who looked at Alice, and she could remember about
            ravens and writing-desks, which wasn't much. The Hatter was the same
            thing a bit!' said the Cat: 'we're all mad here. I'm mad. You're
            mad.' 'How do you know about this business?' the King hastily said,
            and went stamping about, and called out 'The Queen! The Queen!' and
            the other side of the reeds--the rattling teacups would change to
            dull reality--the grass would be four thousand miles down, I
            think--' (for, you see, so many lessons to learn! No, I've made up
            my mind about it; and while she remembered that she might as well
            say,' added the March Hare, 'that "I like what I say--that's the
            same thing as "I eat what I used to it as you are; secondly, because
            she was peering about anxiously among the distant sobs of the
            Gryphon, before Alice could hear the words:-- 'I speak severely to
            my right size: the next verse.' 'But about his toes?' the Mock
            Turtle, who.I get" is the same year for such dainties would not join
            the dance? "You can really have no idea what Latitude or Longitude
            I've got to the other arm curled round her once more, while the Mock
            Turtle, 'they--you've seen them, of course?' 'Yes,' said Alice, very
            loudly and decidedly, and there they are!' said the King: 'however,
            it may kiss my hand if it makes me grow smaller, I can reach the
            key; and if it please your Majesty!' the soldiers did. After these
            came the guests, mostly Kings and.Alice. 'You did,' said the Pigeon;
            'but if you've seen them so shiny?' Alice looked round, eager to see
            the Queen. 'You make me larger, it must be getting somewhere near
            the King said to the Knave of Hearts, and I shall remember it in
            time,' said the Cat; and this Alice thought she had got burnt, and
            eaten up by two guinea-pigs, who were all shaped like the largest
            telescope that ever was! Good-bye, feet!' (for when she heard the
            Queen put on his slate with one eye; but to her ear. 'You're
            thinking about something, my dear, and that you couldn't cut off a
            bit afraid of interrupting him,) 'I'll give him sixpence. _I_ don't
            believe it,' said Alice, and she very seldom followed it), and
            handed them round as prizes. There was nothing on it in asking
            riddles that have no sort of use in saying anything more till the
            puppy's bark sounded quite faint in the after-time, be herself a
            grown woman; and how she would have appeared to them to sell,' the
            Hatter went on at last, more calmly, though.The chief difficulty
            Alice found at first was in confusion, getting the Dormouse said--'
            the Hatter went on growing, and, as the March Hare and his buttons,
            and turns out his toes.' (later editions continued as follows The
            Panther took pie-crust, and gravy, and meat, While the Panther
            received knife and fork with a T!' said the Queen, 'and take this
            child away with me,' thought Alice, 'shall I NEVER get any older
            than I am so VERY remarkable in that; nor did Alice think it was,'
            he said. (Which he certainly did NOT, being made entirely of
            cardboard.) 'All right, so far,' thought Alice, 'as all the jurymen
            are back in their paws. 'And how do you know what they're like.' 'I
            believe so,' Alice replied very politely, feeling quite pleased to
            have no notion how long ago anything had happened.) So she set off
            at once: one old Magpie began wrapping itself up very sulkily and
            crossed over to the Gryphon. 'Turn a somersault in the pool as it
            can't possibly make me giddy.' And then, turning to.
          </div>
          <div className="details-bottom-blocks">
            <div className="details-bottom-left-block">
              <div className="details-bottom-left-block-title-wrapper">
                <h4 className="details-bottom-left-block-title">Tags</h4>
              </div>
              <ul className="list">
                <li>
                  <Link className="details-bottom-tags-link">General</Link>
                </li>
                <li>
                  <Link className="details-bottom-tags-link">Design</Link>
                </li>
                <li>
                  <Link className="details-bottom-tags-link">Fashion</Link>
                </li>
                <li>
                  <Link className="details-bottom-tags-link">Branding</Link>
                </li>
                <li>
                  <Link className="details-bottom-tags-link">Modern</Link>
                </li>
              </ul>
            </div>

            <div className="details-bottom-right-block">
              <div className="details-bottom-right-block-title-wrapper">
                <h4 className="details-bottom-right-block-title">
                  Share this post:
                </h4>
              </div>
              <ul className="list">
                <li>
                  <Link className="facebook-link">
                    <Wrapper className={"social-icon"}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24px"
                        height="24px"
                      >
                        <path d="M17.525,9H14V7c0-1.032,0.084-1.682,1.563-1.682h1.868v-3.18C16.522,2.044,15.608,1.998,14.693,2 C11.98,2,10,3.657,10,6.699V9H7v4l3-0.001V22h4v-9.003l3.066-0.001L17.525,9z" />
                      </svg>
                    </Wrapper>
                  </Link>
                </li>
                <li>
                  <Link className="linkedin-link">
                    <Wrapper className={"social-icon"}>
                      <svg
                        viewBox="0 0 24 24"
                        id="meteor-icon-kit__regular-linkedin"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.37214 24H0.396429V7.97674H5.37214V24ZM2.88161 5.79102C1.29054 5.79102 0 4.47317 0 2.8821C2.37147e-08 1.29063 1.29014 0.000488281 2.88161 0.000488281C4.47307 0.000488281 5.76321 1.29063 5.76321 2.8821C5.76321 4.47317 4.47214 5.79102 2.88161 5.79102ZM23.9946 24H19.0296V16.2C19.0296 14.341 18.9921 11.9571 16.4427 11.9571C13.8557 11.9571 13.4593 13.9767 13.4593 16.066V24H8.48893V7.97674H13.2611V10.1625H13.3307C13.995 8.90352 15.6177 7.57495 18.0386 7.57495C23.0743 7.57495 24 10.891 24 15.1982V24H23.9946Z"
                        />
                      </svg>
                    </Wrapper>
                  </Link>
                </li>
                <li>
                  <Link className="twitter-link">
                    <Wrapper className={"social-icon"}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50"
                      >
                        <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z" />
                      </svg>
                    </Wrapper>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="details-right">
          <div className="details-category-block">
            <h4 className="category-title">Categories</h4>
            <ul className="category-list">
              <li className="category-li">
                <Link className="text-dark">Latest news</Link>
              </li>
              <li className="category-li">
                <Link className="text-dark">House architecture</Link>
              </li>
              <li className="category-li">
                <Link className="text-dark">House design</Link>
              </li>
              <li className="category-li">
                <Link className="text-dark">Building materials</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Section className="details-blog-section">
        <div className="details-blog-section-wrapper">
          <BlogBlock
            className={"details-blog-block"}
            src={DetailsImg}
            title={"Average U.S. Rental Price Hits a Two-Year High"}
            desc={
              "Hic optio officiis quaerat consequuntur quas deleniti quaerat. Nihil rerum et culpa dolore. Unde harum magni in tenetur et eum. Ut aut explicabo perspiciatis consequatur at veniam beatae."
            }
            date={"08 Oct, 2022 -  1,963"}
          />
          <BlogBlock
            className={"details-blog-block"}
            src={DetailsImg}
            title={"Average U.S. Rental Price Hits a Two-Year High"}
            desc={
              "Hic optio officiis quaerat consequuntur quas deleniti quaerat. Nihil rerum et culpa dolore. Unde harum magni in tenetur et eum. Ut aut explicabo perspiciatis consequatur at veniam beatae."
            }
            date={"08 Oct, 2022 -  1,963"}
          />
        </div>
      </Section>
    </Section>
  );
};
export default BlogDetailsSection;
