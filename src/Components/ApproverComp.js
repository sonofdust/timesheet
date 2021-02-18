
import React, { Component } from "react";
// import DatePickers from './C Common/date_picker';
import DatePickers from './Common/date_picker';
import { Button, TextField, TextareaAutosize } from '@material-ui/core';
class ApproverComp extends Component {
    // styles = {
    //     resize: "none"
    // }
    render() {
        return (
            <div className="container">

                <div className="container-row">
                    <TextareaAutosize aria-label="minimum height" rowsMin={8} placeholder="Minimum 8 rows" size="small" />
                    <div className="container">
                        <div className="container-row">
                        withStyles

                            <DatePickers />
                            <TextField
                                id="filled-secondary"
                                label="Total"
                                variant="filled"
                                color="secondary"
                            />
                        </div>
                        <div className="container-row">
                            <TextField
                                id="filled-secondary"
                                label="Date Signed"
                                variant="filled"
                                color="secondary"
                            />
                            <Button color="defalut" size="small" className="pad">Copy T/S</Button>
                            <Button color="defalut" size="small" className="pad">Pring T/S</Button>
                        </div>
                        <div className="container-row">
                            <TextField
                                id="filled-secondary"
                                label="Approved"
                                variant="filled"
                                color="secondary"
                            />
                            <Button color="defalut" size="small" className="pad">Sign</Button>
                            <Button color="defalut" size="small" className="pad">Approvals</Button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default ApproverComp;
