import AddNewProperty from "../pages/AddNewProperty/AddNewProperty";
import AgentDetails from "../pages/AgentDetails/AgentDetails";
import Agents from "../pages/Agents/Agents";
import Blogs from "../pages/Blogs/Blogs";
import Home from "../pages/Home/Home";
import BlogDetails from "../pages/BlogDetails/BlogDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Favorites from "../pages/Favorites/Favorites";
import Properties from "../pages/Properties/Properties";
import SingleProperty from "../pages/SingleProperty/SingleProperty";
import Root from "../pages/Root/Root";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "add-new-property",
        element: <AddNewProperty />,
      },
      {
        path: "agent-details/:id",
        element: <AgentDetails />,
      },
      {
        path: "agents",
        element: <Agents />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "blog-details/:id",
        element: <BlogDetails />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
      {
        path: "properties",
        element: <Properties />,
      },
      {
        path: "single-property/:id",
        element: <SingleProperty />,
      },
    ],
  },
]);

const AppRouter = () => (
  <>
    <RouterProvider router={router} />
  </>
);
export default AppRouter;
