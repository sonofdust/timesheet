
import React, { Component } from "react";

class ApproverComp extends Component {
    styles = {
        resize: "none"
    }
    render() {
        return (
            <div className="border">
                <table>
                    <tbody>
                        <tr id="row0">
                            <td id="cell0-0">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Message to Approver</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr id="row0">
                                            <td id="cell0-0"><textarea style={this.styles} >Enter Text</textarea></td>
                                            <td id="cell0-0">
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <td>W/E Date</td>
                                                            <td><input type="text" id="PID" name="PayRollID" size="8" /></td>
                                                            <td>Total:</td>
                                                            <td><input type="text" id="PID" name="PayRollID" size="8" /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Date Signed:</td>
                                                            <td><input type="text" id="PID" name="PayRollID" size="8" /></td>
                                                            <td><button>Copy T/S</button></td>
                                                            <td><button>Print T/S</button></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Approved:</td>
                                                            <td><input type="text" id="PID" name="PayRollID" size="8" /></td>
                                                            <td><button>Sign</button></td>
                                                            <td><button>Approvers</button></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        );
    }
}

export default ApproverComp;