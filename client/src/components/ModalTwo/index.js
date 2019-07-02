import React, { Fragment, Component } from "react";
import "./style.css";

class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }


    render(){
        // console.log("I was hit");
        return(
            <Fragment>
               <div className="modal fade" id="exampleModalCenter " tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenter" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalCenterTitle">Add Item</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">x</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput1">Name of Item</label>
                                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Office Desk" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlSelect1">Item Category</label>
                                        <select className="form-control" id="exampleFormControlSelect1">
                                            <option>Please Select One</option>
                                            <option>Furniture</option>
                                            <option>Electronics</option>
                                            <option>Home Appliances</option>
                                            <option>Small Motor</option>
                                            <option>Cosmetics</option>
                                            <option>Clothing</option>
                                            <option>Personal Fitness Device</option>
                                            <option>Toys</option>
                                            <option>Rugs/Tapestry</option>
                                            <option>Art/Memorabilia</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput1">Price of item</label>
                                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="$3,500" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlFile1">Upload attachment</label>
                                        <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlTextarea1">Description of item</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-warning" id="update" onSubmit={this.props.onSubmit}>Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Index;