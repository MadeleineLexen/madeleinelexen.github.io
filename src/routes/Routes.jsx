import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "../errorPage";
import { Projects } from "../pages/Projects";
import Contact from "../pages/Contact";
import { About } from "../pages/About";
import HomePage from "../pages/HomePage";
import App from "../App";
import MasterThesis from "../pages/MasterThesis"; 
import PausePal from "../pages/PausePal";

export const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/pausepal", // Dynamic route for project details
        element: <PausePal />, // Render the project page for each project
      },{
        path: "/masterthesis", // Dynamic route for project details
        element: <MasterThesis />, // Render the project page for each project
      },{
        path: "/project3", // Dynamic route for project details
        element: <MasterThesis />, // Render the project page for each project
      },{
        path: "/project4", // Dynamic route for project details
        element: <MasterThesis />, // Render the project page for each project
      },
    ],
  },
]);
