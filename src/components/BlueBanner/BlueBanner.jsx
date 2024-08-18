import Container from "../Container/Container";
import "./blue-banner.scss";

const BlueBanner = ({title, subTitle}) => {
  return (
    <div className="page-title">
      <Container>
        <div className="page-title-wrapper">
          <h1 className="blue-banner-title">{title}</h1>
          <div className="blue-banner-sub-title">{subTitle}</div>
        </div>
      </Container>
    </div>
  );
};

export default BlueBanner;
