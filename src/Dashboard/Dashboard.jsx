import React, { useState, useEffect } from "react";
import PieChart from "./Piechart";
import axios from "axios";
import Calendar from "./Calendar";
import ToDoList from "./ToDoList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./TopBar";
import WorksOverview from "./WorksOverview";
import Sidebar from "./SideBar";
import MainPageTodo from "./MainPageTodo";

import ProjectList from "./ProjectList";

const Dashboard = () => {
  const [task, setTask] = useState([{}]);

  const [chartData, setChartData] = useState([
    { id: "Pending", label: "Pending", value: 0 },
    { id: "Completed", label: "Completed", value: 0 },
    { id: "Incomplete", label: "Complete", value: 0 },
  ]);

  useEffect(function () {
    async function getApi() {
      const res = await axios.get(
        "https://erp-django.onrender.com/erp/task_status/1/"
      );
      const pending = res.data.Pending;
      const incomplete = res.data.InProgress;
      const complete = res.data.Completed;

      setChartData((chartData) => [
        { ...chartData[0], value: pending },
        { ...chartData[1], value: incomplete },
        { ...chartData[2], value: complete },
      ]);
    }
    getApi();
  }, []);

  useEffect(function () {
    async function getEvent() {
      const res = await axios.get(
        "https://erp-django.onrender.com/erp/tasks/1/"
      );
      for (let i = 0; i < res.data.length; i++) {
        setTask((task) => [
          ...task,
          { title: res.data[i].task_desc, date: res.data[i].start_date },
        ]);
      }
    }
    getEvent();
  }, []);

  return (
    <Router>
      <div className="  bg-darkBg h-full">
        <TopBar />

        <div
          style={{ gridTemplateColumns: "1fr 2fr 2fr" }}
          className="mainPage justify-between grid"
        >
          <Sidebar />
          <div className="p-6 pl-0">
            <WorksOverview />
          </div>
          <PieChart data={chartData} />
        </div>
        <div className="block">
          <ProjectList />
        </div>

        {/* 
        <div>

        {/* <h1>Calendar Example</h1> */}
        {/* <Calendar task={task}/> */}

        {/* <h1>TODO</h1>
            <ToDoList />
        
        </div> 
        */}
      </div>
    </Router>
  );
};

export default Dashboard;
