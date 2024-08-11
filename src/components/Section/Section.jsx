import Container from "../Container/Container";
import "./section.scss";

const Section = ({children, className}) => {
  return (
    <section className={`section ${className}`}>
      <Container>
        <div className={`${className}-content`}>{children}</div>
      </Container>
    </section>
  );
};
export default Section;
