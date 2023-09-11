import axios from "axios";
import React, { useEffect, useState } from "react";
import { InfinitySpin } from "react-loader-spinner";
const ProjectList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [task, setTask] = useState([]);
  useEffect(() => {
    async function getProjects() {
      setIsLoading(true);
      const res = await axios.get(
        "https://erp-django.onrender.com/erp/projects/2/"
      );
      const data = res.data;
      setTask(res.data);

      setIsLoading(false);
    }
    getProjects();
  }, []);

  //   function Loader() {
  //     return <p className="text-center text-3xl">Loading ...</p>;
  //   }

  function Loader() {
    return (
      <div className="flex justify-center">
        <InfinitySpin width="200" color="#4fa94d" />
      </div>
    );
  }
  return (
    <div>
      <h2 className="text-4xl text-center my-4 mt-6">Project List</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-mainBg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <TableHead />
            <TableElements task={task} />
          </table>
        </div>
      )}
    </div>
  );
};

function TableHead() {
  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
          Project
        </th>
        <th scope="col" className="px-6 py-3">
          Start Date
        </th>
        <th scope="col" className="px-6 py-3">
          Deadline
        </th>
        <th scope="col" className="px-6 py-3">
          Status
        </th>
      </tr>
    </thead>
  );
}

function TableBody({ task }) {
  return (
    <tr className="bg-lightBg border-b dark:bg-gray-900 dark:border-gray-700 font-xl">
      <td className="px-6 py-4 font-semibold">{task.project_name}</td>
      <td className="px-6 py-4">{task.start_date}</td>

      <td className="px-6 py-4">{task.end_date}</td>
      {task.status === "completed" ? (
        <td className="px-6 py-4 font-semibold !text-green">{task.status}</td>
      ) : (
        <td className="px-6 py-4 font-semibold !text-red">{task.status}</td>
      )}
      {/* <td className="px-6 py-4">{task.status}</td> */}
      <td className="px-6 py-4">
        <a
          href="#"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Edit
        </a>
      </td>
    </tr>
  );
}

function TableElements({ task }) {
  return (
    <tbody>
      {task.map((tasks) => (
        <TableBody task={tasks} key={crypto.randomUUID()} />
      ))}
    </tbody>
  );
}

export default ProjectList;
