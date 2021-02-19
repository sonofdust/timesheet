import './Job_Tasks.css'
import React, { Component } from "react";
import TaskSelect from "../Common/itemSelect";

const JobTaskData = {
    "1A": ["A001", "A002", "A003", "A004", "A005"],
    "2B": ["B001", "B002", "B003", "B004", "B005"],
    "3C": ["C001", "C002", "C003", "C004", "C005"],
    // "4D": ["D001", "D002", "D003", "D004", "D005"],
    "5E": ["E001", "E002", "E003", "E004", "E005"]
}
const keys = Object.keys(JobTaskData);

class JobTask extends Component {
    render() {
        return (
            <div className="container">
                {keys.map(e =>
                    <div className="container-row">
                        <JobSelect items={keys} title={`Job ID`} label_id={e} /><TaskSelect items={JobTaskData[e]} title={`Task ID`} label_id={e} />
                    </div>
                )}
            </div>
        )
    }
}



export default JobTask;