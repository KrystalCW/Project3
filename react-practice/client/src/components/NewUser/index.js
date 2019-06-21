import React, { Fragment, Component } from "react";
import "./style.css";

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
        };
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
                                            <label for="exampleInputEmail1">Email address</label>
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleInputPassword1">Password</label>
                                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                        </div>
                                        <div className="form-group">
                                                <label for="exampleInputPassword1"> Confirm Password</label>
                                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                        </div>
                                        <div className="form-group form-check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                            <label className="form-check-label" for="exampleCheck1">I Accept the Terms of Service</label>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <hr />
                            <button type="submit" className="btn btn-primary" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1" id="signUpBtn">Sign Up!</button>
                        </div>
                    </div> 
                </div>
            </Fragment>

        );
    }
}

export default Index;