import './Job_Tasks.css'
import React, { Component } from "react";
import JobSelect from "./JobSelect";
import TaskSelect from "./TaskSelect";

class JobTask extends Component {
    render() {
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
        )
    }
}



export default JobTask;