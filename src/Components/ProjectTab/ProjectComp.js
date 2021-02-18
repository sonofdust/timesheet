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
  { project_id: 100, client: "MicroSoft", project_manager: "Rober Fin", const_eng: "Lacey Larsen", billing: "Mike Bloomburg", ap_contracts: "Frank Oz" },
  { project_id: 100, client: "MicroSoft", project_manager: "Rober Fin", const_eng: "Lacey Larsen", billing: "Mike Bloomburg", ap_contracts: "Frank Oz" },
  { project_id: 100, client: "MicroSoft", project_manager: "Rober Fin", const_eng: "Lacey Larsen", billing: "Mike Bloomburg", ap_contracts: "Frank Oz" },
  { project_id: 100, client: "MicroSoft", project_manager: "Rober Fin", const_eng: "Lacey Larsen", billing: "Mike Bloomburg", ap_contracts: "Frank Oz" }
];

export default function ProjectComp() {
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
                  {/* <TableCell>Project/Client</TableCell> */}
                  <TableCell align="left">Project/Client</TableCell>
                  <TableCell align="left">Project Manager/Cost Eng</TableCell>
                  <TableCell align="left">Billing/AP COntracts</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.project_id}>
                    <TableCell component="th" scope="row" align="left">
                      {`${row.project_id}`}<br />{`${row.client}`}
                    </TableCell>
                    <TableCell align="left">{`${row.project_manager}`}<br />{`${row.const_eng}`}</TableCell>
                    <TableCell align="left">{`${row.billing}`}<br />{`${row.ap_contracts}`}</TableCell>
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


