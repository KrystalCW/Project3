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
import Welcome from "../components/Welcome";
import BackgroundSlider from 'react-background-slider';

import image1 from "../images/itemBack/coffee.jpg";
import image2 from "../images/itemBack/phone.jpg";
import image3 from "../images/itemBack/couple.jpg";
import image4 from "../images/itemBack/table.jpg";
import image5 from "../images/itemBack/droplets.jpg";
import image6 from "../images/itemBack/villa.jpg";
import image7 from "../images/itemBack/guitar.jpg";
import image8 from "../images/itemBack/wall.jpg";
import image9 from "../images/itemBack/junk.jpg";
import image10 from "../images/itemBack/modernTable.jpg";
import { timingSafeEqual } from "crypto";


class Items extends Component {

  constructor(props) {
    super(props);
    this.state = {
        items: [],
        inputs: {}
    };

    this.baseState = this
  }

  componentDidMount() {
    this.loadItems();
  }

  loadItems = () => {
    this.setState(this.baseState);
    API.getItems()
      .then(res =>
        this.setState({ items: res.data })
          // name: "", 
          // category: "Any",
          // quantity: "", 
          // scheduled: "", 
          // originalPurchaseDate: "", 
          // price: "", 
          // attachments: "", 
          // notes: "" })
      )
      .catch(err => console.log(err));
  };

  deleteItem = id => {
    API.deleteItem(id)
      .then(res => this.loadItems())
      .catch(err => console.log(err));
  };

  clearInputs = event => {
    console.log(event.target);
    // let inputs = { ...this.state.inputs };
    // this.setState({
    //   inputs: {
    //     "itemName": "",
    //     "quantity": "",
    //     "price": "",
    //     "description": ""
    //   }
    // });
    // conso0le.log(this.state.inputs)
  }

  handleInputChange = event => {
    console.log(event.target);
    const { name, value } = event.target;
    console.log(name);
    let inputs = { ...this.state.inputs };

    inputs[name] = value;

    this.setState({
      inputs: inputs
    });
    console.log(this.state.inputs)
  };

  grabExisting = event => {
    const { name } = event.target;
    console.log(name);
    API.getItem(name)
    .then(res => this.setState({
      inputs: {
        "itemName": res.data.item_name,
        "quantity": res.data.item_quantity,
        "price": res.data.item_purchasePrice,
        "description": res.data.item_notes
      }
    }))
    .then(res => {
      console.log(res);
      console.log(this.state.inputs)
    })
    .catch(err => console.log(err))
  }

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
    console.log(this.state);
    event.preventDefault();
    if (this.state.inputs["itemName"] && this.state.inputs["quantity"]) {
      API.saveItem({
        item_name: this.state.inputs["itemName"],
        item_quantity: this.state.inputs["quantity"],
        // item_scheduled: this.state.scheduled,
        // item_originalPurchaseDate: this.state.originalPurchaseDate,
        item_purchasePrice: this.state.inputs["price"],
        // item_attachments: this.state.attachments,
        item_notes: this.state.inputs["description"],
      })
        // .then(res => console.log(res))
        .then(res => this.loadItems())
        .then(this.setState({ inputs: {} }))
        .catch(err => console.log(err))
    }
  };

  render() {
    return (
        <div className="container">
            <Row>
              <Welcome />
            </ Row>
            <Row>
            <Chart 
              items={this.state.items}
              clickDelete={this.deleteItem}
              grabExisting={this.grabExisting}
            />
            <Modal
              inputs={this.state.inputs}
              //name={this.state.name}
              //quantity={this.state.quantity}
              //price={this.state.price}
              onChange={this.handleInputChange}
              onSubmit={this.handleFormSubmit}
              clearInputs={this.clearInputs}
            />
        </ Row>
        <Row>
          <div className="col-lg-8"></div>
          <div className="col-lg-4">
            <img src={logo} id="landingImg" />
          </div>
        </Row>
        <BackgroundSlider
          images={[image1, image2, image3, image4, image5, image6, image7, image8, image9, image10]}
          duration={8}
          transition={2}
        />
      </ div>
      );
    }
  }
  export default Items;