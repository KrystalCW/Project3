import React, { Fragment, Component } from "react";
import "./style.css";

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            name: "",
            quantity: 0,
            dateObtained: 1/1/1900,
        };
    }


    displayTableRows = props => {
        var itemMap = props.map(item => (
            <tr id="row_{items._id}" key={item._id}>
                <th scope="col"></th>
                <td>{item.item_name}</td>
                <td>{item.item_quantity}</td>
                <td>{item.item_categoryName}</td>
                <td>{item.item_purchasePrice}</td>
                <td>{item.item_attachments}</td>
                <td>{item.item_notes}</td>
                <td><button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" name={item._id} onClick={this.props.grabExisting} >Update</button></td>
                <td><button type="button" className="btn btn-outline-danger" id="delete" onClick={this.props.clickDelete}>Delete</button></td>
            </tr>
        ))
        return itemMap
    }

    render() {
        return (
            <Fragment>
                <div className="col-lg-12" id="landingRow">
                    <div className="card" id="chartCard">
                        <h5 className="card-header">Cataloged Items</h5>
                        <div className="card-body" id="chartDiv">
                            <table className="table">
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name of Item</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Category</th>
                                        <th scope="col">Price of Item($)</th>
                                        <th scope="col">Attachments</th>
                                        <th scope="col">Note</th>
                                        <th scope="col">Update</th>
                                        <th scope="col">Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Leather Couch</td>
                                        <td>1</td>
                                        <td>Furniture</td>
                                        <td>$1,100</td>
                                        <td><i className="fas fa-file"></i></td>
                                        <td>This is a great couch</td>
                                        <td><button type="button" className="btn btn-primary">Update</button></td>
                                        <td><button type="button" className="btn btn-outline-danger">Delete</button></td> 
                                    </tr>
                                    {this.displayTableRows(this.props.items)}
                                </tbody>
                            </table>
                            {/* <button type="button" className="btn btn-outline-primary" data-toggle="modal" data-target="#exampleModal" onClick={this.props.grabExisting}>Add new item</button> */}
                            <button type="button" className="btn btn-outline-primary" data-toggle="modal" data-target="#exampleModal" name="new" onClick={this.props.grabExisting}>Add new item</button>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Index;