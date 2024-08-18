import BlueBanner from "../../components/BlueBanner/BlueBanner";
import BlogsSection from "../../sections/BlogsSection/BlogsSection";
import "./blogs.scss";

const Blogs = () => {
  return (
    <>
      <BlueBanner title={"News"} subTitle={"See Our Latest Articles & News"} />

      <BlogsSection />
    </>
  );
};
export default Blogs;
