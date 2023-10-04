import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Layout from "../Layout/Layout";
import LogIn from "../Pages/Login/LogIn";
import Register from "../Pages/Register/Register";
import News from "../Pages/Main/News";
import PrivedRouter from "../Pages/PrivedRouter/PrivedRouter";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader : () => fetch("/news.json")
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path : "/news/:id",
        element :<PrivedRouter><News></News></PrivedRouter>
      },
      {},
      {},
      {},
    ],
  },
]);

export default myRouter;
