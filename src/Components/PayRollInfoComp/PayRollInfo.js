
import React, { Component } from "react";
import { Button, TextField, TextareaAutosize } from '@material-ui/core';
import { spacing } from '@material-ui/system';
class PayRollInfo extends Component {
    // styles = {
    //     resize: "none"
    // }
    render() {
        return (
            <div className="container">
                <div className="container-row">
                    <TextField
                    p={2}
                        id="filled-secondary"
                        label="Payroll ID"
                        variant="filled"
                        color="secondary"
                    />
                    <TextField
                    p={2}
                    id="filled-secondary"
                        label="Payroll Department"
                        variant="filled"
                        color="secondary"
                    />
                </div>
                <div className="container-row">
                    <TextField
                    p={2}
                    id="filled-secondary"
                        label="PTO Hours"
                        variant="filled"
                        color="secondary"
                    />
                    <TextField
                    p={2}
                    id="filled-secondary"
                        label="Phone"
                        variant="filled"
                        color="secondary"
                    />
                </div>
                <div className="container-row">
                    <TextField
                        id="filled-secondary"
                        label="Work Location"
                        variant="filled"
                        color="secondary"
                    />
                    <Button color="defalut" size="small" className="pad">Change</Button>
                </div>
                <div className="container-row">
                    <TextareaAutosize aria-label="minimum height" rowsMin={3} placeholder="Minimum 3 rows" size="small" className="pad" />
                    <Button color="defalut" size="small" className="pad">View List</Button>
                </div>
            </div>
        )
    }
}

export default PayRollInfo;