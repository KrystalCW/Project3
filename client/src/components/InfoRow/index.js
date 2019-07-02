import React, { Fragment, Component } from "react";
import "./style.css";

class Index extends Component {
    render() {
        return (
            <Fragment>
                <div className="col-lg" id="colRow">
                    <div className="card border-info mb-3" id="iconRow">
                        <div className="card-body text-info">
                            <h1 className="card-title">Nature is Fierce</h1>
                            <div className="row">
                                <div className="col-lg-3"></div>
                                <div className="col-lg-2">
                                    <i className="fas fa-fire fa-7x" id="iconFire"></i>
                                </div>
                                <div className="col-lg-2">
                                    <i className="fas fa-water fa-8x" id="iconWater"></i>
                                </div>
                                <div className="col-lg-2">
                                    <i className="fas fa-poo-storm fa-7x" id="iconStorm"></i>
                                </div>
                                <div className="col-lg-3"></div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-lg-2"></div>
                                <div className="col-lg-8">
                                    <p id="infoFont">
                                        It may be cliche, but many people don't know what they have until it's gone. When a disaster hits and you're stuck trying to catalogue your entire life, the insurance companies ultimately win.
                                        With Mochi, you can have peace of mind knowing your items are catalogued before an emergency, meaning you can get back to what's important: rebuilding your life.
                                    </p>
                                </div>
                                <div className="col-lg-2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Index;