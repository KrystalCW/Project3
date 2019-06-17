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
            <Container>
                <Row>
                    <div className="col-lg-5 loginRow">
                        <div className="card">
                            <div className="card-header">
                                New User
                            </div>
                            <div className="card card-body">
                                <form>
                                    Email address
                                    <Input 
                                        value={this.state.newEmail}
                                        onChange={this.handleInputChange}
                                        name="newEmail"
                                        placeholder="We'll never share your email with someone else."
                                    />
                                    Password
                                    <Input
                                        value={this.state.newPassword}
                                        onChange={this.handleInputChange}
                                        name="newPassword"
                                        placeholder="Password"
                                    />
                                    Confirm Password
                                    <Input
                                        value={this.state.confirmPassword}
                                        onChange={this.handleInputChange}
                                        name="confirmPassword"
                                        placeholder="Confirm Password"
                                    />
                                    <FormBtn
                                        disabled={!(this.state.newEmail && this.state.newPassword && this.state.confirmPassword)}
                                        onClick={this.handleNewSubmit}
                                        >
                                        Sign up for a new account!
                                    </FormBtn>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2"></div>
                    <div className="col-lg-5 loginRow">
                        <div className="card">
                            <div className="card-header">
                                Existing User
                            </div>
                            <div className="card-body">
                                <form>
                                    Email address
                                    <Input 
                                        value={this.state.existingEmail}
                                        onChange={this.handleInputChange}
                                        name="existingEmail"
                                        placeholder="email@email.com"
                                    />
                                    Password
                                    <Input
                                        value={this.state.existingPassword}
                                        onChange={this.handleInputChange}
                                        name="existingPassword"
                                        placeholder="Password"
                                    />
                                    <CheckBox
                                        value={this.state.rememberMe}
                                        onChange={this.checkBox}
                                        name="rememberMe"
                                        label="Remember Me"
                                    />
                                    <FormBtn
                                        disabled={!(this.state.existingEmail && this.state.existingPassword)}
                                        onClick={this.handleExistingSubmit}
                                        >
                                        Log-in
                                    </FormBtn>
                                </form>
                            </div>
                        </div>        
                    </div>
                </Row>
            </Container>
            <div className="parallax" id="paraOne"></div>
            <Container>
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
            </Container>
            <div className="parallax" id="paraTwo"></div>
        </div>
        )
    }
}

export default Index;