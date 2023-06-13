import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Component/Home/Home";
import Instructor from "../Component/Instructor/Instructor";
import Classes from "../Component/Classes/Classes";
import Login from "../Component/Login/Login";
import ErrorPage from "../Component/ErrorPage/ErrorPage";
import Register from "../Component/Register/Register";
import Dashboard from "../Layout/Dashboard";
import AllUsers from "../Component/Dashboard/Allusers/AllUsers";
import ManageClasses from "../Component/Dashboard/ManageClasses/ManageClasses";
import AddClass from "../Component/Dashboard/Instructor/AddClass/AddClass";
import MyClass from "../Component/Dashboard/Instructor/MyClass/MyClass";
import MySelected from "../Component/Dashboard/Student/MySelect/MySelected";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/instructors",
        element: <Instructor></Instructor>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "allUsers",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "manageClasses",
        element: <ManageClasses></ManageClasses>,
      },
      {
        path: "addClass",
        element: <AddClass></AddClass>,
      },
      {
        path: "myClass",
        element: <MyClass></MyClass>,
      },
      {
        path: "mySelectedClass",
        element: <MySelected></MySelected>,
      },
    ],
  },
]);

export default router;
