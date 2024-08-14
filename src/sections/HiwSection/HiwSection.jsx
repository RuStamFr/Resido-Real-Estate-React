import Section from "../../components/Section/Section";
import "./hiw-section.scss";
import Image from "../../components/Image/Image";
import Wrapper from "../../components/Wrapper/Wrapper";
import image_01 from "../../assets/images/page-96.png";
import image_02 from "../../assets/images/man-100.png";
import image_03 from "../../assets/images/lease-100.png";

const HiwSection = () => {
  return (
    <Section className={"hiw-section"}>
      <h2 className={"hiw-section-title"}>How It Works?</h2>
      <p className={"hiw-section-desc"}>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
      </p>
      <div className={"hiw-section-flow"}>
        <div className={"hiw-section-flow-item"}>
          <Wrapper className={"hiw-section-flow-item-image-holder"}>
            <Image src={image_01} className={"hiw-section-flow-item-image"} />
          </Wrapper>
          <h3>Evaluate Property</h3>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have Ipsum available.
          </p>
        </div>
        <div className={"hiw-section-flow-item"}>
          <Wrapper className={"hiw-section-flow-item-image-holder"}>
            <Image src={image_02} className={"hiw-section-flow-item-image"} />
          </Wrapper>
          <h3>Meet Your Agent</h3>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have Ipsum available.
          </p>
        </div>
        <div className={"hiw-section-flow-item"}>
          <Wrapper className={"hiw-section-flow-item-image-holder"}>
            <Image src={image_03} className={"hiw-section-flow-item-image"} />
          </Wrapper>
          <h3>Close The Deal</h3>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have Ipsum available.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default HiwSection;
