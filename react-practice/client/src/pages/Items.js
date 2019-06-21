import React, { Component } from "react";
import Modal from '../components/Modal'
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import "./reset.css";
import "./style.css";
import logo from "../images/mochiLogo.png";
import Chart from "../components/Chart";


class Items extends Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.select = this.select.bind(this);
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
        dropdownOpen: false,
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
          quantity: "", 
          scheduled: "", 
          originalPurchaseDate: "", 
          price: "", 
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
    console.log(this.state.name, this.state.quantity);
    event.preventDefault();
    if (this.state.name && this.state.quantity) {
      API.saveItem({
        name: this.state.name,
        quantity: this.state.quantity,
        scheduled: this.state.scheduled,
        originalPurchaseDate: this.state.originalPurchaseDate,
        price: this.state.price,
        attachments: this.state.attachments,
        notes: this.state.notes
      })
        .then(console.log("Success!"))
        // .then(res => this.loadItems())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
        <div className="container">
            <Row>
                <div className="col-lg" id="landingTitle">
                    <h1 id="welcome">Welcome <span id="name"></span></h1>
                </div>
            </ Row>
            <Row>
            <Chart />
            <Modal />
        </ Row>
        <Row>
          <div className="col-lg-8"></div>
          <div className="col-lg-4">
            <img src={logo} id="landingImg" />
          </div>
        </Row>
      </ div>
      );
    }
  }
  export default Items;