import React, { Component } from "react";
import './CommentsComp';
import JobTasksComp from '../Job_TasksComp/Job_Tasks';

class CommentsComp extends Component {

    render() {
        return (
            <div className="container">
                <div className="container-row">
                    <JobTasksComp />

                    {/* <div className="txtcontainer">
                        <div className="border"><textarea className="width">Test</textarea></div>
                        <div className="border"><textarea className="width">Test</textarea></div>
                        <div className="border"><textarea className="width">Test</textarea></div>
                        <div className="border"><textarea className="width">Test</textarea></div>
                    </div> */}
                </div>
            </div>
        )
    }
}



export default CommentsComp;