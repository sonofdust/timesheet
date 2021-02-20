// import React from 'react';
// import Box from '@material-ui/core/Box';

// export default function Inline() {
//   return (
//     <div style={{ width: '100%' }}  border = {1} p={1} m={1}>
//       <Box component="div" display="inline" border={1} bgcolor="background.defalut">
//         inline
//       </Box>
//       <Box component="div" display="inline" border={1} bgcolor="background.default">
//         inline
//       </Box>
//     </div>
//   );
// }

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
// }));

// export default function CenteredGrid() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Grid container spacing={1}>
//         <Grid item xs={3}>
//           <Paper className={classes.paper}>xs=1</Paper>
//         </Grid>
//         <Grid item xs={3}>
//           <Paper className={classes.paper}>xs=6</Paper>
//         </Grid>
//         <Grid item xs={3}>
//           <Paper className={classes.paper}>xs=6</Paper>
//         </Grid>
//         <Grid item xs={3}>
//           <Paper className={classes.paper}>xs=3</Paper>
//         </Grid>
//         <Grid item xs={3}>
//           <Paper className={classes.paper}>xs=3</Paper>
//         </Grid>
//         <Grid item xs={3}>
//           <Paper className={classes.paper}>xs=3</Paper>
//         </Grid>
//         <Grid item xs={3}>
//           <Paper className={classes.paper}>xs=3</Paper>
//         </Grid>
//       </Grid>
//     </div>
//   );
// }

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { JobTaskList, AppData } from "../../AppData";
import ItemSelect from "../Common/itemSelect";
import { v4 } from "uuid";

// const useStyles = makeStyles({
//     table: {
//         minWidth: 650
//     }
// })

const DAY = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const header = ["Job ID", "Task ID", "", ...DAY];

const reg = (e) => (
  <TableRow key={v4}>
    <TableCell align="left">{e.jobName}</TableCell>
    <TableCell align="left">{e.taskName}</TableCell>
    <TableCell align="left">REG</TableCell>
    {e.time.reg.map((t, i) => (
      <TableCell align="left">{t}</TableCell>
    ))}
  </TableRow>
);

const ot = (e) => (
  <TableRow key={v4}>
    <TableCell align="left"></TableCell>
    <TableCell align="left"></TableCell>
    {<TableCell align="left">OT</TableCell>}
    {e.time.ot.map((t, i) => (
      <TableCell align="left">{t}</TableCell>
    ))}
  </TableRow>
);

export default function MyTable() {
  // const classes = useStyles();
  return (
    <div className="container">
      {/* <pre>{JSON.stringify(AppData.taskDetails[0])}</pre> */}
      <div className="container-row">
        {/* <JobTasksComp /> */}
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                {header.map((e, i) => (
                  <TableCell align="left">{e}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {AppData.taskDetails.map(
                (e) => (
                  <TableRow key={v4}>
                    <TableCell align="left">{e.jobName}</TableCell>
                    <TableCell align="left">{e.taskName}</TableCell>
                    <TableCell align="left">
                      REG
                      <br />
                      OT
                    </TableCell>
                    {e.time.reg.map((t, i) => (
                      <TableCell align="left">
                        {t}
                        <br />
                        {e.time.ot[i]}
                      </TableCell>
                    ))}
                  </TableRow>
                )

                //                  reg(e)
                // <TableRow key={v4}>
                //                                     <TableCell align="left"></TableCell>
                //                                     <TableCell align="left"></TableCell>
                //                                     {<TableCell align="left">{`OT`}</TableCell>}
                //                                     {e.time.ot.map((t, i) => (<TableCell align="left">{t}</TableCell>))}
                // </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
