import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Login/Register/Registration";
import LostAndFound from "../Pages/LostAndFound/LostAndFound";
import AllRecovered from "../Pages/Recoverd/AllRecovered";
import ManagesItems from "../Pages/Manages/ManagesItems";
import AllItems from "../Pages/AllItems/AllItems";
import ItemDetails from "../Pages/ItemDetails/ItemDetails";
import PrivetRoute from "./PrivetRoute";
import UpdateItem from "../Pages/UpdateItem/UpdateItem";
import ErrorPage from "../Pages/Error/ErrorPage";
import About from "../Pages/About/About";
import Advertisement from "../Pages/Advertisement/Advertisement";
import Marketing from "../Pages/Marketing/Marketing";
import Jobs from "../Pages/Jobs/Jobs";
import Contacts from "../Pages/Contacts/Contacts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addItems",
        element: (
          <PrivetRoute>
            <LostAndFound></LostAndFound>
          </PrivetRoute>
        ),
      },
      {
        path: "/allRecovered",
        element: (
          <PrivetRoute>
            <AllRecovered></AllRecovered>
          </PrivetRoute>
        ),
      },
      {
        path: "/myItems",
        element: (
          <PrivetRoute>
            <ManagesItems></ManagesItems>
          </PrivetRoute>
        ),
        loader: () =>
          fetch("https://lost-and-found-server-delta.vercel.app/allStuff"),
      },
      {
        path: "/AllItems",
        element: <AllItems></AllItems>,
        loader: () =>
          fetch("https://lost-and-found-server-delta.vercel.app/allStuff"),
      },
      {
        path: "/allStuff/:id",
        element: (
          <PrivetRoute>
            <ItemDetails></ItemDetails>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://lost-and-found-server-delta.vercel.app/allStuff/${params.id}`
          ),
      },
      // update and delete routes
      {
        path: "/updateItem/:id",
        element: <UpdateItem></UpdateItem>,
        loader: ({ params }) =>
          fetch(
            `https://lost-and-found-server-delta.vercel.app/allStuff/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/advertisement",
        element: <Advertisement></Advertisement>,
      },
      {
        path: "/marketing",
        element: <Marketing></Marketing>,
      },
      {
        path: "/jobs",
        element: <Jobs></Jobs>,
      },
      {
        path: "/contact",
        element: <Contacts></Contacts>,
      },
    ],
  },
]);

export default router;
