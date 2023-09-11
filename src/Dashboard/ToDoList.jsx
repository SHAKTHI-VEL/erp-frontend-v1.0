import axios from "axios";
import React, { useEffect, useState } from "react";

const ToDoList = () => {
  const [data, setData] = useState({
    task: "",
    severity: "",
    completed: "",
  });

  function onSubmit(e) {
    e.preventDefault();
    // let task, severity, taskStatus;
    async function sendData() {
      const res = await axios.post(
        "https://todoapi-fzr2.onrender.com/todo",
        data
      );
      console.log(res);
    }

    sendData();
  }

  useEffect(() => {
    // storing input name
    localStorage.setItem("task", JSON.stringify(data.task));
  }, [data.task]);

  console.log(localStorage.getItem("task"));

  return (
    <div>
      <form onSubmit={onSubmit} style={{ color: "black" }}>
        <input
          type="text"
          placeholder="task"
          value={data.task}
          onChange={(e) => setData({ ...data, task: e.target.value })}
        />
        <input
          type="text"
          placeholder="severity"
          value={data.severity}
          onChange={(e) => setData({ ...data, severity: e.target.value })}
        />
        <input
          type="text"
          value={data.completed}
          placeholder="status"
          onChange={(e) => setData({ ...data, completed: e.target.value })}
        />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default ToDoList;
