import "./blog-section.scss";
import Section from "../../components/Section/Section";
import BlogImage1 from "../../assets/images/13.jpg";
import BlogImage2 from "../../assets/images/4.jpg";
import BlogImage3 from "../../assets/images/11.jpg";
import BlogBlock from "../../components/BlogBlock/BlogBlock";

const BlogSection = () => {
  return (
    <Section className={"blog-section"}>
      <div className="blog-section-title-block">
        <h2 className="blog-section-title">News By Resido,3</h2>
        <p className="blog-section-desc">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        </p>
      </div>
      <div className="blog-blocks">
        <BlogBlock
          date={"08 Oct, 2022"}
          title={"Average U.S. Rental Price Hits a Two-Year High"}
          desc={
            "  Hic optio officiis quaerat consequuntur quas deleniti quaerat. Nihil rerum et culpa dolore. Unde harum magni in tenetur et eum. Ut aut explicabo perspiciatis consequatur at veniam beatae."
          }
          src={BlogImage1}
        />
        <BlogBlock
          date={"03 Oct, 2022"}
          title={"Why People Choose Listio For Own Properties"}
          desc={
            "  Eos et magni iure expedita a rem. Quod cupiditate magni modi aut quos. Eaque qui cupiditate eius dolorum vel dolorum sed. Nostrum sit fugit sit quia magnam eaque totam ut."
          }
          src={BlogImage2}
        />
        <BlogBlock
          date={"02 Oct, 2022"}
          title={
            "Entertain in Style: 14 Products Made for an Outdoor Summer Soiree"
          }
          desc={
            "Sapiente illo repellendus mollitia soluta aut. Tenetur quidem labore corporis necessitatibus a et quia. In voluptatem nihil at reiciendis ea rerum libero."
          }
          src={BlogImage3}
        />
      </div>
    </Section>
  );
};
export default BlogSection;
