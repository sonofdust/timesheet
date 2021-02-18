
import React, { Component } from "react";
import FcoNumberSelect from "./FcoNumberSelect";
import OpmsCodeSelect from "./OpmsCodeSelect";
import WorkSiteSelect from "./WorkSiteSelect";
import JobTasksComp from '../Job_TasksComp/Job_Tasks';

class FcoQmpComps extends Component {
    styles = {
        resize: "none"
    }
    render() {
        return (
            <div className="container-row">
                <JobTasksComp />


                <div className="container">
                <div className="container-row">
                    <FcoNumberSelect /><OpmsCodeSelect /><WorkSiteSelect />
                </div>
                <div className="container-row">
                    <FcoNumberSelect /><OpmsCodeSelect /><WorkSiteSelect />
                </div>
                <div className="container-row">
                    <FcoNumberSelect /><OpmsCodeSelect /><WorkSiteSelect />
                </div>
                <div className="container-row">
                    <FcoNumberSelect /><OpmsCodeSelect /><WorkSiteSelect />
                </div>
            </div>


</div>

        );
    }
}



export default FcoQmpComps;