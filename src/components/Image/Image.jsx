import "./image.scss";

const Image = ({src, alt, className}) => {
  return (
    <div className="image">
      <img src={src} alt={alt} className={className} />
    </div>
  );
};
export default Image;
