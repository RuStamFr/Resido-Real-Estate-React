import "./image.scss";

const Image = ({src, alt, className}) => {
  return (
    <div className={`${className} image`}>
      <img src={src} alt={alt} className={`${className}-img`} />
    </div>
  );
};
export default Image;
