import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
//import './ProjectTab/node_modules/react-tabs/style/react-tabs.css';
import MyTable from './HoursTab/DaysOfWeekHours';
import FcoQmpsComp from './FcoQpsTab/FcoQmpsComp';
import CommentsComp from './CommentsTab/CommentsComp';
import ProjectComp from './ProjectTab/ProjectComp';
import TaskInfoComp from './TaskInfoTab/TaskInfoComp';



class MyTabs extends Component {
    styles = { fontStyle: "italics", color: "purple" }
    render() {
        return (<div className="border"><Tabs defaultIndex={0} onSelect={index => console.log(index)}>
            <TabList>
                <Tab>Hours</Tab>
                <Tab>FCO/QPMS</Tab>
                <Tab>Client Data</Tab>
                <Tab>Comments</Tab>
                <Tab>T/S Corr.</Tab>
                <Tab>Project</Tab>
                <Tab>Task Info.</Tab>
            </TabList>
            <TabPanel><MyTable /></TabPanel>
            <TabPanel><FcoQmpsComp /></TabPanel>
            <TabPanel>text for 3</TabPanel>
            <TabPanel><CommentsComp /></TabPanel>
            <TabPanel>text for 5</TabPanel>
            <TabPanel><ProjectComp /></TabPanel>
            <TabPanel><TaskInfoComp /></TabPanel>
        </Tabs>
        </div>
        );
    }
}



export default MyTabs;