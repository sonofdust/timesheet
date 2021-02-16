
import './JobTasks.css'
import React, { Component } from "react";
import JobSelect from "../TabsComponents/FcoQpsTab/JobSelect";
import TaskSelect from "../TabsComponents/FcoQpsTab/TaskSelect";

class JobTask extends Component {
    styles = {
        resize: "none"
    }
    render() {
    //     styles = { 
    
    
    //     radius: "10px",
    //     border: "1px solid red", 
    //     top: "45px"
    // }

        return (
            <div className="toppad border">
                <table id="simple-board">
                    <thead>
                        <tr>
                            <th>Job#</th>
                            <th>Task</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr id="row0">
                            <td id="cell0-0"><JobSelect /></td>
                            <td id="cell0-0"><TaskSelect /></td>
                        </tr>
                        <tr id="row1">
                            <td id="cell0-0"></td>
                            <td id="cell0-0"></td>
                        </tr>

                        <tr id="row0">
                            <td id="cell0-0"><JobSelect /></td>
                            <td id="cell0-0"><TaskSelect /></td>
                        </tr>
                        <tr id="row1">
                            <td id="cell0-0"></td>
                            <td id="cell0-0"></td>
                        </tr>
                        <tr id="row0">
                            <td id="cell0-0"><JobSelect /></td>
                            <td id="cell0-0"><TaskSelect /></td>
                        </tr>
                        <tr id="row1">
                            <td id="cell0-0"></td>
                            <td id="cell0-0"></td>
                        </tr>
                        <tr id="row0">
                            <td id="cell0-0"><JobSelect /></td>
                            <td id="cell0-0"><TaskSelect /></td>
                        </tr>
                        <tr id="row1">
                            <td id="cell0-0"></td>
                            <td id="cell0-0"></td>
                        </tr>
                    </tbody>
                    <tfoot><tr>
                        <td colspan="2"><textarea style={this.styles} >Enter Text</textarea></td>
                    </tr>
                    </tfoot>
                </table>
            </div>
        );
    }
}



export default JobTask;