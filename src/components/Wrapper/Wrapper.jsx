import "./wrapper.scss";

const Wrapper = ({children, width, direction, align, justify}) => {
  return (
    <div
      className="wrapper"
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
