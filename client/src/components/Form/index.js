import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function CheckBox(props) {
  return (
    <div className="form-group form-check">
      <input type="checkbox" className="form-check-input" id="exampleCheck1" {...props} />
      <label className="form-check-label" htmlFor="exampleCheck1">{props.label}</label>
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="5" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 5 }} className="btn btn-success">
      {props.children}
    </button>
  );
}

export function DropDown(props) {

  return (

    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Dropdown button
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
      </div>
    </div>
    
    // <div className="dropdown">
    //   <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //     {props.placeholder}
    //   </button>
    //   <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    //     <a className="dropdown-item" href="#">Home Goods</a>
    //     {/* {props.options.map(category => (
    //       <a className="dropdown-item" href="#" key={category}>{category}</a>
    //     ))} */}
    //   </div>
    // </div>
  )
}