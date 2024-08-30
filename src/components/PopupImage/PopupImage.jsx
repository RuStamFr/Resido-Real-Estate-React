import {useState, useEffect} from "react";
import "./popup-image.scss";

const PopupImage = ({src, className, alt}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1024);

  const togglePopup = () => {
    if (isLargeScreen) {
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1024);
    };

    window.addEventListener("resize", handleResize);

    if (isOpen && isLargeScreen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen, isLargeScreen]);

  return (
    <div>
      <img
        src={src}
        alt={alt}
        onClick={togglePopup}
        className={`thumbnail-image ${className}`}
      />

      {isOpen && isLargeScreen && (
        <div className="popup-overlay" onClick={togglePopup}>
          <div className="popup-content">
            <img src={src} alt={alt} className="popup-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupImage;
