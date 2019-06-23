import React, { Fragment, Component } from "react";
import "./style.css";


class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    render() {
        return (
            <Fragment>
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Add Item</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true" onChange={this.props.clearInputs}>x</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput1">Name of Item</label>
                                        <input type="text" name="itemName" className="form-control" id="exampleFormControlInput1" defaultValue={this.props.inputs["itemName"]} placeholder={ (this.props.inputs['itemName']) ? this.props.inputs['itemName'] : "Office Desk" } onChange={this.props.onChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput1">Quantity of Item</label>
                                        <input type="number" name="quantity" className="form-control" id="exampleFormControlInput1" placeholder={ (this.props.inputs["quantity"]) ? this.props.inputs["quantity"] : 0 } defaultValue={this.props.inputs["quantity"]} onChange={this.props.onChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlSelect1">Item Category</label>
                                        <select className="form-control" id="exampleFormControlSelect1" name="category" defaultValue={this.props.inputs} onChange={this.props.onChange}>
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
                                        <input type="text" name="price" className="form-control" id="exampleFormControlInput1" placeholder={ (this.props.inputs["price"]) ? this.props.inputs["price"] : 3500 } defaultValue={this.props.inputs['myPrice']} onChange={this.props.onChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlFile1">Upload attachment</label>
                                        <input type="file" name="attachment" className="form-control-file" id="exampleFormControlFile1" defaultValue={this.props.inputs["attachments"]}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlTextarea1">Description of item</label>
                                        <textarea className="form-control" name="description" id="exampleFormControlTextarea1" rows="3" defaultValue={this.props.inputs["description"]} placeholder={ (this.props.inputs["description"]) ? this.props.inputs["description"] : "" }onChange={this.props.onChange} />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal" >Close</button>
                                <button type="button" className="btn btn-warning" id="update" onClick={this.props.onSubmit}>Add New Item</button>  
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Index