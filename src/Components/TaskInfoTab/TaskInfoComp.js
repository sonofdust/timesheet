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
    minWidth: 650,
  },
});

const rows = [
  { open_date: '16-FEB-2020', area: "Salt Lake", description: "Scoping Project" },
  { open_date: '16-FEB-2020', area: "Salt Lake", description: "Scoping Project" },
  { open_date: '16-FEB-2020', area: "Salt Lake", description: "Scoping Project" },
  { open_date: '16-FEB-2020', area: "Salt Lake", description: "Scoping Project" }
];

export default function TaskInfoComp() {
  const classes = useStyles();

  return (
    <div className="container">
      <div className="container-row">
        <JobTasksComp />
        <div className="txtcontainer">
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Date Opened</TableCell>
                  <TableCell align="left">Task/Area Description</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.project_id}>
                    <TableCell component="th" scope="row" align="left">
                      {`${row.open_date}`}
                    </TableCell>
                    <TableCell align="left">{`${row.area}`}<br />{`${row.description}`}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}
