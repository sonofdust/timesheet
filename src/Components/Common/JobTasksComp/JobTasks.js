
import './JobTasks.css'
import React, { Component } from "react";
import JobSelect from "./JobSelect";
import TaskSelect from "./TaskSelect";

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
            <div className="container">
                <div className="container-row">
                    <JobSelect /><TaskSelect />
                </div>
                <div className="container-row">
                    <JobSelect /><TaskSelect />
                </div>
                <div className="container-row">
                    <JobSelect /><TaskSelect />
                </div>
                <div className="container-row">
                    <JobSelect /><TaskSelect />
                </div>
            </div>
        );
    }
}



export default JobTask;