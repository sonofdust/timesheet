import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import JobTasksComp from '../Job_TasksComp/Job_Tasks';

const useStyles = makeStyles({
    table: {
        minWidth: 650
    }
})

const rows =
{
    SUN: { JOB1: { REG: 8, OT: 2 }, JOB2: { REG: 8, OT: 2 }, JOB3: { REG: 8, OT: 2 }, JOB4: { REG: 8, OT: 2 } },
    MON: { JOB1: { REG: 8, OT: 2 }, JOB2: { REG: 8, OT: 2 }, JOB3: { REG: 8, OT: 2 }, JOB4: { REG: 8, OT: 2 } },
    TUE: { JOB1: { REG: 8, OT: 2 }, JOB2: { REG: 8, OT: 2 }, JOB3: { REG: 8, OT: 2 }, JOB4: { REG: 8, OT: 2 } },
    WED: { JOB1: { REG: 8, OT: 2 }, JOB2: { REG: 8, OT: 2 }, JOB3: { REG: 8, OT: 2 }, JOB4: { REG: 8, OT: 2 } },
    THU: { JOB1: { REG: 8, OT: 2 }, JOB2: { REG: 8, OT: 2 }, JOB3: { REG: 8, OT: 2 }, JOB4: { REG: 8, OT: 2 } },
    FRI: { JOB1: { REG: 8, OT: 2 }, JOB2: { REG: 8, OT: 2 }, JOB3: { REG: 8, OT: 2 }, JOB4: { REG: 8, OT: 2 } },
    SAT: { JOB1: { REG: 8, OT: 2 }, JOB2: { REG: 8, OT: 2 }, JOB3: { REG: 8, OT: 2 }, JOB4: { REG: 8, OT: 2 } }

};

export default function MyTable() {
    const classes = useStyles();

    return (
        <div className="container">
            <div className="container-row">
                <JobTasksComp />
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left"></TableCell>
                                {Object.keys(rows).map((e,i) => (<TableCell align="left">{e}</TableCell>))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Object.keys(rows.FRI).map((e,i) =>
                            (
                                <TableRow key={`hours-${i}`}>
                                    {<TableCell align="left">{`REG`}<br />{`OT`}</TableCell>}
                                    {Object.keys(rows).map((x) => (<TableCell align="left">{`${rows[x][e].REG}`}<br />{`${rows[x][e].OT}`}</TableCell>))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}
