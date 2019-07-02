import React, { Component } from "react";
import Modal from '../components/Modal';
import API from "../utils/API";
import { Row } from "../components/Grid";
import "./style.css";
//import logo from "../images/mochiLogo.png";
import Chart from "../components/Chart";
import Welcome from "../components/Welcome";
import BackBtn from "../components/BackBtn";
import ImgBox from "../components/ImgBox";
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
// import { timingSafeEqual } from "crypto";


class Items extends Component {

  constructor(props) {
    super(props);
    this.state = {
        items: [],
        inputs: {},
        html: ""
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
        this.setState({ items: res.data }),
      )
      .catch(err => console.log(err));
  };

  clearInputs = () => {
    this.setState({
      inputs: {
        "itemID": "new",
        "itemName": undefined,
        "category": undefined,
        "quantity": undefined,
        "price": undefined,
        "attachment": undefined,
        "description": undefined
      },
    });
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    let inputs = { ...this.state.inputs };

    inputs[name] = value;

    this.setState({
      inputs: inputs
    });
    console.log(this.state.inputs)
  };

  
  deleteItem = event => {
    const { name } = event.target;
    API.deleteItem(name)
      .then(res => {
        this.clearInputs();
        this.loadItems()
      })
      .catch(err => console.log(err));
  };

  grabExisting = event => {
    const { name } = event.target;
    if ( name === "new") {
      this.clearInputs();
    } else {
      API.getItem(name)
      .then(res => {
        this.setState({
          inputs: {
            itemID: name,
            itemName: res.data.item_name,
            category: res.data.item_categoryName,
            quantity: res.data.item_quantity,
            price: res.data.item_purchasePrice,
            attachment: res.data.item_attachments,
            description: res.data.item_notes
          }
        });
        console.log(this.state.inputs)
      })
      .catch(err => console.log(err))
    }
  }

  updateItem = event => {
    const { name } = event.target;
    const itemInfo = this.state.inputs;
    console.log(name);
    API.updateItem(name, {
      item_name: itemInfo.itemName,
      item_quantity: itemInfo.quantity,
      item_categoryName: itemInfo.category,
      // item_scheduled: this.state.scheduled,
      // item_originalPurchaseDate: this.state.originalPurchaseDate,
      item_purchasePrice: itemInfo.price,
      item_attachments: itemInfo.attachment,
      item_notes: itemInfo.description,
    })
    .then(res => this.loadItems())
    .then(this.clearInputs())
    .catch(err => console.log(err))
  }

  ourFunc(){
    return new Promise((resolve, reject) =>{
      // console.log('got here');
      // resolve('todd');
        window.cloudinary.openUploadWidget({ cloud_name: 'mochi-app', upload_preset: 'z57kesqo', tags:['xmas']},
        function(error, result) {
            if (result.event === "success") {
                console.log(result);
                resolve(result);
            } else {
              console.log('error', error);
            }

        });
    })
  }

  uploadWidget() {
      this.ourFunc().then(result =>{
        console.log('result', result);
        const inputs = { ...this.state.inputs };
        inputs.attachment = result.info.secure_url
          this.setState({ inputs });
      })

  }

  handleFormSubmit = event => {
    console.log(this.state);
    const itemInfo = this.state.inputs;

    event.preventDefault();
    if (itemInfo.itemName && itemInfo.quantity) {
      API.saveItem({
        item_name: itemInfo.itemName,
        item_quantity: itemInfo.quantity,
        item_categoryName: itemInfo.category,
        // item_scheduled: this.state.scheduled,
        // item_originalPurchaseDate: this.state.originalPurchaseDate,
        item_purchasePrice: itemInfo.price,
        item_attachments: itemInfo.attachment,
        item_notes: itemInfo.description,
      })
        // .then(res => console.log(res))
        .then(res => this.loadItems())
        .then(this.clearInputs())
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
              <ImgBox />
              <Modal
                inputs={this.state.inputs}
                onChange={this.handleInputChange}
                onSubmit={this.handleFormSubmit}
                clearInputs={this.clearInputs}
                onUpdate={this.updateItem}
                getAttachments={this.uploadWidget.bind(this)}
              />
            </ Row>
              <Row>
                <div className="col-lg-8"></div>
                <div className="col-lg-4">
                  <div className="foo">
                  <BackBtn />
                  </div>
                </div>
            </ Row>
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