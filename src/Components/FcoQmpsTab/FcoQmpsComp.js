
import React, { Component } from "react";
import FcoNumberSelect from "./FcoNumberSelect";
import OpmsCodeSelect from "./OpmsCodeSelect";
import WorkSiteSelect from "./WorkSiteSelect";

class FcoQmpComps extends Component {
    styles = {
        resize: "none"
    }
    render() {
        return (
            <div className="container">
                <div className="container-row">
                    <FcoNumberSelect /><OpmsCodeSelect /><WorkSiteSelect />
                </div>
                <div className="container-row">
                    <FcoNumberSelect /><OpmsCodeSelect /><WorkSiteSelect />
                </div>
                <div className="container-row">
                    <FcoNumberSelect /><OpmsCodeSelect /><WorkSiteSelect />
                </div>
                <div className="container-row">
                    <FcoNumberSelect /><OpmsCodeSelect /><WorkSiteSelect />
                </div>
            </div>
        );
    }
}



export default FcoQmpComps;