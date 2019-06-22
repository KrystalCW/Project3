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
import InfoRow from "../components/InfoRow";
import Footer from "../components/Footer";
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
            <div className="container" id="topCont">
                <Row>
                    <NewUser /> 
                    <div className="col-lg-2"></div>
                    <RetUser />
                </Row>
            </div>
            <div className="parallax" id="paraOne"></div>
            <div className="container">
                <Row>
                    <InfoRow />
                </Row>
            </div>
            <div className="parallax" id="paraTwo"></div>
            <div className="container">
                <Row>
                    <Footer />
                </Row>
            </div>
        </div>
        )
    }
}

export default Index;