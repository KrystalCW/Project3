import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn, CheckBox } from "../components/Form";
// import "./reset.css";
import "./style.css";
import logo from "../images/mochiLogo.png";
import NewUser from "../components/NewUser";
import RetUser from "../components/RetUser";
// import bcrypt from "bcrypt";
// const saltRounds = 10;
// const plainTextPassword1 = "DFGh5546#%^___90";


class Index extends Component {

    state = {
        newEmail: "",
        newPassword: "",
        confirmPassword: "",
        existingEmail: "",
        existingPassword: "",
        rememberMe: false,
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
        console.log(name, value)
      };

    checkBox = event => {
        if (this.state.rememberMe === false) {
            this.setState({ rememberMe: true })
        } else {
            this.setState({ rememberMe: false })
        }
        console.log(this.state.rememberMe);
    }

    render() {
        return (
            <div id="indexBody">
            <div className="parallax"></div>
            <img src={logo} />
            <div className="container">
                <Row>
                    <NewUser />
                    <div className="col-lg-2"></div>
                    <RetUser />
                </Row>
            </div>
            <div className="parallax" id="paraOne"></div>
            <div className="container">
                <Row>
                    <div className="col-lg" id="iconRow">
                        <div className="card border-info mb-3">
                            <div className="card-body text-info">
                                <h2 className="card-title">Nature is Fierce</h2>
                                <div className="row">
                                    <div className="col-lg-3"></div>
                                    <div className="col-lg-2">
                                        <i className="fas fa-fire fa-7x"></i>
                                    </div>
                                    <div className="col-lg-2">
                                        <i className="fas fa-water fa-7x"></i>
                                    </div>
                                    <div className="col-lg-2">
                                        <i className="fas fa-poo-storm fa-7x"></i>
                                    </div>
                                    <div className="col-lg-3"></div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-lg-2"></div>
                                    <div className="col-lg-8">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec libero tellus. Aliquam id laoreet nulla. Suspendisse potenti. Sed auctor arcu pretium, posuere dolor vitae, malesuada augue. Sed vehicula placerat gravida. Sed sagittis erat non orci rutrum scelerisque. Quisque posuere maximus neque. Praesent urna nulla, volutpat ac magna aliquet, ornare ultricies turpis. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </p>
                                    </div>
                                    <div className="col-lg-2"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Row>
            </div>
            <div className="parallax" id="paraTwo"></div>
        </div>
        )
    }
}

export default Index;