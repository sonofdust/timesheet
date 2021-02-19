import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { v4 } from 'uuid';
import ItemSelect from '../Common/itemSelect';
import { JobTaskList } from '../../AppData';


const useStyles = makeStyles({
    table: {
        minWidth: 650
    }
})


export default function FcoQmpComps() {
    const classes = useStyles();
    return (
        <div className="container">
            <div className="container-row">
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Job Id</TableCell>
                                <TableCell align="left">Task Id</TableCell>
                                <TableCell align="left">FCO Number</TableCell>
                                <TableCell align="left">OPMS Code</TableCell>
                                <TableCell align="left">Work Site</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Array.from({ length: 4 }, (e, i) => i + 1).map((e, i) =>
                            (
                                <TableRow key={v4}>
                                    <TableCell align="left">Job #</TableCell>
                                    <TableCell align="left">Task #</TableCell>
                                    <TableCell align="left"><ItemSelect items={Object.keys(JobTaskList)} title={``} label_id={e} /></TableCell>
                                    <TableCell align="left"><ItemSelect items={Object.keys(JobTaskList)} title={``} label_id={e} /></TableCell>
                                    <TableCell align="left"><ItemSelect items={Object.keys(JobTaskList)} title={``} label_id={e} /></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}
// export default FcoQmpComps;
















// import React, { Component } from "react";
// import FcoNumberSelect from "./FcoNumberSelect";
// import OpmsCodeSelect from "./OpmsCodeSelect";
// import WorkSiteSelect from "./WorkSiteSelect";

// class FcoQmpComps extends Component {
//     styles = {
//         resize: "none"
//     }
//     render() {
//         return (
//             <div className="container">
//                 <div className="container-row">
//                     <FcoNumberSelect /><OpmsCodeSelect /><WorkSiteSelect />
//                 </div>
//                 <div className="container-row">
//                     <FcoNumberSelect /><OpmsCodeSelect /><WorkSiteSelect />
//                 </div>
//                 <div className="container-row">
//                     <FcoNumberSelect /><OpmsCodeSelect /><WorkSiteSelect />
//                 </div>
//                 <div className="container-row">
//                     <FcoNumberSelect /><OpmsCodeSelect /><WorkSiteSelect />
//                 </div>
//             </div>
//         );
//     }
// }



// export default FcoQmpComps;