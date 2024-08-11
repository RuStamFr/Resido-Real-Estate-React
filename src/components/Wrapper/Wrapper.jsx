import "./wrapper.scss";

const Wrapper = ({width, direction, align, justify, className, children}) => {
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
