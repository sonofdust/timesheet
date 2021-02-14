
import React, { Component } from "react";

class TaskSelect extends Component {
    render() {
        return (
            <select name="job" id="job">
                <option value="0000">React</option>
                <option value="1000">JAVA</option>
                <option value="0100">AWS</option>
                <option value="0010">Node</option>
            </select>
        );
    }
}



export default TaskSelect;