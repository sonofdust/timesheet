
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

            <table id="simple-board">
                <thead>
                    <tr>
                        <th>FCO Number</th>
                        <th>QPMS Code</th>
                        <th>Work Site</th>
                    </tr>
                </thead>

                <tbody>
                    <tr id="row0">
                        <td id="cell0-0"><FcoNumberSelect /></td>
                        <td id="cell0-0"><OpmsCodeSelect /></td>
                        <td id="cell0-0"><WorkSiteSelect /></td>
                    </tr>
                    <tr id="row1">
                        <td id="cell0-0"></td>
                        <td id="cell0-0"></td>
                    </tr>

                    <tr id="row0">
                        <td id="cell0-0"><FcoNumberSelect /></td>
                        <td id="cell0-0"><OpmsCodeSelect /></td>
                        <td id="cell0-0"><WorkSiteSelect /></td>
                    </tr>
                    <tr id="row1">
                        <td id="cell0-0"></td>
                        <td id="cell0-0"></td>
                    </tr>
                    <tr id="row0">
                        <td id="cell0-0"><FcoNumberSelect /></td>
                        <td id="cell0-0"><OpmsCodeSelect /></td>
                        <td id="cell0-0"><WorkSiteSelect /></td>
                    </tr>
                    <tr id="row1">
                        <td id="cell0-0"></td>
                        <td id="cell0-0"></td>
                    </tr>
                    <tr id="row0">
                        <td id="cell0-0"><FcoNumberSelect /></td>
                        <td id="cell0-0"><OpmsCodeSelect /></td>
                        <td id="cell0-0"><WorkSiteSelect /></td>
                    </tr>
                    <tr id="row1">
                        <td id="cell0-0"></td>
                        <td id="cell0-0"></td>
                    </tr>
                </tbody>
            </table>
        );
    }
}



export default FcoQmpComps;