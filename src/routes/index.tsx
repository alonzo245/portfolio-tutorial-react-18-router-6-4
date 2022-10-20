import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { NotFound } from "../pages";
import { Error } from "../pages/Error";
import Home, { loader as projectsLoader } from "../pages/Home/Page";
import { loader as projectLoader } from "../pages/Project/Page";
// import ProjectDefer from "../pages/ProjectDefer";
import Project from "../pages/Project/Page";
import { Layout } from "../components/layout";
import { ProjectDefer } from "../pages/ProjectDefer";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path={"/portfolio-tutorial-react-18-router-6-4"}
      loader={projectsLoader}
      element={<Layout />}
      errorElement={<Error />}
    >
      <Route
        index
        loader={projectsLoader}
        element={<Home />}
        errorElement={<p>An error occurred...</p>}
      />
      <Route
        index
        path={"repo/:repoName"}
        loader={projectLoader}
        // element={<Project />}
        element={<ProjectDefer />}
        errorElement={<p>An error occurred...</p>}
      />
      <Route path={"*"} element={<NotFound />} />
    </Route>
  )
);

export default (): JSX.Element => {
  return <RouterProvider router={router} />;
};
