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
      .then(res => {
        console.dir(res.data);
        this.setState({ items: res.data, 
          // name: "", 
          // category: "Any",
          // quantity: 0, 
          // scheduled: "", 
          // originalPurchaseDate: "", 
          // price: 0, 
          // attachments: "", 
          // notes: "" 
        })
        }
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
      <div className="container">
        <Row>
        <Welcome />
        </ Row>
        <Row>
          <Chart 
            items={this.state.items}
            clickDelete={this.deleteItem}
          />
          <Modal 
            onSubmit={this.handleFormSubmit}
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