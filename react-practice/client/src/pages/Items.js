import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
// import "./reset.css";
import "./style.css";
import logo from "../images/mochiLogo.png";

class Items extends Component {
  
    state = {
        items: [],
        name: "",
        quantity: "",
        scheduled: false,
        originalPurchaseDate: "",
        price: 0,
        attachments: "",
        notes: ""
  };

  componentDidMount() {
    this.loadItems();
  }

  loadItems = () => {
    API.getItems()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  deleteItem = id => {
    API.deleteItem(id)
      .then(res => this.loadItems())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveItem({
        name: this.state.name,
        quantity: this.state.quantity,
        scheduled: this.state.scheduled,
        originalPurchaseDate: this.state.originalPurchaseDate,
        price: this.state.price,
        attachments: this.state.attachments,
        notes: this.state.notes
      })
        .then(res => this.loadItems())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
        <Container fluid>
            <Row>
                <div className="col-lg" id="landingTitle">
                    <h1 id="welcome">Welcome <span id="name"></span></h1>
                </div>
            </ Row>
            <Row>
                <div className="col-lg-7"  id="landingRow">
                    <div className="card">
                        <h5 className="card-header">Cataloged Items</h5>
                        <div className="card-body">
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
                                        <td><button type="button" class="btn btn-primary">Update</button></td>
                                        <td><button type="button" class="btn btn-danger">Delete</button></td>
                                    </tr>
                                    {this.state.items.map(item => (
                                      <tr>
                                        <th scope="col"></th>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td>{item.attachments}</td>
                                      </tr>
                                    ))}
                                </tbody>
                            </table>
                            <button type="button" class="btn btn-outline-danger" id="delete">Delete Selected Item(s)</button>
                        </div>
                    </div>
                </div>
        <div class="col-lg-1"></div>
        <div class="col-lg-4" id="listrow">
          <div class="card">
            <div class="card-header">
                Add New Item/Update Current
            </div>
            <div class="card-body">
              <form>
                Name of object
                <Input
                  value={this.state.name}
                  onChange={this.handleInputChange}
                  name="name"
                  placeholder="Name (required)"
                />
                Quantity
                <Input
                  value={this.state.quantity}
                  onChange={this.handleInputChange}
                  name="quantity"
                  placeholder="Quantity (required)"
                />
                Original Purchase Date
                <Input
                  value={this.state.originalPurchaseDate}
                  onChange={this.handleInputChange}
                  name="originalPurchaseDate"
                  placeholder="Original purchase/acquisition date"
                />
                Price of item
                <Input
                  value={this.state.price}
                  onChange={this.handleInputChange}
                  name="price"
                  placeholder="Price"
                />
                Attachments
                <Input
                  value={this.state.attachments}
                  onChange={this.handleInputChange}
                  name="attachments"
                  placeholder="attachments"
                />
                Note
                <TextArea
                  value={this.state.notes}
                  onChange={this.handleInputChange}
                  name="notes"
                  placeholder="Notes (Optional)"
                />
                <FormBtn
                  disabled={!(this.state.name && this.state.quantity)}
                  onClick={this.handleFormSubmit}
                >
                  Submit New Item
                </FormBtn>
              </form>
            </div>
          </div>
        </div>
        </ Row>
        <Row>
          <div className="col-lg-8"></div>
          <div className="col-lg-4">
                <img src={logo} id="landingImg" />
          </div>
        </Row>
      </ Container>
      );
    }
  }
  export default Items;