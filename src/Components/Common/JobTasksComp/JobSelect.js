import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));

export default function JobSelect() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-controlled-open-select-label">Job #</InputLabel>
                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={age}
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={"0000"}>0000</MenuItem>
                    <MenuItem value={"1000"}>1000</MenuItem>
                    <MenuItem value={"2000"}>2000</MenuItem>
                    <MenuItem value={"3000"}>3000</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}


// export default JobSelect;



// import React, { Component } from "react";

// class JobSelect extends Component {
//     render() {
//         return (
//             <select name="job" id="job">
//                 <option value="0000">0000</option>
//                 <option value="1000">1000</option>
//                 <option value="0100">0100</option>
//                 <option value="0010">0010</option>
//             </select>
//         );
//     }
// }



// export default JobSelect;