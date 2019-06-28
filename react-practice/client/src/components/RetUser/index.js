import React, { Fragment, Component } from "react";
import "./style.css";

class Index extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }
    render(){
        return(
            <Fragment>
                   <div className="col-lg-5">
                    <div className="card" id="retUser">
                        <div className="card-header">
                            Existing User
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                                </div>
                                <div className="form-group form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
                                </div>
                                <a href="./items" class="btn btn-info" role="button">Submit </a>
                                <div id="buttonDiv"></div>
                            </form>
                        </div>
                    </div>        
                </div>
            </Fragment>
        );
    }
}

export default Index;