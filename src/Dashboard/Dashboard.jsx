import React, { useState, useEffect } from "react";
import PieChart from "./Piechart";
import axios from "axios";
import Calendar from "./Calendar";
import ToDoList from "./ToDoList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupAvatar from "./SignupAvatar";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  const [chartData, setChartData] = useState([
    { id: "Pending", label: "Pending", value: 0 },
    { id: "Completed", label: "Completed", value: 0 },
    { id: "Incomplete", label: "Incomplete", value: 0 },
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

  const [task, setTask] = useState([{}]);

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
      <div>
        <div className=" h-screen bg-darkBg">
          <div className="Topbar flex justify-between p-5 font-jakarta text-xl px-7 text-white">
            <h1 className="font-playfair">Logo</h1>
            <SignupAvatar />
          </div>

          <div>
            <h1>Hello John Doe</h1>
            <p>Software Engg</p>
          </div>
        </div>

        <div className="Sidebar">
          <Sidebar />
        </div>

        {/* <div>
          {/* <h1 className="text-white">Pie Chart Example</h1>
        <PieChart data={chartData} /> */}

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
