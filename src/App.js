import './App.css';
import React, { Component } from "react";
//import JobTask from './Components/JobTasksComp/JobTasks';
import PayRollInfo from './Components/PayRollInfoComp/PayRollInfo';
import ApproverComp from './Components/ApproverComp';
import RadioGroup from './Components/Common/radio_group';
//import NewComp from './Components/NewComp';
import WorkHours from './Components/HoursTab/DaysOfWeekHours';
import FcoQpmsComp from './Components/FcoQmpsTab/FcoQmpsComp';
//import CommentsComp from './Components/Common/TabsComponents/CommentsTab/CommentsComp';
import CommentsComp from './Components/CommentsTab/CommentsComp';
import ProjectComp from './Components/ProjectTab/ProjectComp';
import TaskInfoComp from './Components/TaskInfoTab/TaskInfoComp';

class App extends Component {
  // styles = { fontStyle: "bold", color: "teal" }
  constructor(props) {
    super(props);
    this.state = {
      display: "Hours"
    }
  }

  view = (tag) => this.setState(state => ({ display: tag }));
  getTab = () => {
    switch (this.state.display) {
      case "Hours":
        return (<WorkHours />);
      case "FCOQPMS":
        return (<FcoQpmsComp />);
      case "ClientData":
        return (<label>WAITING FOR REQUIREMENTS.</label>);
      case "Comments":
        return (<CommentsComp />);
      case "TSCorr":
        return (<label>WAITING FOR REQUIREMENTS.</label>);
      case "Project":
        return (<ProjectComp />);
      case "TaskInfo":
        return (<TaskInfoComp />);
      default:
        return (<WorkHours />);
    }
  }

  render() {

    console.log(this.state.display);
    return (
      <div className="App">
        <div className="container">
          <div><RadioGroup screen={this.view} /></div><div>{this.getTab()}</div>

          {/* <div className="container-row"><PayRollInfo /><ApproverComp /></div> */}
        </div>
      </div>
    )
  }
}
export default App;
