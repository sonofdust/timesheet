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


const useStyles = makeStyles({
    table: {
        minWidth: 650
    }
})


export default function CommentsComp() {
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
                                <TableCell align="left">Comments</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Array.from({ length: 4 }, (e, i) => i + 1).map((e, i) =>
                            (
                                <TableRow key={v4}>
                                    <TableCell align="left">Job #</TableCell>
                                    <TableCell align="left">Task #</TableCell>
                                    <TableCell align="left"><textarea className="width">Test</textarea></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}
