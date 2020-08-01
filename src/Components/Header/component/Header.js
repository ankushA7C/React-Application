import React from "react";
import "./style.css";
import { withRouter } from "react-router-dom";

const Header = (props) => {

    return (
        <div className="col-md-12">
            <div className="row margin-0">
                <div className="col-md-9">
                    <div className="locationTitle">Location</div>
                </div>
                <div className="col-md-3 pd-40">
                    <div className="addLocation" onClick={() => props.history.push("/addLocation")}>+Add Location</div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Header);