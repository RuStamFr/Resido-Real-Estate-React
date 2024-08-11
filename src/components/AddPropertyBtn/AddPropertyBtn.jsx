import {Link} from "react-router-dom";
import "./add-property-btn.scss";
import Image from "../Image/Image";
import AddProperty from "./img/header-add-property.svg";
import Wrapper from "../Wrapper/Wrapper";

const AddPropertyBtn = ({text}) => {
  return (
    <Link to={"/add-new-property"} className="add-property-link">
      <Wrapper width={"1.5rem"}>
        <Image src={AddProperty} />
      </Wrapper>
      <span className="header-top-add-property-span">{text}</span>
    </Link>
  );
};

export default AddPropertyBtn;
