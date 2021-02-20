import "./App.css";
import React, { useState } from "react";
//import JobTask from './Components/JobTasksComp/JobTasks';
import ApproverComp from "./Components/ApproverComp";
import RadioGroup from "./Components/Common/radio_group";
import NewComp from "./Components/NewComp";
import WorkHours from "./Components/HoursTab/DaysOfWeekHours";
import FcoQpmsComp from "./Components/FcoQmpsTab/FcoQmpsComp";
//import CommentsComp from './Components/Common/TabsComponents/CommentsTab/CommentsComp';
import CommentsComp from "./Components/CommentsTab/CommentsComp";
import ProjectComp from "./Components/ProjectTab/ProjectComp";
import TaskInfoComp from "./Components/TaskInfoTab/TaskInfoComp";

// Move this to another folder in which you keep track of enums or constants.
const Tabs = {
  Hours: "Hours",
  FCOQPMS: "FCOQPMS",
  ClientData: "ClientData",
  Comments: "Comments",
  TSCorr: "TSCorr",
  Project: "Project",
  TaskInfo: "TaskInfo",
};
function App() {
  const [display, setDisplay] = useState("Hours");

  const getTab = () => {
    switch (display) {
      case Tabs.Hours:
        return <WorkHours />;
      case Tabs.FCOQPMS:
        return <FcoQpmsComp />;
      case Tabs.ClientData:
        return <label>WAITING FOR REQUIREMENTS.</label>;
      case Tabs.Comments:
        return <CommentsComp />;
      case Tabs.TSCorr:
        return <label>WAITING FOR REQUIREMENTS.</label>;
      case Tabs.Project:
        return <ProjectComp />;
      case Tabs.TaskInfo:
        return <TaskInfoComp />;
      default:
        return <WorkHours />;
    }
  };

  return (
    <div className="App">
      <NewComp />
      <div className="container">
        <RadioGroup screen={(tag) => setDisplay(tag)} />
        {getTab()}
      </div>
    </div>
  );
}

export default App;
