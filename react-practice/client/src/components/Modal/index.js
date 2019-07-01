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
        const itemInfo = this.props.inputs;
        return (
            <div>
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Add Item</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.props.clearInputs}>
                                    <span aria-hidden="true">x</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput1">Name of Item (required)</label>
                                        <input type="text" name="itemName" className="form-control" value={itemInfo.itemName || '' } placeholder="Office Desk" onChange={this.props.onChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput1">Quantity of Item (required)</label>
                                        <input type="number" name="quantity" className="form-control" id="exampleFormControlInput1" placeholder="0" value={itemInfo.quantity || '' } onChange={this.props.onChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlSelect1">Item Category</label>
                                        <select className="form-control" id="exampleFormControlSelect1" name="category" value={itemInfo.category || '' } placeholder="Please Select One" onChange={this.props.onChange}>
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
                                        <input type="text" name="price" className="form-control" id="exampleFormControlInput1" placeholder="3500" value={itemInfo.price || '' } onChange={this.props.onChange} />
                                    </div>
                                    <div className="form-group">
                                        <button type="button" onClick={this.props.getAttachments} className="upload-button">Upload Attachments</button>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlFile1">Attachment</label>
                                        <input type="test" name="attachment" className="form-control-file" id="exampleFormControlFile1" value={this.props.attachment || itemInfo.attachment || '' } onChange={this.props.onChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlTextarea1">Description of item</label>
                                        <textarea className="form-control" name="description" id="exampleFormControlTextarea1" maxLength="60" rows="3" value={itemInfo.description || '' } placeholder="" onChange={this.props.onChange} />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal" onChange={this.props.clearInputs}>Close</button>
                                { (this.props.inputs["itemID"] === "new") ? 
                                    <button type="button" className="btn btn-warning" id="update"  onClick={this.props.onSubmit}>Add New Item</button> :
                                    <button type="button" name={this.props.inputs["itemID"]} className="btn btn-warning" id="update" onClick={this.props.onUpdate}>Update Item</button>
                                }                       
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Index