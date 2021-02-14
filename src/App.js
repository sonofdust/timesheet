import './App.css';
import React, { Component } from "react";
import NewComp from './Components/NewComp';
import MyTabs from './Components/TabsComponents/Tabs';
import JobTask from './Components/JobTasks';
import PayRollInfo from './Components/PayRollInfo';
import ApproverComp from './Components/ApproverComp';

class App extends Component {
  styles = { fontStyle: "bold", color: "teal" }

  render() {
    return (
      <div className="App">
        <h1 style={this.styles}>Welcome</h1>
        <NewComp />
        <table align="center">
          <tbody>
            <tr><td><JobTask /></td><td><MyTabs /></td></tr>
            <tr><td><PayRollInfo /></td><td><ApproverComp /></td></tr>
          </tbody>
        </table>
      </div>
    )
  }
}
export default App;
