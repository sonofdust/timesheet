import React, { Component } from "react";
import './CommentsComp';
class CommentsComp extends Component {

    render() {
        return (
            <div className="txtcontainer">
                <div className="border"><textarea className="width">Test</textarea></div>
                <div className="border"><textarea className="width">Test</textarea></div>
                <div className="border"><textarea className="width">Test</textarea></div>
                <div className="border"><textarea className="width">Test</textarea></div>
            </div>
        );
    }
}



export default CommentsComp;