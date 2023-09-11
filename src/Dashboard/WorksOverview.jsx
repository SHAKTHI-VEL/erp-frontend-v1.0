import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CountUp from "react-countup";

const WorksOverview = () => {
  const [totalTask, setTotalTask] = useState(0);
  const [proj, setProj] = useState(null);
  const [task, setTask] = useState(null);

  useEffect(function () {
    const getDetail = async () => {
      const res = await axios.get(
        "https://erp-django.onrender.com/erp/tasks/2/"
      );
      setProj(res.data.length);
    };
    getDetail();
  }, []);

  useEffect(function () {
    async function getApi() {
      const res = await axios.get(
        "https://erp-django.onrender.com/erp/task_status/1/"
      );
      setTask(res.data.Pending);
      setTotalTask(res.data.Pending + res.data.Completed + res.data.InProgress);
      console.log(totalTask);
    }
    getApi();
  }, []);

  return (
    <div className="border-2 border-lightBg p-5 rounded-lg">
      <h2 style={{ fontSize: "2rem" }} className="font-semibold mb-4">
        Works Overview
      </h2>
      <div className="flex pr-0 justify-between">
        <div className="mx-5 ml-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="w-16 h-16 mx-auto my-0 flex "
          >
            <path
              fillRule="evenodd"
              d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0112 6.75zM4.117 19.125a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z"
              clipRule="evenodd"
            />
          </svg>
          <h3 className="text-xl">Total Projects</h3>
          <p className="text-white text-5xl text-center">
            <CountUp end={proj} />
          </p>
        </div>

        <div className="block flex-col mx-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="w-16 h-16 mx-auto my-0 flex"
          >
            <path d="M5.566 4.657A4.505 4.505 0 016.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0015.75 3h-7.5a3 3 0 00-2.684 1.657zM2.25 12a3 3 0 013-3h13.5a3 3 0 013 3v6a3 3 0 01-3 3H5.25a3 3 0 01-3-3v-6zM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 016.75 6h10.5a3 3 0 012.683 1.657A4.505 4.505 0 0018.75 7.5H5.25z" />
          </svg>
          <h3 className="text-xl">Total Tasks</h3>
          <p className="text-white text-5xl text-center">
            <CountUp end={totalTask} />
          </p>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-16 h-16 mx-auto my-0 flex"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
            />
          </svg>

          <h3 className="text-xl">Completed Task</h3>
          <p className="text-white text-5xl block text-center	">
            <CountUp end={task} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorksOverview;
