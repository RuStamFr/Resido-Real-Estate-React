import "./single-property-section.scss";
import Section from "../../components/Section/Section";
import Wrapper from "../../components/Wrapper/Wrapper";
import Image from "../../components/Image/Image";
import PinIcon from "../../assets/icons/pin.svg";
import BedIcon from "../ListingSection/image/bed.svg";
import BathIcon from "../ListingSection/image/bathtub.svg";
import MoveIcon from "../ListingSection/image/move.svg";
import {Link} from "react-router-dom";
import CommentBlock from "../../components/CommentBlock/CommentBlock";
import MsgPhoneIcon from "../../assets/icons/msg-telephone-icon.png";
import Slider from "../../components/Slider/Slider";
import {useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import PopupImage from "../../components/PopupImage/PopupImage";
import SetStarRating from "../../components/SetStarRating/SetStarRating";
import {useEffect, useState} from "react";

const SinglePropertySection = () => {
  const location = useLocation();
  const propertyPosts = useSelector(
    (state) => state.propertyPosts.propertyPosts
  );
  const pathname = location.pathname;
  const lastPathItem = pathname.split("/").filter(Boolean).pop();
  const prop_id = (lastPathItem % 17) + 1;

  const property = propertyPosts.find((item) => {
    return +item?.id === +lastPathItem;
  });

  const agents = useSelector((state) => state.agents.agents);

  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");
  const [photo, setPhoto] = useState(null);
  const [comments, setComments] = useState(property?.comments || []);

  useEffect(() => {
    const storedPropertyPosts = JSON.parse(
      localStorage.getItem("propertyPosts")
    );
    if (storedPropertyPosts) {
      const storedProperty = storedPropertyPosts.find(
        (post) => post?.id === property?.id
      );
      if (storedProperty) {
        setComments(storedProperty.comments || []);
      }
    }
  }, [property?.id]);

  const handleFileUpload = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newComment = {
      id: comments.length + 1,
      name,
      title,
      rating,
      message,
      photo: photo ? URL.createObjectURL(photo) : null,
      date: new Date().toISOString(),
    };

    const updatedComments = [...comments, newComment];
    setComments(updatedComments);

    const updatedPropertyPosts = propertyPosts.map((post) => {
      if (post?.id === property?.id) {
        return {
          ...post,
          comments: updatedComments,
        };
      }
      return post;
    });

    localStorage.setItem("propertyPosts", JSON.stringify(updatedPropertyPosts));

    setName("");
    setTitle("");
    setRating(0);
    setMessage("");
    setPhoto(null);
  };

  const getItems = () => {
    const src_1 = `/public/properties/${prop_id}-1.jpg`;
    const src_2 = `/public/properties/${prop_id}-2.jpg`;
    const src_3 = `/public/properties/${prop_id}-3.jpg`;
    const src_4 = `/public/properties/${prop_id}-4.jpg`;
    const src_5 = `/public/properties/${prop_id}-5.jpg`;
    return [
      {id: 1, src: src_1},
      {id: 2, src: src_2},
      {id: 3, src: src_3},
      {id: 4, src: src_4},
      {id: 5, src: src_5},
    ];
  };

  const agent = agents.find((item) => {
    return +item?.id === +property.agents_id;
  });

  return (
    <>
      <Slider items={getItems()} />
      <Section className={"single-property-section"}>
        <div className="property-left-block">
          <div className="property-block">
            <div className="property-name-status-block">
              <span
                className={`property-status ${
                  property?.type_id === 2 ? "red" : ""
                }`}
              >{`${property?.type_id === 1 ? "Rent" : "Sale"}`}</span>
              <h3 className="property-name">{property?.title}</h3>
              <span className="property-address">
                <Wrapper width={"1rem"}>
                  <Image src={PinIcon} className={"property-name-icon"} />
                </Wrapper>
                {property?.address}
              </span>
              <h3 className="property-price">
                {`$${property?.price
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              ${property?.type_id === 1 ? " / monthly" : ""}`}
              </h3>
              <div className="list-fx-features">
                <div className="listing-card-info-icon">
                  <div className="inc-fleat-icon">
                    <Wrapper width={"0.8125rem"}>
                      <Image src={BedIcon} />
                    </Wrapper>
                  </div>
                  {property?.beds} Beds
                </div>
                <div className="listing-card-info-icon">
                  <div className="inc-fleat-icon">
                    <Wrapper width={"0.8125rem"}>
                      <Image src={BathIcon} />
                    </Wrapper>
                  </div>
                  {property?.baths} Bath
                </div>
                <div className="listing-card-info-icon">
                  <div className="inc-fleat-icon">
                    <Wrapper width={"0.8125rem"}>
                      <Image src={MoveIcon} />
                    </Wrapper>
                  </div>
                  {property?.area} m²
                </div>
              </div>
            </div>
          </div>
          <div className="property-block">
            <h4 className="property-block-title">Detail &amp; Features</h4>
            <div className="block-body">
              <ul className="detail-features">
                <li className="detail-features-li">
                  <strong>Bedrooms:</strong> {property?.beds} Beds
                </li>
                <li className="detail-features-li">
                  <strong>Bathrooms:</strong> {property?.baths} Bath
                </li>
                <li className="detail-features-li">
                  <strong>Square:</strong> {property?.area} m²
                </li>
                <li className="detail-features-li">
                  <strong>Property Type:</strong>House
                </li>
              </ul>
            </div>
          </div>
          <div className="property-block">
            <h4 className="property-block-title">Description</h4>
            <p>{property?.description}</p>
          </div>
          <div className="property-block">
            <h4 className="property-block-title">Gallery</h4>
            <ul className="list-gallery-inline">
              {getItems().map((item) => {
                return (
                  <li key={item?.id} className="gallery-li">
                    <div className="mfp-gallery">
                      <PopupImage
                        src={item?.src}
                        className={"mfp-gallery-image"}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="property-block">
            <h4 className="property-block-title">{comments.length} Reviews</h4>
            <div className="comment-block">
              <ul className="comment-block-list">
                {comments.map((comment) => {
                  return <CommentBlock key={comment?.id} comment={comment} />;
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="property-right-block">
          <div className="msg-block">
            <div className="agent-msg-header">
              <div className="agent-msg-image">
                <Image className={"agent-image"} src={agent?.photo} />
              </div>
              <div className="msg-block-info">
                <h4>
                  <Link
                    className="msg-agent-name"
                    to={`/agent-details/${agent?.id}`}
                  >
                    {agent?.name}
                  </Link>
                </h4>
                <div className="msg-agent-phone">
                  <Wrapper width={"1rem"}>
                    <Image src={MsgPhoneIcon} />
                  </Wrapper>
                  <p className="msg-agent-number">{agent?.phone}</p>
                </div>
              </div>
            </div>
            <form className="msg-form" onSubmit={handleSubmit}>
              <SetStarRating onRatingChange={handleRatingChange} />

              <input
                type="text"
                className="msg-form-input not-allow"
                placeholder={`${property?.title}`}
                readOnly
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                className="msg-form-input"
                type="text"
                placeholder="Name *"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <textarea
                className="msg-form-input text-area"
                placeholder="Message"
                rows="5"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <label htmlFor="file-upload" className="file-upload-label">
                Please upload an image (File picker will be in your system's
                default language)
              </label>
              <input
                id="file-upload"
                className="msg-form-input"
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
              />
              <button className="msg-form-btn" type="submit">
                Submit Comment
              </button>
            </form>
          </div>
        </div>
      </Section>
    </>
  );
};

export default SinglePropertySection;
