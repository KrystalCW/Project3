import React, { Fragment, Component } from "react";
import "./style.css";

class Index extends Component {
    render(){
        return(
            <Fragment>
                <div className="col-lg" id="landingTitle">
                    <h1 id="welcome">Welcome <span id="name"></span></h1>
                </div>
            </Fragment>
        );
    }
}

export default Index;