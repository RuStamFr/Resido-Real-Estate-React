import "./blogs-section.scss";
import Section from "../../components/Section/Section";
import NewsBlock from "../../components/NewsBlock/NewsBlock";
import NewsImg1 from "../../assets/images/11.jpg";
const BlogsSection = () => {
  return (
    <Section className={"blogs-section"}>
      <div className="news-title-wrapper">
        <h2 className="news-title">News</h2>
      </div>
      <div className="news-blocks">
        <NewsBlock
          title={"Average U.S. Rental Price Hits a Two-Year High"}
          watched={"1,963"}
          desc={
            "Hic optio officiis quaerat consequuntur quas deleniti quaerat. Nihil rerum et culpa dolore. Unde harum magni in tenetur et eum. Ut aut explicabo perspiciatis consequatur at veniam beatae."
          }
          src={NewsImg1}
        />
        <NewsBlock
          title={"Average U.S. Rental Price Hits a Two-Year High"}
          watched={"1,963"}
          desc={
            "Hic optio officiis quaerat consequuntur quas deleniti quaerat. Nihil rerum et culpa dolore. Unde harum magni in tenetur et eum. Ut aut explicabo perspiciatis consequatur at veniam beatae."
          }
          src={NewsImg1}
        />
        <NewsBlock
          title={"Average U.S. Rental Price Hits a Two-Year High"}
          watched={"1,963"}
          desc={
            "Hic optio officiis quaerat consequuntur quas deleniti quaerat. Nihil rerum et culpa dolore. Unde harum magni in tenetur et eum. Ut aut explicabo perspiciatis consequatur at veniam beatae."
          }
          src={NewsImg1}
        />
        <NewsBlock
          title={"Average U.S. Rental Price Hits a Two-Year High"}
          watched={"1,963"}
          desc={
            "Hic optio officiis quaerat consequuntur quas deleniti quaerat. Nihil rerum et culpa dolore. Unde harum magni in tenetur et eum. Ut aut explicabo perspiciatis consequatur at veniam beatae."
          }
          src={NewsImg1}
        />
        <NewsBlock
          title={"Average U.S. Rental Price Hits a Two-Year High"}
          watched={"1,963"}
          desc={
            "Hic optio officiis quaerat consequuntur quas deleniti quaerat. Nihil rerum et culpa dolore. Unde harum magni in tenetur et eum. Ut aut explicabo perspiciatis consequatur at veniam beatae."
          }
          src={NewsImg1}
        />
        <NewsBlock
          title={"Average U.S. Rental Price Hits a Two-Year High"}
          watched={"1,963"}
          desc={
            "Hic optio officiis quaerat consequuntur quas deleniti quaerat. Nihil rerum et culpa dolore. Unde harum magni in tenetur et eum. Ut aut explicabo perspiciatis consequatur at veniam beatae."
          }
          src={NewsImg1}
        />
      </div>
    </Section>
  );
};

export default BlogsSection;
