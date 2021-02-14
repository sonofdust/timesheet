
import React, { Component } from "react";

class JobSelect extends Component {
    render() {
        return (
            <select name="job" id="job">
                <option value="0000">0000</option>
                <option value="1000">1000</option>
                <option value="0100">0100</option>
                <option value="0010">0010</option>
            </select>
        );
    }
}



export default JobSelect;