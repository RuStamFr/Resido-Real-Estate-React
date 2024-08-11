import "./wrapper.scss";

const Wrapper = ({children, width, direction, align, justify, className}) => {
  return (
    <div
      className={`wrapper ${className}`}
      style={{
        width: width,
        display: "flex",
        flexDirection: direction,
        alignItems: align,
        justifyContent: justify,
      }}
    >
      {children}
    </div>
  );
};

export default Wrapper;
