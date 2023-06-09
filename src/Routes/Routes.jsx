import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Component/Home/Home";
import Instructor from "../Component/Instructor/Instructor";
import Classes from "../Component/Classes/Classes";
import Login from "../Component/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
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
    ],
  },
]);

export default router;
