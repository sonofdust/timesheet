
import React, { Component } from "react";

class PayRollInfo extends Component {
    styles = {
        resize: "none"
    }
    render() {
        return (
            <table>
                <tbody>
                    <tr>
                        <td>Payroll ID</td>
                        <td>Dept</td>
                        <td>PTO Hrs.</td>
                    </tr>
                    <tr id="row0">
                        <td id="cell0-0"> <input type="text" id="PID" name="PayRollID" size="8" /></td>
                        <td id="cell0-0"> <input type="text" id="DEP" name="Department" size="8" /></td>
                        <td id="cell0-0"> <input type="text" id="lname" name="lname" size="8" /></td>
                    </tr>
                    <tr>
                        <td>Phone</td>
                        <td>Work Location</td>
                        <td></td>
                    </tr>
                    <tr id="row0">
                        <td id="cell0-0"> <input type="text" id="PID" name="PayRollID" size="8" /></td>
                        <td id="cell0-0"> <input type="text" id="DEP" name="Department" size="8" /></td>
                        <td id="cell0-0"> <button>Change</button></td>
                    </tr>
                    <tr id="row0">
                        <td id="cell0-0" colSpan='2'>  <span>Bob Cratshat Programmer Analyist 4</span> </td>
                        <td id="cell0-0"> <button>View List</button></td>
                    </tr>
                </tbody>
            </table>
        );
    }
}



export default PayRollInfo;