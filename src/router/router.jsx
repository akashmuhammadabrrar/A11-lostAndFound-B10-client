import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Login/Register/Registration";
import LostAndFound from "../Pages/LostAndFound/LostAndFound";
import AllRecovered from "../Pages/Recoverd/AllRecovered";
import ManagesItems from "../Pages/Manages/ManagesItems";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: (
      <h2 className="text-2xl text-center mt-20">Routes Not Found</h2>
    ),
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addItems",
        element: <LostAndFound></LostAndFound>,
      },
      {
        path: "/allRecovered",
        element: <AllRecovered></AllRecovered>,
      },
      {
        path: "/myItems",
        element: <ManagesItems></ManagesItems>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
    ],
  },
]);

export default router;
