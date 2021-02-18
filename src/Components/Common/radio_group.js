import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { useContainerProps } from '@material-ui/data-grid';



const RadioButtonsGroup = (props) => {
  const [value, setValue] = React.useState('Hours');

  const handleChange = (event) => {
    props.screen(event.target.value);
    setValue(event.target.value);
  };


  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Time Sheet Navigations</FormLabel>
      <RadioGroup aria-label="screen" name="screen1" value={value} onChange={handleChange} row>
        <FormControlLabel value="Hours" control={<Radio />} label="Hours" />
        <FormControlLabel value="FCOQPMS" control={<Radio />} label="FCO/QPMS" />
        <FormControlLabel value="ClientData" control={<Radio />} label="Client Data" />
        <FormControlLabel value="Comments" control={<Radio />} label="Comments" />
        <FormControlLabel value="TSCorr" control={<Radio />} label="T/S Corr" />
        <FormControlLabel value="Project" control={<Radio />} label="Project" />
        <FormControlLabel value="TaskInfo" control={<Radio />} label="Task Info" />
        {/* <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" /> */}
      </RadioGroup>
    </FormControl>
  );
}
export default RadioButtonsGroup;
