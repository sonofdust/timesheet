import React, { Component } from "react";

class CommentsComp extends Component {
    styles = {
        resize: "none"
    }
    render() {
        return (
            <table id="simple-board">
                <tbody>
                    <tr id="row0">
                        <td><textarea>Test</textarea></td>
                    </tr>
                    <tr id="row1">
                        <td><textarea>Test</textarea></td>
                    </tr>
                    <tr id="row0">
                        <td><textarea>Test</textarea></td>
                    </tr>
                    <tr id="row1">
                        <td><textarea>Test</textarea></td>
                    </tr>
                </tbody>
            </table>
        );
    }
}



export default CommentsComp;