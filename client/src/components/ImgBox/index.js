import React, { Fragment, Component} from "react";
import logo from "../../images/mochiLogo.png";

class Index extends Component {

    constructor(props){
        super(props);
        this.stare = {
            items: []
        };
    }


    render() {
        return(
            <Fragment>
                <div className="modal fade bd-example-modal-sm" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-sm" role="document">
                        <div className="modal-content">
                            <img alt="" src={logo} />
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Index;