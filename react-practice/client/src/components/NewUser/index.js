import React, { Fragment, Component } from "react";
import "./style.css";
import axios from 'axios';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    
    signup = e => {
        e.preventDefault()
        const body = {
            'email': this.email.value,
            'name': this.name.value,
            'password': this.password.value
        }

        if (this.email.value && 
            this.name.value && 
            this.password.value &&
            this.password.value === this.confirm_password.value && 
            this.toc.value) {
            axios.post('http://localhost:3001/register', body)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        } else {
            //alert("Make sure you've filled out all fields, your password matches, and you've agreed to the Terms & Conditions")
        }
    }

    render() {
        return(
            <Fragment>
                <div className="col-lg-5">
                    <div className="card" id="newUser">
                        <div className="card-header">
                            New User
                        </div>
                        <div className="card-body">
                            <div className="hideText">New users sign up here</div>
                            <div className="collapse multi-collapse" id="multiCollapseExample1">
                                <div className="card card-body">
                                    <form>
                                        <div className="form-group">
                                            <label for="email">Email</label>
                                            <input ref={node => this.email = node} type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="janedoe1990@aol.com" />
                                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                        </div>
                                        <div className="form-group">
                                            <label for="passwornamed">Name</label>
                                            <input ref={node => this.name = node} type="text" name="name" className="form-control" id="name" placeholder="Jane Doe" />
                                        </div>
                                        <div className="form-group">
                                            <label for="password">Password</label>
                                            <input ref={node => this.password = node} type="password" name="password" className="form-control" id="password" placeholder="Password" />
                                        </div>
                                        <div className="form-group">
                                                <label for="confirm_password">Confirm Password</label>
                                                <input ref={node => this.confirm_password = node} type="password" name="confirm_password" id="confirm_password" className="form-control"  placeholder="Password" />
                                        </div>
                                        <div className="form-group form-check">
                                            <input ref={node => this.toc = node} type="checkbox" className="form-check-input" id="toc" />
                                            <label className="form-check-label" name="toc" id="toc" for="toc">I Accept the Terms of Service</label>
                                        </div>
                                        <a href="./items" class="btn btn-info" role="button">Submit</a>
                                    </form>
                                </div>
                            </div>
                            <hr />
                            <button onClick={(e) => this.signup(e)} type="submit" className="btn btn-primary" data-toggle="collapse" href="#multiCollapseExample1" /* role="button" */ aria-expanded="false" aria-controls="multiCollapseExample1" id="signUpBtn">
                                Sign Up!
                            </button>
                        </div>git 
                    </div> 
                </div>
            </Fragment>

        );
    }
}

export default Index;