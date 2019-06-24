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
                                        <th scope="col">Original Purchase Date</th>
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
                                        <td>1/1/2016</td>
                                        <td>$1,100</td>
                                        <td><i className="fas fa-file"></i></td>
                                        <td>This is a great couch</td>
                                        <td><button type="button" className="btn btn-primary">Update</button></td>
                                        <td><button type="button" className="btn btn-outline-danger">Delete</button></td> 
                                    </tr>
                                    {this.props.items.map(item => (
                                        <tr id="row_{items._id}" key={item._id}>
                                            <th scope="col"></th>
                                            <td>{item.name}</td>
                                            <td>{item.price}</td>
                                            <td>{item.originalPurchaseDate}</td>
                                            <td>{item.price}</td>
                                            <td>{item.attachments}</td>
                                            <td>{item.note}</td>
                                            <td><button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">Update</button></td>
                                            <td><button type="button" className="btn btn-outline-danger" id="delete" onClick={this.props.clickDelete}>Delete</button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <button type="button" className="btn btn-outline-primary" data-toggle="modal" data-target="#exampleModal">Update Entries</button>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Index;