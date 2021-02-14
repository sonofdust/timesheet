import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MyTable from './HoursTab/DaysOfWeekHours';
import FcoQmpsComp from './FcoQpsTab/FcoQmpsComp';




class MyTabs extends Component {
    styles = { fontStyle: "italics", color: "purple" }
    render() {
        return (<Tabs defaultIndex={0} onSelect={index => console.log(index)}>
            <TabList>
                <Tab>Hours</Tab>
                <Tab>FCO/QPMS</Tab>
                <Tab>Client Data</Tab>
                <Tab>Comments</Tab>
                <Tab>T/S Corr.</Tab>
                <Tab>Project</Tab>
                <Tab>Task Info.</Tab>
            </TabList>
            <TabPanel><MyTable/></TabPanel>
            <TabPanel><FcoQmpsComp/></TabPanel>
            <TabPanel>text for 3</TabPanel>
            <TabPanel>text for 4</TabPanel>
            <TabPanel>text for 5</TabPanel>
            <TabPanel>text for 6</TabPanel>
            <TabPanel>text for 7</TabPanel>
        </Tabs>
        );
    }
}



export default MyTabs;