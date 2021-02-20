import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { JobTaskList, AppData } from '../../AppData';
import ItemSelect from '../Common/itemSelect';
import { v4 } from 'uuid';

const useStyles = makeStyles({
    table: {
        minWidth: 650
    }
})

const DAY = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const header = ["Job ID", "Task ID", "", ...DAY];

export default function MyTable() {
    const classes = useStyles();
    return (
        <div className="container">
            {/* <pre>{JSON.stringify(AppData.taskDetails[0])}</pre> */}
            <div className="container-row">

                {/* <JobTasksComp /> */}
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                {header.map((e, i) => (<TableCell align="left">{e}</TableCell>))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {AppData.taskDetails.map((e) =>
                            (
                                <TableRow key={v4}>
                                    <TableCell align="left">{e.jobName}</TableCell>
                                    <TableCell align="left">{e.taskName}</TableCell>
                                    <TableCell align="left">REG<br/>OT</TableCell>
                                    {e.time.reg.map((t, i) => (<TableCell align="left">{t}<br/>{e.time.ot[i]}</TableCell>))}
                                </TableRow>

                                // <TableRow key={v4}>
                                //                                     <TableCell align="left"></TableCell>
                                //                                     <TableCell align="left"></TableCell>
                                //                                     {<TableCell align="left">{`OT`}</TableCell>}
                                //                                     {e.time.ot.map((t, i) => (<TableCell align="left">{t}</TableCell>))}
                                // </TableRow>

                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}
