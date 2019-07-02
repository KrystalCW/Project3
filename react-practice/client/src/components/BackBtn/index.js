import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/mochiLogo.png";
import "./style.css";

const BackBtn = () => {
  return(
      <Link to ="/">
        <img src={logo} id="landingImg"  alt="logo"/>
      </Link>
  );
}
  
export default BackBtn;