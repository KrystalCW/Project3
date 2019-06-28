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
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec libero tellus. Aliquam id laoreet nulla. Suspendisse potenti. Sed auctor arcu pretium, posuere dolor vitae, malesuada augue. Sed vehicula placerat gravida. Sed sagittis erat non orci rutrum scelerisque. Quisque posuere maximus neque. Praesent urna nulla, volutpat ac magna aliquet, ornare ultricies turpis. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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