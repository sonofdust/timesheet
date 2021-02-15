
import React, { Component } from "react";
import 'react-tabs/style/react-tabs.css';


class ProjectComp extends Component {
    render() {
        return (

            <table id="simple-board" align="center">
                <thead>
                    <tr>
                        <th>Project/Client</th>
                        <th>Proj Manager/Cost Eng.</th>
                        <th>Billing/AP Contracts</th>
                    </tr>
                </thead>
                <tbody>
                    <tr id="row0">
                        <td id="cell0-0">XXXXXXXXXXXXXX</td>
                        <td id="cell0-0">XXXXXXXXXXXXXX</td>
                        <td id="cell0-2">XXXXXXXXXXXXXX</td>
                    </tr>
                    <tr id="row0">
                        <td id="cell0-0">XXXXXXXXXXXXXX</td>
                        <td id="cell0-1">XXXXXXXXXXXXXX</td>
                        <td id="cell0-2">XXXXXXXXXXXXXX</td>
                    </tr>
                    <tr id="row0">
                        <td id="cell0-0">XXXXXXXXXXXXXX</td>
                        <td id="cell0-1">XXXXXXXXXXXXXX</td>
                        <td id="cell0-2">XXXXXXXXXXXXXX</td>
                    </tr>
                    <tr id="row0">
                        <td id="cell0-0">XXXXXXXXXXXXXX</td>
                        <td id="cell0-0">XXXXXXXXXXXXXX</td>
                        <td id="cell0-2">XXXXXXXXXXXXXX</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}



export default ProjectComp;