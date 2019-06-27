import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const BackBtn = () => {
  return(
    <Link to ="/">
      <button type="button" class="btn btn-lg btn-primary" >
          Go Home 
      </button> 
    </Link>  
  );
}
  
export default BackBtn;