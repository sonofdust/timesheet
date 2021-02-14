
import React, { Component } from "react";

class WorkSiteSelect extends Component {
    render() {
        return (
            <select name="job" id="job">
                <option value="3000">3000</option>
                <option value="4000">4000</option>
                <option value="5100">5100</option>
                <option value="6010">6010</option>
            </select>
        );
    }
}

export default WorkSiteSelect;