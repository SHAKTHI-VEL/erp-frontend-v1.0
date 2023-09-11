import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

const MainPageTodo = () => {
  const [todo, setTodo] = useState([
    { id: "", task: "", severity: "", completed: "" },
  ]);

  // useEffect(function () {
  //   async function getDetail() {
  //     const res = await axios.get("https://todoapi-fzr2.onrender.com/todo");

  //     const newObj = {
  //       id: res.data[0]._id,
  //       task: res.data[0].task,
  //       severity: res.data[0].severity,
  //       completed: res.data[0].completed,
  //     };
  //     setTodo((todo) => [{ ...todo, newObj }]);

  //     const newObj1 = {
  //       id: res.data[1]._id,
  //       task: res.data[1].task,
  //       severity: res.data[1].severity,
  //       completed: res.data[1].completed,
  //     };
  //     setTodo((todo) => [{ ...todo, newObj1 }]);

  //     console.log(todo);
  //   }

  function AddTodo() {
    function onSubmit(e) {
      e.preventDefault();
    }

    return (
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={todo.task}
          placeholder="Add task"
          onChange={(e) => setTodo({ ...todo, task: e.target.value })}
        />
        <input
          type="text"
          value={todo.severity}
          placeholder="Add Severity"
          onChange={(e) => setTodo({ ...todo, severity: e.target.value })}
        />
        <input
          type="text"
          value={todo.completed}
          placeholder="Add task"
          onChange={(e) => setTodo({ ...todo, completed: e.target.value })}
        />
      </form>
    );
  }

  function TableRows({ todo }) {
    return (
      <tr className="bg-lightBg border-b dark:bg-gray-900 dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {todo + 1}
        </th>
        <td className="px-6 py-4">{todo.task}</td>
        <td className="px-6 py-4">{todo.severity}</td>
        <td className="px-6 py-4">{todo.completed}</td>
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

  return (
    <div>
      <AddTodo />
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Serial Number
              </th>
              <th scope="col" className="px-6 py-3">
                Task
              </th>
              <th scope="col" className="px-6 py-3">
                Severity
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <TableRows todo={todo} />
        </table>
      </div>
    </div>
  );
};

export default MainPageTodo;

{
  /* <tr className="bg-lightBg border-b dark:bg-gray-900 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17"
              </th>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">Laptop</td>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Microsoft Surface Pro
              </th>
              <td className="px-6 py-4">White</td>
              <td className="px-6 py-4">Laptop PC</td>
              <td className="px-6 py-4">$1999</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr className="bg-lightBg border-b dark:bg-gray-900 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Magic Mouse 2
              </th>
              <td className="px-6 py-4">Black</td>
              <td className="px-6 py-4">Accessories</td>
              <td className="px-6 py-4">$99</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Google Pixel Phone
              </th>
              <td className="px-6 py-4">Gray</td>
              <td className="px-6 py-4">Phone</td>
              <td className="px-6 py-4">$799</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
            <tr>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple Watch 5
              </th>
              <td className="px-6 py-4">Red</td>
              <td className="px-6 py-4">Wearables</td>
              <td className="px-6 py-4">$999</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
          </tbody> */
}
