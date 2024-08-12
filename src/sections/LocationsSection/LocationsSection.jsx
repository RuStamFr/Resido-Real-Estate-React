import "./locations-section.scss";
import Section from "../../components/Section/Section";
import Image from "../../components/Image/Image";
import { Link } from "react-router-dom";
import image1 from "../../assets/images/c-1-400xauto.png";
import image2 from "../../assets/images/c-2-400xauto.png";
import image3 from "../../assets/images/c-3-400xauto.png";
import image4 from "../../assets/images/c-4-400xauto.png";
import image5 from "../../assets/images/c-5-400xauto.png";
import image6 from "../../assets/images/c-6-400xauto.png";
import rightArrow from "../../assets/icons/right-arrow.png";

const LocationsSection = () => {
  const locations = [
    { id: 1, href: "#", title: "Newark", desc: "5 Properties", src: image1 },
    { id: 2, href: "#", title: "Peoria", desc: "4 Properties", src: image2 },
    { id: 3, href: "#", title: "O'Fallon", desc: "2 Properties", src: image3 },
    { id: 4, href: "#", title: "Hampton", desc: "4 Properties", src: image4 },
    { id: 5, href: "#", title: "Lakewood", desc: "1 Properties", src: image5 },
    { id: 6, href: "#", title: "Mesa", desc: "1 Properties", src: image6 },
  ];
  return (
    <Section className={"locations-section"}>
      <h2 className={"locations-section-title"}>Find By Locations</h2>
      <p className={"locations-section-desc"}>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
      </p>
      <div className={"locations-section-list"}>
        {locations.map((item) => {
          return (
            <div key={item.id} className={"locations-section-card"}>
              <Link
                className={"locations-section-card-image-link"}
                to={item.href}
              >
                <Image
                  src={item.src}
                  className={"locations-section-card-image"}
                />
              </Link>
              <div className={"locations-section-card-content"}>
                <div className={"locations-section-card-content-left"}>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
                <Link
                  className={"locations-section-card-button-link"}
                  to={item.href}
                >
                  <Image
                    src={rightArrow}
                    className={"locations-section-card-button-icon"}
                  />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default LocationsSection;
