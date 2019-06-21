import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import { Input, CheckBox, TextArea, FormBtn } from "../components/Form";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownMenu from 'react-bootstrap/DropdownMenu';
// import "./reset.css";
import "./style.css";
import logo from "../images/mochiLogo.png";

class Items extends Component {

  constructor(props) {
    super(props);
    // this.toggle = this.toggle.bind(this);
    // this.select = this.select.bind(this);
    this.state = {
        items: [],
        category: "",
        name: "",
        quantity: "",
        scheduled: true,
        originalPurchaseDate: "",
        price: 0,
        attachments: "",
        notes: "",
        // dropdownOpen: false,
    };
  }

  componentDidMount() {
    this.loadItems();
  }

  loadItems = () => {
    API.getItems()
      .then(res =>
        this.setState({ items: res.data, 
          name: "", 
          category: "Any",
          quantity: 0, 
          scheduled: "", 
          originalPurchaseDate: "", 
          price: 0, 
          attachments: "", 
          notes: "" })
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

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  select(event) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
      category: event.target.innerText
    });
  }

  checkBox = event => {
    if (this.state.scheduled === false) {
        this.setState({ scheduled: true })
    } else {
        this.setState({ scheduled: false })
    }
    console.log(this.state.scheduled);
  }


  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.name, this.state.quantity);
 
    // if (this.state.name && this.state.quantity) {
       
    if (true) {
      API.saveItem({
        name: this.state.name,
        quantity: this.state.quantity,
        scheduled: this.state.scheduled,
        originalPurchaseDate: this.state.originalPurchaseDate,
        price: this.state.price,
        attachments: this.state.attachments,
        notes: this.state.notes
      })
        .then((data) => {
          console.log("Success!", data);
        }).then(
          this.loadItems()
        )
        // .then(res => this.loadItems())
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
                                        <td><button type="button" className="btn btn-primary">Update</button></td>
                                        <td><button type="button" className="btn btn-danger">Delete</button></td>
                                    </tr>
                                    {this.state.items.map(item => (
                                      <tr key={item._id}>
                                        <th scope="col"></th>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td>{item.attachments}</td>
                                      </tr>
                                    ))}
                                </tbody>
                            </table>
                            <button type="button" className="btn btn-outline-danger" id="delete">Delete Selected Item(s)</button>
                        </div>
                    </div>
                </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-4" id="listrow">
          <div className="card">
            <div className="card-header">
                Add New Item/Update Current
            </div>
            <div className="card-body">
              <form>
                Category
                <Dropdown isopen={this.state.dropdownOpen}>
                <span
                  onClick={this.toggle}
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded={this.state.dropdownOpen}
                >{this.state.value}
                </span>
                  <DropdownMenu>
                    <div onClick={this.toggle.bind(this, 'furniture')}>Furniture</div>
                    <div onClick={this.toggle.bind(this, 'jewelry')}>Jewelry</div>
                    <div onClick={this.toggle.bind(this, 'electronics')}>Electronics</div>
                    <div onClick={this.toggle.bind(this, 'weapons')}>Weapons</div>
                    <div onClick={this.toggle.bind(this, 'instruments')}>Musical Instruments</div>
                    <div onClick={this.toggle.bind(this, 'art')}>Art</div>
                  </DropdownMenu>
                </Dropdown>
                {/* <Dropdown
                  >
                  <Dropdown.Toggle variant="success" id="dropdown-basic" >
                    Any
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Furniture</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Jewelry</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Electronics/Appliances</Dropdown.Item>
                    <Dropdown.Item href="#/action-1">Weapons</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Musical Instruments</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Art</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown> */}

                {/* <DropDown 
                  options="Home Goods"
                  value={this.state.category}
                  onChange={this.handleInputChange}
                  name="category"
                  placeholder="Any"
                /> */}
                Name of object
                <Input
                  value={this.state.name}
                  onChange={this.handleInputChange}
                  name="name"
                  placeholder="Name (required)"
                />
                Quantity
                <Input
                  number={this.state.quantity}
                  onChange={this.handleInputChange}
                  name="quantity"
                  placeholder="Quantity (required)"
                />
                Scheduled
                <CheckBox
                    value={this.state.scheduled}
                    onChange={this.checkBox}
                    name="scheduled"
                    label="Scheduled"
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