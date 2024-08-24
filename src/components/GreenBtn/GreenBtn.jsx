import "./green-btn.scss";

const GreenBtn = ({text, onClick}) => {
  return (
    <button onClick={onClick} className="green-button">
      {text}
    </button>
  );
};

export default GreenBtn;
