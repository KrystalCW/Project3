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
                <div class="modal fade bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-sm" role="document">
                        <div class="modal-content">
                            <img alt="" src={logo} />
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Index;