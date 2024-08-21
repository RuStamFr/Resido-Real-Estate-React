import BlueBanner from "../../components/BlueBanner/BlueBanner";
import BlogDetailsSection from "../../sections/BlogDetailsSection/BlogDetailsSection";
import "./blog-details.scss";

const BlogDetails = () => {
  return (
    <>
      <BlueBanner title={"Average U.S. Rental Price Hits a Two-Year High"} />
      <BlogDetailsSection watched={"1,963"} />
    </>
  );
};

export default BlogDetails;
