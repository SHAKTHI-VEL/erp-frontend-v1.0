import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage.jsx";
import SignInForm from "./LoginForm/SignInForm.jsx";
import ForgotPassword from "./LoginForm/ForgotPassword.jsx";
import PieChart from "./Dashboard/Piechart.jsx";
import Calendar from "./Dashboard/Calendar.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <LandingPage />,
//   },
//   {
//     path: "/login",
//     element: <SignInForm />,
//   },
//   {
//     path: "/forgotpassword",
//     element: <ForgotPassword />,
//   },
//   // {
//   //   path:"/dashboard",
//   //   element:<Layout/>,
//   //   children:[
//   //     {
//   //       path:"",
//   //       element:<PieChart/>
//   //     },
//   //     {
//   //       path:"calendar",
//   //       element:<Calendar/>
//   //     }
//   //   ]
//   // }
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />
  </React.StrictMode>
);
