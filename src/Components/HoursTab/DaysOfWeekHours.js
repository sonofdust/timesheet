import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
//import { JobTaskList } from '../../AppData';
import { JobTaskList } from '../../AppData';

import ItemSelect from '../Common/itemSelect';



const useStyles = makeStyles({
    table: {
        minWidth: 650
    }
})

const hours =
{
    SUN: { JOB1: { REG: 8, OT: 2 }, JOB2: { REG: 8, OT: 2 }, JOB3: { REG: 8, OT: 2 }, JOB4: { REG: 8, OT: 2 } },
    MON: { JOB1: { REG: 8, OT: 2 }, JOB2: { REG: 8, OT: 2 }, JOB3: { REG: 8, OT: 2 }, JOB4: { REG: 8, OT: 2 } },
    TUE: { JOB1: { REG: 8, OT: 2 }, JOB2: { REG: 8, OT: 2 }, JOB3: { REG: 8, OT: 2 }, JOB4: { REG: 8, OT: 2 } },
    WED: { JOB1: { REG: 8, OT: 2 }, JOB2: { REG: 8, OT: 2 }, JOB3: { REG: 8, OT: 2 }, JOB4: { REG: 8, OT: 2 } },
    THU: { JOB1: { REG: 8, OT: 2 }, JOB2: { REG: 8, OT: 2 }, JOB3: { REG: 8, OT: 2 }, JOB4: { REG: 8, OT: 2 } },
    FRI: { JOB1: { REG: 8, OT: 2 }, JOB2: { REG: 8, OT: 2 }, JOB3: { REG: 8, OT: 2 }, JOB4: { REG: 8, OT: 2 } },
    SAT: { JOB1: { REG: 8, OT: 2 }, JOB2: { REG: 8, OT: 2 }, JOB3: { REG: 8, OT: 2 }, JOB4: { REG: 8, OT: 2 } }

};
const header = ["Job ID", "Task ID", "", ...Object.keys(hours)];

export default function MyTable() {
    const classes = useStyles();
    return (
        <div className="container">
            <pre>{JSON.stringify(Object.keys(JobTaskList))}</pre>
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
                            {Object.keys(hours.FRI).map((e, i) =>
                            (
                                <TableRow key={`hours-${i}`}>
                                    <TableCell align="left"><ItemSelect items={Object.keys(JobTaskList)} title={``} label_id={e} /></TableCell>
                                    <TableCell align="left"><ItemSelect items={Object.keys(JobTaskList)} title={``} label_id={e} /></TableCell>
                                    {<TableCell align="left">{`REG`}<br />{`OT`}</TableCell>}
                                    {Object.keys(hours).map((x) => (<TableCell align="left">{`${hours[x][e].REG}`}<br />{`${hours[x][e].OT}`}</TableCell>))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}
