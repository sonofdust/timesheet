import './App.css';
import React, { Component } from "react";
import MyTabs from './Components/TabsComponents/Tabs';
import JobTask from './Components/JobTasksComp/JobTasks';
import PayRollInfo from './Components/PayRollInfoComp/PayRollInfo';
import ApproverComp from './Components/ApproverComp';

class App extends Component {
  styles = { fontStyle: "bold", color: "teal" }

  render() {
    return (
      <div className="App">
        {/* <h1 style={this.styles}>Welcome</h1>
        <NewComp /> */}
        <div className="container">
          <div className="container-row"><JobTask /><MyTabs /></div>
          <div className="container-row"><PayRollInfo /><ApproverComp /></div>
        </div>
      </div>
    )
  }
}
export default App;
